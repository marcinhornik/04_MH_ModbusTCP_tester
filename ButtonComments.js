//test github test test2, test3, test4

// pobieranie daty i czasu
var dzien;
var miesiac;
var rok;
var godzina;
var minuta ;
var sekunda;
var dzisiaj;



function time(){
dzisiaj = new Date();
           dzien = dzisiaj.getDate();
           miesiac = dzisiaj.getMonth()+1;
          rok = dzisiaj.getFullYear();
           godzina = dzisiaj.getHours();
          if (godzina<10) godzina ="0"+godzina;
         minuta = dzisiaj.getMinutes();
          if (minuta<10) minuta  = "0"+minuta;
           sekunda = dzisiaj.getSeconds();
          if (sekunda<10) sekunda  = "0"+sekunda;
        //  document.getElementById("zegar").innerHTML = dzien+"/"+miesiac+"/"+rok+" | "+godzina+":"+minuta+":"+sekunda;
        //  setTimeout("odliczanie()",1000);
}


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
let data2;

function hex2a(hexx) {

hexx = '000A000000060106000'+document.getElementById("regNumberButton4").value+'000'+document.getElementById("valueButton4").value;

    var hex = hexx.toString();//force conversion
    str = '';
    for (var i = 0; i < hex.length; i += 2)
        str += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
    //return str;

	console.log('Preparing command ' + hexx + ' to send');

}

function a2hex(ascii) {

  var arr = [];
  for (var i = 0, l = ascii.length; i < l; i ++) {
    var hex = Number(ascii.charCodeAt(i)).toString(16);
    arr.push(hex);
  }
  data2 =  arr.join('0');

  //console.log(arr.join('0'));

  }



function regWrite(str) {
time();

  var net = require('net');

  HOST = ipNumber;
hexx = '000A000000060106000'+document.getElementById("regNumberButton4").value+'000'+document.getElementById("valueButton4").value;

  var client = new net.Socket();
  client.connect(PORT, HOST, function() {

    console.log('CONNECTED TO: ' + HOST + ':' + PORT);
    // Write a message to the socket as soon as the client is connected, the server will receive it as message from the client

setTimeout(function() {client.write(str);}, 10); // wysyłany string musi byc w przeformarowany hex na ASCii (wtyczki-->convert )


document.getElementById("viewResult").innerHTML += godzina +":"+ minuta+":" + sekunda +": "+ "Send:" +"&nbsp&nbsp&nbsp&nbsp" + hexx +"\n"; // += oznacza że można wporwadzac woiele wartości do innerHTML
    setTimeout(function() {client.end();}, 100);

  });

  client.on('data', function(data) {


data1 = data.toString();
a2hex(data1);
let data3 = "0"+data2.toUpperCase();

//console.log(data2);

    console.log('Reacived DATA: ' + '0'+data2.toUpperCase());

    hexx = '000A000000060106000'+document.getElementById("regNumberButton4").value+'000'+document.getElementById("valueButton4").value;

document.getElementById("viewResult").innerHTML += godzina +":"+ minuta+":" + sekunda +": "+"Receive:" +"&nbsp" + data3 +"\n\n"; // += oznacza że można wporwadzac woiele wartości do innerHTML

    if (data3.toString() == hexx.toString()) document.getElementById("button4Status").innerHTML = " OK"; // jeśli true to wytświetl true w <div o nazwie wynik -->
    else document.getElementById("button4Status").innerHTML = " ERROR";



setTimeout(function() {document.getElementById("button4Status").innerHTML = "";}, 4000);

    //    Close the client socket completely
    client.destroy();

  });

  //// Add a 'close' event handler for the client socket
  client.on('close', function() {
    console.log('Connection closed');

  });




}


function clearTextaArea(){

//document.getElementById("viewResult").innerHTML += godzina +":"+ minuta+":" + sekunda +": "+"Receive:" +"&nbsp" + data3 +"\n\n";
document.getElementById("viewResult").innerHTML = "";

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
