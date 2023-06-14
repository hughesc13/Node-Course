import Koa from 'koa';

const app = new Koa();

//ctx = context, next = callback
app.use(async (ctx, next) => {
    //this callback adds a header
    ctx.type = 'application/json'; //adds this as a header to response
    await next(); //this transfers control to the next callback below
});

app.use(async (ctx, next) => {
    ctx.body = { name: 'Alex Magic', id: '124'};
    await next();
});

app.use(async (ctx, next) => {
    //set cookies on client's browsers
    ctx.cookies.set('trackingId', '124');
});

app.listen(3000, () => {
    console.log('Koa server is listening on port 3000.');
});