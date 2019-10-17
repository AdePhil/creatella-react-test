## How to run the application

### Run the server

- Run npm run start or yarn start in the root folder

### Run the frontend

- Navigate to public/front-end from the root folder. Run npm run start or yarn start in the root folder.
- The app starts at http://localhost:8000/ and be viewed on the browser.

## Features Implemented

- Products are display in a grid.
- Each product is displayed according to their font-size in pixels.
- The date of each product is shown and formatted in accordance to the given instructions.
- The price of each product is shown and formatted in accordance to the given instructions.
- Each product can be sorted by size, price and id in ascending order.
- Infinite scroll is implemented with the limit of the products fetched as 20.
- An animated "loading.." component is rendered when fetching products.
- This text "~ end of catalogue ~" is shown at the end of page if there are no more products that can be fetched.
- After every 20 products fetched randomly generate image of an ad is displayed.

## Featured not Implemented

- Pre-emptively fetch the next batch of products to be displayed
  - This can be implemented by making two api requests initially, the first to fetch the products to be displayed. The second for the next batch. When it get to the end of the page, the next batch should be displayed and an api request should be made to update the next batch.
