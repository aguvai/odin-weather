const key = "M968YXWKY66KWX9TW36NPJSQK";
let location = "hyde park, ny"

const option = "async";

if (option === "promises") {
    console.log("promises chosen")
    
    const data = fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=${key}&include=current`, { mode: 'cors', })
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            console.log(`
            ${data.resolvedAddress}:

            Current time: ${data.currentConditions.datetime},
            
            Temperature: ${data.currentConditions.temp}
            Feels like: ${data.currentConditions.feelslike}

            Humidity: ${data.currentConditions.humidity}
            `)
        })
        .catch(function (err) {
            console.log(err)
        });;
} else if (option === "async") {
    console.log("async chosen")

    getWeather = async function () {
        const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=${key}&include=current`, { mode: 'cors', })
        const data = await response.json();
        console.log(`
            ${data.resolvedAddress}:

            Current time: ${data.currentConditions.datetime},
            
            Temperature: ${data.currentConditions.temp}
            Feels like: ${data.currentConditions.feelslike}

            Humidity: ${data.currentConditions.humidity}
            `)
    }()
}