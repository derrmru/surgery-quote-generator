# Surgery Quote Generator

A surgery quote generator built as a Wordpress plugin using React JS. Makes use of my [React Wordpress Plugin Boilerplate](https://github.com/derrmru/react-wordpress-plugin-boilerplate).

## Functionality

The plugin registers a Wordpress Short Code that can be included in any post or page. The short code accepts two attributes:

1. surgery_type - this is passed to the React App to determine the steps taken to generate a quote.
2. color - this updates the styling to conform with clients primary brand color

Based on the surgery type it receives the Application prompts the user for information and calls a database for quote data, which is then displayed as a price guide to the user.