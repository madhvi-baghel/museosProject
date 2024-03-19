function lenisScroll(){
    const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

lenis.on('scroll', ScrollTrigger.update)

gsap.ticker.add((time)=>{
  lenis.raf(time * 1000)
})

gsap.ticker.lagSmoothing(0)
}
lenisScroll()
function cursorAnimation(){
    document.addEventListener("mousemove",function (dets) {
        gsap.to("#crsr",{
            left:dets.x,
            top:dets.y
        })
    })
}
cursorAnimation()

var tl = gsap.timeline()
    tl.from("#count",{
        // opacity:0
        onStart: function(){
            var h5timer = document.querySelector("#count h5")
            var grow = 0
            setInterval(function(){
                if(grow<100){
                   h5timer.innerHTML = grow++;
                }else{
                   h5timer.innerHTML = grow;
                }
            },30)
        }
    })
    tl.to("#loader",{
        opacity:0,
        duration:1,
        delay:2.2,
        top:-500,
    })
    tl.from("#page1",{
        delay:0.5,
        opacity:0,
        y:0,
        ease:Power4,
        duration:0.6
    })
    tl.to("#loader",{
        display:"none",
        duration:1,
    })
    tl.from("#page1 #head h1",{
        y:120,
        stagger:0.2,
        opacity:0
    })
    tl.from("#nav",{
        y:-20,
        opacity:0
    })

    tl.from("#page1-year",{
        // opacity:0
        onStart: function(){
            var h5timer = document.querySelector("#page1-year h3")
            var grow = 0
            setInterval(function(){
                if(grow<1898){
                   h5timer.innerHTML = grow++;
                }else{
                   h5timer.innerHTML = grow;
                }
            },-50)
        }
    })
     
    
    // tl.from("#page1-img",{
    //     width:"100%",
    //     scrollTrigger:{
    //     trigger:"400px",
    //     scroller:"body",
    //     scrub:true,
    //     markers:true
    // }
    // })
    
var tL = gsap.timeline()   
tL.to("#page1-img",{
       height:"auto",
    //    scale:"0.8",
    //    width:"100%",
        scrollTrigger:{
            trigger:"#page1-img #img2",
            scroller:"body",
            // markers:true,
            start:"top 50%",
            end:"top 100%",
            scrub:true,
            // pin:true,
            // markers:true
        }
    })
tL.to("#page1-img #img2",{
    opacity:"0",
    scrollTrigger:{
        trigger:"#page1-year",
        scroller:"body",
        // markers:true,
    }
}) 
tL.to("#page1-img #img3",{
    opacity:"0",
    scrollTrigger:{
        trigger:"#page1-year",
        scroller:"body",
        // markers:true,
    }
})  


    var boxs = document.querySelectorAll("#page3 .text-box");
    var box1 = document.querySelectorAll("#page3 .text-box .left h1");
    var box2 = document.querySelectorAll("#page3 .text-box .left h2");
    var box3 = document.querySelectorAll("#page3 .text-box .circle i");
    boxs.forEach(box => {
        box.addEventListener("mouseover",function(){
            box.style.backgroundColor = "#fff";
            box1.forEach(box11 =>{box11.style.color= "#000";})
            box2.forEach(box21 =>{box21.style.color= "#000";})
        })
        })
    
     boxs.forEach(box => {
        box.addEventListener("mouseleave",function(){
            box.style.backgroundColor = "#151515";
            box1.forEach(box11 =>{box11.style.color= "#fff";})
            box2.forEach(box21 =>{box21.style.color= "#fff";})
        })
     })
    
     function heroAnimation() {
        gsap.to(".page1-img img", {
            scale: 1,
            ease: "expo.inOut",
            scrollTrigger: {
                scroller: "body",
                trigger: ".page1-img img",
                start: window.innerWidth > 700 ? "top -80%" : "top 0",
                end: window.innerWidth > 700 ? "top 150%" : "top -10%",
                scrub: 5,
            }
        });
    }
    heroAnimation()
    
    function worrierAnimation() {
        window.innerWidth > 640 && pinAnimation("context");
        textAnimation("context");
    
        gsap.to(".a-context img", {
            scale: window.innerWidth > 640 ? 1.6 : 2,
            y: -60,
            ease: "none",
            scrollTrigger: {
                scroller: "body",
                trigger: ".a-context img",
                start: window.innerWidth > 640 ? "top 100%" : "",
                end: window.innerWidth > 640 ? "top -100%" : "top -50%",
                scrub: true,
            }
        })
    }
    worrierAnimation()

// var bar = document.querySelector("#myBar")
//     window.addEventListener('scroll', function() {
//         var scrolled = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
//         bar.style.width = scrolled + "%";
//     });
// var bar = document.querySelector("#myBar");
// var page4 = document.querySelector("#wrapper");

// function throttle(func, limit) {
//     let inThrottle;
//     return function() {
//         const args = arguments;
//         const context = this;
//         if (!inThrottle) {
//             func.apply(context, args);
//             inThrottle = true;
//             setTimeout(() => inThrottle = false, limit);
//         }
//     }
// }

// function updateProgressBar() {
//     // Calculate the scroll progress relative to the start of Page 4
//     const page4Start = page4.offsetTop;
//     const scrolled = (window.scrollY - page4Start) / (800 * window.innerHeight) * 100;

//     // Check if the user has scrolled past the start of Page 4
//     if (window.scrollY >= page4Start) {
//         // Ensure the progress bar does not exceed 100%
//         bar.style.width = Math.min(scrolled, 100) + "%";
//     } else {
//         bar.style.width = "0%";
//     }
// }

// const throttledUpdate = throttle(updateProgressBar, 100);

// function smoothScrollUpdate() {
//     throttledUpdate();
//     requestAnimationFrame(smoothScrollUpdate);
// }

// smoothScrollUpdate();


// var il = gsap.timeline() 
// ScrollTrigger.create({
//     trigger: "#worrier",
//     start: "top top",
//     end: "bottom bottom",
//     onUpdate: self => {
//       const progress = self.progress; 
//       const scaleFactor = 1 + (progress * 0.5); 
  
//       il.from("#scrollImage", { scale: scaleFactor, duration: 0.5 });
//     }
//   }); 
    // il.from("#worrier img",{
    //     scale:"1.0",
    //     scrollTrigger:{
    //         trigger:"#worrier",
    //         scroller:"body",
    //         scrub:true,
    //         // markers:true,
    //     }
    // }) 
