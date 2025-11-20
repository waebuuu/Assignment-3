# Diet Tracker – INFR3120 Assignment 3
This project is a secure CRUD web application built using NodeJS, ExpressJS, MongoDB/Mongoose, and EJS templating. It was created as part of INFR3120 Assignment 3 and follows all rubric requirements.

## Project Overview
The Diet Tracker allows users to log their meals along with nutrition details. Users can create new meal entries, view all logged meals, edit any existing record, and delete entries when needed. A full project plan and visuals are included in the submitted Word document.

## Technologies Used
- NodeJS  
- ExpressJS  
- MongoDB Atlas  
- Mongoose  
- EJS  
- Bootstrap 5  
- dotenv for environment variables  

## Features Aligned With Rubric Requirements

### CRUD Functionality
- **Create:** Users can submit a new meal with fields such as meal type, description, calories, and other nutrition details.  
- **Read:** A public listing page displays all meal documents stored in MongoDB.  
- **Update:** Users can edit any meal entry through a pre-filled EJS form.  
- **Delete:** Users can remove any meal, and the system includes a confirmation prompt before deletion.

### Routing and Controllers
All application logic is separated into route files and controllers.  
Routes handle navigation and HTTP method calls, while controllers manage the Mongoose operations for each CRUD action.

### Shared EJS Partials
A shared header and footer are included on all pages using EJS partials to maintain a consistent layout throughout the site.

### Home Page
A splash-style home page introduces the Diet Tracker and guides users to log or view their meals.

### Database Configuration
MongoDB credentials are stored securely using `.env` and not committed to GitHub due to `.gitignore`.  
This meets the requirement of securing the username/password outside of `app.js`.

### Bootstrap & UI Design
The application uses Bootstrap 5 for layout and styling but includes custom design elements so it does not resemble the in-class example.  
Custom CSS supports the unique layout and color theme of the site.

### Sites Used
bootstrap link
- https://getbootstrap.com/docs/5.3/components/navbar/
- https://getbootstrap.com/docs/5.3/layout/containers/
- https://getbootstrap.com/docs/5.3/components/buttons/
Canva (image design)
- https://www.canva.com/templates/EAGX6IwIm6U/
Gradient
- https://cssgradient.io
  
### My links
Github: https://github.com/waebuuu/Assignment-3
Render: [https://assignment-3-9ktp.onrender.com/home](https://assignment-3-9ktp.onrender.com)
Project Plan: https://docs.google.com/document/d/1eiEPA7IkJLBPfLE4qyV8Ucwq4vZGAc5NVAztTPJJnsU/edit?usp=sharing
