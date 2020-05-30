"use strict";
document.addEventListener('DOMContentLoaded', () => {

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
    low.addEventListener('click',(event) => {
        small.classList.remove('calculating__choose-item_active');
        medium.classList.remove('calculating__choose-item_active');
        high.classList.remove('calculating__choose-item_active');
        low.classList.add('calculating__choose-item_active');
        calculating();
    })
    small.addEventListener('click',(event) => {
        low.classList.remove('calculating__choose-item_active');
        medium.classList.remove('calculating__choose-item_active');
        high.classList.remove('calculating__choose-item_active');
        small.classList.add('calculating__choose-item_active');
        calculating();
    })
    medium.addEventListener('click',(event) => {
        small.classList.remove('calculating__choose-item_active');
        low.classList.remove('calculating__choose-item_active');
        high.classList.remove('calculating__choose-item_active');
        medium.classList.add('calculating__choose-item_active');
        calculating();
    })
    high.addEventListener('click',(event) => {
        small.classList.remove('calculating__choose-item_active');
        medium.classList.remove('calculating__choose-item_active');
        low.classList.remove('calculating__choose-item_active');
        high.classList.add('calculating__choose-item_active');
        calculating();
    })
//     Формула для мужчин:
// BMR = 88,36 + (13,4 × вес в кг) + (4,8 × рост в см) – (5,7 × возраст в годах).

// Формула для женщин:
// BMR = 447,6 + (9,2 × вес в кг) + (3,1 × рост в см) – (4,3 × возраст в годах).
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

    recallBtn.addEventListener('click', (e) => {
        e.preventDefault();
        if(name.value && phoneNumber.value){
            alert(`Привет, ${name.value}`);
            alert(`Твой номер телефона: ${phoneNumber.value}`);
        }
    })
});