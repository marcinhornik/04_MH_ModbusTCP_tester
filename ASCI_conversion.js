// String to ASCII conversion function

let hexx;
let str;
let ascii;

function hex2a(hexx) {
//000100000006010600010001
hexx = '0001000000060106000'+document.getElementById("regNumberButton4").value+'000'+document.getElementById("valueButton4").value;

    var hex = hexx.toString();//force conversion
    var str = '';
    for (var i = 0; i < hex.length; i += 2)
        str += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
    //return str;

	console.log(str);
ascii = str;
}

function a2hex(ascii) {
  // var ascii = '      ';
  var arr = [];
  for (var i = 0, l = ascii.length; i < l; i ++) {
    var hex = Number(ascii.charCodeAt(i)).toString(16);
    arr.push(hex);
  }
  //return arr.join('');

  console.log(arr.join('0'));

}
