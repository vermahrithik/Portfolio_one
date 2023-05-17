function revealToSpan(){
    document.querySelectorAll(".reveal")
    .forEach(function(elem){
        //create two spans
        var parent=document.createElement("span");
        var child=document.createElement("span");

        // parent & child both sets their respective classes
        parent.classList.add("parent");
        child.classList.add("child");

        // span parent gets child and child gets elem details
        child.innerHTML=elem.innerHTML;
        parent.appendChild(child);

        // elem replaces its value with parent span
        elem.innerHTML="";
        elem.appendChild(parent);
    })
}
revealToSpan();

// loco with scrolltrigger

function init(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}
init()

var tl=gsap.timeline();
tl
.to(".load",{
    rotate:470,
    duration:1.5,
    ease:Linear.easeInOut
})
.to(".load",{
    display:"none",
    duration:0.1
})
.from(".child span",{
    x:130,
    stagger:0.2,
    duration:1,
    delay:-1.5,
    ease:Power3.easeInOut
})
.to(".parent .child",{
    y:"-100%",
    duration:1,
    delay:-0.2,
    ease:Circ.easeInOut
})
.to(".loader",{
    delay:-0.1,
    height:0,
    duration:0.5,
    ease:Circ.easeInOut
})
.to(".onion",{
    height:"100%",
    top:0,
    duration:1,
    delay:-1,
    ease:Circ.easeInOut
})
.to(".onion",{
    height:"0%",
    duration:0.5,
    delay:-0.4,
    ease:Circ.easeInOut
})
.from("#nav",{
    display:"none",
    delay:-0.3,
    duration:1,
    ease:Linear.easeInOut
})
.to("#top",{
    height:"0%",
    duration:1,
    delay:-0.5,
    ease:Circ.easeInOut
},"-=1")
.from("#cr,#visual,#dr",{
    y:180,
    ease: Expo.easeInOut,
    duration:1,
    opacity:0,
    stagger:0.3,
    delay:-0.3
},"-=1")
.to("#img1",{
    scrollTrigger:{
        trigger:"#img1",
        scroller:"#main",
        start:"top 100%",
        end:"top 0%", 
        scrub:5,
        // markers:true
    },
    rotate:-5,
    transformOrigin: `50% 75%`,
    ease: "sine.inOut",
},"-=1")
.to("#img2",{
    scrollTrigger:{
        trigger:"#img2",
        scroller:"#main",
        start:"top 100%",
        end:"top 0%", 
        scrub:5,
        // markers:true
    },
    rotate:0,
    transformOrigin: `50% 75%`,
    ease: "sine.inOut",
},"-=1")
.to("#img3",{
    scrollTrigger:{
        trigger:"#img3",
        scroller:"#main",
        start:"top 100%",
        end:"top 0%", 
        scrub:5,
        // markers:true
    },
    rotate:5,
    transformOrigin: `50% 75%`,
    ease: "sine.inOut",
},"-=1")
tl
.to(".s-2-line>h2",{
    scrollTrigger:{
        trigger:".s-2-line>h2",
        scroller:"#main",
        // markers:true,
        start:"100% 90%",
        end:"100% 70%",
        scrub:4,
    },
    marginTop:0,
    opacity:1,
    ease: Expo.easeInOut,
    stagger:0.3,
    duration:1
})
.from(".s-4-a>h1,.s-4-a>h4,.s-4-c",{
    scrollTrigger:{
        trigger:".s-4-a>h1,.s-4-a>h4,.s-4-c",
        scroller:"#main",
        start:"-100% 80%",
        end:"-100% 60%", 
        scrub:5,
        // markers:true
    },
    y:200,
    ease: Expo.easeInOut,
    duration:0.5,
    opacity:0,
    stagger:0.2,
},"-=3")

let taime=document.getElementById("time");
setInterval(()=>{
    let d=new Date();
    taime.innerHTML=d.toLocaleTimeString();
},1000)

document.querySelectorAll('.s-8-options-b').forEach(elem =>{
    elem.addEventListener('mouseover', event => {
        document.querySelector('.s-8-options-b-box-1-line-1').style.left=`100%`;
        document.querySelector('.s-8-options-b i').style.marginLeft=`0px`;
        document.querySelector('.s-8-options-b i').style.opacity=`1`;
        const myTimeout = setTimeout(myGreeting, 100);
        function myGreeting() {
            document.querySelector('.s-8-options-b-box-1-line-tr').style.left=`0%`;
        }
    })
    elem.addEventListener('mouseout', event => {
        document.querySelector('.s-8-options-b-box-1-line-1').style.left=`-100%`;
        document.querySelector('.s-8-options-b i').style.marginLeft=`-5px`;
        document.querySelector('.s-8-options-b i').style.opacity=`0`;
        const myTimeout = setTimeout(myGreeting, 100);
        function myGreeting() {
            document.querySelector('.s-8-options-b-box-1-line-tr').style.left=`0%`;
        }
    })
})

var s8_play=document.querySelector('#bar');
s8_play.addEventListener('mouseover',function(){
        document.querySelector('#bar-1').style.width=`100%`;
        document.querySelector('#bar-1').style.opacity=`1`;
        document.querySelector('#bar h3').style.fontWeight=`600`;
    })
    s8_play.addEventListener('mouseout',function(){
        document.querySelector('#bar-1').style.width=`0%`;
        document.querySelector('#bar-1').style.opacity=`0`;
        document.querySelector('#bar h3').style.fontWeight=`100`;
    })

