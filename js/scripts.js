//Backend UI

var user = {
  userName: "user",
  userFemale: true,
  userHeight: 0,
  userWeight: 0,
  userMeta: 0,
  userBac: 0,
  userTime: 80,
  userDrinks: 0,
};

var drinkList = [];



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

//This function checks if you are under the legal limit to driveCheck

var driveCheck = function() {
  if (user.userBac <= .08) {
    return true
  }
};


$(document).ready(function() {
  $("#user-info").submit(function(event) {
    event.preventDefault();

    var user = {
      userName: $("input#userName").val(),
      userHeight: $("input#userHeight").val(),
      userWeight: $("input#userWeight").val(),
      userMeta: 0,
  };

  $("#name").text(user.userName);
  $("#height").text(user.userHeight);
  $("#weight").text(user.userWeight);
     console.log(user)
  })
})
