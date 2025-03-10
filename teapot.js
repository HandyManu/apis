const url = "https://http.dog/418.jpg";

fetch(url)
  .then(response => {
    if (response.ok) {
      return response.blob();
    } else {
      throw new Error('Error al obtener la imagen');
    }
  })
  .then(blob => {
    const imageUrl = URL.createObjectURL(blob);
    const imgElement = document.createElement("img");
    imgElement.src = imageUrl;
    imgElement.alt = "HTTP Dog 418";
    document.getElementById("dog-image").appendChild(imgElement);
  })
  .catch(error => {
    console.error("Error:", error);
    document.getElementById("error").textContent = "Ocurrió un error al obtener la imagen.";
  });
