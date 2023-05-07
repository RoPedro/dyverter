// Defining a event listener to each modes of conversion when the refered button is clicked

const milesButton = document.getElementById("milesKmBtn");
milesButton.addEventListener("click", milesAndKilometers);

const poundsButton = document.getElementById("poundsKgBtn");
poundsButton.addEventListener("click", poundsAndKilograms);

const gallonsButton = document.getElementById("gallonsLiterBtn");
gallonsButton.addEventListener("click", gallonsAndLiter);

// Defining a variable that represents the section where the bars will be displayed, this way we can work with it in the JS file
var bars_Section = document.getElementById("bars")
let lastClicked = "" 

function milesAndKilometers() {
    if (lastClicked !== "milesKm") {
        while (bars_Section.firstChild) {
            bars_Section.removeChild(bars_Section.firstChild)
        }
        
        var textBoxMiles = document.createElement("input")
        var textBoxKm = document.createElement("input")
        textBoxMiles.setAttribute("type", "number")
        textBoxMiles.setAttribute("id", "miles")
        textBoxMiles.setAttribute("placeholder", "Miles")
        textBoxKm.setAttribute("type", "number")
        textBoxKm.setAttribute("id", "km")
        textBoxKm.setAttribute("placeholder", "Km")

        bars_Section.appendChild(textBoxMiles)
        bars_Section.appendChild(textBoxKm)
        
        lastClicked = "milesKm"

        textBoxMiles.addEventListener("input", function() {
            var miles = parseFloat(textBoxMiles.value)
            var km = (miles * 1.609).toFixed(2)
            textBoxKm.value = km 
        })
        textBoxKm.addEventListener("input", function() {
            var km = parseFloat(textBoxKm.value)
            var miles = (km / 1.609).toFixed(2)
            textBoxMiles.value = miles
        })
    }
}

function poundsAndKilograms() {
    if (lastClicked !== "poundsKg") {
        while (bars_Section.firstChild) {
            bars_Section.removeChild(bars_Section.firstChild)
        }

        textBoxPounds = document.createElement("input")
        textBoxKilograms = document.createElement("input")
        textBoxPounds.setAttribute("type", "number")
        textBoxPounds.setAttribute("id", "pounds")
        textBoxPounds.setAttribute("placeholder", "Pounds")
        textBoxKilograms.setAttribute("type", "number")
        textBoxKilograms.setAttribute("id", "kilograms")
        textBoxKilograms.setAttribute("placeholder", "Kilograms")
    
        bars_Section.appendChild(textBoxPounds)
        bars_Section.appendChild(textBoxKilograms)
        
        lastClicked = "poundsKg"

        textBoxPounds.addEventListener("input", function() {
            var pounds = parseFloat(textBoxPounds.value)
            var kilograms = (pounds * 2.205).toFixed(2)
            textBoxKilograms.value = kilograms
        })
        textBoxKilograms.addEventListener("input", function() {
            var kilograms = parseFloat(textBoxKilograms.value)
            var pounds = (kilograms / 2.205).toFixed(2)
            textBoxPounds.value = pounds
        })

    } 
}

function gallonsAndLiter() {
    if (lastClicked !== "gallonsLiter") {
        while (bars_Section.firstChild) {
            bars_Section.removeChild(bars_Section.firstChild)
        }

        textBoxGallons = document.createElement("input")
        textBoxLiter = document.createElement("input")
        textBoxGallons.setAttribute("type", "number")
        textBoxGallons.setAttribute("id", "gallons")
        textBoxGallons.setAttribute("placeholder", "Gallons")
        textBoxLiter.setAttribute("type", "number")
        textBoxLiter.setAttribute("id", "liter")
        textBoxLiter.setAttribute("placeholder", "Liter")
        
        bars_Section.appendChild(textBoxGallons)
        bars_Section.appendChild(textBoxLiter)
        
        lastClicked = "gallonsLiter"

        textBoxGallons.addEventListener("input", function() {
            var gallons = parseFloat(textBoxGallons.value)
            var liter = (gallons * 3.785).toFixed(2)
            textBoxLiter.value = liter
        })
        textBoxLiter.addEventListener("input", function() {
            var liter = parseFloat(textBoxLiter.value)
            var gallons = (liter / 3.785).toFixed(2)
            textBoxGallons.value = gallons
        })

    } 
}