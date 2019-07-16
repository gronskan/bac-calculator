// var user = {
//   userName: $("input#userName").val(),
//   userHeight: $("input#userHeight").val(),
//   userWeight: $("input#userWeight").val(),
//   userMeta: 0,
// };


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
