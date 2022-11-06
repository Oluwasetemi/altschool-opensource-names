// Parse content of text file
let xmlhttp;
if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
    xmlhttp = new XMLHttpRequest();
} else {// code for IE6, IE5
    xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
}
xmlhttp.onreadystatechange = function () {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        let allNames = document.getElementById('names-list');
        allNames.innerText = (xmlhttp.responseText);
    }
}
xmlhttp.open("GET", "names.txt", true);
xmlhttp.send();

// THEME TOGGLE

const checkbox = document.getElementById("checkbox");
checkbox.addEventListener("change", () => {
  document.body.classList.toggle("light");
  document.querySelector("#headline").classList.toggle("light");
  document.querySelector("#reload-btn").classList.toggle("light");
});