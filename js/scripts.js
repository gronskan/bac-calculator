// // Backend UI

var user = {
  userName: "user",
  userFemale: true,
  userWeight: 0,
  userBac: 0,
  userTime: 80,
  userDrinks: 0,
};

var addDrink = function() {
  updateBac();
  updateTime();
};

var updateTime = function(inputTime) {
  if (inputTime > user.userTime) {
    user.userTime = inputTime;
  };
  user.userBac = (user.userBac - ((user.userTime / 40 * 0.01)));
};

var updateBac = function() {
  if (user.userFemale) {
    user.userBac = ((.08 - ((user.userWeight - 100)/2000) * user.userDrinks));
  } else {
    user.userBac = ((.06 - ((user.userWeight - 100)/2000) * user.userDrinks));
  };
  
};

//This function checks if you are under the legal limit to driveCheck

var driveCheck = function() {
  if (user.userBac <= .08) {
    return true
  }
};


$(document).ready(function() {
  $("#survey").submit(function(event) {
    event.preventDefault();

      user.userName = $("input#new-first-name").val(),
      user.userHeight = $("input#new-last-name").val(),
      user.userWeight = $("input#new-weight").val(),
      user.userMeta = 0,
      user.userBac = 0,


     console.log(user)
  })
})
