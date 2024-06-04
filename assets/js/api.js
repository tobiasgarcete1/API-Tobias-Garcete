const url = "https://api.imgflip.com/get_memes";

const procesarPromesa = async (link) => {
    try {
        const respuesta = await fetch(link);
        const info = await respuesta.json();
        console.log(info);
        return info.data.memes;
    } catch (error) {
        console.log("hubo un error: " + error);
    }
}

const container = document.getElementById("container");

procesarPromesa(url)
    .then((memes) => {
        memes.forEach((elemento) => {
            container.innerHTML += `
            <div class="card">
                <img src="${elemento.url}" alt="${elemento.name}">
                <h2>${elemento.name}</h2>
            </div>
            `;
        });
    })
