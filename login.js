

function clearError(){
    allErrors= document.getElementsByClassName('err');
    for(let item of allErrors) {
        item.innerHTML="";
    }
} 

function setError(id, error) {
    //Set the error inside of id
    ele = document.getElementById(id);
    ele.getElementsByClassName('err')[0].innerHTML = error;

}

function validateForm() {
    var returnVal = true;
    //clearError();
    //Perform validation and if it fails, returnVal is returned as false
    var enteredName = document.forms['loginform']['fname'].value;
    if (enteredName.length <= 2) {
        setError('name', '   Too short! Try something else');
        returnVal = false;
    }
    if (enteredName.length > 30) {
        setError('name', '   Too long! Try something else');
        returnVal = false;
    }

    var enteredPhone = document.forms['loginform']['fnum'].value;
    if (enteredPhone.length < 10) {
        setError('number', '   Invalid Phone number');
        returnVal = false;
    }
    if (enteredPhone.length > 10) {
        setError('number', '   Invalid Phone number');
        returnVal = false;
    }

    var enteredPass= document.forms['loginform']['fpass'].value
    var enteredCpass= document.forms['loginform']['fcpass'].value
    if (enteredPass!== enteredCpass) {
        setError('cpass', "    passwords don't match");
        returnVal = false;
    }
    
    clearError();
    return returnVal;
    
}
