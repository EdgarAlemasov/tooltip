(()=>{"use strict";class t{constructor(t){this.parentEl=t}static markup(t,e,o){return`\n          <button type="submit" class="pop-button">\n            ${t}\n            <div class="popover" hidden="">\n              <div class="arrow"></div>\n              <h3 class="popover-header">${e}</h3>\n              <div class="popover-body">${o}</div>\n            </div>\n          </button>\n        `}static get popButtonSelector(){return".pop-button"}static get popoverSelector(){return".popover"}bindToDOM(){const{content:t,popoverHeader:e,popoverContent:o}=this.parentEl.dataset;this.parentEl.innerHTML=this.constructor.markup(t,e,o),this.parentEl.querySelector(this.constructor.popButtonSelector).addEventListener("click",(t=>{const{currentTarget:e}=t,o=e.querySelector(".popover");if(o.hidden){const t=e.querySelector(".arrow");o.hidden=!1,t.style.left=o.offsetWidth/2-t.offsetWidth/2+"px",o.style.top=0-t.offsetHeight-o.offsetHeight+"px",o.style.left=e.offsetWidth/2-o.offsetWidth/2+"px"}else o.hidden=!0}))}}document.querySelectorAll("#pop-button").forEach((e=>{new t(e).bindToDOM()}))})();