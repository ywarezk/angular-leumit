## Angular router

In this lesson we will cover advanced topics regarding routing in your angular application.

### Lesson Plan

* What routes are used for
* passing data with routes
* routes best practices
* routes helps us with project architecture
* router outlet
* named router outlets
* arranging route modules
* lazy loading
* named router outlets for lazy loading
* children

### EX.

* your app will contain the following routes:
  * / => HomeComponent
  * /about => AboutComponent
  * /todo => TodoListComponent
  * /todo/:id => TodoDetailsComponent
* make sure that the todo resources are in their own module and are lazy loaded
* the TodoList will display a list of todo items from the server
* the TodoList will contain a search box that will add to the query params and send request to the server with a search query param.
* TodoDetails contain information on a single todo item
* we will grab the item for the TodoDetails from the server.

