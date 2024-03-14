const input = document.querySelector("input")

input.addEventListener("input", () => {
    const inputVal = document.querySelector("input").value;
    const contFilm = document.querySelector(".contFilm");
    const getFilm = async () => {
        try {
            const response = await fetch(`https://www.omdbapi.com/?apikey=8a9da3b7&s=${inputVal}`)
            if (response.ok) {
                const data = await response.json();
                console.log(data);
                data.Search.forEach(film => {
                    const divFilm = document.createElement("div")
                    const h2 = document.createElement("h2");
                    const img = document.createElement("img");
                    const p = document.createElement("p");
                    divFilm.appendChild(h2);
                    divFilm.appendChild(img);
                    divFilm.appendChild(p);
                    h2.innerText = film.Title;
                    img.src = film.Poster;
                    p.innerText = film.Year;
                    contFilm.appendChild(divFilm)
                })

            }
        } catch (error) {

        }
    }
    getFilm()
})
