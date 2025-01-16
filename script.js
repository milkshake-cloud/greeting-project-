let name = prompt('what is your name','Type your name')

let date = new Date();
let time = date.getHours();

if(time < 12){
    document.getElementById("show").innerHTML = 'Good Morning ' + name 
}else if(time <= 16){
    document.getElementById("show").innerHTML = 'Good Afternoon ' + name 
}else{
    document.getElementById("show").innerHTML = 'Good Evening ' + name 
}

// alert(time)
// console.log(time)

// alert(date)
// console.log(date)


// document.getElementById("show").innerHTML = 'Good Morning ' + name 