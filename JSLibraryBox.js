let book = [{href: 'https://timseverien.com/passy/',  id: '1531346423', description: 'Passy | A jQuery plugin for passwords'},
{href: 'https://lumin.rocks/', id: '1529073204', description: 'LuminJS'},
{href: 'https://pushjs.org/#', id: '1533485681', description: 'Push v1.0 | Javascript Notification Framework'},
{href: 'http://amsul.ca/pickadate.js/', id: '1535035438', description: 'pickadate.js'},
{href: 'http://telmo.pt/animate-plus-js/', id: '1538314072', description: 'Animate-plus.js'},
{href: 'https://github.com/Paul-Browne/lazyestload.js',  id: '1538314198', description: 'lazyestload.js — загрузка изображений только при их попадании в видимую область'},
{href: 'https://yugasun.github.io/x-chart/#/',  id: '1540229236', description: 'x-chart'},
{href: 'https://css-tricks.com/moving-backgrounds-with-mouse-position/',  id: '1540332324', description: 'Moving Backgrounds With Mouse Position | CSS-Tricks'},
{href: 'https://hello-magenta.glitch.me/',  id: '1543308583', description: 'Making music with magenta.js'},
{href: 'https://apexcharts.com/',  id: '1544024331', description: 'ApexCharts.js – Open-Source HTML5 JavaScript Charts'},
{href: 'https://www.slatejs.org/#/rich-text',  id: '1545506585', description: 'Slate'},
{href: 'https://github.com/tehnokv/picojs',  id: '1545678669', description: 'face-detection'},
{href: 'https://scroll-out.github.io/guide.html#scroll-targets',  id: '1546170121', description: 'Guide | ScrollOut'},
{href: 'https://github.com/nextapps-de/flexsearch',  id: '1549561208', description: 'Библиотека полнотекстового поиска по тексту в браузерах и Node.js'},
{href: 'https://chriscavs.github.io/rallax-demo/',  id: '1550410646', description: 'параллакс эффект заднего фона'},
{href: 'https://tympanus.net/Development/TextDistortionEffects/index2.html',  id: '1550491475', description: 'Text Distortion Effects'},
{href: 'https://www.dropzonejs.com/',  id: '1551991539', description: 'превращает любой HTML элемент в зону drag&drop для загрузки файлов.'},
{href: 'https://raw.githack.com/nextapps-de/flexsearch/master/demo/autocomplete.html',  id: '1552577997', description: 'FlexSearch - библиотека, которая предоставляет возможность поиска по тексту'},
{href: 'http://idangero.us/swiper/demos/',  id: '1553081688', description: 'Swiper Demos'},
{href: 'https://micromodal.now.sh/',  id: '1554314035', description: 'Micromodal.js'},
{href: 'http://autonumeric.org/examples',  id: '1554390433', description: 'AutoNumeric.js'},
{href: 'https://kingsora.github.io/OverlayScrollbars/#!overview',  id: '1560185298', description: 'Spotlight.js Demoli_sophie17'},
{href: 'https://howlerjs.com/', id: '2', description: 'audio player libr'}];

let bookmrkData = [];

/* filling array2 sorted data */
for(let i of book){
    delete i.id;
    bookmrkData.push(i);
}



/* separately out url */
for(let i = 0; i < bookmrkData.length; i++){

    //create elements
    let divHref = document.createElement('div');
    //add class for elements
    divHref.className = 'hrefBkmrk';
    divHref.title = 'OPEN';


    //action on open url
    divHref.onclick = function() {window.open(bookmrkData[i].href)};

    //change block text
    //divHref.innerHTML = 'OPEN';
    document.getElementById('divHref').appendChild(divHref);
}


/* separately out url description*/
for(let i = 0; i < bookmrkData.length; i++){

    //create elements
    let divDescription = document.createElement('div');

    //add class for elements
    divDescription.className = 'descriptionBkmrk';

    //change block text
    divDescription.innerText = bookmrkData[i].description;

    document.getElementById('divDescription').appendChild(divDescription);

}


/* hide/show block */
document.getElementById('btnHiSw').onclick = function () {

    let header = document.querySelector('header');

    if(header.style.display == 'none'){
        header.style.display = 'flex';
    } else header.style.display = 'none';
}



// Add NEW URL
function addNewUrl() {
    let newUrl = document.getElementById('inputUrl').value;
    let newDescription = document.getElementById('inputDescription').value;

    let arrUD = [newUrl, newDescription];

    let newObj = {
        href: newUrl,
        description: newDescription
    }

    for(let n in newObj){
        bookmrkData.push(newObj)
    }

    console.log(bookmrkData);


    /*
    let arrUD = [newUrl, newDescription];
    let indx = 0;

    localStorage.setItem((indx+1), JSON.stringify(arrUD));    
    let arrToLocS = localStorage.getItem('arr');
    arrToLocS = JSON.parse(arrToLocS);

    console.log(arrToLocS);

    //bookmrkData.push({href: `${arrToLocS[0]}`, description: `${arrToLocS[1]}`});

*/
}

addNewUrl();