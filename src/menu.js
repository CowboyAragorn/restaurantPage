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





        let menuItemContainer1 = document.createElement('div');
            menuItemContainer1.classList = 'menuItemContainer';
        let menuItemBox = document.createElement('div');
            menuItemBox.classList = 'menuItemBox';
            menuItemContainer1.append(menuItemBox);

        //List menu items as objects, place into array//

        let item1 = ['https://64.media.tumblr.com/0335ddf417f2504da59bfb777cc0b97a/tumblr_mzvydiEra61tp16yeo1_640.jpg','*NEW* Tower O\'Cheese', '$9.99'];
        let item2 = ['https://64.media.tumblr.com/0335ddf417f2504da59bfb777cc0b97a/tumblr_mzvydiEra61tp16yeo1_640.jpg','*NEW* Tower O\'Cheese', '$9.99'];
        let item3 = ['https://64.media.tumblr.com/0335ddf417f2504da59bfb777cc0b97a/tumblr_mzvydiEra61tp16yeo1_640.jpg','*NEW* Tower O\'Cheese', '$9.99'];
        let item4 = ['https://64.media.tumblr.com/0335ddf417f2504da59bfb777cc0b97a/tumblr_mzvydiEra61tp16yeo1_640.jpg','*NEW* Tower O\'Cheese', '$9.99'];
        let item5 = ['https://64.media.tumblr.com/0335ddf417f2504da59bfb777cc0b97a/tumblr_mzvydiEra61tp16yeo1_640.jpg','*NEW* Tower O\'Cheese', '$9.99'];
        let item6 = ['https://64.media.tumblr.com/0335ddf417f2504da59bfb777cc0b97a/tumblr_mzvydiEra61tp16yeo1_640.jpg','*NEW* Tower O\'Cheese', '$9.99'];

        let menuArray = [item1, item2, item3, item4, item5, item6];

        //Loop through the array attaching menu objects to divs for display. There is a good deal of connection with this for loop & the css//
        for (let i=0; i < menuArray.length; i++){
            let menuItemRow = document.createElement('div');
            menuItemRow.classList = 'menuItemRow';
            let menuNumber = document.createElement('p');
                    menuNumber.innerText = '#' + (i+1);
                    menuNumber.classList - 'menuNumber';
                    menuItemRow.append(menuNumber);
            let itemImg = document.createElement('img');
                    itemImg.src = (menuArray[i])[0];
                    itemImg.classList = 'img';
                    menuItemRow.append(itemImg);
            let menuItem0 = document.createElement('p');
                    menuItem0.innerText = (menuArray[i])[1];
                    menuItem0.classList = 'menuItem';
                    menuItemRow.append(menuItem0);
            /* let horizontalLine = document.createElement('hr');
                    horizontalLine.style.height = '.25pt';
                    horizontalLine.style.width = '50%';
                    horizontalLine.classList = 'horizonalLine';
                    menuItemRow.append(horizontalLine);
            */
            let menuPrice = document.createElement('p');
                    menuPrice.innerText = (menuArray[i])[2];
                    menuPrice.classList = 'menuItem';
                    menuItem0.append(menuPrice);
            menuItemBox.append(menuItemRow);
        }




        //old menu concept//
/*
//Define the menu items & push to an array//
        const fatBurger = ['Slop Burger', '$5.99', '100% Locally Harvested Fat', "/home/jacob/theOdinProject/restaurantPage/src/img/slopBurger.jpg"];
        const fatShake = ['Fat Shake', '$2.99', "Goes down smooth", 'imgplaceholder'];
        const greaseFries = ['Grease Fries','$.99', 'Something this good shouldn\'t be this cheap', 'img']
        const chikHon = ['ChikHon', '$6.99', 'Yeah we do this too', 'img']
        const item5 = ['Item 5', '$4.99', 'Description', 'https://www.simplyrecipes.com/thmb/8caxM88NgxZjz-T2aeRW3xjhzBg=/2000x1125/smart/filters:no_upscale()/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2019__09__easy-pepperoni-pizza-lead-3-8f256746d649404baa36a44d271329bc.jpg'];
        const item6 = ['Item 6', '$5.99', 'Description', 'img']


        let menuArray = [fatBurger, fatShake, greaseFries, chikHon, item5, item6]

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

*/

//Attach the stuff//
    //console.log(fatBurger)
    document.body.append(menuPage)  
    menuPage.appendChild(title);
    menuPage.appendChild(menuItemContainer1);
    //menuPage.appendChild(menuItemContainer2);
    

}