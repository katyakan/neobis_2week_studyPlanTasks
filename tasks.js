//Part 1
//1

// Answer: 
/*
10
10
10
10
10
10
10
10
10
10

*/

// 2

let date = new Date();
const dayWeekNumber = date.getDay();
const daysInWeek = [ 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday' ]
const dayOfWeek = daysInWeek[dayWeekNumber-1];
console.log(`Today is: ${dayOfWeek}`);
let hours = date.getHours();
const minutes = date.getMinutes();
const seconds = date.getSeconds();
let timeInAmOrPm = '';
 if (hours <12) {console.log(`Current time is: ${hours}AM:${minutes}:${seconds}`)}
 else {console.log(` ${hours-12}PM: ${minutes} : ${seconds}`)}


//3
/*#3
Write a JavaScript function that reverse a number. 
Example x = 32243;	
Expected Output : 34223

 */
let number = 123456;
let reverseString= number.toString().split('').reverse().join('');
let reverseNumber = +reverseString;
console.log(reverseNumber)


//4 


// #4
// Write a JavaScript program to calculate the factorial of a number. In mathematics, the factorial of a non-negative integer n, denoted by n!, is the product of all positive integers less than or equal to n. 
// For example, 5! = 5 x 4 x 3 x 2 x 1 = 120 



function factor(num) {
for (let i = num - 1; i >= 1; i--) {
   
  num = num * i; 
   
}
return num;
}
console.log(factor(5));


//5  Write a JavaScript program that accepts two integers in prompt() and alert the larger one.
let firstNumber = parseInt(prompt("Введите первое число", 10 ));
let secondNumber = parseInt(prompt("Введите второе число", 20));
if (firstNumber === secondNumber) {alert("числа равны")}
if (firstNumber > secondNumber) {alert("Большее число: " + firstNumber)} else {alert("Большее число: " + secondNumber)}


//6 
// #6
// Write a simple JavaScript program to join all elements of the following array into a string. 
// Sample array: myColor = ["Red", "Green", "White", "Black"];
// Expected Output : 
// "Red,Green,White,Black"
// "Red+Green+White+Black"
myColor = ["Red", "Green", "White", "Black"];
console.log(myColor.join(","));
console.log(myColor.join("+"));


//7
// Write a JavaScript function to get the month name from a particular date. 
// Test Data :
// console.log(month_name(new Date("10/11/2009"))); 
// console.log(month_name(new Date("11/13/2014")));
// Output :
// "October" 
// "November" 

let dateMonth = new Date();
let month = dateMonth.getMonth();
const monthesArray = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
let nameMonth = monthesArray[month];
console.log(nameMonth);


// #8
// Write a JavaScript program to test the first character of a string is uppercase or not

let string ='Mother';
let firstCharacter = string[0];

  if (firstCharacter === firstCharacter.toUpperCase()) {
    return console.log(true);
  } else {console.log(false)}
  

//9
//html
<canvas id="smileCanvas" width="100" height="100"></canvas>

//
const canvas = document.getElementById("smileCanvas");
const smile = canvas.getContext("2d");

// draw mouth
smile.beginPath();
smile.moveTo(20, 60);
smile.quadraticCurveTo(60, 80, 80, 50);
smile.stroke();

// draw eyes
smile.beginPath();
smile.arc(35, 35, 5, 0, 2 * Math.PI);
smile.fill();
smile.beginPath();
smile.arc(65, 35, 5, 0, 2 * Math.PI);
smile.fill();


//part 2 #1
const divs = document.querySelectorAll("div");
let song = [];
song.push(divs[2].textContent);
song.push(divs[4].textContent);
song.push(divs[1].textContent);
song.push(divs[5].textContent);
song.push(divs[3].textContent);
song.push(divs[0].textContent);
console.log(song.join("\n"));

// #2
const elements = document.querySelectorAll(".element")


for(let i = 0; i<elements.length;i++){
    if(i<3){
        elements[i].style.color = "red"
    }
    else{
        elements[i].style.color = "green"


    }
}

//#3

const list = document.querySelector("#todo-list");

const tasks = ['Buy lemonade', 'Make toasts', 'Repair car', 'Play games', 'Pet a cat'];

for (let i = 0; i < tasks.length; i++) {
  createLi(tasks[i]);
}

function createLi(text) {
  const liItem = document.createElement("li");
  liItem.classList.add("task");
  liItem.textContent = text;
  list.appendChild(liItem);
}

//4
const paragraphs = document.querySelectorAll("p");

paragraphs.forEach(paragraph => {
  paragraph.insertAdjacentHTML("afterend", "<hr>");
});

//5
const items = document.querySelectorAll(".item")
const cartList = document.querySelector("#cart-items")
items[1].remove()

const chocolateBar = document.querySelector(":nth-child(5)")
const cannedFish = document.createElement("div")
cannedFish.classList.add("item")
cannedFish.textContent = "Canned Fish x 4"
cannedFish.innerHTML += <span class="qty">x 4</span>
cartList.replaceChild(cannedFish, chocolateBar)

//6
const list = document.querySelector(".list");

function createList(text){
  if (text === null) {
    return;
  }
  const liItem = document.createElement("li");
  liItem.textContent = text;
  list.appendChild(liItem);
}

function question() {
  while (true) {
    const listContent = prompt("write something");
    if (listContent === null || listContent === "") {
      alert("its all");
      break;
    }
    createList(listContent);
  }
}

question();
