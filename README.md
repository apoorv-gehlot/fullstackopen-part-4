# Exercises 4.1.-4.2.
In the exercises for this part we will be building a blog list application, that allows users to save information about interesting blogs they have stumbled across on the internet. For each listed blog we will save the author, title, url, and amount of upvotes from users of the application.

## 4.1 Blog list, step1
Let's imagine a situation, where you receive an email that contains the following application body:

Turn the application into a functioning npm project. In order to keep your development productive, configure the application to be executed with nodemon. You can create a new database for your application with MongoDB Atlas, or use the same database from the previous part's exercises.

Verify that it is possible to add blogs to list with Postman or the VS Code REST client and that the application returns the added blogs at the correct endpoint.

## 4.2 Blog list, step2
Refactor the application into separate modules as shown earlier in this part of the course material.

# Exercises 4.3.-4.7.
Let's create a collection of helper functions that are meant to assist dealing with the blog list. Create the functions into a file called utils/list_helper.js. Write your tests into an appropriately named test file under the tests directory.

## 4.3: helper functions and unit tests, step1
First define a dummy function that receives an array of blog posts as a parameter and always returns the value 1.

## 4.4: helper functions and unit tests, step2
Define a new totalLikes function that receives a list of blog posts as a parameter. The function returns the total sum of likes in all of the blog posts.

Write appropriate tests for the function. It's recommended to put the tests inside of a describe block, so that the test report output gets grouped nicely

## 4.5*: helper functions and unit tests, step3
Define a new favoriteBlog function that receives a list of blogs as a parameter. The function finds out which blog has most likes. If there are many top favorites, it is enough to return one of them.