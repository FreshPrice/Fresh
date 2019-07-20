# Fresh

**Fresh** is the hottest crowd-sourced grocery store price reporting app around.

Fresh is a web appliation that help consumers make cost-friendly choices for groceries. Users can post grocery prices, locations and images to the app, and see reported deals submitted by other people. Leave thumbs up or down to help validate posts. Compare the prices of groceries through the search and sort features. When you find a deal that you like, bookmark them for later and see them in the shopping list.

### Who is it for?

Fresh is for everyone!

### What will it do?

Users can post grocery prices, locations and item to the app.
Users can see all the posts that have been submitted to the app.
Users can search and filter all the posts for specific items in the app.

### What type of data will it store?

Location and items will be stored as strings.
Prices of items will be stored as numbers.

### What will users be able to do with this data?

Users will be able to see a list of posts with location, prices and grocery items.
Users will be able to view location on a map, filter items by type and sort items by prices.

### What is some additional functionality you can add/remove based on the constraints?

Create a shopping list which displays the lowest price found for each item and their location.
Users will be able to leave thumbs up or down on prices to validate them.

## Requirement

3 - 5 Minimum Requirements

- User can make a new post to report the price and location for a grocery item.
- Users can search for a grocery item.
- Users can view all the posts.

5 - 7 Standard Requirements

- User can make a new post with images.
- User can sort on grocery item prices in list view.
- User can see posts on a map.
- User can see posts in list view.
- User can leave thumbs up/down for approval.

2 - 3 Stretch Requirements

- User can create shopping lists using the posts items.
- User can watch an item and get notified when prices are lower than their set price.

## Mock up
![mockup2](/mockup1.png)
![mockup1](/mockup2.png)

# Development

## Local
Run `meteor run` in root directory to begin serving on `localhost:3000`

Run `meteor reset` to start with a fresh local MongoDB instance

## Local, with Atlas hosted MongoDB
Run `sh start.sh` in root directory to begin serving on `localhost:3000` while targetting the Atlas hosted MongoDB

