const tabs = document.querySelectorAll('.service-tab');
    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');

        const target = tab.getAttribute('data-target');
        document.querySelectorAll('.services-block').forEach(block => {
          if (block.id === target) block.style.display = '';
          else block.style.display = 'none';
        });
      });
    });

$(document).ready(function(){
  $('.services-slider').each(function(){
    var $slider = $(this);
    var slideCount = $slider.children().length;
    if(slideCount <= 1) return;

    if(typeof $slider.slick === "function") {
      $slider.slick({
        slidesToShow: Math.min(3, slideCount),
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        infinite: false,
        rtl: $('html').attr('dir') === 'rtl',
        responsive: [
          { breakpoint: 992, settings: { slidesToShow: Math.min(2, slideCount) } },
          { breakpoint: 576, settings: { slidesToShow: 1 } }
        ]
      });
    }
  });
});

