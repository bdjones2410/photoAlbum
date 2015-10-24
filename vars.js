var imageArray =[
  {
  album: 1,
  picID: "one",
  albumNamed: "Buildings",
  picURL:"photoImages/buildings1.jpg",
  picDescript:"Photo of Awesome Building"
},
{
  album: 1,
  picID: "two",
  albumNamed: "Buildings",
  picURL:"photoImages/buildings2.jpg",
  picDescript:"Photo of second Building"
},
{
  album: 1,
  picID: "three",
  albumNamed: "Buildings",
  picURL: "photoImages/buildings3.jpg",
  picDescript:"Pic of yet more buildings"
},
{
  album: 2,
  picID: "four",
  albumNamed: "Flowers",
  picURL:"photoImages/flower1.jpg",
  picDescript:"Glowing Flower"
},
{
  album: 2,
  picID: "five",
  albumNamed: "Flowers",
  picURL:"photoImages/flowers2.jpg",
  picDescript: "cool flower pic"
},
{
  album: 2,
  picID: "six",
  albumNamed: "Flowers",
  picURL:"photoImages/flowers3.jpg",
  picDescript: "one more awesome flower"
},
{
  album: 3,
  picID: "seven",
  albumNamed: "Game Night",
  picURL: "photoImages/gamenight1.jpg",
  picDescript:"having a fun Game Night"
},
{
  album: 3,
  picID: "eight",
  albumNamed: "Game Night",
  picURL: "photoImages/gamenight2.jpg",
  picDescript:"More games!"
},
{
  album: 3,
  picID: "nine",
  albumNamed: "Game Night",
  picURL: "photoImages/gamenight3.jpg",
  picDescript: "So many games"
},
{
  album: 4,
  picID: "ten",
  albumNamed: "League",
  picURL: "photoImages/khazix_1.jpg",
  picDescript: "Bug Jungler"
},
{
  album: 4,
  picID: "eleven",
  albumNamed: "League",
  picURL: "photoImages/kindred.jpg",
  picDescript: "Lamb and Wolf"
},
{
  album: 4,
  picID: "twelve",
  albumNamed: "League",
  picURL: "photoImages/Rengar_Splash.jpg",
  picDescript: "Rengu jump"
},
{
  album: 5,
  picID: "thirteen",
  albumNamed: "Portraits",
  picURL: "photoImages/portrait1.jpg",
  picDescript: "portrait study"
},
{
  album: 5,
  picID: "fourteen",
  albumNamed: "Portraits",
  picURL: "photoImages/portrait2.jpg",
  picDescript: "portrait study 2"
},
{
  album: 5,
  picID: "fifteen",
  albumNamed: "Portraits",
  picURL: "photoImages/portrait3.jpg",
  picDescript: "portrait study 3"
},
{
  album: 6,
  picID: "sixteen",
  albumNamed: "Sculptures",
  picURL: "photoImages/sculpture1.jpg",
  picDescript: "mother nature sculpture"
},
{
  album: 6,
  picID: "seventeen",
  albumNamed: "Sculptures",
  picURL: "photoImages/sculpture2.jpg",
  picDescript: "nature themed sculpture"
},
{
  album: 6,
  picID: "eighteen",
  albumNamed: "Sculptures",
  picURL: "photoImages/sculpture3.jpg",
  picDescript: "more sculptures"
}
];

var oneOfEach = [{
  album: "buildings",
  picURL:"photoImages/buildings1.jpg",
  picDescript:"Building Album"
},
{
  album: "flowers",
  picURL:"photoImages/flower1.jpg",
  picDescript:"Flowers Album"
},
{
  album: "gameNight",
  picURL: "photoImages/gamenight1.jpg",
  picDescript:"Game Night"
},
{
  album: "League",
  picURL: "photoImages/khazix_1.jpg",
  picDescript: "League of Legends"
},
{
  album: "portraits",
  picURL: "photoImages/portrait3.jpg",
  picDescript: "portrait studies"
},
{
  album: "sculptures",
  picURL: "photoImages/sculpture1.jpg",
  picDescript: "sculptures"
},
];

