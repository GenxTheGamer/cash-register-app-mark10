const billAmount = document.querySelector("#bill-amount");
const cashAmount = document.querySelector("#cash-amount");
const buttonCheck = document.querySelector("#checkButton");
const Message = document.querySelector(".show-message");
const noOfNotes = document.querySelectorAll(".no-of-notes");

const Notes = [2000, 500, 100, 20, 10, 5, 1];

buttonCheck.addEventListener("click", function checkNotesAmount() {
  Message.style.display = "none";
  if (billAmount.value > 0) {
    if (cashAmount.value >= billAmount.value) {
      const billAndCashAmountDifference = cashAmount.value - billAmount.value;
      calculateChange(billAndCashAmountDifference);
    } else {
      showMessage("Really?");
    }
  } else {
    showMessage("Invalid amount");
  }
});

function calculateChange(billAndCashAmountDifference) {
  for (let i = 0; i < Notes.length; i++) {
    const numberofNotes = Math.trunc(billAndCashAmountDifference / Notes[i]);
    billAndCashAmountDifference %= Notes[i];
    noOfNotes[i].innerText = numberofNotes;
  }
}

function showMessage(msg) {
  Message.style.display = "block";
  Message.innerText = msg;
}
