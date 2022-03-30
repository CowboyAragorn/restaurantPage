import home from './homepage'; 
import menuRender from './menu';
import contactRender from './contact'
import './homepage.css'
//import './homepage.css'
console.log('Is this thing on?');
console.log('why is this not working');

//Put directory bar in index.js so that it stays constant when changing between menu options//
function directoryBar() { 


let uiDirectory = document.createElement('div');
        uiDirectory.classList = "uiDirectory"

         let mascot = document.createElement('div');
            let mascotImg = document.createElement('img');
            mascotImg.setAttribute('src', '/home/jacob/theOdinProject/restaurantPage/src/img/Fast Eddy.jpg')
            mascotImg.classList = 'mascotImg';
            mascot.append(mascotImg);
        mascot.classList = 'mascot'
        uiDirectory.append(mascot);

    let directoryMenu = document.createElement('div');  
        directoryMenu.classList = 'directoryMenu';
     

        //Create each menu button with corresponding event listener to change to correct page//
            let homeButton = document.createElement('button');
                homeButton.innerText = 'Home';
                homeButton.classList = 'menubtn';
        //event listener works by removing current page, generating new one, getting ID of new page, and then setting that to the current page for next change//
                homeButton.addEventListener('click', ()=> { 
                    document.body.removeChild(currentPage)
                    home();
                    homePage = document.getElementById('homePage');
                    currentPage = homePage;
                    });
                    
                directoryMenu.appendChild(homeButton);
            let menu = document.createElement('button');
                menu.innerText = 'Menu';
                menu.classList = 'menubtn';
                menu.addEventListener('click', ()=> { 
                    document.body.removeChild(currentPage)
                    menuRender()
                    menuPage = document.getElementById('menuPage');
                    currentPage = menuPage;
                    });
                directoryMenu.appendChild(menu);
            let contact = document.createElement('button');
                contact.innerText = 'Contact';
                contact.classList = 'menubtn';
                contact.addEventListener('click', ()=> { 
                    document.body.removeChild(currentPage);
                    contactRender()
                    contactPage = document.getElementById('contactPage');
                    currentPage = contactPage;
                    });
                directoryMenu.appendChild(contact);
    document.body.append(uiDirectory);
    uiDirectory.append(directoryMenu);
}

let footer = document.createElement('div');
    footer.classList = 'footer';
    let footerText = document.createElement('div')
        footerText.classList = 'footerText';
        footerText.innerText = 'Created by CowboyAragorn 3/22'
        footer.append(footerText)



directoryBar();
home();



//Declare pagenames by ID here so that the menu can remove them each with event listeners. Declared AFTER home so that there is something to actually id//
let homePage = document.getElementById('homePage');
let menuPage = document.getElementById('menuPage');;
let contactPage = document.getElementById('contactPage');
let currentPage = homePage;     
