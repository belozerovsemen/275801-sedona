var button = document.querySelector(".top-content-button");
var form = document.querySelector(".search-form");
var arrival = form.querySelector("[name=arrival-date]");
var departure = form.querySelector("[name=departure-date]");
var adult = form.querySelector("[name=adult-count]");
var kids = form.querySelector("[name=kids-count]");
var search = form.querySelector(".search-form-button");



button.addEventListener("click", function (evt){
  evt.preventDefault();
  form.classList.remove("form-error");
  form.classList.toggle("search-form-show");

});



search.addEventListener("click", function (evt){

  if(!arrival.value){
    evt.preventDefault();
    console.log("Нужно ввести дату заезда!")
    form.classList.remove("form-error");
    form.offsetWidth = form.offsetWidth;
    form.classList.add("form-error");
    arrival.focus();

  }
  if(!departure.value){
    evt.preventDefault();
    console.log("Нужно ввести дату выезда!")
    form.classList.remove("form-error");
    form.offsetWidth = form.offsetWidth;
    form.classList.add("form-error");
  }
  if(!adult.value){
    evt.preventDefault();
    console.log("Введите количество взрослых!")
    form.classList.remove("form-error");
    form.offsetWidth = form.offsetWidth;
    form.classList.add("form-error");
}
  else {
    localStorage.setItem("adult", adult.value);
  }
  if(!kids.value){
    evt.preventDefault();
    console.log("Введите количество детей!")
    form.classList.remove("form-error");
    form.offsetWidth = form.offsetWidth;
    form.classList.add("form-error");
  }
  else {
    localStorage.setItem("kids", kids.value);
  }

});
