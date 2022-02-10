const items = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg'
];

const title = [
    'Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Paradise'
]

const text = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
]

// CREO LA VARIABILE COLLEGATA ALLO SLIDER-WRAPPER DELL'HTML
const sliderWrapper = document.querySelector('.ms__slider_wrapper');
console.log(sliderWrapper);

// CREO IL CONTENITORE DENTRO LO SLIDER-WRAPPER
const slider = document.createElement('div');
console.log(slider);

// ASSEGNO LA CLASSE "SLIDER" AL CONTENITORE CREATO IN PRECEDENZA, CON LE MIE REGOLE CSS GIÀ APPLICATE
sliderWrapper.append(slider);
slider.classList.add('slider');

// CREO IL TAG IMMAGINE DENTRO IL CONTENITORE "SLIDER"
const sliderImage = document.createElement('img');
console.log(sliderImage);

// ASSEGNO L'IMMAGINE AL TAG IMG
slider.append(sliderImage);
sliderImage.src = items[1];






// CREO IL CICLO PER ASSEGNARE LE IMMAGINI DELL'ARREY ALLO "SLIDER"
// for (let i = 0; i < items.length; i++) {
//     console.log(items[i]);
// }