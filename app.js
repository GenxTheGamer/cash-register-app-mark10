const billAmount = document.querySelector("#bill-amount"); //Bill Amount Input
const cashAmount = document.querySelector("#cash-amount"); //Cash Amount Input
const buttonCheck = document.querySelector("#checkButton"); //Button for taking the inputs and give output
const Message = document.querySelector(".show-message"); //Shows Error Message according to billAmount and cashAmount
const noOfNotes = document.querySelectorAll(".no-of-notes"); //This is the no. of notes row selected by class name all at once.

const Notes = [2000, 500, 100, 20, 10, 5, 1]; //Array of Notes

buttonCheck.addEventListener("click", function checkNotesAmount() {
  hideMessage(); //To initially hide the Message if there is no error.
  if (billAmount.value > 0) {
    if (cashAmount.value >= billAmount.value) {
      const billAndCashAmountDifference = cashAmount.value - billAmount.value; //We Calculate the difference of cash amount & bill amount for further use
      calculateChange(billAndCashAmountDifference); //Function to calculate the result we need.
    } else {
      showMessage("Really?"); //If your bill amount is greater then RIP.
    }
  } else {
    showMessage("Invalid amount");
  }
});

function calculateChange(billAndCashAmountDifference) {
  for (let i = 0; i < Notes.length; i++) {
    //Loop to iterate at each note to calculate amt of notes we will need.
    const numberofNotes = Math.trunc(billAndCashAmountDifference / Notes[i]); //Math.trunc is js function for mathematical stuff.
    billAndCashAmountDifference %= Notes[i]; //Just like we do ++i we are differencing them each time
    noOfNotes[i].innerText = numberofNotes;
  }
}

function hideMessage() {
  Message.style.display = "none";
}

function showMessage(msg) {
  Message.style.display = "block";
  Message.innerText = msg;
}
