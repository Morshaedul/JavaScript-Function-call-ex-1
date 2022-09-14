const myObject = {
  firstName:"John",
  lastName: "Doe",
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
}
document.getElementById("demo").innerHTML = myObject.fullName();

// var date =new Date();
// var currentDate=date.getFullYear();
// var Date=date.getDay();
// document.write(currentDate);
// document.write(date);