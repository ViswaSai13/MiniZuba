# Order Packaging System

This system implements features to efficiently package orders displayed in a list view. It ensures smooth usability, even in slow network conditions, and provides a rich and responsive user interface.

**[Live Link](https://viswasai13.github.io/MiniZuba/)**

Below are the key features implemented:

## Features Implemented:

- **Order List View:**

  1. Displays orders based on package type ID selected by user
  2. Orders are sorted in ascending order of OrderLineID.

- **Grouping & Filtering:**

  3. Provides options for independently filtering OrderLineId, OrderId, Quantity StockItemID, UnitPrice & Description at once.

- **Responsive UI:**

  4. Ensures a rich and responsive user interface on various screen resolutions for enhanced user experience.

- **Smooth Loading:**

  5. Prioritizes smooth loading of list items with the help of paginator at the frontend level for user convenience.

<!-- 5. **Unit Test Cases:**

   - Includes comprehensive unit test cases to ensure functionality.

6. **Package Type Color Coding:**
   - Each package type is color-coded for easy identification. -->

## How to Use:

1. Clone the repository to your local machine.
2. Install dependencies using `npm install` or `yarn install`.
3. Run the application using `npm start` or `yarn start`.
4. Access the application through the provided URL.

## Folder Structure:

```bash
minizuba/
│
├── src/
│ ├── app/
│ │ ├── api-service/
│ │ │ └── orderline-service.ts
│ │ │
│ │ ├── ordelines-listing/
│ │ │ ├── ordelines-listing.component.html
│ │ │ ├── ordelines-listing.component.scss
│ │ │ ├── ordelines-listing.component.spec.ts
│ │ │ └── ordelines-listing.component.ts
│ │ ├── app.module.ts
│ │ └── ...
│ │
│ ├── index.html
│ ├── styles.scss
│ └── ...
│
├── package.json
└── README.md
```

## Dependencies:

- Angular ^15.2.0
- Angular Material UI ^15.2.9
