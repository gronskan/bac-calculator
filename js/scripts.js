// // Backend UI

var user = {
  userName: "user",
  userFemale: true,
  userWeight: 0,
  userBac: 0,
  userTime: 80,
  userDrinks: 0,
};

var gender = $("#gender").val();
if (gender === "female") {
  gender = true
} else gender = false

var updateTime = function() {
  if ($("input#time").val() > user.userTime) {
    user.userTime = $("input#time").val();
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

// This function checks if you are under the legal limit to driveCheck

var driveCheck = function() {
  if (user.userBac <= .08) {
    return true
  }
};

// // Front End UI

$(document).ready(function() {
  $("#survey").submit(function(event) {
    event.preventDefault();

      user.userName = $("input#uname").val(),
      user.userFemale = gender
      user.userHeight = $("input#height").val(),
      user.userWeight = $("input#weight").val(),
      user.userTime = $("input#time").val(),
      user.userDrinks = $("input#drinks").val(),

      // updateBac();
      // updateTime();
      // driveCheck();
      console.log(user);

      if (updateBac <= .08) {
        result = $("#notok").show();
      } else result = $("#ok").show();

      $("#bac").text(user.userBac)
      $("#survey").hide();

  })
})
