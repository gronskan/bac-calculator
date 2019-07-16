//Backend UI

var user = {
  userName: "user",
  userHeight: 0,
  userWeight: 0,
  userMeta: 0,
  userBac: 0,
};

var addDrink = function() {
  updateBac();
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

  })
})
