// // Backend UI

var user = {
  userName: "user",
  userFemale: true,
  userWeight: 0,
  userBac: 0,
  userTime: 0,
  userDrinks: 0,
};

var updateUser = function() {
  if (document.getElementById("radioMale").checked = true) {
    user.userFemale = false;
  } else {
  };
};

var updateBac = function() {
  if (user.userFemale) {
    user.userBac = ((.08 - ((user.userWeight - 100)/2000) * user.userDrinks));
  } else {
    user.userBac = ((.06 - ((user.userWeight - 100)/2000) * user.userDrinks));
  };
  user.userBac = (user.userBac - ((user.userTime / 40 * 0.01)));
};

// This function checks if you are under the legal limit to driveCheck

var driveCheck = function() {
  if (user.userBac <= .08) {
    console.log("User CAN drive");
    return true;
  } else {
    console.log("User CANNOT drive");
  };
};


$(document).ready(function() {
  $("button#sub-button").click(function(event) {
    event.preventDefault();

      user.userName = $("input#userName").val(),
      user.userWeight = $("input#userWeight").val(),
      user.userTime = $("input#userTime").val(),
      user.userDrinks = $("input#userDrinks").val(),
      updateUser();
      updateBac();
      driveCheck();
      console.log("user is" + user);
  });
});
