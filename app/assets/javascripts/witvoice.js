// $(document).ready(function() {

//   var mic = new Wit.Microphone(document.getElementById("microphone"));


//   var info = function (msg) {
//     document.getElementById("info").innerHTML = msg;
//   };
//   var error = function (msg) {
//     document.getElementById("error").innerHTML = msg;
//   };


//   mic.onready = function () {
//     info("Microphone is ready to record");
//   };
//   mic.onaudiostart = function () {
//     info("Recording started");
//     error("");
//   };
//   mic.onaudioend = function () {
//     info("Recording stopped, processing started");
//   };
//   mic.onresult = function (_text, entities) {
//     var r = kv("_text", _text);
//     console.log('r in onresult is ' + r);
//     console.log('_text in onresult is ' + _text);
//     console.log('entities in onresult is ' + entities);
//     debugger;

//     //this is error handling or something dumb, it never does anything
//     //it may do something for more than one method
//     for (var k in entities) {
//       var e = entities[k];
//       console.log('e intially is' + e);

//       if ( !(e instanceof Array) ) {
//         r += kv(k, e.value);
//       } else {
//         for ( var i = 0; i < e.length; i++ ) {
//           r += kv(k, e[i].value);
//         }
//       }
//     }

//     document.getElementById("result").innerHTML = r;
//   };
//   mic.onerror = function (err) {
//     error("Error: " + err);
//   };
//   mic.onconnecting = function () {
//     info("Microphone is connecting");
//   };
//   mic.ondisconnected = function () {
//     info("Microphone is not connected");
//   };


//   mic.connect("BOBUMTAH4RKUX2WF7AO5UZJVT6MKAGKW");
//   // mic.start();
//   // mic.stop();

//   function kv (k, v) {
//     console.log('v in kv is ', v);
//     console.log('k in kv is ', k);
//     if (toString.call(v) !== "[object String]") {
//       v = JSON.stringify(v);
//     }
//     return k + "=" + v + "\n";
//   }
// });