let txt='abcdefghijklmnopqrstuvwxyz';
Text.length;
console.log(txt.length)

let txt1= 'please visit microsoft';
let txt2 = txt1.replace('microsoft' , 'BGU');
console.log(txt2);

let cars= ['toyota','mazda','honda'];
console.log(cars);
text=" ";
text += cars[0];
console.log(text);

var i;
for (i=0 ; i<cars.length; i++){
    text+= cars[i]
    console.log(text);
}

function StopMotion() {
document.getElementById(SMimg).src="Profile.png"
}