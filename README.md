

# MakerNet
ABSTRACT
MakerNet tries to integrate the complex work flow of Social Interaction management using a web based platform. It tries to act as a catalyst that allows Social media integration for Makers net on the Web apps. 

Motivation:
Makers net is a Social Interaction web based Application that facilitates streamlined profile sharing for the Makers of the Makers net. The application tries to bridge the gap between the raw materials used and wasted as part of production by one maker, to be mapped to a potential user who would have a requirement for these raw-materials. 

## An overview of Project out comes: 
This application will serve an a Social Interaction site for the Makers of the Makers Net. This application’s modules would facilitate streamlined interaction and community based events. 

## Proposed content for website:
The web based Social interaction application consists of a host of features and modules for Makers to register, manage and update profile while also providing a platform for a comprehensive Raw material lookup that entails listing and mapping potential raw materials that can be re-used by others users/makers.

## Users of the web site:
1. Makers: Associated with the Makernet Community

## Design Objectives and Modules:
	User Registration- To enable a user be part of the shared community of Makers net
	User Login- Enables validation and user login, as per existing user profiles
	User profile- User landing page with User Profile picture, posts, About section and image gallery.
	Add Project:  User who has already registered can login and add the project details to the db.
	Create New Discussion: User who has already registered can login and start new discussion. It will create a discussion topic related to some project by entering name and author of project. Also, user can add the contact number to carry out personal discussion.
	Roles: There is currently the User and Admin roles in the application
	Content curation- This is an integral part of the user profile
	Automated Content sharing
	Picture is worth a thousand words:  User Image Gallery- This serves a major role in holding images of finished products and artifacts of the Makers of the Makers net. Also this forum can be used to upload images of raw- materials that can be possibly re-used by another user/maker.

## Usage:
User Scenarios:

1.	User should be able to Register and Login to the system:
2.	User should be able to lookup his profile
3.	User should be able to lookup other’s profiles
4.	User should be able to add images relevant to his profile
5.	User should be able to share pictures of re-usable material for other makers to look at
6.	User should be able to edit/ delete his profile
7.	User should be able to add/edit/delete artifacts from his profile
8.	User should be able to curate the contents of his profile

## Architecture overview:
MakersNet is a RESTful API accepting JSON data format client requests. To enable all the capability services of the system and subsystem(s) the architecture for the project includes roughly MVC (Model View Controller) layered components working cohesively to provide expected functionalities and enable navigation within the website. Each View page of the website is backed by one or more functions of the logical tier of the Web application server.
The modules consist of the Servlet Controller(s) implement handler functions for orchestration and implementation of intended functionalities and business logic The object state is managed using Model classes. The system has a host of Data access layer modules and classes to enable Object relational mapping to manage database operations and the data persistence layer of the application. The layered design of the web based application system provides modularity and loose coupling to the various functions of the system. All application wide utility classes such as modules and functions for Validation of data fields, ORM Connection management and Authentication management are created and managed as separate modules to enable effective code re-usability. 



## Development:
Technology stack used: 
RESTful API
UI/Frontend: AngularJS
Middle tier: Node and Express
Backend Database: supported using MongoDB
Data transition format: JSON


### Tools

Created with [Nodeclipse](https://github.com/Nodeclipse/nodeclipse-1)
 ([Eclipse Marketplace](http://marketplace.eclipse.org/content/nodeclipse), [site](http://www.nodeclipse.org))   

Nodeclipse is free open-source project that grows with your contributions.
