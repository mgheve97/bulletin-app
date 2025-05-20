# Bulletin Board Project
## Overview
<p>The Bulletin Board Project is a web-based application designed to allow users to create, view, update, and delete articles. The application features a user-friendly interface and is powered by React with Next.js on the frontend and leverages localStorage for data persistence.</p>

## Features
### 1. Home Page
This is the first page of the web. This is where a user can see the posted articles that is created. The home page will only display the title and three buttons that can view each articles, update it and delete it

![alt text](/public/screenshots/homepage.png)
![alt text](/public/screenshots/homepage2.png)

### 2. Create Articles
Users can compose and publish articles by filling out a form with fields such as:
* Title: The heading of the article.
* Content: The body of the article.
* Date: Automatically recorded upon submission.

![alt text](/public/screenshots/createpage.png)

### 3. View Board
User can view all the articles with their contents. A user can upvote or downvote this. As of now, only one device can upvote and downvote. This will be future project if implemented the user authentication by the developer.

![alt text](/public/screenshots/viewboardpage.png)

### 4. View Article
A user can view the full content of each articles by pressing the "see more" from the View Board Page or pressing the eye icon in the homepage.

![alt text](/public/screenshots/viewarticlepage.png)

### 5. Update Article
A user can update the title name and content. You can update the article by pressing the "Update Article" button from the View Article Page or by pressing the pen icon from the Home Page.

![alt text](/public/screenshots/updatearticle.png)

### 6. Delete Function
A user can delete the user by pressing the trash icon in the home page or by pressing the Delete Article. Another features is that if a user leave the title and content empty, it will automatically delete itself.
