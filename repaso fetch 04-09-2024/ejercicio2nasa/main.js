const nasaURL = 'https://api.nasa.gov/planetary/apod?api_key=hMEqKxnCRvNt8YWvfCU0yGcDgSUUVCsRP8443BXt  ';

fetch(nasaURL)
    .then((response) => response.json())
    .then((data) => {

        let tituloNASA = data.title;
        document.getElementById("tituloNASA").innerHTML = tituloNASA;

        let explicacionNASA = data.explanation;
        document.getElementById("explicacionNASA").innerHTML = explicacionNASA;
      
        let imagenNASA = data.hdurl;
        document.getElementById("imagenNASA").src = imagenNASA;

    })
    .catch((err) => console.log(err));