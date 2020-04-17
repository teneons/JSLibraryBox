let book = [
{href: 'https://timseverien.com/passy/',  id: '0', description: 'Passy - jQuery plugin for checks passwords'},
{href: 'https://lumin.rocks/', id: '1', description: 'LuminJS - highlight in color background text'},
{href: 'https://pushjs.org/#', id: '2', description: 'Push v1.0 - desktop notifications'},
{href: 'http://amsul.ca/pickadate.js/', id: '3', description: 'Зickadate.js -  date and time pickers'},
{href: 'http://telmo.pt/animate-plus-js/', id: '4', description: 'Animate-plus.js - js animation'},    
{href: 'https://apexcharts.com/',  id: '9', description: 'ApexCharts.js – charts'},
{href: 'https://www.slatejs.org/#/rich-text',  id: '10', description: 'Slate - text editor'},
{href: 'https://github.com/tehnokv/picojs',  id: '11', description: 'Picojs - face-detection'},
{href: 'http://idangero.us/swiper/demos/',  id: '18', description: 'Swiper Demos - swipe sliders'},
{href: 'https://micromodal.now.sh/',  id: '19', description: 'Micromodal.js - modal window'},
{href: 'https://kingsora.github.io/OverlayScrollbars/#!overview',  id: '21', description: 'Spotlight.js - custom scroll'},
{href: 'https://howlerjs.com/', id: '22', description: 'Howlerjs - audio player libr'},
{href: 'http://maxwellito.github.io/vivus/', id: '23', description: 'Vivus - svg amimation'},
{href: 'https://animejs.com/', id: '24', description: 'Animejs - pro animation'},
{href: 'https://github.com/daneden/animate.css', id: '25', description: 'Animate - css anim'},
{href: 'https://github.com/mrdoob/three.js', id: '26', description: 'Three.js - 3D JS'},
{href: 'https://picturepan2.github.io/spectre/', id: '27', description: 'Spectre - CSS framework'}
];

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