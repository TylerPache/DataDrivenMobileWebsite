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

// Vars to append information to the page
var page = "";
var itm = "";


// Function to display the name and image from the JSON file

function listTemplate(item) {

    for (itm in item) {
        page += "<div>";
        page += "<ul>";
        page += "<li> Name: " + item[itm].name + "</li>";
        
        // Each image links to the details page, when the image is clicked it redirects to the details page and stores the ID of the item that was clicked
        
        page += "<a href='details.html'><img src='img/" + item[itm].pic + ".png' alt='Image of Tree' onclick=(localStorage.setItem('ID'," + item[itm].id + "))></img></a>";
        page += "</ul>";
        page += "</div>";
    }

    //end of list

    document.getElementById("listMenu").innerHTML = page;
}
