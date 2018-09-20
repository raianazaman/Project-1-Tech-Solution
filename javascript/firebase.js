// Initialize Firebase
var config = {
    apiKey: "AIzaSyBdOgmeJMsbFhc7NoDTOxLycFBuK6NeyZE",
    authDomain: "unc-coding-project-1.firebaseapp.com",
    databaseURL: "https://unc-coding-project-1.firebaseio.com",
    projectId: "unc-coding-project-1",
    storageBucket: "unc-coding-project-1.appspot.com",
    messagingSenderId: "387514743330"
  };
  firebase.initializeApp(config);

  var database = firebase.database();

$("#userInfo").on("click", function(event){
    event.preventDefault();

    var firstName = $("#first_name").val().trim();
    var lastName = $("#last_name").val().trim();
    var phoneNumber = $("#phoneNumber").val().trim();
    var email = $("#email").val().trim();
  

    console.log(firstName)
    console.log(lastName)
    console.log (phoneNumber)
    console.log(email)

    if ( firstName && lastName && phoneNumber && email){

        $("#first_name").val("");
        $("#last_name").val("");
        $("#phoneNumber").val("");
        $("#email").val("");

        database.ref().push({
            firstName: firstName,
            lastName: lastName,
            phoneNumber: phoneNumber,
            email: email
            
        });
        }   
    
        else{
            console.log("empty form");
        }

    });



    $(document).ready(function() {
        $("#userInfo").click(function(){
            $("#userInfo").hide();
        });
    });