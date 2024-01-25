const menuBtn = document.querySelector('.menu__btn');
const menuClose = document.querySelector('.menu__close');
const menuList = document.querySelector('.menu__list');
const menuShadow = document.querySelector('.menu--close')

menuBtn.addEventListener('click',()=>{
    menuList.classList.toggle('menu__list--open')
    menuShadow.classList.toggle('menu--open')
});
menuClose.addEventListener('click',()=>{
    menuList.classList.remove('menu__list--open')
    menuShadow.classList.remove('menu--open')
});

$(function(){
    const $checkbox = $('.checkbox');
    const $checkBtn = $('.mailing-list__btn');
    const $checkInner = $('.checkbox__inner');

    $checkbox.on('change',function(){
        if($(this).is(':checked')){
            $checkBtn.prop('disabled',false);
        }else{
            $checkBtn.prop('disabled',true);
        }
    })
});


// $(function(){
//     $(window).on('load resize', function(){
//         let $width = $(window).width();
//         const $feedbackItem = $('.feedback__item');
        
//         if($width < 1200){
//             $feedbackItem.last().addClass('feedback__item--close');
//         }else{
//             $feedbackItem.last().removeClass('feedback__item--close')
//         }

//         if($width <= 860){
//             $feedbackItem.last().removeClass('feedback__item--close')
//         }

//         if($width <= 480){
//             $feedbackItem.slice(0,2).addClass('feedback__item--close');
//         }
//     });
// });