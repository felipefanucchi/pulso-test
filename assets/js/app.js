function init() {
  const DOMstrings = {
    slider: '.slider-js',
    sliderBtn: '.slider__buttons',
    sectionBg: '.section--background-js',
    header: '.header',
    headerWrapper: '.header__wrapper-js'
  };

  const breakpoints = {
    md: 992
  }

  const sectionBg = () => {
    const img = $(DOMstrings.sectionBg).data('image');

    $(DOMstrings.sectionBg).css('background-image', `url(${img})`);
  }

  const sticky = (e) => {
    const headerHeight = $(DOMstrings.headerWrapper).height();
    const scrollTop = $(window).scrollTop();

    console.log(scrollTop, headerHeight);
    
    if(scrollTop > headerHeight) {
      $(DOMstrings.header).addClass('header__sticky');
    } else {
      $(DOMstrings.header).removeClass('header__sticky');
    }
  }

  $(window).on('scroll', sticky);

  $(DOMstrings.slider).slick({
    infinite: true,
    appendArrows: $(DOMstrings.sliderBtn),
    responsive: [{
      breakpoint: breakpoints.md,
        settings: {
            infinite: true,
            dots: true,
            arrows: false
        }
    }]
  });

  sectionBg();
}

init();
