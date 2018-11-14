import {TweenMax, Power4, Elastic, Expo, TimelineMax} from "gsap/TweenMax";

export function staggerAnimIn(item){
    var tl = new TimelineMax({paused: true})
    var winWidth = window.innerWidth;
    if(winWidth > 800){
        tl.staggerFrom(item, 0.3, { ease: Power4.easeOut, scale : "0.8" , opacity: "0"},"0.1")
        tl.play();
    }
}
export function popUpAnimIn(item, time, delay){
    new TimelineMax().fromTo(item, time, {scale : "0.2" , opacity: "0"},{ ease: Expo.easeOut, scale : "1" , opacity: "1"},delay);
}
export function popUpAnimOut(item, time, delay){
    new TimelineMax().fromTo(item, time, {scale : "1.8" , opacity: "0"},{ ease: Expo.easeOut, scale : "1" , opacity: "1"},delay);
}
export function staggerBottom(target){
    console.log(target)
    TweenMax.set(target, {y:"-20px", opacity: "0"});
    if(target === ".coat .letter"){
        new TimelineMax()
        .staggerFromTo(target, 0.5, {y : "-20px", opacity: "0"},{ ease: Power4.easeOut, y : "0px" , opacity: "1"}, 0.075)
        .to(".coat1",0.05, {opacity : "0"})
        .to(".coat2",0.05, {opacity : "0"})
    }else{
        TweenMax.staggerFromTo(target, 0.5, {y : "-20px", opacity: "0"},{ ease: Power4.easeOut, y : "0px" , opacity: "1"}, 0.075);
    }
}
export function staggerBottomSlow(target){
    var tl = new TimelineMax();
    tl
    .staggerFromTo(target, 0.3, { y : "-60px", opacity: 0, scale: "0.85" },{ ease: Power4.easeOut, y : "0px", opacity: 1, scale: "1" }, 0.1);
    
}
export function ElasticAppear(target){
    var tl = new TimelineMax();
    tl
    .fromTo(target, 0.7, { opacity: 0, scale: "0.85" },{ ease: Elastic.easeOut.config(1, 0.3), y : "0px", opacity: 1, scale: "1" }, 0.3);
}