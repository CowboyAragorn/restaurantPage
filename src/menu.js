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
        subHeader.innerText = 'Lard n\' Grease with Every Combo'
        subHeader.classList = 'subHeader'
        title.appendChild(subHeader);





        let menuItemContainer1 = document.createElement('div');
            menuItemContainer1.classList = 'menuItemContainer';
        let menuItemBox = document.createElement('div');
            menuItemBox.classList = 'menuItemBox';
            menuItemContainer1.append(menuItemBox);

        //List menu items as objects, place into array//

        let item1 = ['https://img.buzzfeed.com/buzzfeed-static/static/2016-02/21/17/campaign_images/webdr08/for-everyone-who-dips-their-fries-in-their-wendys-2-29065-1456093003-8_dblbig.jpg?resize=1200:*',
        'Original Lard n\' Grease', '$2.00', 'Since 1972'];
        let item2 = ['https://i0.wp.com/post.healthline.com/wp-content/uploads/2018/10/Can-Certain-Foods-Give-You-Nightmares_1296x728-header.jpg?w=1155&h=1528',
        'Goblin Burger', 'Combo $7.99', ['Solo $5.99']];
        let item3 = ['https://www.chicagotribune.com/resizer/TixVzrslh22JHi2u0HtuboOrD1w=/415x233/top/cloudfront-us-east-1.images.arcpublishing.com/tronc/FAHVXS3YTZEPLLP2CPSRG4MF3Q.jpg',
        'The Foot-Lettuce', 'Combo $6.99', 'Solo $4.99'];
        let item4 = ['https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Dinosaur_Chicken_Nuggets.jpg/1280px-Dinosaur_Chicken_Nuggets.jpg','Raptor Bites', 'Combo $6.99', 'Solo $4.99'];
        let item5 = ['https://eatup.kitchen/wp-content/uploads/2019/06/Salmon-Burger-Web-470.jpg','-OR THE WHALE (Salmon)', 'Combo $8.99', 'Solo $6.99'];
        let item6 = ['https://64.media.tumblr.com/0335ddf417f2504da59bfb777cc0b97a/tumblr_mzvydiEra61tp16yeo1_640.jpg','*NEW* Tower O\'Cheese', 'Combo $9.99', 'Solo $7.99'];

        let menuArray = [item1, item2, item3, item4, item5, item6];

        let menuColumnLeft = document.createElement('div');
            menuColumnLeft.classList = 'column';
        let menuColumnRight = document.createElement('div');
            menuColumnRight.classList = 'column';
        let idCounter = 1;

        menuItemBox.append(menuColumnLeft);
        menuItemBox.append(menuColumnRight);

        //Loop through the array attaching menu objects to divs for display. There is a good deal of connection with this for loop & the css//
        for (let i=0; i < menuArray.length; i++){
            let menuItemRow = document.createElement('div');
            menuItemRow.classList = 'menuItemRow';
            
            let menuNumber = document.createElement('p');
                    menuNumber.innerText = '#' + (i+1);
                    menuNumber.classList = 'menuNumber';
                    menuItemRow.append(menuNumber);
            
            let itemImg = document.createElement('img');
                    itemImg.src = (menuArray[i])[0];
                    itemImg.classList = 'img';
                    menuItemRow.append(itemImg);
            let menuItem0 = document.createElement('p');
                    menuItem0.innerText = (menuArray[i])[1];
                    menuItem0.classList = 'menuItemName';
                    menuItemRow.append(menuItem0);
            let menuPrice = document.createElement('p');
                    menuPrice.innerText = (menuArray[i])[2];
                    menuPrice.classList = 'menuItem';
                    menuPrice.classList = 'price';
                    menuItem0.appendChild(menuPrice);
            let menuPrice2 = document.createElement('p');
                    menuPrice2.innerText = (menuArray[i])[3];
                    menuPrice2.classList = 'menuItem';
                    menuItem0.appendChild(menuPrice2);
            //menuItemBox.append(menuItemRow);

            menuItemBox.id = idCounter;
            idCounter++;1
        //Controls if it goes on top or bottom row//
    if (menuItemBox.id == 1 || menuItemBox.id == 2 || menuItemBox.id == 3){
        menuColumnLeft.append(menuItemRow);
    }
    else{
        menuColumnRight.append(menuItemRow);
    }
    
        }




//Attach the stuff//
    //console.log(fatBurger)
    document.body.append(menuPage)  
    menuPage.appendChild(title);
    menuPage.appendChild(menuItemContainer1);
    //menuPage.appendChild(menuItemContainer2);
    

}