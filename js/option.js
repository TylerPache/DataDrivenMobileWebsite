const xhr = new XMLHttpRequest(),
    url = "inventory.json";

xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
        const menuItems = JSON.parse(xhr.responseText);
        // menuItems now holds the objects parsed from the JSON file. You will need to iterate over this and build a template html
        listTemplate(menuItems)
    }
};
xhr.open("GET", url, true);
xhr.send(null);

// Var to append to the page
var page = "";
// Var to store the ID from local storage to be parsed through in the function
var itm = localStorage.getItem("ID");


// Function takes in ID of the item from local storage and outputs all information 
// relating to that ID number

function listTemplate(item) {

    page += "<div>";
    page += "<ul>";
    page += "<li> Name: " + item[itm].name + "</li>";
    page += "<li> Genus: " + item[itm].genus + "</li>";
    page += "<li> Species: " + item[itm].species + "</li>";
    page += "<li> Height: " + item[itm].height + "</li>";
    page += "<li> Description: " + item[itm].description + "</li>";
    page += "<img src='img/" + item[itm].pic + ".png' alt='Image of Tree'></img>";
    page += "</ul>";
    page += "</div>";

    //end of list

    document.getElementById("listMenu").innerHTML = page;
}
