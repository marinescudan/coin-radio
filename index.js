const CoinbasePro = require('coinbase-pro');
const publicClient = new CoinbasePro.PublicClient();

// publicClient.getProducts().then(data => {
//     //console.log(data);
//     data.forEach(element => {
//         if (element.id.includes('ETH-USD')) {
//             console.log(element);
//         }
//     });
// }).catch(error => {
//     console.log(error);
// });
publicClient.getProductOrderBook('BTC-USD', { level: 3 }).then(book => {
    console.log(book);
}).catch(error => {
    console.log(error);
});
