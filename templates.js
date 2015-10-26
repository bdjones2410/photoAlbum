var templates = {

  picTemp: [
      '<div class="oneThird">',
      '<a href="" class="<%= album %>">',
      '<div class="albumContainer">',
      '<div class="albumImg"><img alt="" src=" <%= picURL %> ">',
      '</div>',
      '<div class="albumdescription">',
      '<p> <%= picDescript %> </p>',
      '</div>',
      '</div>',
      '</a>',
      '</div>',
      ].join(""),

  galTemp: [
      '<div class="oneThird">',
      '<a href="" class="<%= picID %>">',
      '<div class="albumContainer">',
      '<div class="albumImg"><img alt="" src=" <%= picURL %> ">',
      '</div>',
      '<div class="albumdescription">',
      '<p> <%= picDescript %> </p>',
      '</div>',
      '</div></a>',
      '</div>',].join(""),

  titleTemp: [
      '<div class="photoAlbumTitle">',
      '<h1 class="albNum"><%= albumNamed %></h1>',
      '</div>',
      ].join(""),


  bigPicTemp: [
      '<div class="photoHead">',
      '<div class="backAlbum">',
      '<a href="#" id="backToAlbum"><span class="backButton">&lt;',
      'Back to album</span></a>',
      '</div>',
      '<div class="photoTitle">',
      '<h1><%= picDescript %></h1>',
      '</div>',
      '</div>',
      '<div class="bigPic"><img alt="" class="hugePic" src="<%= picURL %>">',
    '</div>',
    ].join(""),

};
