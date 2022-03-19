//import home from './homepage'; 
console.log('Is this thing on?');
console.log('why is this not working');


function home() {
    //let content = document.getElementById('content');
    let welcome = document.createElement('div');
    welcome.innerHTML = 'Welcome to Fast Eddie';
   document.body.appendChild(welcome);


}

home();
//document.body.appendChild(home());