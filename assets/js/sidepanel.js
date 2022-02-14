// sets the height and width of side panel when clicked
function openNav() {
    document.getElementById("sidepanel").style.width = "250px";
    document.getElementById("sidepanel").style.height = "315px";
}

// sets the height and width to 0(hidden) when close button is clicked
function closeNav() {
    document.getElementById("sidepanel").style.width = "0";
    document.getElementById("sidepanel").style.height = "0";
}