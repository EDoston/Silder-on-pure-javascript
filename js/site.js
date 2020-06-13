const buttonNext = document.querySelector('.ButtonNext');
const buttonPrev = document.querySelector('.ButtonPrev');
const track = document.querySelector('.track');
const itemWidth = window.innerWidth;
const items = document.querySelectorAll('.item');
const itemsCount = items.length;
let position = 0;
let slidersToScroll =1;

items.forEach((item)=>{
    item.style.minWidth = '100%'
});

buttonNext.addEventListener('click', ()=>{  
    const itemsLeft = itemsCount - (Math.abs(position) + itemWidth) / itemWidth;

    position -= itemsLeft >= slidersToScroll ?  itemWidth : itemsLeft * itemWidth;
    setPostion();
    checkBtn()
});

buttonPrev.addEventListener('click', ()=>{  
    const itemsLeft = Math.abs(position) / itemWidth;

    position += itemsLeft >= slidersToScroll ?  itemWidth : itemsLeft * itemWidth;
    setPostion();
    checkBtn()
});

function setPostion(){
    track.style.transform = `translateX(${position}px)`;
}

function checkBtn() {
    buttonPrev.disabled = position === 0;
    buttonNext.disabled = position <= -(itemsCount - 1) * itemWidth;   
}

checkBtn();