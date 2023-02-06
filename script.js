// select big images
let bigImages = document.querySelector('.bg-img');
let smallImages = document.querySelector('.sm-img');

let preBtn = document.querySelector('.prev');
let nxtBtn = document.querySelector('.next');

let imgArray = [
    "images/blog-1.jpg",
    "images/blog-2.jpg",
    "images/blog-3.jpg",
    "images/blog-1.jpg",
    "images/blog-2.jpg",
    "images/blog-3.jpg",
]


// preBtn.addEventListener('click', ()=>{
//     for (let i=0; i<imgArray.length; i--){
//         smallImages.src = imgArray[i]
//         bigImages.src = imgArray[i]
//     }

// });

let currentIndex = 0

preBtn.addEventListener('click', ()=>{
    for ( photos in imgArray){
        smallImages.src = imgArray[photos]
        bigImages.src = imgArray[photos]
        currentIndex =- 1;
    }

});

nxtBtn.addEventListener('click', ()=>{
    for ( photos in imgArray){
        smallImages.src = imgArray[photos]
        bigImages.src = imgArray[photos]
        currentIndex =+ 1
    }

});

// nxtBtn.addEventListener('click', ()=>{
//     for (let i=0; i<imgArray.length; i++){
//         smallImages.src = imgArray[i]
//         bigImages.src = imgArray[i]
//     }

// });





