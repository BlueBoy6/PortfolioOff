
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
      emulateScroll: false,
			friction: 0.05,
			bounce: true,
      bounceForce: 0.1,
      onUpdate: (data)=> {

				content.style.transform = `translate(
					${-data.position.x}px,
					${-data.position.y}px
				)`

      },
    });
}

export function NiceScrollPage(containerName, wrapperContent){
	var niceSroll = (function () {
		// var targetScroll = document.getElementById(containerName);
		// targetScroll.appendChild(document.createElement("div")).classList.add("nice-scroll");
			
		var container = document.getElementById(containerName);
		var wrapper = document.getElementById(wrapperContent);
		var scrollBar = document.getElementById("nice-scroll");

		// plugin starts here
		function resizer() {
			var scrollHeight = window.innerHeight / (wrapper.offsetHeight / window.innerHeight);
			scrollBar.style.height = scrollHeight + 8 + 'px';
		}
		
		function scroller() {
			scrollBar.style.top = container.scrollTop / (wrapper.offsetHeight / window.innerHeight) + 'px';
		}


		function init() {
			window.addEventListener('resize', function () {
				resizer();
			});

			container.addEventListener('scroll', function () {
				scroller();
			});

			resizer();
			scroller();
		}
		return {
			init: init
		};
	})();

	new niceSroll.init();
}