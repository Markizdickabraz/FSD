$('a[href^="#"').on('click', function () {
  let href = $(this).attr('href');

  $('html, body').animate(
    {
      scrollTop: $(href).offset().top,
    },
    {
      duration: 350,
      easing: 'linear',
    }
  );
  return false;
});
