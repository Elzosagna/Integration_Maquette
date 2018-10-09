$(document).ready(function()
{ var width = 700;
  var vitesse = 1000;
  var arret = 3000;
  var slide = 1;
  //
  var $slider = $('#slider');
  var $slideConteneur = $slider.find('.slides');
  var $slides = $slideConteneur.find('.slide');
  var interval;
  function marche()
  {
    interval = setInterval(function()
    {
      $slideConteneur.animate({'margin-left': '-='+width},vitesse,function()
      {
        slide++;
        if(slide === $slider.length)
        {
          slide = 1;
          $slideConteneur.css('margin-left',0);
        }
      });
    },arret);
  }
  function stop()
  {
    clearInterval(interval);
  }
  $slider.on('mouseenter',stop).on('mouseleave',marche);
  marche();
});
