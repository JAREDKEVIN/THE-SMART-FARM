var button = document.getElementById("button");

button.addEventListener("click", ValidateForm);

function ValidateForm(){
    var inputName = document.getElementById("nameForm");
    var inputMail = document.getElementById("mailForm");
    var inputContent = document.getElementById("contentForm");

    submitInfo = "true";


    if(inputName.value.length<0){
        document.getElementById("nameError").innerHTML = "Please put a valid Name";
        submitInfo = "false";
        
    }

    if(inputName.value.length<3){
        
            document.getElementById("nameError").textContent = "Name cannot be less than 3 charaters long";
            submitInfo = "false";
        
    }
    if(inputMail.value == ""){
        document.getElementById("mailError").innerHTML = "Please add an email";
        submitInfo = "false";


    }
    if(inputContent.value.length<65){
        document.getElementById("contentError").innerHTML = "Please input a Message atleast 65 characters long";
        submitInfo = "false";
    }

    if(submitInfo == "false"){
        return false;
    }


}


















