let $tabs = document.querySelectorAll('tab');
let $tab1 = document.querySelector('.nav__btn--1');
let $tab2 = document.querySelector('.nav__btn--2');
let $tab3 = document.querySelector('.nav__btn--3');
let $blocks = document.querySelectorAll('.block');
let $block1 = document.querySelector('.main__exercise--1');
let $block2 = document.querySelector('.main__exercise--2');
let $block3 = document.querySelector('.main__exercise--3');

$tab1.addEventListener('click', function(){
    $tab1.classList.add('active');
    $tab2.classList.remove('active');
    $tab3.classList.remove('active');
    $block1.classList.remove('hide');
    $block2.classList.add('hide');
    $block3.classList.add('hide');
});

$tab2.addEventListener('click', function(){
    $tab2.classList.add('active');
    $tab1.classList.remove('active');
    $tab3.classList.remove('active');
    $block2.classList.remove('hide');
    $block1.classList.add('hide');
    $block3.classList.add('hide');
 });

 $tab3.addEventListener('click', function(){
    $tab3.classList.add('active');
    $tab1.classList.remove('active');
    $tab2.classList.remove('active');
    $block3.classList.remove('hide');
    $block1.classList.add('hide');
    $block2.classList.add('hide');
 });
 