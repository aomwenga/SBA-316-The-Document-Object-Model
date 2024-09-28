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

  //   Modify the style and/or CSS classes of an element in response to user interactions using the style or classList properties.
  changeButton.style.backgroundColor = "black";
  changeButton.style.color = "purple";

  //   Modify at least one attribute of an element in response to user interaction.
  changeButton.setAttribute("title", "Kobe is the GOAT!");
});

// Include at least one form and/or input with HTML attribute validation.
// form element
let form = document.getElementById("player-form");

// event listener for form submission
form.addEventListener("submit", (event) => {
  event.preventDefault(); // stop the default form submission

  // value from the input field
  let favoritePlayer = document.getElementById("favorite-player").value;
  console.log(favoritePlayer);

  // Optionally, clear the input field
  form.reset();
});

// this one confused me
// Include at least one form and/or input with DOM event-based validation. (This can be the same form or input as the one above, but should include event-based validation in addition to the HTML attribute validation.)
