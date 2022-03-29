import './contact.css'

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
           
            let banner = document.createElement('li');
                banner.classList = 'banner';
                copy.append(banner);
            let copyText = document.createElement('p');
                copyText.innerText = 'Contact:' 
                copyText.classList = 'copyTextHeading'
                banner.append(copyText);
             let copyText2 = document.createElement('ol');
                copyText2.innerText = 'Phone: 813-999-5050' 
                copyText2.classList = 'copyText'
                banner.append(copyText2);
             let copyText3 = document.createElement('p');
                copyText3.innerText = 'Email: TheFastEd@hotmail.com' 
                copyText3.classList = 'copyText'
                banner.append(copyText3);
             let copyText4 = document.createElement('p');
                copyText4.innerText = '400 N Ashley Dr, Tampa, FL 33602' 
                copyText4.classList = 'copyText'
                banner.append(copyText4);

            let map = document.createElement('iframe')
                map.classList = 'map'
                map.setAttribute('src', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3524.5234984779245!2d-82.46273038493261!3d27.947249582693264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c2c48937f845fb%3A0x641aecc331130a31!2sRivergate%20Tower!5e0!3m2!1sen!2sus!4v1648594685380!5m2!1sen!2sus')
                copy.append(map);

    document.body.append(contactPage)  
    contactPage.appendChild(title);
    contactPage.appendChild(copy);
    

}