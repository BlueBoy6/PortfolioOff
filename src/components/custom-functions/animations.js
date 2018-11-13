import {TweenMax, Power4, TimelineMax} from "gsap/TweenMax";

export function staggerAnimIn(item){
    var tl = new TimelineMax({paused: true})
    var winWidth = window.innerWidth;
    if(winWidth > 800){
        tl.staggerFrom(item, 0.3, { ease: Power4.easeOut, scale : "0.8" , opacity: "0"},"0.1")
        tl.play();
    }
}
export function popUpAnimIn(item){
    var tl = new TimelineMax()
    var winWidth = window.innerWidth;
    // console.log('====================')
    // console.log("ANIMATION WAIIING", item)
    if(winWidth > 800){
        // console.log('====================')
        // console.log("ANIMATION pass", item)
        tl.fromTo(".vignet", 0.3, { ease: Power4.easeOut, scale : "0.5" , opacity: "0"},{ ease: Power4.easeOut, scale : "1" , opacity: "1"});
    }
}
export function popUpAnimOut(item){
    var tl = new TimelineMax()
    var winWidth = window.innerWidth;
    // console.log('====================')
    // console.log("ANIMATION WAIIING", item)
    if(winWidth > 800){
        // console.log('====================')
        // console.log("ANIMATION pass", item)
        tl.fromTo(".vignet", 0.3, { ease: Power4.easeOut, scale : "1" , opacity: "1"},{ ease: Power4.easeOut, scale : "0.5" , opacity: "0"});
    }
}