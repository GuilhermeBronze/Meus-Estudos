function calculate(){

    let fBill=document.querySelector('#bill') 
    let fTip=document.querySelector('#tip')

    let bill = Number(fBill.value)
    let tip = Number(fTip.value)

    let resultTip = (bill*tip/100)
    let resultBill = bill+(bill*tip/100)

    let showResultTip = document.querySelector('#resultTip')
    let showResultBill = document.querySelector('#resultBill')

    showResultTip.innerHTML = ""
    showResultBill.innerHTML = ""

    if(bill == 0){
        window.alert('The bill amount cannot be 0')
    }else{

        showResultTip.innerHTML += ` $${resultTip}`
        showResultBill.innerHTML += ` $${resultBill}`

    
    }




    

}
