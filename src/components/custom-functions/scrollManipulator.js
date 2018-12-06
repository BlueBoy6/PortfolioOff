import { TweenMax, TimelineMax, Power4 } from "gsap/TweenMax" 

import ScrollMagic from 'scrollmagic';


export function scrollManipulator() {

    var page = document.getElementById("page");
    var article = document.querySelector(".article");

    var controller = new ScrollMagic.Controller();
    document.querySelectorAll(".anim-to-top").forEach((item,i)=>{
        item.classList.add('go'+i)
        new ScrollMagic
            .Scene({triggerElement: '.anim-to-top.go'+i, offset: "-300px"})
            .setClassToggle('.anim-to-top.go'+i, 'active')
            .addTo(controller);
    })
}
