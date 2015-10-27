$(document).ready(function() {
    photoAlbum.init();
});


var photoAlbum = {
    init: function() {
        photoAlbum.styling();
        photoAlbum.events();
    },

    events: function() {
        $('a').on('click', function(event) {
            event.preventDefault();
            var curAlbum = this.className;
            console.log(curAlbum);
            $('.galleryDisplay').addClass('activate');
            $('.albumDisplay').removeClass('activate');
            var currentArray = "";
            titleHTML = "";
            _.each(imageArray, function(curOb) {
                if (curOb.albumNamed === curAlbum) {
                    currentArray += photoAlbum.loadTemplate(
                        'galTemp', curOb);
                    titleHTML = photoAlbum.loadTemplate(
                        'titleTemp', curOb);
                }
                else if (curAlbum === 'Home') {
                  $('.albumDisplay').addClass('activate');
                  $('.galleryDisplay').removeClass('activate');
                }
            });
            $('.photoDisplayCase').html(titleHTML);
            $('.photoDisplayCase').append(currentArray);
        });

        $('.photoDisplayCase').on('click', 'a', function(event) {
            event.preventDefault();
            var curID = this.className;
            $('.photoDisplay').addClass('activate');
            $('.galleryDisplay').removeClass('activate');
            bigPicHTML = "";
            _.each(imageArray, function(curItem) {
                if (curItem.picID === curID) {
                    bigPicHTML += photoAlbum.loadTemplate(
                        'bigPicTemp', curItem);
                    console.log(bigPicHTML);
                }
            });
            $('.photoDisplay').html(bigPicHTML);
        });

        $('body').on('click', '#backToAlbum', function(event) {
            event.preventDefault();
            $('.galleryDisplay').addClass('activate');
            $('.photoDisplay').removeClass('activate');

        });

    },



    styling: function() {
        photoAlbum.loadAlbums();
    },
    loadAlbums: function() {
        var photoHTML = "";
        _.each(oneOfEach, function(curItem) {
            photoHTML += photoAlbum.loadTemplate('picTemp',
                curItem);
        });
        $('.albumSpace').html(photoHTML);
    },

    getTemplate: function(name) {
        return _.template(templates[name]);
    },

    loadTemplate: function(name, curItem) {
        var templ = photoAlbum.getTemplate(name);
        return templ(curItem);
    },
};
