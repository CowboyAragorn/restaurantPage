export default function home() {


    let homepage = document.createElement('div')
    let uiDirectory = document.createElement('div');
        let menu = document.createElement('div');
            menu.innerText = 'Menu';
            uiDirectory.appendChild(menu);
        let about = document.createElement('div');
            about.innerText = 'About';
            uiDirectory.appendChild(about);
        let order = document.createElement('div');
            order.innerText = 'Order';
            uiDirectory.appendChild(order);

            

    let title = document.createElement('div');
    let header = document.createElement('h1');
        header.innerText = "Fast Eddie's"
        title.appendChild(header);
    let subHeader = document.createElement('h2');
        subHeader.innerText = 'Home of the Fat Shake & Grease Fries';
        title.appendChild(subHeader);

    let copy = document.createElement('div');
        let copyText = document.createElement('p');
            copyText.innerText = 'People come to Fast Eddy\'s for the casual atmosphere, down home cooking, and simple minded employees. People stay because of the food poisoning. The city health inspector called us "worse than CiCi\'s", but here at Fast Eddy\'s - We Let the Customer Decide.' 
            copy.append(copyText);
        let slopBurgerImg = document.createElement('img');
            slopBurgerImg.setAttribute('src', '/home/jacob/theOdinProject/restaurantPage/src/img/slopBurger.jpg')   
        copy.append(slopBurgerImg);


    document.body.append(homepage)
    homepage.appendChild(uiDirectory);   
    homepage.appendChild(title);
    homepage.appendChild(copy);
    

}