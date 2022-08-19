function Meteo (){
let apiKey = '56831e004defe754d94e413edec30cee';
let city = document.getElementById('weath').value;
let uri = 'https://api.openweathermap.org/data/2.5/weather?q='+city+'&appid='+apiKey;

var request = new XMLHttpRequest();
request.open('GET', uri, true);

request.onload = function() {
    
    var data = JSON.parse(this.response);
    var temp = data.main.temp;
    temp = parseInt(temp) - 273;
    ris = document.getElementById('ris').innerHTML = "A " + city + " ci sono " + temp + " gradi..!";
    
    var meteo = data.weather[0].main;
    console.log(data);
    console.log(meteo);

    if(meteo === "Clear"){
        stato = document.getElementById('stato').innerHTML = "Soleggiato";
    } else if(meteo === "Clouds"){
        stato = document.getElementById('stato').innerHTML = "Nuvoloso";
    }
    else if(meteo === "Rainy"){
        stato = document.getElementById('stato').innerHTML = "Piove";
    }

}

request.send();

}