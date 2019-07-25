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
  };
};

var updateBac = function() {
  if (user.userFemale) {
    user.userBac = ((0.118358 * (0.993822**user.userWeight)) * user.userDrinks);
  } else {
    user.userBac = ((0.115943 * (0.993084**user.userWeight)) * user.userDrinks);
  };
    user.userBac = (user.userBac - ((user.userTime / 40 * 0.01)));
};

// This function checks if you are under the legal limit to driveCheck

var driveCheck = function() {
  if (user.userBac <= 0.08) {
    console.log("User CAN drive");
    return true;
  } else {
    console.log("User CANNOT drive");
  };
};

// // Front End UI

$(document).ready(function() {
  $("button#sub-button").click(function(event) {
    event.preventDefault();
    alert("WARNING: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.")
      user.userName = $("input#userName").val(),
      user.userWeight = $("input#userWeight").val(),
      user.userTime = $("input#userTime").val(),
      user.userDrinks = $("input#userDrinks").val(),
      updateUser();
      updateBac();
      driveCheck();
      if (driveCheck(true)) {
        $("#ok").show();
      } else $("#notok").show();
      $(".bac").text((user.userBac).toFixed(2));
      $("#survey").hide();
  })
})
