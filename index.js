
$(document).ready(function() {
  $('.logo-carousel').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
    dots: false,
    pauseOnHover: false,
    responsive: [{
      breakpoint: 768,
      settings: {
        slidesToShow: 4
      }
    }, {
      breakpoint: 520,
      settings: {
        slidesToShow: 2
      }
    }]
  });
});


  $(".blog_slider_area").owlCarousel({
    autoplay: true,
    slideSpeed:300,
    items : 3,
    loop: true,
    nav:false,
    margin: 30,
    dots: true,
    responsive:{
        320:{items:1},
        768:{items:2},
        991:{items:2},
        1200:{items:3}
    }
    
});

$(function () {
  var code = "+91"; // Assigning value from model.
  $('#txtPhone').val(code);
  $('#txtPhone').intlTelInput({
      autoHideDialCode: true,
      autoPlaceholder: "ON",
      dropdownContainer: document.body,
      formatOnDisplay: true,
      hiddenInput: "full_number",
      initialCountry: "auto",
      nationalMode: true,
      placeholderNumberType: "MOBILE",
      preferredCountries: ['US'],
      separateDialCode: true
  });
  $('#btnSubmit').on('click', function () {
      var code = $("#txtPhone").intlTelInput("getSelectedCountryData").dialCode;
      var phoneNumber = $('#txtPhone').val();
      var name = $("#txtPhone").intlTelInput("getSelectedCountryData").name;
      alert('Country Code : ' + code + '\nPhone Number : ' + phoneNumber + '\nCountry Name : ' + name);
  });
});