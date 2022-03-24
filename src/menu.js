import './homepage.css'
import './menu.css'

export default function menuRender() {


    let menuPage = document.createElement('div')
    menuPage.classList = 'menuPage';
    menuPage.id = 'menuPage'

    //create DOM elements and append//

    let title = document.createElement('div');
        title.classList = 'title';
    let header = document.createElement('h1');
        header.innerText = "Fast Eddy's"
        header.classList = 'header'
        title.appendChild(header);
    let subHeader = document.createElement('h2');
        subHeader.innerText = 'Home of the Fat Shake & Grease Fries';
        subHeader.classList = 'subHeader'
        title.appendChild(subHeader);


//Define the menu items & push to an array//
        const fatBurger = ['Slop Burger', '$5.99', '100% Locally Harvested Fat', "/home/jacob/theOdinProject/restaurantPage/src/img/slopBurger.jpg"];
        const fatShake = ['Fat Shake', '$2.99', "Goes down smooth", 'imgplaceholder'];
        const greaseFries = ['Grease Fries','$.99', 'Something this good shouldn\'t be this cheap', 'img']
        const chikHon = ['ChikHon', '$6.99', 'Yeah we do this too', 'img']

        let menuArray = [fatBurger, fatShake, greaseFries, chikHon]

        let menuItemContainer1 = document.createElement('div');
        let menuItemContainer2 = document.createElement('div');
        let idCounter = 0;

        menuItemContainer1.classList = 'menuItemContainer';
        menuItemContainer2.classList = 'menuItemContainer';


//Loop through the array displaying menu items in their boxes
        for (let i=0; i < menuArray.length; i++){
            let menuItemBox = document.createElement('div');
             menuItemBox.classList = 'menuItemBox';
            let menuItemColumn = document.createElement('div');
                let menuItem0 = document.createElement('p');
                    menuItem0.innerText = (menuArray[i])[0];
                    menuItem0.classList = 'menuItem';
                    menuItemColumn.append(menuItem0);
                let menuItem1 = document.createElement('p');
                    menuItem1.innerText = (menuArray[i])[1];
                    menuItem1.classList = 'menuItem';
                    menuItemColumn.append(menuItem1);
                let menuItem2 = document.createElement('p');
                    menuItem2.innerText = (menuArray[i])[2];
                    menuItem2.classList = 'menuItem';
                    menuItemColumn.append(menuItem2);
                let menuItem3 = document.createElement('img');
                    menuItem3.src = (menuArray[i])[3];
                    menuItem3.classList = 'menuItem';
                    menuItem3.classList = 'img';
                    menuItemColumn.append(menuItem3);
                menuItemColumn.classList = 'menuItemColumn';
                menuItemBox.append(menuItemColumn);
                menuItemBox.id = idCounter;
                idCounter++;1
            //Controls if it goes on top or bottom row//
        if (menuItemBox.id == 0 || menuItemBox.id == 1 || menuItemBox.id == 2){
            menuItemContainer1.append(menuItemBox);
        }
        else{
            menuItemContainer2.append(menuItemBox);  
        }
    }

console.log(fatBurger)
    document.body.append(menuPage)  
    menuPage.appendChild(title);
    menuPage.appendChild(menuItemContainer1);
    menuPage.appendChild(menuItemContainer2);
    

}