//BackEnd Logic
//Creating the Constructor Function 
function Contact(firstName, lastName, street, city, county){
  this.firstName = firstName;
  this.lastName = lastName;
  this.street = street;
  this.city = city;
  this.county = county;
}

//prototype to get full name and full address to append to the hidden column
Contact.prototype.getFullName = function() {
  return `${this.firstName} ${this.lastName}`;
}

Contact.prototype.getFullAddress = function() {
  return `${this.street}, ${this.city}, ${this.county}`
}


//User interface logic
$(document).ready(function(){
  $(".btn").click(function(event){
    let inputtedFirstName = document.getElementById("firstName").value;
    let inputtedLastName = document.getElementById("lastName").value;
    let inputtedStreet = document.getElementById("street").value;
    let inputtedCity = document.getElementById("city").value;
    let inputtedCounty = document.getElementById("county").value;

    let newContact = new Contact(inputtedFirstName, inputtedLastName, inputtedStreet, inputtedCity, inputtedCounty);

    $("ul#contacts").append("<li><span class='contact'>" + newContact.getFullName() + "</span></li>");

    $(".contact").click(function(){
      $("#show-contacts").show();
      $("#show-contacts h2").text(newContact.getFullName());
      $(".first-name").text(newContact.firstName);
      $(".last-name").text(newContact.lastName);
      $(".address").text(newContact.getFullAddress());
    })

    event.preventDefault();
  });
});







