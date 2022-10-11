


function myFunction() {
    const x = document.getElementById("myDIV");
    const y = document.getElementById("article");
    if (x.className == "bi bi-chevron-down") {
        x.className = "bi bi-chevron-up";
        y.style.display = "block";
        y.style.visibility = "visible";

    } else {
        x.className = "bi bi-chevron-down";
        y.style.display = "none";
    }
}



function offerFunc() {
    const x = document.getElementById("arrow");
    const y = document.getElementById("introd")
    if (x.className == "bi bi-caret-down-fill") {
        x.className = "bi bi-caret-up-fill";
        y.style.display = "block";
        y.style.visibility = "visible";

    } else {
        x.className = "bi bi-caret-down-fill";
        y.style.display = "none";

    }
}

