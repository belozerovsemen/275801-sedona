var button = document.querySelector(".top-content-button");
var form = document.querySelector(".search-form");
var arrival = form.querySelector("[name=arrival-date]");
var departure = form.querySelector("[name=departure-date]");
var adult = form.querySelector("[name=adult-count]");
var kids = form.querySelector("[name=kids-count]");
var search = form.querySelector(".search-form-button");


arrival.focus();

button.addEventListener("click", function (evt){
evt.preventDefault();
form.classList.toggle("search-form-hide");
});

search.addEventListener("click", function (evt){

  if(!arrival.value){
    evt.preventDefault();
    console.log("Нужно ввести дату заезда!")
  }
  if(!departure.value){
    evt.preventDefault();
    console.log("Нужно ввести дату выезда!")
  }
  if(!adult.value){
    evt.preventDefault();
    console.log("Введите количество взрослых!")
  }
  else {
    localStorage.setItem("adult", adult.value);
  }
  if(!kids.value){
    evt.preventDefault();
    console.log("Введите количество детей!")
  }
  else {
    localStorage.setItem("kids", kids.value);
  }

});
