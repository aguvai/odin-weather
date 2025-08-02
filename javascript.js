const key = "M968YXWKY66KWX9TW36NPJSQK";

const data = fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/poughkeepsie?key=${key}&include=current`, { mode: 'cors', })
    .then((response) => {
        return response.json()
    })
    .then((response) => {
        console.log(response)
    })
    .catch(function (err) {
        console.log(err)
    });;