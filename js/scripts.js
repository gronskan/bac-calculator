// // Backend UI

var user = {
  userName: "user",
  userFemale: true,
  userHeight: 0,
  userWeight: 0,
  userBac: 0,
  userTime: 80,
  userDrinks: 0,
};

var drinkList = [];

var gender = $("#gender").val();
if (gender === "female") {
  gender = true
} else gender = false

// var bmi = ((user.userWeight/(user.userHeight * 12)/(user.userHeight * 12) * 703)

var addDrink = function() {
  updateBac();
  updateTime();
};

var updateTime = function() {
  if (inputTime > user.userTime) {
    user.userTime = inputTime;
  };
  user.userBac = (user.userBac - ((user.userTime / 40 * 0.01)));
};

var updateBac = function() {

};

var updateMeta = function() {

};

// This function checks if you are under the legal limit to driveCheck

var driveCheck = function() {
  if (user.userBac <= .08) {
    return true
  }
};


$(document).ready(function() {
  $("#survey").submit(function(event) {
    event.preventDefault();

      user.userName = $("input#new-first-name").val(),
      user.userFemale = gender
      user.userHeight = $("input#new-last-name").val(),
      user.userWeight = $("input#new-weight").val(),
      user.userBac = 0,
      user.userTime = $("input#firstDrinkTime").val(),
      user.userDrinks = $("input#numberDrinks").val(),


     console.log(user)
  });
});
