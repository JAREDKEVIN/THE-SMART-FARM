var button = document.getElementById("button");

button.addEventListener("click", ValidateForm);

function ValidateForm(){
    var inputName = document.getElementById("nameForm");
    var inputMail = document.getElementById("mailForm");
    var inputContent = document.getElementById("contentForm");

    submitInfo = "true";


    if(inputName.value == ""){
        document.getElementById("nameError").innerHTML = "Please put a valid Name";
        submitInfo = "false";
        
    }

    if(inputName.value.length<3){
        
            document.getElementById("nameError").textContent = "Name cannot be less than 3 charaters long";
            submitInfo = "false";
        
    }
    if(inputMail.value == "true"){
        document.getElementById("mailError").innerHTML = "Please add an email";
        submitInfo = "false";


    }
    if(inputContent.length<65){
        document.getElementById("contentError").innerHTML = "Please input a Message";
        submitInfo = "false";
    }

    if(submitInfo == "false"){
        return false;
    }


}


















