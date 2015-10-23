$(document).ready(function(){

////////////////////TEMPLATES/////////////////////////////////


var galleryTemp = _.template($('#galTemp').html());
window.galHTML ="";

var titleTemp = _.template($('#titleTemp').html());
window.titleHTML ="";

var photoTemp = _.template($('#picTemp').html());
window.photoHTML ="";

_.each(oneOfEach, function(curItem) {
  photoHTML += photoTemp(curItem);
});

$('.albumSpace').html(photoHTML);

/////////////////////Gallery Page //////////////////////////////

$('body').on('click','.buildings', function(event){
  event.preventDefault();
    $('.galleryDisplay').addClass('activate');
    $('.albumDisplay').removeClass('activate');
    titleHTML ="";

    titleHTML +=titleTemp(albumOne[0]);
    $('.photoDisplayCase').html(titleHTML);


      galHTML ="";
    _.each(albumOne, function(curItem) {
      galHTML += galleryTemp(curItem);
    });

    $('.photoDisplayCase').append(galHTML);
});

$('body').on('click','.flowers', function(event){
    event.preventDefault();
      $('.galleryDisplay').addClass('activate');
      $('.albumDisplay').removeClass('activate');
      titleHTML ="";

      titleHTML +=titleTemp(albumTwo[0]);
      $('.photoDisplayCase').html(titleHTML);


      galHTML ="";
    _.each(albumTwo, function(curItem) {
      galHTML += galleryTemp(curItem);
    });

    $('.photoDisplayCase').append(galHTML);
});

$('body').on('click','.gameNight', function(event){
  event.preventDefault();
    $('.galleryDisplay').addClass('activate');
    $('.albumDisplay').removeClass('activate');
    titleHTML ="";

    titleHTML +=titleTemp(albumThree[0]);
    $('.photoDisplayCase').html(titleHTML);

    galHTML ="";
  _.each(albumThree, function(curItem) {
    galHTML += galleryTemp(curItem);
  });

  $('.photoDisplayCase').append(galHTML);
});


$('body').on('click','.League', function(event){
  event.preventDefault();
    $('.galleryDisplay').addClass('activate');
    $('.albumDisplay').removeClass('activate');
    titleHTML ="";

    titleHTML +=titleTemp(albumFour[0]);
    $('.photoDisplayCase').html(titleHTML);


    galHTML ="";
  _.each(albumFour, function(curItem) {
    galHTML += galleryTemp(curItem);
  });

  $('.photoDisplayCase').append(galHTML);
});

$('body').on('click','.portraits', function(event){
  event.preventDefault();
    $('.galleryDisplay').addClass('activate');
    $('.albumDisplay').removeClass('activate');
    titleHTML ="";

    titleHTML +=titleTemp(albumFive[0]);
    $('.photoDisplayCase').html(titleHTML);


    galHTML ="";
  _.each(albumFive, function(curItem) {
    galHTML += galleryTemp(curItem);
  });

  $('.photoDisplayCase').append(galHTML);
});


$('body').on('click','.sculptures', function(event){
  event.preventDefault();
    $('.galleryDisplay').addClass('activate');
    $('.albumDisplay').removeClass('activate');
    titleHTML ="";

    titleHTML +=titleTemp(albumSix[0]);
    $('.photoDisplayCase').html(titleHTML);



    galHTML ="";
  _.each(albumSix, function(curItem) {
    galHTML += galleryTemp(curItem);
  });

  $('.photoDisplayCase').append(galHTML);
});

///////////////////////// Picture View //////////////////////

$('body').on('click','.one', function(event) {
  event.preventDefault();
  $('.photoDisplay').addClass('activate');
  $('.galleryDisplay').removeClass('activate');
});


























});
