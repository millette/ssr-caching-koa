[![Deploy to now](https://deploy.now.sh/static/button.svg)](https://deploy.now.sh/?repo=https://github.com/millette/ssr-caching-koa)

# Example app where it caches SSR'ed pages in the memory using koa.

Used to demontrate bug [404 error when using useFileSystemPublicRoutes = false](https://github.com/zeit/next.js/issues/2682).

Demo: <https://ssr-caching-koa-amateehwho.now.sh/> (*temporary*)

## The idea behind the example

React Server Side rendering is very costly and takes a lot of server's CPU power for that. One of the best solutions for this problem is cache already rendered pages.
That's what this example demonstrate.

This app uses Next's [custom server and routing](https://github.com/zeit/next.js#custom-server-and-routing) mode. It also uses [express](https://expressjs.com/) to handle routing and page serving.
