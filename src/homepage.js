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
        subHeader.innerText = 'Home of the Lard Shake & Grease Fries';
        subHeader.classList = 'subHeader'
        title.appendChild(subHeader);


//Items below title
        
    let copy = document.createElement('div');
    copy.classList = 'copy';
       
        let banner = document.createElement('li');
            banner.classList = 'banner';
            copy.append(banner);
        let copyText = document.createElement('p');
            copyText.innerText = 'Top Customer Reviews:' 
            copyText.classList = 'copyTextHeading'
            banner.append(copyText);
         let copyText2 = document.createElement('ol');
            copyText2.innerText = '"Worse than CiCi\'s"' 
            copyText2.classList = 'copyText'
            banner.append(copyText2);
         let copyText3 = document.createElement('p');
            copyText3.innerText = '"Too fast for your own good"' 
            copyText3.classList = 'copyText'
            banner.append(copyText3);
         let copyText4 = document.createElement('p');
            copyText4.innerText = '"I\'ll still keep eating this garbage"' 
            copyText4.classList = 'copyText'
            banner.append(copyText4);

        let photoDiv = document.createElement('div');
            photoDiv.classList = "photoDiv"
            copy.append(photoDiv)    
        let visitUs = document.createElement('img');
            visitUs.setAttribute('src', 'https://images.squarespace-cdn.com/content/v1/5c8eb730d86cc97933ba3164/1556827374126-L5W7IA9HVGY1SGR3IHXV/my-house-is-falling-apart-and-i-cant-afford-to-fix-it.jpg')   
            visitUs.classList = 'slopBurgerImg'
            photoDiv.append(visitUs);
        let imgText = document.createElement('p');
            imgText.innerText = 'The ORIGINAL Fast Eddy\'s Est. 1972';
            imgText.classList = 'imgText';
            photoDiv.append(imgText);


        let banner2 = document.createElement('div');
            banner2.classList = 'banner2';
        let bannerText = document.createElement('p');
            bannerText.innerText = 'Stop on by! Give us a chance! Please...' 
            bannerText.classList = 'bannerText'
            banner2.append(bannerText);

/*
let footer = document.createElement('div');
    footer.classList = 'footer';
    let footerText = document.createElement('div')
        footerText.classList = 'footerText';
        footerText.innerText = 'Created by CowboyAragorn 3/22'
        footer.append(footerText)
*/
        
    document.body.append(homepage)  
    homepage.appendChild(title);
    homepage.appendChild(copy);
    homepage.append(banner2);
    //document.body.append(footer)
    

}

