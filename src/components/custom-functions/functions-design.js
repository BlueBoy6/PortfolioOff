
import ScrollBooster from 'scrollbooster'


export function resizingVignets(){
    var vign4w = document.querySelector(".grid").offsetWidth /2;
    document.querySelectorAll(".grid-line-1").forEach((item,i)=>{item.style.height=`${vign4w/2}px`})
    document.querySelectorAll(".grid-line-2").forEach((item,i)=>{item.style.height=`${vign4w}px`})
}

export function scrollBoosterConfig(container, contentView){

    let viewport = document.querySelector(container);
    let content = viewport.querySelector(contentView);

    new ScrollBooster({
      viewport,
      content,
      emulateScroll: true,
      friction: 0.1,
      bounceForce: 0.09,
      onUpdate: (data)=> {
        content.style.transform = `translate(
          ${-data.position.x}px,
          ${-data.position.y}px
        )`
      },
    });
}
