let a = document.getElementById("first");
a.innerHTML = "первый";

let b = document.getElementById("second");
b.setAttribute("class", "second");

let c = document.getElementById("color");
c.style.color = "red";

let d = document.getElementById("first");
console.log(d);

let div = document.getElementById("buu")
let e = document.createElement('li');
e.className="but";
e.innerHTML="Я элемент";
div.append(e);


var h = document.getElementById("but-remove");
h.hidden = true;

