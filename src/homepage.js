import './homepage.css'
export default function home() {


    let homepage = document.createElement('div')

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
        directoryMenu.classList = 'directoryMenu'  
            let menu = document.createElement('div');
                menu.innerText = 'Menu';
                directoryMenu.appendChild(menu);
            let about = document.createElement('div');
                about.innerText = 'About';
                directoryMenu.appendChild(about);
            let order = document.createElement('div');
                order.innerText = 'Order';
                directoryMenu.appendChild(order);
    uiDirectory.append(directoryMenu);

            

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

    let copy = document.createElement('div');
        copy.classList = 'copy';
        let copyText = document.createElement('p');
            copyText.innerText = 'People come to Fast Eddy\'s for the casual atmosphere, down home cooking, and simple minded employees. People stay because of the food poisoning. The city health inspector called us "worse than CiCi\'s", but here at Fast Eddy\'s - We Let the Customer Decide.' 
            copyText.classList = 'copyText'
            copy.append(copyText);
        let slopBurgerImg = document.createElement('img');
            slopBurgerImg.setAttribute('src', '/home/jacob/theOdinProject/restaurantPage/src/img/slopBurger.jpg')   
            slopBurgerImg.classList = 'slopBurgerImg'
        copy.append(slopBurgerImg);


    document.body.append(homepage)
    homepage.appendChild(uiDirectory);   
    homepage.appendChild(title);
    homepage.appendChild(copy);
    

}