//test github test test2, test3, test4

let ipNumber;
let HOST;
let PORT = 502


// funkcja wczytujaca nr ip z formularza
function ipRead() {
  ipNumber = document.getElementById("ipAddress").value;
}

// funkcja zmianijąca hex na ascii
let hexx;
let str;
let ascii;
let data1;

function hex2a(hexx) {

hexx = '0001000000060106000'+document.getElementById("regNumberButton4").value+'000'+document.getElementById("valueButton4").value;

    var hex = hexx.toString();//force conversion
    str = '';
    for (var i = 0; i < hex.length; i += 2)
        str += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
    //return str;

	console.log('Preparing command ' + hexx + ' to send');

}

function a2hex(data) {

  var arr = [];
  for (var i = 0, l = data.length; i < l; i ++) {
    var hex = Number(data.charCodeAt(i)).toString(16);
    arr.push(hex);
  }
  return arr.join('');

  //console.log(arr.join('0'));

  }



function regWrite(str) {

  var net = require('net');

  HOST = ipNumber;


  var client = new net.Socket();
  client.connect(PORT, HOST, function() {

    console.log('CONNECTED TO: ' + HOST + ':' + PORT);
    // Write a message to the socket as soon as the client is connected, the server will receive it as message from the client

    setTimeout(function() {client.write(str);}, 10); // wysyłany string musi byc w przeformarowany hex na ASCii (wtyczki-->convert )

    setTimeout(function() {client.end();}, 100);

  });

  client.on('data', function(data) {

  a2hex(data);




    console.log('Reacived DATA: ' + data);



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
