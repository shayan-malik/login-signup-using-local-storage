let localStr = localStorage.getItem("users")

let users = []

if(localStr){
    users = JSON.parse(localStr)
}

function signupUser(){
    let userName = document.getElementById("userName").value;
    let userEmail = document.getElementById("userEmail").value;
    let userPassword = document.getElementById("userPassword").value;

    let currentUser = null;


    for(let i = 0; i < users.length; i++){
        if(users[i].email == userEmail){
            alert("Email Already Exist");
            return;
        }
        
    }

    alert("SignUp Successful")
    window.location.pathname = "/C:/Users/Shayan.DESKTOP-UTQK6M5/Desktop/LOGIN%20SIGNUP%20using%20Local%20Storage/index.html"
        

    

    let userObj = {
        name: userName,
        email: userEmail,
        password: userPassword

    }
    users.push(userObj)

    localStorage.setItem("users", JSON.stringify(users));

}


console.log(window.location.pathname);




function loginUser(){
    let loginEmail = document.getElementById("loginEmail").value;
    let loginPassword = document.getElementById("loginPassword").value;

    let currentUser = null;

    for(let i = 0; i < users.length; i++){
        if(users[i].email == loginEmail){
            currentUser = users[i];
            break;
        }
    }

    if(currentUser){

        if(currentUser.password == loginPassword){
            alert("Login Successful")
            window.location.pathname = "/C:/Users/Shayan.DESKTOP-UTQK6M5/Desktop/LOGIN%20SIGNUP%20using%20Local%20Storage/dashboard.html"
        }
        else{
            alert("Password did not matched")
        }

    }
    else{
        alert("Account Nor Register With This Email")
    }



}