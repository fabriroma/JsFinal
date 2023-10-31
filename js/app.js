let clima = {
    apiKey: "7000d2d06ae22015026fdaceba998b17",
    fetchClima:function(ciudad){
    fetch(
        "https://api.openweathermap.org/data/2.5/weather?q="
        + ciudad
        + "&units=metric&appid="
        + this.apiKey
    )
    .then((response)=> {
        return response.json();
    })
    .then((data)=>this.mostrarClima(data))
},
mostrarClima:function(data){
const {temp} = data.main
document.querySelector("#temp").innerHTML = temp +"&#8451;"
}

}
let ciudad= document.querySelector ("#ciudad");
ciudad.addEventListener("change", function(){
    clima.fetchClima(ciudad.value)
})

clima.fetchClima ("buenos aires");