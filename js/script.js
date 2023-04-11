
$(document).ready(function () {
   $('.your-class').slick({
      prevArrow: '<button type="button" class="slick-prev"></button>',
      nextArrow: '<button type="button" class="slick-next"></button>'
   });

   $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab-active)', function () {
      $(this)
         .addClass('catalog__tab-active').siblings().removeClass('catalog__tab-active')
         .closest('div.container').find('div.cards').removeClass('cards-active').eq($(this).index()).addClass('cards-active');
   });

   function toggleClass(item) {
      $(item).each(function (i) {
         $(this).on('click', function (e) {
            e.preventDefault();
            $('.cards__row-a').eq(i).toggleClass('cards__row-a-active');
            $('.cards__row-list').eq(i).toggleClass('cards__row-list-active');
         });
      });
   }

   toggleClass('.cards__link');
   toggleClass('.cards__row-list-a');

   //modal

   $('.header [data-modal="button"]').on('click', function () {
      $('.overlay, #application').fadeIn('slow');
   });
   $('.modal__back').on('click', function () {
      $('.overlay, #application').fadeOut('slow');
   });


   $('.catalog .button-cards').each(function (i) {
      $(this).on('click', function () {
         $('.modal .modal__subtitle').text($('.cards__title').eq(i).text());
         $('.overlay, #order').fadeIn('slow');
      });
   });

   function formValidate(form_class) {
      $(form_class).validate({
         rules: {
            name: {
               required: true,
               minlength: 2
            },
            phone: {
               required: true,
               minlength: 4
            },
            email: {
               required: true,

               email: true
            }
         },
         messages: {
            name: {
               required: "Потрібно обов'язково заповнити ім'я",
               minlength: jQuery.validator.format("Введите {0} символа!")
            },
            phone: {
               required: "Потрібно обов'язково заповнити телефон",
               minlength: jQuery.validator.format("Введите {0} символа!")
            },
            email: {
               required: "Потрібно обов'язково заповнити пошту",
               email: "Введіть електронну пошту!"
            }
         }
      });
   }

   formValidate('.cons .forms');
   formValidate('#application .forms');
   formValidate('#order .forms');
   
   $("input[name=phone]").mask("+38 (***)***-**-**");
});





