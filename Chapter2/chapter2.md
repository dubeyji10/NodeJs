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

