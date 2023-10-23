# ShopingList
Responsive shopping  website which takes user input through form and displays it on the shoping list
The website described is a simple "Shopping" web application with three main pages: Home Page, Shipping Form Page, and Shipping List Page. Here's a brief description of each page and its functionality:

1. Home Page:

The Home Page serves as the main landing page of the website.
It features a navigation bar with two links: "Shipping Form" and "Shipping List."
Users can click on these links to navigate to the respective pages for shipping-related actions.

2. Shipping Form Page:

The Shipping Form Page allows users to input details about a shipping item.
The form includes fields for Item Name, Item Weight, Box Color, and Shipping Country.
Form validation is implemented to ensure that all fields are filled out before submission.
Upon submitting the form, the item details are stored in the local storage of the user's browser, making it available for later retrieval in the Shipping List Page.


3. Shipping List Page:

The Shipping List Page displays a list of shipping items previously entered via the Shipping Form.
Shipping items are presented in a tabular format with columns for Item Name, Item Weight, Box Color (shown as colored rectangles), and Shipping Country.
JavaScript retrieves the stored shipping item details from local storage and populates the table on this page.
Users can view a list of shipping items they have entered previously.
