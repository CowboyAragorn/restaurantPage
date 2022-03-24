import './homepage.css'

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

    let copy = document.createElement('div');
        copy.classList = 'copy';
        let copyText = document.createElement('p');
            copyText.innerText = 'Get a bite to eat' 
            copyText.classList = 'copyText'
        copy.append(copyText);

    document.body.append(menuPage)  
    menuPage.appendChild(title);
    menuPage.appendChild(copy);
    

}