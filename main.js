
function according() {
  let according = document.querySelectorAll(".according");

  according.forEach((elm, index) => {
    let selectBtn = elm.querySelector(".according__header");

    if(selectBtn) {
      selectBtn.addEventListener('click', () => {
        elm.classList.toggle('active');

        for(let [el, value] of according.entries()) {
					if(el !== index) {
						value.classList.remove('active');
					}
        }

      })
    }
  });
}
according();
