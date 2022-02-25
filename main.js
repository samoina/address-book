//BackEnd Code
//Creating the Constructor Function 
function Contact(firstName, lastName){
  this.firstName = firstName;
  this.lastName = lastName;
}

//prototype to get full name to append to the hidden column
Contact.prototype.getFullName = function() {
  return `${this.firstName} ${this.lastName}`;
}

//
$(document).ready(function(){
  $(".btn").click(function(event){
    let inputtedFirstName = document.getElementById("firstName").value;
    let inputtedLastName = document.getElementById("lastName").value;

    let newContact = new Contact(inputtedFirstName, inputtedLastName);

    $("ul#contacts").append("<li><span class='contact'>" + newContact.getFullName() + "</span></li>");

    $(".contact").click(function(){
      $("#show-contacts").show();
      $("#show-contacts h2").text(newContact.getFullName());
      $(".first-name").text(newContact.firstName);
      $(".last-name").text(newContact.lastName);
    })
   




    event.preventDefault();
  });
});

