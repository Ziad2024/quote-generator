# quote-generator
Quote Generator that fetches random quotes from an API and displays them on the web page. Users can also share the displayed quote on Twitter with a single click.

## Screenshots
[
![quote](https://github.com/user-attachments/assets/8d20f9ce-15a7-4283-8d28-2cebba8c7935)
](url)

## Features Implemented
1. **API Integration:**
   - Used the `fetch` API to retrieve random quotes from the Quotable API (`https://api.quotable.io/random`).
   - Parsed the JSON response to extract the quote content and author information.

2. **Dynamic Content Display:**
   - Dynamically updated the HTML elements to display the fetched quote and author using JavaScript.

3. **Twitter Sharing Functionality:**
   - Implemented a `tweet` function that allows users to share the displayed quote on Twitter.
   - The function opens a new window with a pre-filled tweet containing the quote text.

## How the App Works
1. **Download Live Server Extension:**
   - Install the [Live Server extension](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) in Visual Studio Code to easily run the app locally.

2. **Start Live Server:**
   - Right-click on `index.html` and select "Open with Live Server." This will launch the app in your default web browser.

