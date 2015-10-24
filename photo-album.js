$(document).ready(function(){

////////////////////TEMPLATES/////////////////////////////////
var bigPicTemp = _.template($('#bigPicTemp').html());
window.bigPicHTML ="";

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


//// CREATE TEMPLATE FOR IMAGE VIEW.  USE ALBUMNAME for link back.

$('body').on('click','#backToAlbum', function(event){
  event.preventDefault();
  $('.galleryDisplay').addClass('activate');
  $('.photoDisplay').removeClass('activate');

});


$('body').on('click','.one', function(event) {
  event.preventDefault();
  $('.photoDisplay').addClass('activate');
  $('.galleryDisplay').removeClass('activate');
    bigPicHTML ="";
    bigPicHTML += bigPicTemp(imageArray[0]);
    console.log(bigPicHTML);
    $('.photoDisplay').html(bigPicHTML);

});

$('body').on('click','.two', function(event) {
  event.preventDefault();
  $('.photoDisplay').addClass('activate');
  $('.galleryDisplay').removeClass('activate');
    bigPicHTML ="";
    bigPicHTML += bigPicTemp(imageArray[1]);
    console.log(bigPicHTML);
    $('.photoDisplay').html(bigPicHTML);

});

$('body').on('click','.three', function(event) {
  event.preventDefault();
  $('.photoDisplay').addClass('activate');
  $('.galleryDisplay').removeClass('activate');
    bigPicHTML ="";
    bigPicHTML += bigPicTemp(imageArray[2]);
    console.log(bigPicHTML);
    $('.photoDisplay').html(bigPicHTML);

});
$('body').on('click','.four', function(event) {
  event.preventDefault();
  $('.photoDisplay').addClass('activate');
  $('.galleryDisplay').removeClass('activate');
    bigPicHTML ="";
    bigPicHTML += bigPicTemp(imageArray[3]);
    console.log(bigPicHTML);
    $('.photoDisplay').html(bigPicHTML);

});
$('body').on('click','.five', function(event) {
  event.preventDefault();
  $('.photoDisplay').addClass('activate');
  $('.galleryDisplay').removeClass('activate');
    bigPicHTML ="";
    bigPicHTML += bigPicTemp(imageArray[4]);
    console.log(bigPicHTML);
    $('.photoDisplay').html(bigPicHTML);

});
$('body').on('click','.six', function(event) {
  event.preventDefault();
  $('.photoDisplay').addClass('activate');
  $('.galleryDisplay').removeClass('activate');
    bigPicHTML ="";
    bigPicHTML += bigPicTemp(imageArray[5]);
    console.log(bigPicHTML);
    $('.photoDisplay').html(bigPicHTML);

});
$('body').on('click','.seven', function(event) {
  event.preventDefault();
  $('.photoDisplay').addClass('activate');
  $('.galleryDisplay').removeClass('activate');
    bigPicHTML ="";
    bigPicHTML += bigPicTemp(imageArray[6]);
    console.log(bigPicHTML);
    $('.photoDisplay').html(bigPicHTML);

});
$('body').on('click','.eight', function(event) {
  event.preventDefault();
  $('.photoDisplay').addClass('activate');
  $('.galleryDisplay').removeClass('activate');
    bigPicHTML ="";
    bigPicHTML += bigPicTemp(imageArray[7]);
    console.log(bigPicHTML);
    $('.photoDisplay').html(bigPicHTML);

});
$('body').on('click','.nine', function(event) {
  event.preventDefault();
  $('.photoDisplay').addClass('activate');
  $('.galleryDisplay').removeClass('activate');
    bigPicHTML ="";
    bigPicHTML += bigPicTemp(imageArray[8]);
    console.log(bigPicHTML);
    $('.photoDisplay').html(bigPicHTML);

});

$('body').on('click','.ten', function(event) {
  event.preventDefault();
  $('.photoDisplay').addClass('activate');
  $('.galleryDisplay').removeClass('activate');
    bigPicHTML ="";
    bigPicHTML += bigPicTemp(imageArray[9]);
    console.log(bigPicHTML);
    $('.photoDisplay').html(bigPicHTML);

});
$('body').on('click','.eleven', function(event) {
  event.preventDefault();
  $('.photoDisplay').addClass('activate');
  $('.galleryDisplay').removeClass('activate');
    bigPicHTML ="";
    bigPicHTML += bigPicTemp(imageArray[10]);
    console.log(bigPicHTML);
    $('.photoDisplay').html(bigPicHTML);

});
$('body').on('click','.twelve', function(event) {
  event.preventDefault();
  $('.photoDisplay').addClass('activate');
  $('.galleryDisplay').removeClass('activate');
    bigPicHTML ="";
    bigPicHTML += bigPicTemp(imageArray[11]);
    console.log(bigPicHTML);
    $('.photoDisplay').html(bigPicHTML);

});
$('body').on('click','.thirteen', function(event) {
  event.preventDefault();
  $('.photoDisplay').addClass('activate');
  $('.galleryDisplay').removeClass('activate');
    bigPicHTML ="";
    bigPicHTML += bigPicTemp(imageArray[12]);
    console.log(bigPicHTML);
    $('.photoDisplay').html(bigPicHTML);

});
$('body').on('click','.fourteen', function(event) {
  event.preventDefault();
  $('.photoDisplay').addClass('activate');
  $('.galleryDisplay').removeClass('activate');
    bigPicHTML ="";
    bigPicHTML += bigPicTemp(imageArray[13]);
    console.log(bigPicHTML);
    $('.photoDisplay').html(bigPicHTML);

});

$('body').on('click','.fifteen', function(event) {
  event.preventDefault();
  $('.photoDisplay').addClass('activate');
  $('.galleryDisplay').removeClass('activate');
    bigPicHTML ="";
    bigPicHTML += bigPicTemp(imageArray[14]);
    console.log(bigPicHTML);
    $('.photoDisplay').html(bigPicHTML);

});
$('body').on('click','.sixteen', function(event) {
  event.preventDefault();
  $('.photoDisplay').addClass('activate');
  $('.galleryDisplay').removeClass('activate');
    bigPicHTML ="";
    bigPicHTML += bigPicTemp(imageArray[15]);
    console.log(bigPicHTML);
    $('.photoDisplay').html(bigPicHTML);

});
$('body').on('click','.seventeen', function(event) {
  event.preventDefault();
  $('.photoDisplay').addClass('activate');
  $('.galleryDisplay').removeClass('activate');
    bigPicHTML ="";
    bigPicHTML += bigPicTemp(imageArray[16]);
    console.log(bigPicHTML);
    $('.photoDisplay').html(bigPicHTML);

});
$('body').on('click','.eighteen', function(event) {
  event.preventDefault();
  $('.photoDisplay').addClass('activate');
  $('.galleryDisplay').removeClass('activate');
    bigPicHTML ="";
    bigPicHTML += bigPicTemp(imageArray[17]);
    console.log(bigPicHTML);
    $('.photoDisplay').html(bigPicHTML);

});















});
