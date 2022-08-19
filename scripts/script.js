// Parse content of text file
let xmlhttp;
if (window.XMLHttpRequest) {
  // code for IE7+, Firefox, Chrome, Opera, Safari
  xmlhttp = new XMLHttpRequest();
} else {
  // code for IE6, IE5
  xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
}
let allNames = document.getElementById("names-list");

const listSortedNamesFunction = (item) => {
  allNames.innerHTML += item + "<br>";
}; //function to list the sorted names individually on the website.

xmlhttp.onreadystatechange = function () {
  if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
    const names = xmlhttp.responseText; //gets all the names from names.text and assigns it to variable names

    const namesAsArray = [names.toLowerCase().split("\n")]; //.toLowerCase() converts the names to lowercase eliminating case sensitivity, .split() divides each full name, and [] puts everything inside the an array.

    const sortedNamesArray = namesAsArray[0].sort(); //sorts the array alphabetically

    sortedNamesArray.forEach(listSortedNamesFunction); //calls the listSortedNamesFunction on each item
    // console.log(typeof names);
  }
};
xmlhttp.open("GET", "names.txt", true);
xmlhttp.send();
