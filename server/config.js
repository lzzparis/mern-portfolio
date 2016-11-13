exports.DATABASE_URL  =	process.env.DATABASE_URL ||
                        global.DATABASE_URL ||
                        (process.env.NODE_ENV === "production" ?
                          "mongodb://insecure:2potatoes@ds013911.mlab.com:13911/blog-tool" :
                          "mongodb://localhost/");

exports.PORT = process.env.PORT || 8080;


//set these env variables like this:

//single command:
//PORT=5000 node server.js

//whole session:
//export PORT=5000
//node server.js
