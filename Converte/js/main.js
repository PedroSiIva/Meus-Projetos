const btn = document.querySelector("#send")

btn.addEventListener("click", function (e) {

    e.preventDefault();

    const name = document.querySelector("#idNome");

    const value = name.value;

    nameConvert = value.replaceAll(".", "")
        .replaceAll("-", "")
        .replaceAll(" ", "-")
        .replaceAll("--", "-")
        .toLowerCase()
        .normalize('NFD').replace(/[\u0300-\u036f]/g, "");

    console.log(nameConvert);

    document.querySelector("h4").innerText = nameConvert;

});


