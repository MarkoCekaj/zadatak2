//About MAP//
// Initialize and add the map
function initMap() {
  // The location of Uluru
  const uluru = { lat: 51.1657, lng: 10.4515 };
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: uluru,
  });
  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: uluru,
    map: map,
  });
}
//gallery//
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
//cities page//
function myFunction() {
  var x = document.getElementById("cities-list-animation");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
function myFunction1() {
  document.getElementById("demo1").innerHTML =
    "Berlin is the capital and largest city of Germany by both area and population.Its 3,769,495 inhabitants as of 31 December 2019 make it the most-populous city of the European Union, according to population within city limits. One of Germany's 16 constituent states, Berlin is surrounded by the state of Brandenburg, and contiguous with Potsdam, Brandenburg's capital. Berlin's urban area has a population of around 4.5 million and is the second most populous urban area in Germany after the Ruhr. The Berlin-Brandenburg capital region has about six million inhabitants and is Germany's third-largest metropolitan region after the Rhine-Ruhr and Rhine-Main regions.";
}
function myFunction2() {
  document.getElementById("demo2").innerHTML =
    "Hamburg, locally also Hamborg , officially the Free and Hanseatic City of Hamburg , is the second-largest city in Germany after Berlin and 7th largest city in the European Union with a population of over 1.84 million. Hamburg's urban area has a population of around 2.5 million and its metropolitan area is home to more than five million people. The city lies on the River Elbe and two of its tributaries, the River Alster and the River Bille. One of Germany's 16 federated states, Hamburg is surrounded by Schleswig-Holstein to the north and Lower Saxony to the south.";
}
function myFunction3() {
  document.getElementById("demo3").innerHTML =
    "Munich is the capital and most populous city of Bavaria. With a population of 1,558,395 inhabitants as of July 31, 2020, it is the third-largest city in Germany, after Berlin and Hamburg, and thus the largest which does not constitute its own state, as well as the 11th-largest city in the European Union. The city's metropolitan region is home to 6 million people.[4]";
}
function myFunction4() {
  document.getElementById("demo4").innerHTML =
    "Cologne is the largest city of Germany's most populous state of North Rhine-Westphalia and the fourth-most populous city in Germany. With slightly over a million inhabitants (1.09 million) within its city boundaries, Cologne is the largest city on the Rhine and also the most populous city of both the Rhine-Ruhr Metropolitan Region and the Rhineland. Centered on the left bank of the Rhine, Cologne is about 45 kilometres (28 mi) southeast of North Rhine-Westphalia's capital of Düsseldorf and 25 kilometres (16 mi) northwest of Bonn. It is the largest city in the Central Franconian and Ripuarian dialect areas.";
}
function myFunction5() {
  document.getElementById("demo5").innerHTML =
    "Frankfurt, officially Frankfurt am Main, is the most populous city in the German state of Hesse. Its 763,380 inhabitants as of December 31, 2019 make it the fifth-most populous city in Germany. On the River Main (a tributary of the Rhine), it forms a continuous conurbation with the neighboring city of Offenbach am Main and its urban area has a population of 2.3 million. The city is the heart of the larger Rhine-Main Metropolitan Region, which has a population of 5.5 million and is Germany's second-largest metropolitan region after the Rhine-Ruhr Region.";
}
function myFunction6() {
  document.getElementById("demo6").innerHTML =
    "Stuttgart is the capital and largest city of the German state of Baden-Württemberg. It is located on the Neckar river in a fertile valley and lies an hour from the Swabian Jura and the Black Forest. Its area has a population of 634,830 making it the sixth largest city in Germany. 2.8 million people live in the city's administrative region and 5.3 million people in its metropolitan area, making it the fourth largest metropolitan area in Germany. The city and metropolitan area are consistently ranked among the top 20 European metropolitan areas by GDP";
}
