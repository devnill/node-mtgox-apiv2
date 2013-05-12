var MtGoxClient = require("./mtgox");

var client = new MtGoxClient('my_key', 'my_secret');

// If too many of these functions are called at the same time, 
// you may get an "invalid nonce" error - comment what you don't need.

client.info(function(err, json) {
    if (err) { throw err; }
    console.log("---------------Client Info:--------------");
    console.log(json);
}); 

client.idKey(function(err, json) {
    if (err) { throw err; }
    console.log("---------------Client Id Key:--------------");
    console.log(json);
});

client.orders(function(err, json) {
    if (err) { throw err; }
    console.log("---------------Client Orders:--------------");
    console.log(json);
});

client.currency(function(err, json) {
    if (err) { throw err; }
    console.log("---------------Currency:--------------");
    console.log(json);
});

client.ticker(function(err, json) {
    if (err) { throw err; }
    console.log("---------------Ticker:--------------");
    console.log(json);
});

client.tickerFast(function(err, json) {
    if (err) { throw err; }
    console.log("---------------Fast Ticker:--------------");
    console.log(json);
});

client.quote("ask", 100000000, function(err, json) {
    if (err) { throw err; }
    console.log("---------------Quote:--------------");
    console.log(json);
});

// Will place a bid for 1 bitcoin at a price of 1 dollar,
/* Commented for your protection
client.add("bid", "1", "1", function(err, json) {
    if (err) { throw err; }
    console.log("---------------Add:--------------");
    console.log(json);
}); */

client.cancel("1234567890", function(err, json) {
    if (err) { throw err; }
    console.log("---------------Cancel:--------------");
    console.log(json);
});

client.lag(function(err, json) {
    if (err) { throw err; }
    console.log("---------------Lag:--------------");
    console.log(json);
});

client.fetchTrades(null, function(err, json) {
    if (err) { throw err; }
    console.log("---------------Fetch Trades:--------------");
    console.log(json);
});

client.fetchDepth(function(err, json) {
    if (err) { throw err; }
    console.log("---------------Fetch Depth:--------------");
    json.data.asks.forEach(function(el) {
        console.log(el);
    });
});

client.fullDepth(function(err, json) {
    if (err) { throw err; }
    console.log("---------------Full Depth:--------------");
    json.data.asks.forEach(function(el) {
        console.log(el);
    });
});

client.history("USD", null, function(err, json) {
    if (err) { throw err; }
    console.log("---------------History:--------------");
    json.data.result.forEach(function(el) {
        console.log(el);
    });
});