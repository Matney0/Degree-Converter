/*    JavaScript 7th Edition
      Chapter 2
      Project 02-01

      Celsius <-> Farenheit Coverter
      Author: Matney Moller
      Date:   3/27/2025

      Filename: project02-01.js
 */
//Step 3
function FarenheitToCelsius(degree) {
    return (degree - 32)/ 1.8;
}
//step 4
function CelsiusToFarenheit(degree) {
    return degree * 1.8 + 32;
}

//Step 5
document.getElementById("cValue").onchange = function() {
      let degree = document.getElementById("cValue").value;
      document.getElementById("fValue").value = CelsiusToFarenheit(degree);
}
//Step 6 
document.getElementById("fValue").onchange = function() {
      let fDegree = document.getElementById("fValue").value;
      document.getElementById("cValue").value = FarenheitToCelsius(fDegree);
}