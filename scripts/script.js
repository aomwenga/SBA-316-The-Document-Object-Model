// Cache at least one element using selectElementById.
let entireSection = document.getElementById(`entire-section`);
// console.log(entireSection);

// Cache at least one element using querySelector or querySelectorAll.
let ul = entireSection.querySelector(`ul`);
// console.log(ul);

// Use the parent-child-sibling relationship to navigate between elements at least once (firstChild, lastChild, parentNode, nextElementSibling, etc.).
let beyondBasketball = ul.lastElementChild;
beyondBasketball.textContent = beyondBasketball.textContent.toUpperCase();
console.log(beyondBasketball);

// Iterate over a collection of elements to accomplish some task.
let li = ul.querySelectorAll(`li`);
li.forEach((i) => {
  i.textContent = i.textContent.toUpperCase();
});

// Create at least one element using createElement.
let myFavStat = document.createElement(`li`);
myFavStat.textContent = `Has to be the fact he won 2 more rings after Shaq`;

// Use appendChild and/or prepend to add new elements to the DOM.
ul.appendChild(myFavStat);

// Use the DocumentFragment interface or HTML templating with the cloneNode method to create templated content.
let clone = document.querySelector(`li`);
let clonedLi = clone.cloneNode(true);

// Modify the HTML or text content of at least one element in response to user interaction using innerHTML, innerText, or textContent.
let changeButton = document.getElementById("goat-fact");

// event listener to the button
changeButton.addEventListener("click", () => {
  // change what button says
  changeButton.textContent = "Kobe BEAN Bryant Is the only viable choice!";
  //   console.log("Fact updated: " + beyondBasketball.textContent);
});
