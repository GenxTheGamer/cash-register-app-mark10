const billAmount = document.querySelector("#bill-amount");
const cashAmount = document.querySelector("#cash-amount");
const buttonCheck = document.querySelector("#checkButton");
const Message = document.querySelector(".show-message");

buttonCheck.addEventListener("click", function checkNotesAmount() {
  Message.style.display = "none";
  if (billAmount > 0) {
  } else {
    showMessage("Invalid amount");
  }
});

function showMessage(msg) {
  Message.style.display = "block";
  Message.innerText = msg;
}
