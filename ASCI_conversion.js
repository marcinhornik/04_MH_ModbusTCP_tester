// String to ASCII conversion function

let hexxTest;
let strTest;
let asciiTest;

function hex2aTest(hexx) {
//000100000006010600010001
hexxTest = '0001000000060106000'+document.getElementById("regNumberButton4").value+'000'+document.getElementById("valueButton4").value;

    var hex = hexxTest.toString();//force conversion
    strTest = '';
    for (var i = 0; i < hex.length; i += 2)
        strTest += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
    //return str;

	console.log(strTest);
asciiTest = strTest;
}

function a2hexTest(asciiTest) {
  // var ascii = '      ';
  var arr = [];
  for (var i = 0, l = asciiTest.length; i < l; i ++) {
    var hex = Number(asciiTest.charCodeAt(i)).toString(16);
    arr.push(hex);
  }
  //return arr.join('');

  console.log(arr.join('0'));

}
