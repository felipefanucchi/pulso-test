{
  const DOMstrings = {
    slider: '.slider-js',
    sliderBtn: '.slider__buttons'
  };

  $(DOMstrings.slider).slick({
    infinite: true,
    appendArrows: $(DOMstrings.sliderBtn),
    responsive: [{
        breakpoint: 992,
        settings: {
            infinite: true,
            dots: true,
            arrows: false
        }
    }]
  });
}
