#Blog Post Tool

##Summary
This tool allows the primary user of a blog to manage posts. 

When the user loads the page, the list of existing posts from the database is populated on the right side of the page.  This includes the subject, last modified timestamp, an edit button and a delete button for each post.  The user can create a new post by entering the subject and body in the form on the left.  The user can edit an existing post by clicking on the pencil icon next to a post.  That data will then populate the form so the user can make modifications.   They can clear the form using the "Clear" button, or submit the form using "Submit". Upon submit, the form is cleared and the post summary is updated to include the new or updated post.  The user can delete a post by clicking on the 'x' icon next to the post, and the post summary will be updated.  The user can view the full text of a post by clicking the post subject or timestamp in the summary.  A modal with the full post will appear and it can be closed using the large 'X' in the top-right corner of the modal.

##API
###GET single post
* URL: "/:id", where id is the \_id field from the database entry 
* Parameters: none
* Response: 
  * Success: status 200, single post object
  * Error: status 500, "Internal server error"

###GET all posts
* URL: "/all"
* Parameters: none
* Response: 
  * Success: status 200, array of all posts in database
  * Error: status 500, "Internal server error"

###POST new post
* URL: "/"
* Parameters: subject, body
* Response: 
  * Success: status 201, single post object for the new post
  * Error: status 500, "Internal server error"

###PUT post update
* URL: "/:id", where id is the \_id field from the database entry 
* Parameters: subject, body
* Response: 
  * Success: status 200, single post object for the original unmodified post
  * Error: status 500, "Internal server error"

###DELETE post
* URL: "/:id", where id is the \_id field from the database entry 
* Parameters: none
* Response: 
  * Success: status 200, single post object for the removed post
  * Error: status 500, "Internal server error"


##Technologies
###Client
* jQuery
* Moment.JS v2.15.1

###Server
* Express v4.14.9 
* Body Parser v1.15.2

###Database
* MongoDB v2.2.10 
* Mongoose v4.6.3

###Test
* Mocha v3.1.0
* Chai v3.5.0
* ChaiHTTP v3.0.0

##Next Steps
* Create owner view and guest view
* Protect blog manager (owner view) with Passport authentication and limit access to a single primary user (owner)
* Include HTML or Markdown editor in form
* Allow primary user to embed one or multiple images in post body
* Allow any user to sort posts in the post summary
* Allow guests to comment on posts
* Allow primary user to reject/accept comments
* Allow primary user to upload picture file to file system and choose from existing uploads to embed in post (media manager)
 
