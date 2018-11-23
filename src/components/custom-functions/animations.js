import {TweenMax, Power4, Elastic, Expo, Back, TimelineMax} from "gsap/TweenMax";




export function logoOpenSite(){
    TweenMax.set("#logo",{position: "fixed", zIndex: "9999", height: "50vh", top: "calc((100vh - 50vh) /2)", opacity: "0"});
    new TimelineMax()
    .staggerFromTo(".bckg-color", 2.5,{scale : "0",},{ease: Power4.easeOut, scale : "1.8"},0.4)
    .fromTo("#logo", 0.7,{ rotation : "1440deg",scale : "0.2", opacity: "0"},{ease: Back.easeOut.config(1.7), scale : "1", opacity: "1", rotation : "0deg"},"-=2.2")
    .to("#logo", 0.7,{height: "94.4px", y: "-220%", x: "-54%"},"-=0.5")
    .to("#logo", 0.01,{position: "relative", zIndex: "9999", height: "100%", top: "0", y: "0%", x: "0%"})
    .fromTo(".bckg-color", 0.7,{opacity: "1" },{ opacity: "0"})
    .to('.back-logo', 0.01,{display:"none"})
    
    ;
}

export function menuAnimationOpen(){
    new TimelineMax()
    .fromTo(".menu .menu-group", 0.3, {top : "100vh", scale : "0.2",  opacity: "0"},{ ease: Expo.easeOut, top : "10vh", scale : "1" , opacity: "1"})
    .staggerFromTo(".menu .menu-group .btn", 0.3,{y: "-20px", opacity: "0" },{ ease: Back.easeOut.config(1.7), x: "0px", opacity: "1"}, 0.05);
}
export function menuAnimationClose(){
    new TimelineMax()
    .fromTo(".menu .menu-group .btn", 0.1,{x: "0px", opacity: "1"},{x: "-20px", opacity: "0" })
    .fromTo(".menu .menu-group ", 0.2,{ ease: Expo.easeOut, scale : "1" , opacity: "1"}, {scale : "0.2",  opacity: "0"});
}



export function staggerAnimIn(item){
    var tl = new TimelineMax({paused: true})
    var winWidth = window.innerWidth;
    if(winWidth > 800){
        tl.staggerFrom(item, 0.3, { ease: Power4.easeOut, scale : "0.8" , opacity: "0"},"0.1")
        tl.play();
    }
}
export function popUpAnimIn(item, time, delay){
    TweenMax.fromTo(item, time, {scale : "0.2",  opacity: "0"},{ ease: Expo.easeOut, scale : "1" , opacity: "1"},delay);
}
export function popUpAnimOut(item, time, delay){
    new TimelineMax().fromTo(item, time, {scale : "1.8" , opacity: "0"},{ ease: Expo.easeOut, scale : "1" , opacity: "1"},delay);
}
export function staggerBottom(target, delay){
    TweenMax.set(target, {y:"-20px", opacity: "0"});
    if(target === ".coat .letter"){
        setTimeout(()=>{
            new TimelineMax()
                .staggerFromTo(target, 0.5, {y : "-20px", opacity: "0"},{ ease: Power4.easeOut, y : "0px" , opacity: "1"}, 0.05)
                .to(".coat1",0.05, {opacity : "0"})
                .to(".coat2",0.05, {opacity : "0"});
        },delay)
    }else{
        TweenMax.staggerFromTo(target, 0.5, {y : "-20px", opacity: "0"},{ ease: Power4.easeOut, y : "0px" , opacity: "1"}, 0.075);
    }
}
export function staggerBottomSlow(target){
    TweenMax.staggerFromTo(target, 0.5, { y : "-60px", opacity: 0, scale: "0.85" },{ease: Back.easeOut.config(1.7), y : "0px", opacity: 1, scale: "1" }, 0.15);
}

export function staggerBottomSlowOut(target){
    TweenMax.staggerFromTo(target, 0.5, { y : "0px", opacity: 1, scale: "1" },{ease: Back.easeIn.config(1.7), y : "60px", opacity: 0, scale: "0.85" }, 0.15);
}

export function bottomSlowIn(target){
    TweenMax.fromTo(target, 0.5, {ease: Back.easeIn.config(1.7), y : "60px", opacity: 0, scale: "0.95" },{ y : "0px", opacity: 1, scale: "1" });
}
export function bottomSlowOut(target){
    TweenMax.fromTo(target, 0.5, { y : "0px", opacity: 1, scale: "1" },{ease: Back.easeIn.config(1.7), y : "60px", opacity: 0, scale: "0.85" });
}

export function ElasticAppear(target, delay){
    new TimelineMax()
    .fromTo(target, 0.7, { opacity: 0, scale: "0.85" },{ ease: Elastic.easeOut.config(1, 0.3), y : "0px", opacity: 1, scale: "1" }, delay);
}

export function heightDevHeader(target, delay){
    new TimelineMax()
    .fromTo(target, 0.7, {transformOrigin: "0%", scaleY: "0" },{ ease: Expo.easeOut, transformOrigin: "0%", scaleY: "1" }, delay);
}

export function staggerElasticAppear(target, delay){
    if(delay){
        TweenMax.set(target,{opacity : 0})
        setTimeout(()=>{
            TweenMax.staggerFromTo(target, 1, { opacity: 0, scale: "0.85" },{ ease: Elastic.easeOut.config(1, 0.3), opacity: 1, scale: "1" }, 0.15);
        },delay)
    }else{
        TweenMax.staggerFromTo(target, 1, { opacity: 0, scale: "0.85" },{ ease: Elastic.easeOut.config(1, 0.3), opacity: 1, scale: "1" }, 0.15);
    }
}

export function fakeWrite(target){
    var cible = document.querySelectorAll(target);
    cible.forEach((item)=>{
        TweenMax.staggerFromTo(target, 0.3, { x: "-5px", opacity: 0},{ ease: Expo.easeOut, x:"0px", opacity: 1}, 0.08);
        
    }) 
}

