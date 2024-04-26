function inputForm () {   
    let fullName = document.getElementById('firstName').value + ' ' + document.getElementById('lastName').value 
    let zipCode = document.getElementById('zipCode').value
    
    if (fullName.length >20) {
       alert('This name is invalid')
       return
    } 
    if (zipCode.length === 5) {
        window.open ('file:///C:/Users/Sarahs%20gaming%20PC/Documents/Introduction%20to%20Programming/Week%204/UseAudio2.html')
    }
    else {
        alert('Zip is invalid')
    
    }
    }
    
    