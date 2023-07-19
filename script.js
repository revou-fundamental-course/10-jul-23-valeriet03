var myApple = 30;
var yourApple = 50;

var firstNavigation = document.getElementById("titleLabel");
var submitButton = document.getElementById("submitButton");

submitButton.addEventListener("click", function (event) {
    event.preventDefault();
    console.log(document.getElementById("ageInput").value, "--AGE")
    var ageValue = document.getElementById("ageInput").value
    var fnameValue = document.getElementById("fNameInput").value
    var lnameValue = document.getElementById("lNameInput").value
    nameValidation(fnameValue, lnameValue, ageValue)
})

//MARK : Validation
function nameValidation (fname, lname, age) {
    if (fname == "" || lname == "") {
        alert("Ada yang kosong")
    } else {
        alert("Sukses")
        updateUI(fname, lname, age)
    }
}

function ageValidation(age) {
    const maximumAge = 99
    if (age > maximumAge) {
        console.log("Lebih dari 99 tahun")
    } else {
        console.log("Kurang dari 99 tahun")
    }
}

function updateUI(fname, lname, age) {
    var fnameOutput = document.getElementById("fNameOutput")
    fnameOutput.textContent = fname
    var lnameOutput = document.getElementById("lNameOutput")
    lnameOutput.textContent = lname
    var ageOutput = document.getElementById("ageOutput")
    ageOutput.textContent = age
}

//MARK: Slider
var slideIndex = 1;
setInterval(function() {
    //plusDivs(1);
}, 5000);

function plusDivs(index) {
    showImage(slideIndex += index)
}

function showImage(index) {
    //index = 2
    console.log(index)
    const imgList = document.getElementsByClassName("slider");
    var i;
    if (index > imgList.length) {slideIndex = 1;}
    if (index < 1) {slideIndex = imgList.length;}
    for (i = 0; i < imgList.length; i++) {
        imgList[i].style.display = "none";
    }
    imgList[slideIndex - 1].style.display = "block";
}