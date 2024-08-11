var connection = new signalR.HubConnectionBuilder().withUrl("/pohub").build();
connection.on("ReceiveMessage", function (user, message) {
    console.log("One message received");
});
connection.on("PurchaseOrderCreate", function (user, message) {
    console.log("Purchase Order Created");
});

connection.start().then(function () {
    console.log("Signal R Connection Established")
}).catch(function (err) {
    console.log("Signal R Connection Failed")
    return console.error(err.toString());
});