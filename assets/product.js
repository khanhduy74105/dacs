function openPage(pageName, elmnt, color) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("listproduce");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].style.backgroundColor = "";
        tablinks[i].style.borderBottom = "none";
    }
    document.getElementById(pageName).style.display = "block";
    elmnt.style.backgroundColor = color;
    elmnt.style.borderBottom = " 3px solid red";
}





