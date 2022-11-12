// Parse content of text file
fetchNames("names.txt");

async function fetchNames(file) {
    let fetchFile = await fetch(file);
    let spoolName = await fetchFile.text();
    document.getElementById("names-list").innerText = spoolName;
}

// THEME TOGGLE

const checkbox = document.getElementById("checkbox");
checkbox.addEventListener("change", () => {
    document.body.classList.toggle("light");
    document.querySelector("#headline").classList.toggle("light");
    document.querySelector("#reload-btn").classList.toggle("light");
});