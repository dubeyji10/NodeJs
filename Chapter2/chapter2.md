# Express

## express()

Creates an Express application. The express() function is a top-level function exported by the express module.

```
var express = require('express')
var app = express()
 ```

[![express-1.png](https://i.postimg.cc/9FP4T723/express-1.png)](https://postimg.cc/0bQ21rrZ)

#### The app object has methods for

    > Routing HTTP requests; see for example, app.METHOD and app.param.
    > Configuring middleware; see app.route.
    > Rendering HTML views; see app.render.
    > Registering a template engine; see app.engine.

## Routing Methods
### There is a method for every HTTP verb
[READ](http://expressjs.com/en/4x/api.html#app.METHOD)
Routing methods

Express supports the following routing methods corresponding to the HTTP methods of the same names:

-    checkout
-    copy
-    delete
-    get
-    head
-    lock
-    merge
-    mkactivity
-    mkcol
-    move
-    m-search
-    notify
-    options
-    patch
-    post
-    purge
-    put
-    report
-    search
-    subscribe
-    trace
-    unlock
-    unsubscribe

<font color="#cc1ecf"> The API documentation has explicit entries only for the most popular HTTP methods app.get(), app.post(), app.put(), and app.delete(). However, the other methods listed above work in exactly the same way. </font>

```
app.get('/', (req, res) => { /* */ })
app.post('/', (req, res) => { /* */ })
app.put('/', (req, res) => { /* */ })
app.delete('/', (req, res) => { /* */ })
app.patch('/', (req, res) => { /* */ })
```

> To make express web application modular use router factories

# RENDERING PAGES

Modern web apps are data-driven and need views that can display data dynamically. While you can create good-looking views using static HTML templates, you can't hydrate them with data from the server.

Instead, you use template engines like Pug to create dynamic views that can render UI elements conditionally and that you can hydrate with values from the server. What makes Pug stand out from other offerings is its concise syntax and its support for template inheritance to compose pages easily.<br>
[read more from the original source](https://auth0.com/blog/create-a-simple-and-stylish-node-express-app/)

## Using a template Engine
### some popular template engines include : 
- pug ( Jade Jade has been renamed to pug as of December 2015 )
- ejs
- marko
- ets
- express-handlebars
- Mustache
