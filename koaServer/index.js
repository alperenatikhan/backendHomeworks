/*

koa paketini indirelim.
index, hakkimda ve iletisim sayfaları oluşturalım.
Sayfalara içerik olarak xxx sayfasına hoşgeldiniz şeklinde h1 başlıkları yazdıralım.
port numarası olarak 3000'i kullanalım.

*/

/*
app.use(async ctx => {
  ctx.body = '<div style="display:flex;flex-direction:column;justify-content:center,align-items:center;width:50vw;height:30vh; margin:30vh auto ; text-align:center;border:1px solid lightgray;padding:5%"><h2>Hellooooo</h2><p style="color:dodgerblue"> wooow </p></div>';
});

*/


const Koa = require('koa');
const app = new Koa
const Router = require('koa-router');
const router = new Router();


router.get('/', (ctx, next) => {
  ctx.body = '<div style="display:flex;flex-direction:column;justify-content:center,align-items:center;width:50vw;height:30vh; margin:30vh auto ; text-align:center;border:1px solid lightgray;padding:5%;border-radius:16px"><h1>Welcome to Index page</h1><p style="color:dodgerblue"> wooow </p></div>'
});

router.get('/about', (ctx, next) => {
  ctx.body = '<div style="display:flex;flex-direction:column;justify-content:center,align-items:center;width:50vw;height:30vh; margin:30vh auto ; text-align:center;border:1px solid lightgray;padding:5%;border-radius:16px"><h1>Welcome to About page</h1><p style="color:dodgerblue"> wooow </p></div>'
});

router.get('/contact', (ctx, next) => {
  ctx.body = '<div style="display:flex;flex-direction:column;justify-content:center,align-items:center;width:50vw;height:30vh; margin:30vh auto ; text-align:center;border:1px solid lightgray;padding:5%; border-radius:16px"><h1>Welcome to Contact page</h1><p style="color:dodgerblue"> wooow </p></div>'
});

router.get('/:page', (ctx, next) => {
  ctx.body = '<div style="display:flex;flex-direction:column;justify-content:center,align-items:center;width:50vw;height:30vh; margin:30vh auto ; text-align:center;border:1px solid lightgray;padding:5%; border-radius:16px"><h1>404 not found page</h1><p style="color:dodgerblue"> wooow </p></div>'
});

app.use(router.routes())
app.listen(3000);
