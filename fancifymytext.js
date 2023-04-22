var button = document.getElementById("button");
var text = document.getElementById("text-area");
var fancy = document.getElementById("fancify");
var boring = document.getElementById("boringbetty");
var moo = document.getElementById("moo");


button.addEventListener("click",function() {
    alert("Hello, World!");
    text.style.fontSize = '24pt';
});

fancy.addEventListener("click",function() {
    text.style.fontWeight = 'bold';
    text.style.color = 'blue';
    text.style.textDecoration = 'underline';
});

boring.addEventListener("click",function() {
    text.style.fontWeight = 'normal';
    text.style.color = 'black';
    text.style.textDecoration = 'none';
});

moo.addEventListener("click",function(){
    text.value = text.value.toUpperCase();
    var text = text.value;
    var sentences = text.split(".");
    for (var i = 0; i < sentences.length; i++) {
      var words = sentences[i].split(" ");
      words[words.length - 1] = words[words.length - 1].toUpperCase() + "-Moo";
      sentences[i] = words.join(" ");
    }
    text.value = sentences.join(".");
});
