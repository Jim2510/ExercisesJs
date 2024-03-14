const button = document.createElement("button");
button.classList.add("border-solid");
button.classList.add("border-2");
button.classList.add("border-black");
button.classList.add("mt-3");
button.classList.add("p-3");
document.body.appendChild(button);
button.innerText = "CERCA";
const body = document.querySelector("body");
body.classList.add("flex");
body.classList.add("flex-col");
body.classList.add("items-center");
button.addEventListener("click", () => {
    const findEpisode = async () => {
        try {
            document.querySelectorAll('.character-container').forEach(el => el.remove());
            const inputVal = document.querySelector("input").value;
            const response = await fetch(`https://rickandmortyapi.com/api/character/?name=${inputVal}`);
            if (response.ok) {
                const data = await response.json();
                const results = data.results;
                console.log(results);
                results.forEach(element => {
                    const container = document.createElement("div");
                    container.classList.add("w-[200px]");
                    container.classList.add("bg-[#000]");
                    container.classList.add("text-white");
                    container.classList.add("flex");
                    container.classList.add("flex-col");
                    container.classList.add("text-center");
                    container.classList.add("my-3");
                    container.classList.add("p-3");
                    container.classList.add("rounded-xl");
                    container.classList.add('character-container');
                    const title = document.createElement("h2");
                    const img = document.createElement("img");
                    const status = document.createElement("h3");
                    title.innerText = element.name;
                    img.src = element.image;
                    status.innerText = element.status;
                    container.appendChild(title);
                    container.appendChild(img);
                    container.appendChild(status);
                    document.body.appendChild(container);
                })

            } else {
                throw new Error(response.status)
            }
        } catch (error) {
            console.error(error)
        }
    }
    findEpisode()
})