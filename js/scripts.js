/*!
* Start Bootstrap - Creative v7.0.6 (https://startbootstrap.com/theme/creative)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-creative/blob/master/LICENSE)
*/
//
// Scripts
// 
window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    // Activate SimpleLightbox plugin for portfolio items
    new SimpleLightbox({
        elements: '#portfolio a.portfolio-box'
    });

});

/*function emailSend(){
    alert('adsf');
    $('#submitButton').click(function() {
        $('#contactForm').attr('action',
                       'mailto:besthomeappliances95@gmail.com?subject=Customer'+ $('#name').val() + +'has been submitted details'+ '&body= Email: '  + $('#email').val()+'\n'+
                       'Phone: '+ $('#phone').val()+'\n'+'Address : '+ $('#address').val());
        $('#contactForm').submit();
    });
}*/

/*function sendEmail() {
    alert('cal');
    Email.send({
      Host: "smtp.gmail.com",
      Username: "besthomeappliances95@gmail.com",
      Password: "raj@41995",
      To: 'k.rajeev094154@gmail.com',
      From: "besthomeappliances95@gmail.com",
      Subject: "Testing",
      Body: "Well that was easy!!",
    })
      .then(function (message) {
        alert("mail sent successfully")
      });
      alert('sent');
  }*/
