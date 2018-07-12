// JavaScript Document
(function() {
  function buildQuiz() {
    // we'll need a place to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // we'll want to store the list of answer choices
      const answers = [];

      // and for each available answer...
      for (letter in currentQuestion.answers) {
        // ...add an HTML radio button
        answers.push(
          `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
          </label>`
        );
      }

      // add this question and its answers to the output
      output.push(
        `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join("")} </div>`
      );
    });

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join("");
  }

  function showResults() {
    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll(".answers");

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if (userAnswer === currentQuestion.correctAnswer) {
        // add to the number of correct answers
        numCorrect++;

        // color the answers green
        answerContainers[questionNumber].style.color = "lightgreen";
      } else {
        // if answer is wrong or blank
        // color the answers red
        answerContainers[questionNumber].style.color = "red";
      }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  const quizContainer = document.getElementById("quiz");
  const resultsContainer = document.getElementById("results");
  const submitButton = document.getElementById("submit");
  const myQuestions = [
    {
      question: "Approximately how many tonnes of food is thrown away each day",
      answers: {
        a: "100",
        b: "3500",
        c: "9100",
        d: "42"

      },
      correctAnswer: "b"
    },
    {
      question: "What is the correct way to dispose of uneaten food?",
      answers: {
        a: "Throw it away",
        b: "Eat it",
        c: "Give it to a food bank"
      },
      correctAnswer: "c"
    },
    {
      question: "Which of these should not be given to a food bank?",
      answers: {
        a: "Stale bread",
        b: "Unopened cans with small fractures",
        c: "Eggs about to expire",
        d: "Leftovers"
      },
      correctAnswer: "b"
    }
  ];

  // display quiz right away
  buildQuiz();

  // on submit, show results
  submitButton.addEventListener("click", showResults);
})();

// map

var marker;
      var map;
      function initMap() {
  var myLatLng = {lat: -25.363, lng: 131.044};

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 11,
    center: {lat:22.3964,lng:114.1095}
  });

  var marker = new google.maps.Marker({
    position: {lat:22.286829,lng:114.1363283},
    map: map,
    draggable: true,
    animation: google.maps.Animation.DROP,
    title: 'West Kowloon District Office'
  });
  google.maps.event.addListener(marker, 'click', toggleBounce);

  var marker1 = new google.maps.Marker({
    position: {lat:22.285764 ,lng : 114.150443},
    map: map,
    title: 'West Kowloon District Office'
  });
  var marker2 = new google.maps.Marker({
    position: {lat:22.332139,lng:114.1679806},
    map: map,
    title: 'West Kowloon District Office'
  });
  var marker3 = new google.maps.Marker({
    position: {lat:22.374012,lng : 114.1112939},
    map: map,
    title: 'West New Territories District Office'
  });
  var marker4 = new google.maps.Marker({
    position: {lat:22.4707156,lng : 113.9979223},
    map: map,
    title: 'West New Territories District Office'
  });
  var marker5 = new google.maps.Marker({
    position: {lat:22.3254763,lng :114.1619741},
    map: map,
    title: 'West Kowloon District Office'
  });

  }
  function toggleBounce() {
    if (marker.getAnimation() !== null) {
      marker.setAnimation(null);
    } else {
      marker.setAnimation(google.maps.Animation.BOUNCE);
    }
  }