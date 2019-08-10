# Fresh

**Fresh** is the hottest crowd-sourced grocery store price reporting app around.

Fresh is a web application that helps consumers make cost-friendly choices for groceries. Users can post grocery prices, locations and images to the app, and see reported deals submitted by other people. Leave thumbs up or down to help validate posts. Compare the prices of groceries through the search and sort features. When you find a deal that you like, bookmark them for later and see them in the shopping list.

## Table of contents
1. Introduction
   * [Who is it for?](#who-is-it-for)
   * [What will it do?](#what-will-it-do)
   * [What type of data will it store?](#what-type-of-data-will-it-store)
   * [What will users be able to do with this data?](#what-will-users-be-able-to-do-with-this-data)
   * [What is some additional functionality you can add/remove based on the constraints?](#what-is-some-additional-functionality-you-can-addremove-based-on-the-constraints)
   
2. Requirements
   * [Basic Functionality Requirements](#basic-functionality-requirements)
   * [Basic Technology Requirements](#basic-technology-requirements)
   * [Basic Contribution Requirements](#basic-contribution-requirements)
   * [Challenges, Learning, and Future Directions](#challenges-learning-and-future-directions)
   * [Initiative and additional Contributions](#initiative-and-additional-contributions)
   
3. Development
   * [Mock up prototypes](#mock-up-prototypes)
   * [Local](#local)
   * [Local, with Atlas hosted MongoDB](#local-with-atlas-hosted-mongodb)
   
4. Demo
   * [Powerpoint](https://docs.google.com/presentation/d/1CpITPKZkjOh5hbJ23dvpwpprxqKUkWSCMsCH39dXqNs/edit?usp=sharing)
   
  
## Introduction
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



## Requirements
### Basic Functionality Requirements

**Minimum Requirements**

- [x] User can make a new post to report the price and location for a grocery item.
- [x] Users can search for a grocery item.
- [x] Users can view all the posts.

**Standard Requirements**

- [x] User can make a new post with images.
- [x] User can sort on grocery item prices in list view.
- [x] User can see posts on a map.
- [x] User can see posts in list view.
- [x] User can leave thumbs up/down for approval.

**Stretch Requirements**

- [x] User can create shopping lists using the posts items.
- ~~User can watch an item and get notified when prices are lower than their set price.~~
  (Would be more useful after mobile integration)
  
### Basic Technology Requirements 

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
- Example item object in the database.

```
{  
   "_id":"FhuZdERA3mqC394jx",
   "name":"Papaya",
   "price":1.66,
   "unit":"per lb",
   "createdAt":"2019-08-06T02:52:09.389Z",
   "rating":0,
   "imageSrc":"/images/Papaya.png",
   "location":{  
      "address":"Real Canadian Superstore, Southeast Marine Drive, Vancouver, BC, Canada",
      "coords":{  
         "lat":49.2084913,
         "lng":-123.0996485
      }
   }
}
```

**Release Engineering**
- Setting up and deploying on heroku was straightforward using commonly used Meteor buildpack. Additional environment variables configured and automated Master branch deployments enabled. 

### Basic Contribution Requirements

Erica: Creation of autocomplete geo-suggest component using Google Maps API, addition of marker on the map component with lat/lng received. Incorporation of user accounts and logic of information hiding from random users. Implmentation of the shopping list, which allows users to add, edit and clear grocery items from the database. Setup of Email component that enables users to send themselves an email with their current shopping list using Meteor methods. Formatting the form for new postings, submit button disabled until every field is filled out. Making and reviewing PRS for code-review and feedback. 

Nicole: For project implementation, I contributed to the frontend using React and Redux by implementing sorting to sort posts by price or latest time posted, thumbs rating to rate deals, modal form to submit deals, price field validation in modal and more. I also worked on design and layout, which led the final app to look very similar to the original mock-ups. As a team player, I reviewed many PRs and pair-programmed.

Yao: Primarily involved in project setup, incorporating and initializing Meteor, Redux, React, Mongo, and Heroku deployment and configuration. Managing required accounts and access user credentials. Layout initial application with Google Map, search bar, cards and new post elements. Implement redux store and backend Meteor methods to interact with MongoDB for item creation and retrieval, rating manipulation, search bar item additions. Add custom image uploading to Fresh form with image compression and storage in MongoDB and then display image based on dynamic source. Configure and enable Fresh for continuous deployment on Heroku. Made multiple bug fixes and promote best practices through PRs and pair-programming. 

### Challenges, Learning, and Future Directions

**Challenge Encountered**
- Problem: Item cards took forever to load. 
- Diagnosis: Attempting to display the uploaded images saved as an encoded string was timing out the database. 
- Actions we took: We knew this started happening after the image upload feature was added. We isolated the problem and investigated through the developer console and realized it was our database timing out. 
- Result: Instead of uploading image directly, first create a canvas and shrink the uploaded image to the smaller canvas which is then saved in the database. 6MB images were shrunk to ~200kb.  

**Future Direction**
- Add the ability to watch for deals and get notify on deals.
- Mobile Integration
- Use mobile location to help report deals
- Use image recognition to help report the item and prices

### Initiative and additional Contributions
- Added ability to add your own images
- Used user accounts to log-in, save and edit shopping lists. 
- Added ability for users to send emails to themselves. 
- Used PRs and helping each other improve on our coding skills with good feedback and best practices
- Used Methods, Meteor's remote procedure call system to use meteor properly. 

## Development

### Mock up prototypes
![mockup2](/mockup1.png)
![mockup1](/mockup2.png)

### Local
Run `meteor run` in root directory to begin serving on `localhost:3000`

Run `meteor reset` to start with a fresh local MongoDB instance

### Local, with Atlas hosted MongoDB
Run `sh start.sh` in root directory to begin serving on `localhost:3000` while targetting the Atlas hosted MongoDB and enabling Emailing of password reset and shopping lists. 


