
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




// const rotate = (arr, count = 1) => {
//   return [...arr.slice(count, arr.length), ...arr.slice(0, count)];
// };

// const arr = [1,2,3,4,5];

// console.log(rotate(arr, 1));



// const fruits = [1,2,3,4,5];
// const N = 2;
// for(let i = 0;i < N; i++){
    
//     // Remove first element
//     let firstElement = fruits.shift()
    
//     // Append first element at the last
//     fruits.push(firstElement);
    
// }
// console.log(fruits);

