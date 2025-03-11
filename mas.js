const apiUrl = "https://hp-api.onrender.com/api/characters";

fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    const charactersContainer = document.getElementById("characters");
    data.forEach(character => {
      const characterDiv = document.createElement("div");
      characterDiv.classList.add("character");
      characterDiv.innerHTML = `
        <img src="${character.image}" alt="${character.name}">
        <h3>${character.name}</h3>
        <p>House: ${character.house || "Unknown"}</p>
      `;
      charactersContainer.appendChild(characterDiv);
    });
  })
  .catch(error => console.error("Error fetching data:", error));
