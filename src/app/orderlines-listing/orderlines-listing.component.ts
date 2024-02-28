import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { OrderlineService } from '../api-service/orderline-service';

export interface PackageData {
  OrderLineID: number;
  OrderID: number;
  StockItemID: number;
  Description: string;
  PackageTypeID: number;
  Quantity: number;
  UnitPrice: number;
}

@Component({
  selector: 'app-orderlines-listing',
  templateUrl: './orderlines-listing.component.html',
  styleUrls: ['./orderlines-listing.component.scss'],
})
export class OrderlinesListingComponent {
  packageTypes = [];
  // packageColors = [
  //   '#0000ff',
  //   '#0066ff',
  //   '#00ccff',
  //   '#006600',
  //   '#009900',
  //   '#00ff00',
  //   '#990000',
  //   '#cc0000',
  //   '#ff0000',
  //   '#ffff00',
  //   '#ff9900',
  //   '#ff3399',
  //   '#ff33cc',
  //   '#660066',
  //   '#663399',
  // ];
  selectedType = null;
  quantity = null;
  changeDetected = false;
  tableHeadingString = null;

  displayedColumns: string[] = [
    'OrderLineID',
    'OrderID',
    'Quantity',
    'StockItemID',
    'UnitPrice',
    'Description',
  ];

  filteredValues: string[] = [];
  filteredValuesObj = {
    OrderLineID: '',
    OrderID: '',
    Quantity: '',
    StockItemID: '',
    UnitPrice: '',
    Description: '',
  };

  showTable = false;
  loadingTableData = false;
  errorLoadingData = false;
  dataSource!: MatTableDataSource<PackageData>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private apiService: OrderlineService) {
    this.generatePackageTypesList();
  }

  changeCheck(event) {
    this.changeDetected = true;
  }

  applyFilter() {
    this.dataSource.filter = JSON.stringify(this.filteredValuesObj);
  }

  customFilterPredicate() {
    const myFilterPredicate = (data: PackageData, filter: string): boolean => {
      let searchString = JSON.parse(filter);
      return (
        data.OrderLineID.toString()
          .trim()
          .startsWith(searchString.OrderLineID) &&
        data.OrderID.toString()
          .trim()
          .toLowerCase()
          .startsWith(searchString.OrderID.toLowerCase()) &&
        data.Quantity.toString()
          .trim()
          .toLowerCase()
          .startsWith(searchString.Quantity.toLowerCase()) &&
        data.StockItemID.toString()
          .trim()
          .toLowerCase()
          .startsWith(searchString.StockItemID.toLowerCase()) &&
        data.UnitPrice.toString()
          .trim()
          .toLowerCase()
          .startsWith(searchString.UnitPrice.toLowerCase()) &&
        data.Description.toString()
          .trim()
          .toLowerCase()
          .indexOf(searchString.Description.toLowerCase()) !== -1
      );
    };
    return myFilterPredicate;
  }

  generatePackageTypesList() {
    for (let index = 0; index < 14; index++) {
      this.packageTypes[index] = 'Type ' + (index + 1);
    }
  }

  getOrderlines(type: number, quantity?: number) {
    this.showTable = true;
    this.loadingTableData = true;
    this.errorLoadingData = false;
    this.apiService.getOrderlines(type, quantity).subscribe(
      (res: PackageData[]) => {
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        this.dataSource.filterPredicate = this.customFilterPredicate();
        this.loadingTableData = false;
        this.errorLoadingData = false;
        this.changeDetected = false;
      },
      (err) => {
        this.showTable = false;
        this.loadingTableData = false;
        this.errorLoadingData = true;
        this.changeDetected = false;
      }
    );
  }

  getData() {
    if (this.quantity != 0) {
      this.tableHeadingString = `Data for Package ${
        this.packageTypes[this.selectedType]
      }`;
      if (this.quantity) {
        this.tableHeadingString =
          this.tableHeadingString + ` and quantity of ${this.quantity}`;
      }
      this.resetFilters();
      this.getOrderlines(this.selectedType + 1, this.quantity);
    }
  }

  resetData() {
    this.showTable = false;
    this.selectedType = null;
    this.quantity = null;
    this.resetFilters();
  }

  resetFilters() {
    this.filteredValuesObj = {
      OrderLineID: '',
      OrderID: '',
      Quantity: '',
      StockItemID: '',
      UnitPrice: '',
      Description: '',
    };
  }
}
