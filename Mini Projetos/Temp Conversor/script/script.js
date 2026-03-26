

    let fCelsius = document.querySelector("#celsius")
    let fFarinha = document.querySelector("#farinha")
    let fKelvin = document.querySelector("#kelvin")
    

   // window.alert(`cu ${fCelsius.value} ${fFarinha.value} ${fKelvin.value}`)

function convCelsius(){

    let celsius = Number(fCelsius.value)

    let celsiusToFarinha = (celsius * 9 / 5) + 32
    let celsiusToKelvin =  celsius + 273.15

    document.querySelector("#farinha").value = celsiusToFarinha
    document.querySelector("#kelvin").value = celsiusToKelvin

    if(fCelsius.value == ""){

        fFarinha.value = ""
        fKelvin.value = ""

    }
}

function convFarinha(){

    let farinha = Number(fFarinha.value)

    let farinhaToCelsius = (farinha - 32) * 5 / 9
    let farinhaToKelvin = (farinha - 32) * 5 / 9 + 273.15

    document.querySelector("#celsius").value = farinhaToCelsius
    document.querySelector("#kelvin").value = farinhaToKelvin
    
    if(fFarinha.value == ""){

        fCelsius.value = ""
        fKelvin.value = ""

    }
}

function convKelvin(){

    let kelvin = Number(fKelvin.value)
    
    let kelvinToCelsius = kelvin - 273.15
    let kelvinToFarinha = (kelvin - 273.15) * 9 / 5 + 32


    document.querySelector("#celsius").value = kelvinToCelsius
    document.querySelector("#farinha").value = kelvinToFarinha

    if(fKelvin.value == ""){

        fCelsius.value = ""
        fFarinha.value = ""

    }
}

    