var s11_options=document.querySelector('.s-11-options');
s11_options.addEventListener('mouseover',function(){
    document.querySelectorAll(".s-11-option")
    .forEach(function(elem){
        elem.addEventListener("mousemove",function(){
            elem.querySelector('.s-11-option>span').style.width=`110%`;
            elem.querySelector('.s-11-option>span').style.opacity=`1`;
            elem.querySelector('.s-11-option>h3').style.color=`#4e2c3f`;
        })
    })
})
s11_options.addEventListener('mouseout',function(){
    document.querySelectorAll(".s-11-option")
    .forEach(function(elem){
        elem.addEventListener("mouseout",function(){
            elem.querySelector('.s-11-option>h3').style.color=`#fff`;
            elem.querySelector('.s-11-option>span').style.opacity=`0`;
            elem.querySelector('.s-11-option>span').style.width=`0%`;
    })
    })
})

var s11_handles=document.querySelector('.s-11-handles');
s11_handles.addEventListener('mouseover',function(){
    document.querySelectorAll(".s-11-handle")
    .forEach(function(elem){
        elem.addEventListener("mousemove",function(){
            elem.style.borderTop=`0.5px solid #4b3e40`;
            elem.querySelector('.s-11-handle>span').style.top=`0%`;
            elem.querySelector('.s-11-handle>.spana').style.padding=`0vw 1vw`;
        })
    })
})
s11_handles.addEventListener('mouseout',function(){
    document.querySelectorAll(".s-11-handle")
    .forEach(function(elem){
        elem.addEventListener("mouseout",function(){
            elem.style.borderTop=`0.5px solid #fff`;
            elem.querySelector('.s-11-handle>span').style.top=`-100%`;
            elem.querySelector('.s-11-handle>.spana').style.padding=`0vw 0vw`;
        })
    })
})

document.querySelector("#s-11 .rights>.copyright>h6:nth-child(2)")
.addEventListener("click",function(){
    document.querySelector('#s-11 .credits').style.bottom=`0%`;
    document.querySelector('#s-11 .credits').style.opacity=`1`;
    document.querySelector('#s-11 .credits').style.backgroundColor=`rgba(255, 255, 255)`;
})

document.querySelector("#s-11>.credits>.cr-options>.cr-cross")
.addEventListener("click",function(){
    document.querySelector('#s-11 .credits').style.bottom=`-100%`;
    document.querySelector('#s-11 .credits').style.backgroundColor=`rgba(255, 255, 255, 0.5)`;
    document.querySelector('#s-11 .credits').style.opacity=`0`;
})


// document.querySelector("#s-11")
document.querySelector("#s-11>.rights>.copy>h6")
.addEventListener("click",function(){
    window.scrollTo(0, document.querySelector("#top").scrollHeight);
    // console.log(document.querySelector("#main").scrollTop);
})

// --------------------------------------------------------------------------------------------------------
// var images =[`./cards/1.png`,`./cards/2.png`,`./cards/3.png`,`./cards/4.png`,`./cards/5.png`];
// setTimeout("changeImage()", 500);
// var x = 0;
// function changeImage() {
    //     document.querySelector(".hov-div-2-2>img").src=`${images[x]}`;
    //     x++;
    // }
// document.querySelector(".hov-div-2-2 img").src=`./cards/2.png`;

// let images = ['photoFromInternet', 'photoFromInternet2', 'photoFromInternet3'];
// --------------------------------------------------------------------------------------------------------
// const images =[1,2,3,4,5];
// let index = 0;
// let imgElement = document.querySelector('.s-5>.s-5-1>.hov-div>.hov-div-2>.hov-div-2-2>img');

// function change() {
//     if(index>=0){
//         imgElement.src = `./cards/${images[index]}.png`;
//         index++;
//     }
// }

// window.onload = function () {
//     setInterval(change, 1000);
// };

var hovDiv = document.querySelector(".s-5-1-img")
hovDiv.addEventListener("mousemove",function(dets){
    // if((dets.clientX>75 && dets.screenY>29) || (dets.clientX>75 && dets.screenY<714) || (dets.clientX<834 && dets.screenY<714) || (dets.clientX<834 && dets.screenY>29)){
    // }
    document.querySelector('.hov-div').style.opacity=`1`;
    document.querySelector('.hov-div').style.left=`${dets.clientX}px`;
    document.querySelector('.hov-div').style.top=`${dets.clientY}px`;
    // console.log("x : ",dets.screenX)
    // console.log("y : ",dets.screenY)
})
hovDiv.addEventListener("mouseout",function(dets){
    // if(!(dets.clientX>75 && dets.screenY>29) || !(dets.clientX>75 && dets.screenY<714) || !(dets.clientX<834 && dets.screenY<714) || !(dets.clientX<834 && dets.screenY>29)){
        document.querySelector('.hov-div').style.opacity=`0`;
        // }
        // document.querySelector('.hov-div').style.left=`${dets.clientX}px`;
        // document.querySelector(".hov-div").style.top=`${dets.clientY}px`
})
