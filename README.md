#Blog Post Tool

##Summary
This tool allows the primary user of a blog to manage posts. 

When navigating to the application root, the user will be taken to the /blog/latest route, which will display all public posts.  Clicking the title of a post take the user to a view with only that full post.

The user can login using local credentials, which will redirect them to the admin view.

When the user loads the page, the list of existing posts from the database is populated on the right side of the page.  This includes the subject, last modified timestamp, an edit button and a delete button for each post.  The user can create a new post by entering the subject and body in the form on the left.  The user can edit an existing post by clicking on the pencil icon next to a post.  That data will then populate the form so the user can make modifications.   They can clear the form using the "Clear" button, or submit the form using "Submit". Upon submit, the form is cleared and the post summary is updated to include the new or updated post.  The user can delete a post by clicking on the 'x' icon next to the post, and the post summary will be updated.  The user can view the full text of a post by clicking the post subject or timestamp in the summary.  A modal with the full post will appear and it can be closed using the large 'X' in the top-right corner of the modal.

##API

###User endpoints
####GET user
* URL: "/user"
* Parameters: none
* Response:
  * Success with > 0 users: status 200, "true"  
  * Sucess with 0 users: status 200, "false"
  * Error: status 500, "Internal server error"

####POST user
* URL: "/user"
* Parameters: username, password
* Response: 
  * Success: status 201, "User [\<username\>] created successfully"
  * Error: status 500, "Internal server error"

####POST login
* URL: "/login"
* Parameters: username, password
* Response:
  * Success: status 200, "Hooray, you have authenticated!"
  * Error: status 403 (Forbidden)
* Note - this uses passport.authenticate, see documentation

###Post endpoints
####GET single post
* URL: "/:id", where id is the \_id field from the database entry 
* Parameters: none
* Response: 
  * Success: status 200, single post object
  * Error: status 500, "Internal server error"

####GET all posts
* URL: "/post/all"
* Parameters: none
* Response: 
  * Success: status 200, array of all posts in database
  * Error: status 500, "Internal server error"

####POST all posts
* URL: "/post/all"
* Parameters: none
* Response: 
  * Success: status 200, array of all posts in database
  * Error: status 500, "Internal server error"
* Note - uses hardcoded data to preload database

####POST new post
* URL: "/post"
* Parameters: subject, body
* Response: 
  * Success: status 201, single post object for the new post
  * Error: status 500, "Internal server error"

####PUT post update
* URL: "/post/:id", where id is the \_id field from the database entry 
* Parameters: subject, body
* Response: 
  * Success: status 200, single post object for the original unmodified post
  * Error: status 500, "Internal server error"

####DELETE post
* URL: "/post/:id", where id is the \_id field from the database entry 
* Parameters: none
* Response: 
  * Success: status 200, single post object for the removed post
  * Error: status 500, "Internal server error"


##Technologies
###Client
* React v15.3.1
* ReactDOM v15.3.1
* React-Redux v4.4.5
* React-Router v3.0.0
* React-Markdown v2.4.2
* Redux v3.6.0
* Redux-Thunk v2.1.0
* Moment.JS v2.15.1
* Ismorphic-fetch v2.2.1

###Server
* Express v4.14.9 
* Body Parser v1.15.2
* Passport v0.3.2
* Bcryptjs v2.3.0

###Database
* MongoDB v2.2.10 
* Mongoose v4.6.3

###Test
* Mocha v3.1.0
* Chai v3.5.0
* Enzyme v2.4.1


##Next Steps
###Public
* Paginate results
* Filter by tag, date
* Comment on posts

###Admin
* Add/modify tags
* Store separate modified, created date
* Edit create date for back-dating posts
* Upload images to server
* Approve/reject comments
* Save post as private or draft 

###Testing
* Async action testing
