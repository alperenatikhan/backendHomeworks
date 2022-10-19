/* createServer metodunu kullanacağız.
index, hakkimda ve iletisim sayfaları oluşturalım.
Sayfalara içerik olarak xxx sayfasına hoşgeldiniz şeklinde h2 başlıkları yazdıralım.
port numarası olarak 5000'i kullanalım.
*/

const http = require('http')
const port = 5000


const server = http.createServer((req,res) => {

const url = req.url


switch (url){
case '/' :
case '/index':
res.writeHead(200, { "Content-Type": "text/html" });
res.write('<h2>Welcome to Index page</h2>')
res.end()
break
case '/about':
res.writeHead(200, { "Content-Type": "text/html" });
res.write('<h2>Welcome to About page </h2>')
res.end()
break
case '/contact':
res.writeHead(200, { "Content-Type": "text/html" });
res.write('<h2>Welcome to Contact page </h2>')
res.end()
break
default:
res.writeHead(404, { "Content-Type": "text/html" });
res.write('<h2>Welcome to 404 page </h2>')
res.end()
break



}

}
)


server.listen(port, ()=>{

console.log('wow')

})
