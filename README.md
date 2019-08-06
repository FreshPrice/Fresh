# Fresh

**Fresh** is the hottest crowd-sourced grocery store price reporting app around.

Fresh is a web application that helps consumers make cost-friendly choices for groceries. Users can post grocery prices, locations and images to the app, and see reported deals submitted by other people. Leave thumbs up or down to help validate posts. Compare the prices of groceries through the search and sort features. When you find a deal that you like, bookmark them for later and see them in the shopping list.

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

## Basic Functionality Requirements

Minimum Requirements

- [x] User can make a new post to report the price and location for a grocery item.
- [x] Users can search for a grocery item.
- [x] Users can view all the posts.

Standard Requirements

- [x] User can make a new post with images.
- [x] User can sort on grocery item prices in list view.
- [x] User can see posts on a map.
- [x] User can see posts in list view.
- [x] User can leave thumbs up/down for approval.

Stretch Requirements

- [x] User can create shopping lists using the posts items.
- ~~User can watch an item and get notified when prices are lower than their set price.~~
  (Would be more useful after mobile integration)
  
## Technologies 

**HTML/CSS/Javascript**
- Used HTML for img sources
- Making items align using the <span>
- CSS for general styling like grid, placements, margins and paddings.
  
**React/Redux/Meteor and the Front End**
- React to make UI components such as ShoppingList, Card, MapContainer. 
- Redux to maintain the store, managing states on the frontend.  

**Meteor and the Back End**
- Meteor methods for interacting with the database.
- Managing user accounts, verification. Information hiding for unverified users.
- Managing dropdown items, shopping list, list items in the database. 

**NoSQL and MongoDB**
- MongoDB Atlas for cloud database. 
- Data-structure for each field. 
- Setting up and deploying on heroku was straightforward using commonly used Meteor buildpack. Additional environment variables configured and automated Master branch deployments enabled. 

**Release Engineering**
- Used heroku for deployment.

## Basic Contribution Requirements

Erica Nicole Yao

## Challenges, Learning, and Future Directions

**Challenge and Learning**
- For the rating thumbs up/down, the rating was being updated in the database, but it wasn’t displayed on the frontend. 
- Passing down data from component to store, and store back to component, trigger re-renders and displaying right contents. 
- Used a debugger, step through, checked params to diagnose the problem.
- Solution was to use mapStatetoProps, which is used for selecting the part of the data from the store that the connected component needs. Re-renders upon store change. 

**Future Direction**
- Add the ability to watch for deals. We want the app to notify users when a new deal or cheaper deal is added. 
- Mobile Integration.
- Use mobile or device location to post.
- Use image recognition to do some of the post reporting.


## Mock up
![mockup2](/mockup1.png)
![mockup1](/mockup2.png)

# Development

## Local
Run `meteor run` in root directory to begin serving on `localhost:3000`

Run `meteor reset` to start with a fresh local MongoDB instance

## Local, with Atlas hosted MongoDB
Run `sh start.sh` in root directory to begin serving on `localhost:3000` while targetting the Atlas hosted MongoDB and enabling Emailing of password reset and shopping lists. 

