// first component(video_comp)

const intro=document.querySelector(".intro");
var video=intro.querySelector(".vid");
// text(first_comp) 
const text= intro.querySelector('h1');
const text2= intro.querySelector('h2');




const controller = new ScrollMagic.Controller();

// secen's(video_animation)

// let scene = new ScrollMagic.Scene({
//     duration : 8000,
//     triggerElement: intro,
//     triggerHook: 0

// })
//   .addIndicators()
//   .setPin(intro)
//   .addTo(controller);



// let acellamount = 0.1;
// let scrollpos = 0;
// let delay = 0;

// scene.on("update", e => {
//     scrollpos = (e.scrollPos)/1000;
//     // console.log(e);
// });



// setInterval(()=>{
//     delay += (scrollpos - delay) * acellamount;
//     // console.log(scrollpos,delay);
//     video.currentTime = scrollpos;
// },16);

// text_animation1("For all ios and mac...")

let textAnim =TweenMax.fromTo(text,3,{opacity:1,y:0},{opacity:0,y:-50});


let scene2= new ScrollMagic.Scene({
    duration:600,
    triggerElement:intro,
    triggerHook:0
})
  .setTween(textAnim)
  .addTo(controller);

// text_animation2("hi i am sarthak...")

let textAnim2 =TweenMax.fromTo(text2,3,{opacity:0,y:0},{opacity:1,y:-80});

let scene3= new ScrollMagic.Scene({
    duration:800,
    triggerElement:intro,
    triggerHook:0
})
  .setTween(textAnim2)
  .addTo(controller);

// text_animation2 -> ko fade karne-k-liya

  // let textAnim3 =TweenMax.fromTo(text2,0.5,{opacity:1,y:-150},{opacity:0,y:-200});

  // let scene_fade= new ScrollMagic.Scene({
  //     duration:850,
  //     triggerElement:intro,
  //     triggerHook:0
  // })
  //   .setTween(textAnim3)
  //   .addTo(controller);


// section 
const section=document.querySelector('.linux');
const li=section.querySelector('img');
const lt=section.querySelector('h3');

let imgAnim =TweenMax.fromTo(li,3,{opacity:0,x:50},{opacity:1,x:0});

let scene4= new ScrollMagic.Scene({
  duration:0,
  triggerElement:section,
  triggerHook:0
})
.setTween(imgAnim)
.addTo(controller);

let text_sec_Anim =TweenMax.fromTo(lt,3,{opacity:0,x:0},{opacity:1,x:40});


let scene5= new ScrollMagic.Scene({
  duration:0,
  triggerElement:section,
  triggerHook:0
})
.setTween(text_sec_Anim)
.addTo(controller);
