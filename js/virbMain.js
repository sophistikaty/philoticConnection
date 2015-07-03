$(document).ready(function(){

// enquire.register("screen and (max-width:45em)", {
//   match : function() {},
// }

$('#Instagram').click(showSocial);

function showSocial () {
 $('.social').toggleClass('hidden');
 console.log('hello?');
 $('#Instagram').innerHTML = "<h4>Instagram</h4> <br> <p>(hide instagram)</p>";
    
};


//---- ImageScroll Plugin --------

  $('.img-holder').imageScroll({
            image: null,
            imageAttribute: 'image',
            container: $('body'),
            speed: 0.4,
            // coverRatio: 0.75,
            //holderClass: 'imageHolder',
            // holderMinHeight: 200,
            // extraHeight: 0,
            mediaWidth: 1600,
            mediaHeight: 900,
            parallax: true,
            touch: false,
          });

// $('#aboveblog p').imageScroll( {
//           container:"div.img-holder"),
//           speed:0.5;
//           parallax: true
//           touch: false
});

// $('.img-holder').imageScroll({
//     imageAttribute: (touch === true) ? 'image-mobile' : 'image',
//     touch: touch

/**
 * Author: Peder A. Nielsen
 * Date: 05.12.13
 * Company: Making Waves
 */

  //   function parallax (ImageScroll) {
  //   ImageScroll.defaults.speed = .2;
  //   $('.img-holder').each(function () {
  //       new ImageScroll(this, {}).init();
  //   });
  // }
    //or
    //$('.img-holder').imageScroll();


//Scroll Magic Plugin----------

//   var controller;
//   var scene;
//   var tween;
//   var ScrollScene;
//   //var triggerHook = scene.triggerHook(console.log);

// $(document).ready(function($) {
//   console.log('para..')
  
// // // init controller
//   var controller = new ScrollMagic({vertical:true});
//   });


// $(document).ready(function($) {
//     console.log('parallax..')
//     // build tween
//    var tween = new TimelineMax ()
        
//         .add([
//           TweenMax.fromTo("#aboveblog .layer1", 1, {scale: 3, autoAlpha: 0.05, top: 300},{top: -350, ease: Linear.easeNone}),
//           TweenMax.fromTo("#aboveblog .layer2", 1, {scale: 2, autoAlpha: 0.3, left: 150}, {left: -175, ease: Linear.easeNone}),
//           TweenMax.fromTo("#aboveblog .layer3", 1, {scale: 2, autoAlpha: 0.01, left: 50},{left: -75, ease: Linear.easeNone}),
//         ]);



  //build scene
  
   // new ScrollScene({triggerElement: "div#aboveblog", duration: $(window).height() + 300,
   //          offset: -150})
   //                .setTween (tween)
   //                .setPin ('#aboveblog')
   //                .addTo(controller);

