const app           = require( 'koa' )();
const router	    = require( './routes' );
const koaStatic = require('koa-static');
app
    .use(koaStatic('.', {}))
    .use( router.routes() )
    .use( router.allowedMethods() );

app.use(require('koa-static')(__dirname));

app.use(require('koa-bodyparser')());

// app.listen( 9988,'0.0.0.0' );
app.listen( 9988,'0.0.0.0' );
