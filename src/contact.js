import './homepage.css'

export default function contactRender() {


    let contactPage = document.createElement('div')
    contactPage.classList = 'contactPage'; //Requires changing of value when copy paste. Don't forget//
    contactPage.id = 'contactPage' //Requires changing of value when copy paste. Don't forget//

    //create DOM elements and append//

    let title = document.createElement('div');
        title.classList = 'title';
    let header = document.createElement('h1');
        header.innerText = "Fast Eddy's"
        header.classList = 'header'
        title.appendChild(header);
    let subHeader = document.createElement('h2');
        subHeader.innerText = 'Home of the Lard Shake & Grease Fries';
        subHeader.classList = 'subHeader'
        title.appendChild(subHeader);

    let copy = document.createElement('div');
        copy.classList = 'copy';
        let copyText = document.createElement('p');
            copyText.innerText = 'Call me - or don\'t but I do love you though!' 
            copyText.classList = 'copyText'
        copy.append(copyText);

    document.body.append(contactPage)  
    contactPage.appendChild(title);
    contactPage.appendChild(copy);
    

}