//----------"What if Everything was Connected?" Parallaxing text----------------    
      
      // init the controller - what if...
          controller = new ScrollMagic();

         var scene = new ScrollScene({
            triggerElement: "#aboveabout",
            duration: $(window).height() + 300,
            offset: -150
          })
          .addTo(controller)
          .setTween(new TimelineMax().add([
            // TweenMax.fromTo("#aboveshop .layer1", 1, {scale: 2, alpha: 0.1, top: "100%"}, {top: "0%", ease: Linear.easeNone}),
            // TweenMax.to("#aboveblog2 .layer2", 1, {backgroundPosition: "0 -260%", ease: Linear.easeNone})
            TweenMax.to("#aboveabout .layer1", 1, {scale: 1, alpha: 0.2, top: "100%"}, {top: "10%", ease: Linear.easeNone})
          ]));
            console.log('PaRallaxing!!');
    
      // init the controller - EVERYTHING
          controller = new ScrollMagic();

         var scene = new ScrollScene({
            triggerElement: "#belowabout",
            duration: $(window).height(),
            offset: -250
          })
          .addTo(controller)
          .setTween(new TimelineMax().add([
            // TweenMax.from("#aboveshop .layer1", 1, {scale: 2, alpha: 0.1, top: "100%"}, {top: "0%", ease: Linear.easeNone})
            TweenMax.to("#shop .layer2", 1, {scale: 0.75, alpha: 1, top: "0%"}, {top: "0%", ease: Linear.easeNone})
          ]));
            console.log('parallaxing layer 2');

          var scene = new ScrollScene({
            triggerElement: "#shop",
            duration: $(window).height(),
            offset: -250
          })
          .addTo(controller)
          .setTween(new TimelineMax().add([
            TweenMax.to("#shop .layer2", 10, {scale: 0.5, alpha: 1, top: "100%"}, {top: "100%", ease: Linear.easeNone})
          ]));
            console.log('parallaxing layer 2 away');            

      // init the controller - Was Connected?
          controller = new ScrollMagic();

         var scene = new ScrollScene({
            triggerElement: "#shop",
            duration: $(window).height() + 300,
            offset: -450
          })
          .addTo(controller)
          .setTween(new TimelineMax().add([
            
            TweenMax.to("#shop .layer3", 1, {scale: 1, alpha: 1, top: "25%"}, {top: "100%", ease: Linear.easeNone})
          
          ]));
            console.log('parallaxing layer 3 away!!');

         var scene = new ScrollScene({
            triggerElement: "#shop",
            duration: $(window).height() + 300,
            offset: 0
          })
          .addTo(controller)
          .setTween(new TimelineMax().add([
            
            TweenMax.to("#shop .layer3", 1, {scale: 10, alpha: 0.01, top: "-125%"}, {top: "-125%", ease: Linear.easeNone})
          
          ]));
            console.log('parallaxing layer 3 away!!');


 // --------------spinning portfolio images------------
// spin 
        // init the controller
          controller = new ScrollMagic({
            globalSceneOptions: {
              //triggerHook: "OnCenter"
            }
          });

        // build tween
        var tween = TweenMax.to(".DJ", .001, {rotation: -360, ease: Linear.easeNone});


        var scene = new ScrollScene({triggerElement:"#blog", duration: 1700})
          .setTween(tween)
          .setPin ("#belowWork", {pushFollowers:false})
          .offset(200)
          .addTo(controller)
          // .triggerHook("onCenter")
          // .triggerElement: "#work" // use previous element as trigger, as top position changes during spin
          // .setTween(TweenMax.to(elements[2], 1, {rotation: 360}));
          ;

          // init the controller
          controller = new ScrollMagic({
          });

        // build tween
        var tween = TweenMax.to(".phone", 10, {rotation: 90, ease: Linear.easeNone});

        var scene = new ScrollScene({triggerElement:"#blog", duration: 750})
          .setTween(tween)
          .setPin ("#belowWork", {pushFollowers:false})
          .offset(1200)
          .addTo(controller);

            // init the controller
          controller = new ScrollMagic();

        // build tween
        var tween = TweenMax.to(".code", 10, {rotation: -20, ease: Linear.easeNone});

        var scene = new ScrollScene({triggerElement:"#work", duration: 1000})
          .setTween(tween)
          .setPin ("#belowWork", {pushFollowers:false})
          .offset(1200)
          .addTo(controller);

             // init the controller
          controller = new ScrollMagic({
             });

        var tween = TweenMax.to(".feat1", 1, {rotation: -3, ease: Linear.easeNone});

        var scene = new ScrollScene({triggerElement:"#work", duration: 200})
          .setTween(tween)
          .setPin ("#belowWork", {pushFollowers:false})
          .offset(200)
          .addTo(controller);
       

          // init the controller
          controller = new ScrollMagic({
            });

        var tween = TweenMax.to(".feat3", 1, {rotation: 40, ease: Linear.easeNone});

        var scene = new ScrollScene({triggerElement:"#work", duration: 550})
          .setTween(tween)
          .setPin ("#belowWork", {pushFollowers:false})
          .offset(500)
          .addTo(controller);

