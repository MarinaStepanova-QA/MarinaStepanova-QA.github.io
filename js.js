// /* Это объявление переменной, мы наши кнопку по тегу */
// const button = document.getElementById("kredo");

// /* Тут на кнопку навешиваем обрабочик, который ждёт клика и тогда запустит логику */
// button.addEventListener('click', function() {
// 	// alert('Деньги это не главное')
// })


/* Это объявление переменной, мы наши кнопку по тегу */
const button = document.getElementById("kredo");
const popup = document.getElementById("myPopup");

/* Тут на кнопку навешиваем обрабочик, который ждёт клика и тогда запустит логику */
button.addEventListener('click', function() {
	popup.classList.toggle("show");
})

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

