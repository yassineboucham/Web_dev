var guestList = ["Angela", "Jack", "Pam", "Jeams", "Lara", "Jason"];

var guest = prompt("What is the name:");
if (guestList.includes(guest)){
    console.log("Welcom");
} else {
    console.log("Sorry nextime");
}