///----------scale portfolio images
// scale
        // init controller
    controller = new ScrollMagic();

    // build tween
    var tween = TweenMax.to("#belowWork");

    // build scene
   var scene = new ScrollScene({triggerElement:"#work", duration: 300})
          .addTo(controller)
          // .triggerHook("onCenter")
          .triggerElement(".code")
          .setTween(TweenMax.from(".code", 1, {scale: 1.4, ease: Linear.easeNone}));

        // init controller
    controller = new ScrollMagic();

    // build tween
    var tween = TweenMax.to("#belowWork");

    // build scene
   var scene = new ScrollScene({triggerElement:"#work", duration: 300})
          .addTo(controller)
          // .triggerHook("onCenter")
          .triggerElement(".phone")
          .setTween(TweenMax.from(".phone", 2, {scale: 0.75, ease: Linear.easeNone}));

     // init controller
    controller = new ScrollMagic();

    // build tween
    var tween = TweenMax.to("#belowWork");

    // build scene
   var scene = new ScrollScene({triggerElement:"#Work", duration: 500})
          .addTo(controller)
          // .triggerHook("onCenter")
          .triggerElement(".feat1")
          .setTween(TweenMax.from(".feat1", 1, {scale: 0.75, ease: Linear.easeNone}));

     // init controller
    controller = new ScrollMagic();

    // build tween
    var tween = TweenMax.to("#belowWork");

    // build scene
   var scene = new ScrollScene({triggerElement:".feat1", duration: 700})
          .addTo(controller)
          // .triggerHook("onCenter")
          .triggerElement(".feat2")
          .setTween(TweenMax.from(".feat2", 1, {scale: 1.75, ease: Linear.easeNone}))
          .offset(300);

            // init controller
    controller = new ScrollMagic();

    // build tween
    var tween = TweenMax.to("#belowWork");

    // build scene
   var scene = new ScrollScene({triggerElement:".feat1", duration: 100})
          .addTo(controller)
          // .triggerHook("onCenter")
          .triggerElement(".feat3")
          .setTween(TweenMax.from(".feat3", 1, {scale: 0.85, ease: Linear.easeNone}))
          .offset(-100);

///----------pinning & unpinning
 // pin
    //     // init controller
    // controller = new ScrollMagic();

    // // build tween
    // var tween = TweenMax.to("#shop.layer3");

    //     new ScrollScene({
    //         triggerElement: "#shop.layer3",
    //         duration: 1100
    //       })
    //       .on("progress", function () {
    //         // keep centered even though width changes
    //         $("#shop").height($("#shop.layer3").width());
    //       })
    //       .setTween(pinani)
    //       .setPin("#shop")
    //       .addTo(controller);         




//------ Ajax Social feeds ---------------

var Instagram = {};

Instagram.Template = {};

Instagram.Template.Views = {

  "photo": "<div class= 'photoI'>" +
      "<a href= '{url}' target='_blank'>"+ 
      "<img class='main' src='{photo_url}' width='250' height='250' /></a>" +
      "<p>{text}</p>" + "<span class='heart'><strong>{like_count}</strong></span>" +
      "</div>"
};
(function() {

  function toScreen(photos) {
    $.each(photos.data, function (index, photo) {
      // console.log(photo);
      photo = toTemplate(photo);
      $('div.social').append(photo);
    });
  }
  
  function search (user_id) {
    var url = "https://api.instagram.com/v1/users/" + user_id + "/media/recent?callback=?&amp;client_id=5d38e4277bc0461f8fa6283e68f85258&count=4"
    $.getJSON (url, toScreen);
    console.log(user_id);
  }

  function toTemplate(photo) {
    photo = {
      like_count: photo.likes.count,
      text: photo.caption.text,
      photo_url: photo.images.standard_resolution.url,
      url:photo.link
    };

    return Instagram.Template.generate(photo, Instagram.Template.Views['photo']);
  }

  Instagram.Template.generate = function (photo, template) {
  var re;
  
  for (var attribute in photo) {
    // console.log(attribute);
    // console.log(photo);
    re = new RegExp('{' + attribute + '}', 'g');
    template = template.replace(re, photo[attribute]);
  }

  return template;
 };

  Instagram.search = search;
})();

Instagram.search ('1265305009');



// $.ajax({
//    type: "GET",
//    url: "https://api.instagram.com/v1/users/self/media/recent?count=5",
//    dataType: "json"
//  })
// .done (feedsocial)

// //unique functions for each api called to convert data into format that can be used with 'feedsocial' function to display on page in array

//  function feedsocial (latest) {
//   var pic = x//(latest) pic from social feed, add to array . max array length is 5
//              // display array of latest pics in div .social, including image and jump text with link to full post ?and a follow button?
//  }

