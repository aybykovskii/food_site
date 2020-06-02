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
          calculatingResult = document.querySelector('.calculating__result');
     const woman = people[0],
           man = people[1],
           height = people[2],
           weight = people[3],
           age = people[4],
           low = people[5],
           small = people[6],
           medium = people[7],
           high = people[8];
           

     woman.addEventListener('click',(event) => {
         man.classList.remove('calculating__choose-item_active');
         woman.classList.add('calculating__choose-item_active');
         calculating();
     });
    man.addEventListener('click',(event) => {
        woman.classList.remove('calculating__choose-item_active');
        man.classList.add('calculating__choose-item_active');
        calculating();
    });
    height.addEventListener('click', ()=>{
        height.addEventListener('mouseout', () =>{
            console.log(height.value);
            calculating();
        });
    });
    weight.addEventListener('click', ()=>{
        weight.addEventListener('mouseout', () =>{
            console.log(weight.value);
            calculating();
        });
    });
    age.addEventListener('click', ()=>{
        age.addEventListener('mouseout', () =>{
            console.log(age.value);
            calculating();
        });
    });

    function chooseItemActive(remove1, remove2, remove3, add1){
        remove1.classList.remove('calculating__choose-item_active');
        remove2.classList.remove('calculating__choose-item_active');
        remove3.classList.remove('calculating__choose-item_active');
        add1.classList.add('calculating__choose-item_active');
    }
    low.addEventListener('click',() => {
        chooseItemActive(small, medium, high, low);
        calculating();
    });
    small.addEventListener('click',() => {
        chooseItemActive(low, medium, high, small);
        calculating();
    });
    medium.addEventListener('click',() => {
        chooseItemActive(low, small, high, medium);
        calculating();
    });
    high.addEventListener('click',() => {
        chooseItemActive(low, small, medium, high);
        calculating();
    });

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
    };
    }


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

    //slider
    const slides = document.querySelectorAll('.offer__slide'),
          offerSliderCounter = document.querySelector('.offer__slider-counter'),
          total = offerSliderCounter.querySelector('#total'),
          current = offerSliderCounter.querySelector('#current'),
          prevBtn = offerSliderCounter.querySelector('.offer__slider-prev'),
          netxBtn = offerSliderCounter.querySelector('.offer__slider-next');
    slides.forEach((item, i) => {
        if(i!= 3){
            item.classList.add('hide');
        } else {
            current.textContent = '0' + (1+i);
        }
    });
    prevBtn.addEventListener('click', () => {
        let numI;
        slides.forEach((e, i) => {
            if(!e.classList.contains('hide')){
                numI = i;
            }
        });
        if(numI > 0){
            slides[numI].classList.add('hide');
            numI--;
            slides[numI].classList.remove('hide');
            current.textContent = `0${numI + 1}`;
        }
    });

    netxBtn.addEventListener('click', () => {
        let numI;
        slides.forEach((e, i) => {
            if(!e.classList.contains('hide')){
                numI = i;
            }
        });
        if(numI < 3){
            slides[numI].classList.add('hide');
            numI++;
            slides[numI].classList.remove('hide');
            current.textContent = `0${numI + 1}`;
        }
    });

    const pepperBtn = document.querySelector('.pepper');
    pepperBtn.addEventListener('click', () => {
        window.scrollTo(0, 0);
    });

    const modalTrigger = document.querySelectorAll('[data-modal]'),
          modal = document.querySelector('.modal');

    function openModal() {
        modal.classList.add('show');
        document.body.style.overflow = 'hidden';
        clearInterval(modatTimerId);
    }
    modalTrigger.forEach((item) =>{
        item.addEventListener('click', openModal);
    });
    const modatTimerId = setInterval(openModal, 15000);
    function closeModal () {
        modal.classList.remove('show');
        document.body.style.overflow = '';
    }


    modal.addEventListener('click', e => {
        if(e.target === modal || e.target.getAttribute('data-close') == ''){
            closeModal();
        }
    });

    document.addEventListener('keydown', (e) => {
        if(e.code === "Escape" && modal.classList.contains('show')){
            closeModal();
        }
    });

    function openModalByScroll () {
        if(window.pageYOffset + document.documentElement.clientHeight >= document.
            documentElement.scrollHeight){
            openModal();
            window.removeEventListener('scroll', openModalByScroll);
        }
    }
    window.addEventListener('scroll', openModalByScroll);


    const container = document.querySelector('.menu__field'),
          menuCards = container.querySelector('.container');

    console.log(menuCards);
    class MenuItem {
        constructor(src, alt, title, descr, totalCoast, parentSelector, ...classes){
            this.src = src;
            this.alt = alt;
            this.title = title;
            this.descr = descr;
            this.totalCoast = totalCoast;
            this.classes = classes;
            this.transfer = 27;
            this.changeToUAH();
            this.parent = parentSelector;
        }
        changeToUAH(){
            this.totalCoast *= this.transfer;
        }
        render(){
            const element = document.createElement('div');
            if(this.classes.length === 0){
                this.element = 'menu__item';
                element.classList.add(this.element);
            }else {
                this.classes.forEach(className => element.classList.add(className));
            }
            element.innerHTML = `
                <img src=${this.src} alt=${this.alt}>
                <h3 class="menu__item-subtitle">${this.title}</h3>
                <div class="menu__item-descr">${this.descr}</div>
                <div class="menu__item-divider"></div>
                <div class="menu__item-price">
                    <div class="menu__item-cost">Цена:</div>
                    <div class="menu__item-total"><span>${this.totalCoast}</span> грн/день</div>
                </div>
            `;
            this.parent.append(element);
        }
    }
    
    new MenuItem(
        "img/tabs/vegy.jpg",
        "vegy",
        'Меню "Фитнес"',
        'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
        50,
        menuCards
    ).render();

    new MenuItem(
        "img/tabs/elite.jpg",
        "elite",
        'Меню “Премиум”',
        'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',
        70,
        menuCards
    ).render();

    new MenuItem(
        "img/tabs/post.jpg",
        "post",
        'Меню "Постное"',
        'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.',
        30,
        menuCards
    ).render();

    const sidePanel = document.querySelector('.sidepanel'),
          instBtn = sidePanel.querySelector('a');

    instBtn.addEventListener('click', ()=> {
        document.location.href = "https://www.instagram.com/vvcigy/";
    });

    const footerInsBtn = document.querySelector('.footer .container .social a');

    footerInsBtn.addEventListener('click', () => {
        document.location.href = "https://www.instagram.com/vvcigy/";
    });

    //Forms
    const forms = document.querySelectorAll('form');
    const message = {
        loading: 'img/form/spinner.svg',
        success: 'Спасибо! Скоро мы с вами свяжемся!',
        fail: 'Что то пошло не так'
    };

    forms.forEach(item => {
        postData(item);
    });

    function postData (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const statusMessage = document.createElement('img');
            statusMessage.src = message.loading;
            statusMessage.style.cssText = `
                display: block;
                margin: 0 auto;
            `;
            form.insertAdjacentElement('afterend', statusMessage);

            // request.setRequestHeader('Content-type', 'application/json');
            const formData = new FormData(form);

            const object = {};
            formData.forEach(function(value, key){
                object[key] = value;
            });

            

            fetch('server.php', {
                method: "POST", 
                headers: {
                    'Content-type' : 'application/json'
                },
                body: JSON.stringify(object)

            })
            .then(data=> data.text())
            .then(data => {
                console.log(data);
                thanksModalShow(message.success);
                
                statusMessage.remove();
            }).catch(()=> {
                thanksModalShow(message.fail);
            }).finally(()=> {
                form.reset();
            });
        });
    }

    function thanksModalShow(message) {
        const prevModalDialog = document.querySelector('.modal__dialog');

        prevModalDialog.classList.add('hide');
        openModal();

        const thanksModal = document.createElement('div');
        thanksModal.classList.add('modal__dialog');
        thanksModal.innerHTML = `
            <div class="modal__content">
                <div class="modal__close" data-close>×</div>
                <div class="modal__title">${message}</div>
            </div>
        `;

        document.querySelector('.modal').append(thanksModal);
        setTimeout(()=>{
            thanksModal.remove();
            prevModalDialog.classList.remove('hide');
            prevModalDialog.classList.add('show');
            closeModal();
        }, 4000);
    }

    fetch('http://localhost:3000/menu')
        .then(data => data.json())
        .then(data => console.log(data));
});