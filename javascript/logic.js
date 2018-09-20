$(document).ready(function() {
    $("#introSection").hide();
    $("#messageSection").hide();
    $('#instructionModal').modal();
    $('.parallax').parallax(); // function for MaterializeCSS parallax componenet
  


    $("#introSection").fadeIn(1000 * 5, function() { // fade in page elements
        // fadeIn function
    });

    $("#questionSpace").hide()
    var correctCounter = 0,
        incorrectCounter = 0,
        unansweredCounter = 0,
        currentQuestionIndex = 0;


    var congratsMessages = ['Great going cadet', 'On the money astrophysicist', "To Infinity!"];

    function randomNum(x) {
        var roll = Math.floor(Math.random() * x);
        return roll;
    }

    function randomCongrats() {
        var messageRoll = randomNum(congratsMessages.length);
    }

    function countDown() {
        currentQuestionIndex++;
        console.log("in countdown", currentQuestionIndex);


        // $('.pickAnswer').click(function() {
        //     $(this).data('clicked', true);
        // });
        // var i = 30;
        // var myInterval = setInterval(function() {

        //     if (i < 10) {
        //         $('#timerSeconds').html("0" + i);
        //         $(".pickAnswer").on("click", function() {
        //             clearInterval(myInterval);
        //         })
        //     } else {
        //         $('#timerSeconds').html(i);
        //         $(".pickAnswer").on("click", function() {
        //             clearInterval(myInterval);
        //         })
        //     }

        //     if (i === 0) {
        //         unansweredCounter++;
        //         clearInterval(myInterval);
        //         currentQuestionIndex++;
        //         $('#timer').effect("pulsate", {
        //             times: 25
        //         }, 1000 * 5);
        //         i = 30;
        //         postQuestion(currentQuestionIndex, questArr);
        //     } else {
        //         i--;
        //     }
        // }, 1000);
    }

    var mvpQuestions = [
 
     // question 1
     {
        "q": "what kind of laptop we are looking for?",
        "c": ["Mac", "Windows", "Chrome OS"],   
    },
     
    // question 2
     {
        "q": "Screen size",
        "c": ["15 inch", "13 inch", "17 inch"],
        
    },
   // question 3
    {
        "q": "What kind of work will you use the laptop for?",
        "c": ["Documentation", "Design work", "Programing","Game"]
       },
    ]

    var questions = [
        // question 1
        {
            "q": "What are you looking for?",
            "c": ["Laptop", "Desktop"],
            "answer": 0
        },
         // question 2
        {
            "q": "What is the purpose of the laptop?",
            "c": ["Work", "Study","Entertainment"],
            "answer": 0
        },]

    var questionWork=[
        // question 3 (if chose 1/2) need option to chose multiple
        {
            "q": "What kind of work will you use the laptop for?",
            "c": ["Documentation", "Design work", "Programing/coding"],
            "answer": 0
        },
        {
            "q": "whats your budget?",
            "c": ["less than then $500", "$500-$1000", "$1000-$2000","if like it ill buy it"],
            "answer": 2
        },
        
        // question 5
        {
            "q": "Screen size",
            "c": ["15", "13", "17"],
            "answer": 1
        },
        // question 6
        {
            "q": "OS prefrences??",
            "c": ["Mac", "PC", "Chrome OS"],
            "answer": 1
        },
        // question 7
        {
            "q": "Do you prefer Touch Screen?",
            "c": ["Yes", "No", "either"],
            "answer": 2
        },
    ]
        
    var questionGame =[
        // question 3 (if chose 3) need option to chose multiple
        {
            "q": "What king of entertainment will this be used for?",
            "c": ["Gaming", "Music", "Photo/video editing","Movies/TV/YouTube"],
            "answer": 2
        },
        // question 4
        {
            "q": "whats your budget?",
            "c": ["less than then $500", "$500-$1000", "$1000-$2000","if like it ill buy it"],
            "answer": 2
        },
        
        // question 5
        {
            "q": "Screen size",
            "c": ["15", "13", "17"],
            "answer": 1
        },
        // question 6
        {
            "q": "OS prefrences??",
            "c": ["Mac", "PC", "Chrome OS"],
            "answer": 1
        },
        // question 7
        {
            "q": "Do you prefer Touch Screen?",
            "c": ["Yes", "No", "either"],
            "answer": 2
        },
        // question 9
        
        // question 10
        
    ];

   var ans =[];

//    var currentCategory = questions;

    $(document).on("click", ".pickAnswer", function() {
        
        var choice = $(this).text();

        if (choice === "Documentation") {
            choice = "4GB"
        } 
        else if (choice === "Design work") {
            choice = "8GB"
        } 
        else if (choice === "Programing" || choice === "Game") {
            choice = "16GB"
        }

        ans.push(choice);

        postQuestion(currentQuestionIndex, mvpQuestions);

        // if (choice === "Work" || choice === "Study") {
        //     console.log("in work or study")
        //     currentQuestionIndex = 0;
        //     currentCategory = questionWork;
        // }
        // else if (choice === "Entertainment") {
        //     console.log("in enter")
        //     currentQuestionIndex = 0;
        //     currentCategory = questionGame;
        // } 
        
        // if (currentCategory === questions) {
        //     console.log("in quest categ")
        //     postQuestion(currentQuestionIndex, questions);
        // }
        // else if (currentCategory === questionWork) {
        //     console.log("in work categ")
        //     postQuestion(currentQuestionIndex, questionWork);
        // }
        // else if (currentCategory === questionGame){
        //     console.log("in game categ")
        //     postQuestion(currentQuestionIndex, questionGame);
        // }

    
    });

    function postQuestion(n, questArr) {
        if (currentQuestionIndex < questArr.length) {
            countDown();
            $('#question').remove();
            $('.pickAnswer').remove();
            $('#questionContainer').append("<div id='question'>" + questArr[n].q + "</div>");
            for (var i = 0; i < questArr[n].c.length; i++) {
                var newDiv = $("<div>");
                newDiv.addClass("pickAnswer").attr("indexnum", i).text(questArr[n].c[i]);
                $('#choices').append(newDiv);
            }


        } else {
            getItemInfo(); // the conditional successfully loops the game
        }

        
    }

    function getItemInfo() {

        var queryItem = ans.join(" ");

        var queryURL = "https://cors-anywhere.herokuapp.com/http://api.walmartlabs.com/v1/search?apiKey=tanxay6ywk5x8v56hkjm7rqs&lsPublisherId={Your%20LinkShare%20Publisher%20Id}&query=" + queryItem;
        console.log("in getItemInfo", queryURL);
        
        $.ajax({
           url: queryURL,
           method: "GET"
         })
        
         // After the data from the AJAX request comes back
           .then(function(response) {
               console.log("ajax res", response);
               $("#questionSpace").hide();
               $("#resultsSpace").show();        
               var result = response.items;
        
               for (var i=0; i < 5; i++) {
                    var div = $("<div class = 'spec'> <br/> <hr/>");
        
                    var name = $("<p>" + result[i].name + "</p>");
                    var salePrice = $("<p> $" + result[i].salePrice + "</p>");
                    var img = $("<img>").attr("src", result[i].mediumImage);
                    //before storing in data-item, may have to remove quotes inside name
                    var button = $("<button>").attr("id", "reviews").attr("data-item", result[i].name).text("Reviews");
                    div.append(name, salePrice, img, button);
                    
                    $("#resultSpace").append(div);
               }
           });

           $("#resultSpace").show();
    }

    $(document).on("click", "#reviews", function() {
        var item = $(this).attr("data-item");
        console.log(item);

         var queryURL = "https://www.googleapis.com/youtube/v3/search?part=snippet&q=" + item + "&type=video&videoCaption=closedCaption&maxResults=10&key=AIzaSyAson-jfu7sHopOIhJ3NGOqJI-khuXm4-M";
        //"https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UCsTcErHg8oDvUnTzoqsYeNw&maxResults=10&key=AIzaSyAson-jfu7sHopOIhJ3NGOqJI-khuXm4-M"
        // $("#resultSpace").empty();
        
           $.ajax({
               url: queryURL,
               method: "GET"
             })
        
             // After the data from the AJAX request comes back
               .then(function(response) {
                   console.log("youtube res", response);
                   $("#resultSpace").hide();
        
                   var resultsArray = response.items;
                   if (resultsArray.length > 0) {   //execute if there is at last 1 result

                    var resultsBtn = $("<button>").attr("id", "walmart").text("Go Back to Items");
                    $("#reviewSpace").append(resultsBtn);
                       for (var i = 0; i < 5; i++) {
                           var newDiv = $("<div class='video'><br/><hr/>");
        
                           var videoTitle = $("<h4>" + resultsArray[i].snippet.title + "</h4>");
                           newDiv.append(videoTitle);
        
                           var videoDescription = $("<p> Description: " + resultsArray[i].snippet.description + "</p>");
                           newDiv.append(videoDescription);
        
                           var videoThumbnail = resultsArray[i].snippet.thumbnails.default.url;
                           var videoImage = $("<img src ='" + videoThumbnail + "' alt = 'video'> <br/><br/>");
                           newDiv.append(videoImage);
        
                           var vidId = resultsArray[i].id.videoId;
                           var vidIdFullLink = "https://www.youtube.com/watch?v="+vidId;
        
                           //dynamically creating "save" and "view" buttons for each search result
        
                           newDiv.append("<button id='yTLink'><a href='"+ vidIdFullLink+"'" + "target='_blank'>View</a></button>");
                        
                           $("#reviewSpace").append(newDiv);
                       }
                       
                       $("#reviewSpace").show();
                   }
               });
    });

    $(document).on("click", "#walmart", function() {
        $("#reviewSpace").hide();
        getItemInfo();
    });

    function startTrivia() {
        $('#messageSection').hide();
        $('#gameMessage').empty()
        $('#questionContainer').show();
        $('#choices').show();
        correctCounter = 0;
        incorrectCounter = 0;
        unansweredCounter = 0;
        currentQuestionIndex = 0;

        // postQuestion(currentQuestionIndex, questions);
        postQuestion(currentQuestionIndex, mvpQuestions);

    }

    function resetGame() {
        $('#messageSection').show();
        $('#questionContainer').hide();
        $('#choices').hide();


        $('#gameMessage').append("<h2>You have completed the game!</h2>");
        $('#gameMessage').append("<h4>Total Correct: " + correctCounter + "</h4>");
        $('#gameMessage').append("<h4>Total Incorrect: " + incorrectCounter + "</h4>");
        $('#gameMessage').append("<h4>Total Unanswered: " + unansweredCounter + "</h4>");

        setTimeout(startTrivia, 1000 * 10);

    }



    $("#startButton").on("click", function() {
        $("#buttonRow").hide();
        $("#introCard").remove();
  
        $("#questionSpace").show();

        startTrivia();

    });


});
