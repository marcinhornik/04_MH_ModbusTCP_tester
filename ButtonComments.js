//test github test test2, test3, test4

let ipNumber;

let net = require('net');

let HOST;
let PORT = 502



function ipRead(){
  ipNumber = document.getElementById("ipAddress").value;
}





function realy0On() {

  var net = require('net');

  HOST = ipNumber;


  var client = new net.Socket();
  client.connect(PORT, HOST, function() {

    console.log('CONNECTED TO: ' + HOST + ':' + PORT);
    // Write a message to the socket as soon as the client is connected, the server will receive it as message from the client



    let test = 0xff;
    let test1 = test.toString(16)

    setTimeout(function() {
      client.write('      ');
    }, 10); // wysyłany string musi byc w przeformarowany hex na ASCii (wtyczki-->convert )



    setTimeout(function() {
      client.end();
    }, 100);

  });

  client.on('data', function(data) {

    console.log('DATA: ' + data);
    //    Close the client socket completely
    client.destroy();

  });

  //// Add a 'close' event handler for the client socket
  client.on('close', function() {
    console.log('Connection closed');
  });




}



function realy0Off() {

  var net = require('net');

  HOST = ipNumber;


  var client = new net.Socket();
  client.connect(PORT, HOST, function() {

    console.log('CONNECTED TO: ' + HOST + ':' + PORT);
    // Write a message to the socket as soon as the client is connected, the server will receive it as message from the client



    setTimeout(function() {
      client.write('       ');
    }, 10); // wysyłany string musi byc w przeformarowany hex na ASCii (wtyczki-->convert )



    setTimeout(function() {
      client.end();
    }, 100);

  });

  client.on('data', function(data) {

    console.log('DATA: ' + data);
    //    Close the client socket completely
    client.destroy();

  });

  //// Add a 'close' event handler for the client socket
  client.on('close', function() {
    console.log('Connection closed');
  });



}
