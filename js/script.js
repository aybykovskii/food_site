"use strict";
document.addEventListener('DOMContentLoaded', () => {
    //Tabs
    const tabs = document.querySelectorAll('.tabheader__item'),
          tabsContent =document.querySelectorAll('.tabcontent'),
          tabsParent = document.querySelector('.tabheader__items');

    function hideTabContent() {
        tabsContent.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('show', 'fade');
        });

        tabs.forEach(item => {
            item.classList.remove('tabheader__item_active');
        });
    }

    function showTabContent (i = 0) {
        tabsContent[i].classList.add('show', 'fade');
        tabsContent[i].classList.remove('hide');
        tabs[i].classList.add('tabheader__item_active');
    }

    hideTabContent();
    showTabContent();

    tabsParent.addEventListener('click', (event) => {
        const target = event.target;

        if(target && target.classList.contains('tabheader__item')){
            tabs.forEach((item, i) => {
                if(target == item){
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });

    {
        //Calculating
     const people = document.querySelectorAll('.calculating__choose-item'),
          calculatingResult = document.querySelector('.calculating__result'),
          names = document.querySelectorAll('.order__input'),
          reCall = document.querySelectorAll('.btn_dark');
          console.log(reCall);
     console.log(people);
     const woman = people[0],
           man = people[1],
           height = people[2],
           weight = people[3],
           age = people[4],
           low = people[5],
           small = people[6],
           medium = people[7],
           high = people[8];
     const name = names[0],
           phoneNumber = names[1],
           recallBtn = reCall[1];
           

     woman.addEventListener('click',(event) => {
         man.classList.remove('calculating__choose-item_active');
         woman.classList.add('calculating__choose-item_active');
         calculating();
     })
    man.addEventListener('click',(event) => {
        woman.classList.remove('calculating__choose-item_active');
        man.classList.add('calculating__choose-item_active');
        calculating();
    })
    height.addEventListener('click', ()=>{
        height.addEventListener('mouseout', () =>{
            console.log(height.value);
            calculating();
        })
    })
    weight.addEventListener('click', ()=>{
        weight.addEventListener('mouseout', () =>{
            console.log(weight.value);
            calculating();
        })
    })
    age.addEventListener('click', ()=>{
        age.addEventListener('mouseout', () =>{
            console.log(age.value);
            calculating();
        })
    })

    function chooseItemActive(remove1, remove2, remove3, add1){
        remove1.classList.remove('calculating__choose-item_active');
        remove2.classList.remove('calculating__choose-item_active');
        remove3.classList.remove('calculating__choose-item_active');
        add1.classList.add('calculating__choose-item_active');
    }
    low.addEventListener('click',() => {
        chooseItemActive(small, medium, high, low);
        calculating();
    })
    small.addEventListener('click',() => {
        chooseItemActive(low, medium, high, small);
        calculating();
    })
    medium.addEventListener('click',() => {
        chooseItemActive(low, small, high, medium);
        calculating();
    })
    high.addEventListener('click',() => {
        chooseItemActive(low, small, medium, high);
        calculating();
    })

    let calculating = function(){
    let kkal;
    if(woman.classList.contains('calculating__choose-item_active')){
        kkal = Math.round(447.6 + (9.2 * weight.value) + (3.1 *height.value) - (4.3 *age.value));
    } else {
        kkal = Math.round(88.36 + (13.4 *weight.value) + (4.8 *height.value) - (5.7 * age.value));
    }
    if(low.classList.contains('calculating__choose-item_active')){
        kkal = Math.round(kkal* 1.2);
    } else if(small.classList.contains('calculating__choose-item_active')){
        kkal = Math.round(kkal * 1.375);
    } else if(medium.classList.contains('calculating__choose-item_active')){
        kkal = Math.round(kkal * 1.55);
    } else {
        kkal  = Math.round(kkal * 1.725);
    }
    calculatingResult.textContent = `${kkal} ккал`;
}

    //Recall
    recallBtn.addEventListener('click', (e) => {
        e.preventDefault();
        if(name.value && phoneNumber.value){
            console.log(name.value, phoneNumber.value);
        }
    })
    }

    document.addEventListener('keydown', (e) => {
        if(e.code === "Enter" && name.value && phoneNumber.value){
            console.log(name.value, phoneNumber.value);
        }
    })
    //Timer

    const deadline = new Date('2020-06-02');

    function getTimeRemaining(endtime){
        let t = Date.parse(endtime) - Date.parse(new Date()),
        days = Math.floor(t/(1000 * 60 * 60 * 24)),
        hours = Math.floor((t/(1000 * 60 * 60)) % 24),
        minutes = Math.floor((t/(1000 * 60)) % 60),
        seconds = Math.floor((t/1000) % 60);

        return {
            'total' : t,
            'days' : days,
            'hours' : hours,
            'minutes' : minutes,
            'seconds' : seconds
        };
    }

    function setClock(selector, endtime){
        const timer = document.querySelector(selector),
              days = timer.querySelector('#days'),
              hours = timer.querySelector('#hours'),
              minutes = timer.querySelector('#minutes'),
              seconds = timer.querySelector('#seconds'),
              timeInterval = setInterval(updateClock, 1000);
        
        updateClock();

        function getZero(num){
            if(num >= 0 && num < 10){
                return `0${num}`;
            } else return num;
        }
        function updateClock() {
            const t = getTimeRemaining(endtime);

            days.textContent = getZero(t.days);
            hours.textContent = getZero(t.hours);
            minutes.textContent = getZero(t.minutes);
            seconds.textContent = getZero(t.seconds);

            if(t.total <= 0){
                clearInterval(timeInterval);
            }
        }
    }
    setClock(".timer", deadline);
    const timerEndTime = document.querySelector('.deadline');
    timerEndTime.textContent = `Акция закончится ${deadline.getDate()} июня ${deadline.getFullYear()} года в ${deadline.getHours()} часов 00 минут`;


    const slides = document.querySelectorAll('.offer__slide'),
          offerSliderCounter = document.querySelector('.offer__slider-counter'),
          total = offerSliderCounter.querySelector('#total'),
          current = offerSliderCounter.querySelector('#current'),
          prevBtn = offerSliderCounter.querySelector('.offer__slider-prev'),
          netxBtn = offerSliderCounter.querySelector('.offer__slider-next');
    console.log(slides);
    slides.forEach((item, i) => {
        if(i!= 3){
            item.classList.add('hide');
        } else {
            current.textContent = '0' + (1+i);
        }
    })
    prevBtn.addEventListener('click', () => {
        let numI;
        slides.forEach((e, i) => {
            if(!e.classList.contains('hide')){
                numI = i;
            }
        })
        if(numI > 0){
            slides[numI].classList.add('hide');
            numI--;
            slides[numI].classList.remove('hide');
            current.textContent = `0${numI + 1}`;
        }
    })

    netxBtn.addEventListener('click', () => {
        let numI;
        slides.forEach((e, i) => {
            if(!e.classList.contains('hide')){
                numI = i;
            }
        })
        console.log(numI);
        if(numI < 3){
            slides[numI].classList.add('hide');
            numI++;
            slides[numI].classList.remove('hide');
            current.textContent = `0${numI + 1}`;
        }
    })

    const pepperBtn = document.querySelector('.pepper');
    pepperBtn.addEventListener('click', () => {
        window.scrollTo(0, 0);
    })

    const modalTrigger = document.querySelectorAll('[data-modal]'),
          modalClose = document.querySelector('[data-close]'),
          modal = document.querySelector('.modal'),
          submitBtn = modal.querySelector('button'),
          modalInput = modal.querySelectorAll('.modal__input');

    function openModal() {
        modal.classList.add('show');
        document.body.style.overflow = 'hidden';
        clearInterval(modatTimerId);
    }
    modalTrigger.forEach((item) =>{
        item.addEventListener('click', openModal);
    })
    const modatTimerId = setInterval(openModal, 15000);

    submitBtn.addEventListener('click', (e) => {
        e.preventDefault();
        modalInput.forEach(e => {
            console.log(e.value);
        })
    })
    function closeModal () {
        modal.classList.remove('show');
        document.body.style.overflow = '';
    }
    modalClose.addEventListener('click', (e) => {
        e.preventDefault();
        closeModal();
    })

    modal.addEventListener('click', e => {
        if(e.target === modal){
            closeModal();
        }
    })

    document.addEventListener('keydown', (e) => {
        if(e.code === "Escape" && modal.classList.contains('show')){
            closeModal();
        }
    })

    function openModalByScroll () {
        if(window.pageYOffset + document.documentElement.clientHeight >= document.
            documentElement.scrollHeight){
            openModal();
            window.removeEventListener('scroll', openModalByScroll);
        }
    }
    window.addEventListener('scroll', openModalByScroll);

});