var albumOne = _.filter(imageArray, function(el) {
  return (el.album===1);
});

var albumTwo = _.filter(imageArray, function(el) {
  return (el.album===2);
});

var albumThree = _.filter(imageArray, function(el) {
  return (el.album===3);
});

var albumFour = _.filter(imageArray, function(el) {
  return (el.album===4);
});

var albumFive = _.filter(imageArray, function(el) {
  return (el.album===5);
});
var albumSix = _.filter(imageArray, function(el) {
  return (el.album===6);
});


//
// var deeperImageArray =[
//   {
//     albumName: "Buildings",
//     albumPics:  [{
//         album:1,
//         picURL:"photoImages/buildings1.jpg",
//         picDescript:"Photo of Awesome Building"
//         },
//         {
//           album: 1,
//           picURL:"photoImages/buildings2.jpg",
//           picDescript:"Photo of second Building"
//         },
//         {
//           album: 1,
//           picURL: "photoImages/buildings3.jpg",
//           picDescript:"Pic of yet more buildings"
//         }]
// },
//
// {
//     albumName: "Flowers",
//     albumPics: [{
//
//             album: 2,
//             picURL: "photoImages/flower1.jpg",
//             picDescript: "Glowing Flower"
//         }, {
//             album: 2,
//             picURL: "photoImages/flowers2.jpg",
//             picDescript: "cool flower pic"
//         }, {
//             album: 2,
//             picURL: "photoImages/flowers3.jpg",
//             picDescript: "one more awesome flower"
//         },
//     ]
//     },
// {
//
//       albumName: 'Game Night',
//       albumPics: [{
//
//           album: 3,
//           picURL: "photoImages/gamenight1.jpg",
//           picDescript:"having a fun Game Night"
//         },
//         {
//           album: 3,
//           picURL: "photoImages/gamenight2.jpg",
//           picDescript:"More games!"
//         },
//         {
//           album: 3,
//           picURL: "photoImages/gamenight3.jpg",
//           picDescript: "So many games"
//         }
//         ]},
//
//     {
//       albumName: 'League of Legends',
//       albumPics:[
//
//         {
//           album: 4,
//           picURL: "photoImages/khazix_1.jpg",
//           picDescript: "Bug Jungler"
//         },
//         {
//           album: 4,
//           picURL: "photoImages/kindred.jpg",
//           picDescript: "Lamb and Wolf"
//         },
//         {
//           album: 4,
//           picURL: "photoImages/Rengar_Splash.jpg",
//           picDescript: "Rengu jump"
//         }
//         ]},
//
//         {
//           albumName: 'Portrait work',
//           albumPics: [
//               {
//                 album: 5,
//                 picURL: "photoImages/portrait1.jpg",
//                 picDescript: "portrait study"
//               },
//               {
//                 album: 5,
//                 picURL: "photoImages/portrait2.jpg",
//                 picDescript: "portrait study 2"
//               },
//               {
//                 album: 5,
//                 picURL: "photoImages/portrait3.jpg",
//                 picDescript: "portrait study 3"
//               },
//               ]},
//
//           {
//             albumName: 'Sculptures',
//             albumPics: [
//               {
//             album: 6,
//             picURL: "photoImages/sculpture1.jpg",
//             picDescript: "mother nature sculpture"
//           },
//           {
//             album: 6,
//             picURL: "photoImages/sculpture2.jpg",
//             picDescript: "nature themed sculpture"
//           },
//           {
//             album: 6,
//             picURL: "photoImages/sculpture3.jpg",
//             picDescript: "more sculptures"
//           }
//           ]}
//         ];

//
// var oneOfEach = _.each(deeperImageArray, function(el){
//         return(el.albumName + el.albumPics[0].picURL);
//       }
// );



//
//
// _.each(deeperImageArray, function(el){ _.each(el.albumPics, function(nel){
//   console.log(nel.picURL);
// });});
