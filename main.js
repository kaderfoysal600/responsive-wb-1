const navbar = document.querySelector(".navbar");
const menu = document.querySelector(".menu");
const menuItem = document.querySelector(".menu-item");
const checkIn = document.querySelector(".check-in");
const checkOut = document.querySelector(".check-out");
const dyCalendar = document.querySelector("#dycalendar");
const guest = document.querySelector(".guest");
const addGuest = document.querySelector(".add-guest");
const totalGuest = document.querySelector("#total-guest");
const plusOne = document.querySelector("#plus-one");
const minusOne = document.querySelector("#minus-one");
const resultOne = document.querySelector("#result-one");
const plusTwo = document.querySelector("#plus-two")
const minusTwo = document.querySelector("#minus-two")
const resultTwo = document.querySelector("#result-two")

let increaseValue = 0;
plusOne.addEventListener("click", function () {
  increaseValue++;
  totalGuest.textContent = `${increaseValue} guest `;
  resultOne.textContent = increaseValue;
});

plusTwo.addEventListener("click", function (){
  increaseValue++;
  totalGuest.textContent = `${increaseValue} guest `;
  resultTwo.textContent = increaseValue;
})
minusOne.addEventListener("click", function () {
  if (increaseValue === 0) {
    minusOne.setAttribute("disabled");
  } else {
    increaseValue--;
    totalGuest.textContent = `${increaseValue} guest `;
    resultOne.textContent = increaseValue;
  }
});

minusTwo.addEventListener("click", function () {
    if (increaseValue === 0) {
      minusTwo.setAttribute("disabled");
    } else {
      increaseValue--;
      totalGuest.textContent = `${increaseValue} guest `;
      resultTwo.textContent = increaseValue;
    }
  });
guest.addEventListener("click", function () {
    if(addGuest.style.visibility === "hidden"){
        addGuest.style.visibility = "visible";
        dyCalendar.style.visibility = "hidden";
        menuItem.style.visibility = "hidden";
    }else{
        addGuest.style.visibility = "hidden"
    }
  
});

window.onscroll = function () {
  let top = window.scrollY;
  if (top > 0) {
    navbar.classList.add("active");
  } else {
    navbar.classList.remove("active");
  }
};

menu.addEventListener("click", function () {
  if (menuItem.style.visibility === "hidden") {
    menuItem.style.visibility = "visible";
    addGuest.style.visibility = "hidden"
  } else {
    menuItem.style.visibility = "hidden";
  }
});

function calender() {
  dyCalendar.style.visibility = "visible";
  addGuest.style.visibility = "hidden";
}

checkIn.addEventListener("click", calender);
checkOut.addEventListener("click", calender);
