const name= "pranam"
const surname = "bhosale"
console.log(name + surname);  // Old Method

console.log(`My Name is ${name.toUpperCase()} and my surname is ${surname.toUpperCase()}`);  // current using method

const gameName = new String("cs-go");

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.charAt(2));
console.log(gameName.indexOf("g"));



const newString = gameName.substring(0, 2);
console.log(newString);


const newStri = gameName.slice(2, 4);
console.log(newStri);


const UserName = "   Pranam  "
console.log(UserName);
console.log(UserName.trim());

const url = "http://www.youtube.com/hitest%20yt";

console.log(url.replace("%20", "-"));
console.log(url.includes("javascript"));

console.log(gameName.split('-'));


















