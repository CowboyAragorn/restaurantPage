import './homepage.css'

export default function home() {


    let homepage = document.createElement('div')
    homepage.classList = 'homePage';
    homepage.id = 'homePage'

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
        let imgText = document.createElement('p');
            imgText.innerText = 'OLD Tower O\'Cheese - ONLY $5.99';
            imgText.classList = 'imgText';
            copy.append(imgText);


    document.body.append(homepage)  
    homepage.appendChild(title);
    homepage.appendChild(copy);
    

}
