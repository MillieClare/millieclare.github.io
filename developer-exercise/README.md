# Warehouse Web Developer Exercise

In this excercise we would like you to build a web component similar to this [screenshot](recommendation_screenshot.png) using the [JSON](data/recommendations.json) provided. Creativity is accepted but do not alter the JSON. The component you build should display images, prices and link to the product taking into consideration how it would work with i18n.

### Requirements
* Responsive
* Reusable code

Please fork this repository and commit your changes for review.

Amend this Readme in your forked repo and use your commits to outline the component you have created and the decisions that you have made.

## General
I decided to make the final component GUI as close to the example given. It has been tested on both Chrome and FireFox. Using Bootstrap, the component is responsive to different sizes. The component has been written in JavaScript using jQuery to reduce size and so it can be reused effectively.

To use the JSON effectively, I have written a function which takes 3 parameters: the div where the data is to be displayed, the data and a number. The function then loops over the array of objects, filtering out those which don't have an image property. With the array filtered, it then creates columns displaying one product per column decided by the third parameter: the number. By doing this, the recommendations display can show any number of products by changing the parameter, not the code itself. This makes it easy for other people to use.

I also used jQuery to take the price and currency properties and display them with the correct currency sign and format. Ideally, the code would identify the browser's locale and display the price accordingly, but it became apparent that this would be too complicated to be completed within the set time.

With the CSS, I have tried to keep the code as simple as possible. The font used by the example is HelveticaNeue. It was tempting to use Roboto due to it's similarity with Helvetica, but in the end I decided that I preferred the styling of 'Work Sans' and set Helvetica as a fall-back font. For accessibility, I have used 'small' instead of pixel sizes, and ensured the all pictures have an alt tag.

##Creativity
My first little bit of creativity was customising the hover property to the images. Ideally this would be another view of the product, either of the back of the dress, or a model wearing it.
I have also included slick; a customisable carousel so that it is possible to show more recommendations, but not to overwhelm the consumer by showing too many at once. This also adds some responsiveness for mobile users: not only will the carousel only display one product (instead of showing them all underneath each other) the user will have the opportunity to swipe through the products.