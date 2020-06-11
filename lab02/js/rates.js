function getRates(){
    url = "https://api.exchangeratesapi.io/latest";
    var xhttp = new XMLHttpRequest();

    xhttp.open("GET", url, true);
    
    xhttp.onload = function() {
        var data = JSON.parse(this.response);
        out = data.base + " " + data.date + "<br>";

        for (var key in data.rates){
            out += key + " " + data.rates[key] + "<br>";
        }
    
        document.getElementById("result").innerHTML = out;
    };

    xhttp.send();;
  };