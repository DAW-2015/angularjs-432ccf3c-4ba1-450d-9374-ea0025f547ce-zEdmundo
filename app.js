var app = angular.module('myApp', []);

app.controller('TemperaturaController', function() {

  this.celsius = 32.0;

  this.celsiusToKelvin = function(celsius) {
    answer = parseFloat(celsius) + 273.5;
    if (isNaN(answer)) {
      return 0;
    } else {
      return  answer;
    }
  };

  this.celsiusToFahrenheit = function (celsius) {
    var answer = 32 + (9*parseFloat(celsius))/5;

    if (isNaN(answer))
      return 0;

    return answer;
  }

});
