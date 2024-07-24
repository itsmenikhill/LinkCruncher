document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".show-qr-button");
  const popup = document.getElementById("qrPopup");
  const qrImage = document.getElementById("qrImage");
  const closeBtn = document.querySelector(".close");

  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      const url = button.getAttribute("data-url");
      qrImage.src = `https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(
        url
      )}`;
      popup.style.display = "block";
    });
  });

  closeBtn.addEventListener("click", function () {
    popup.style.display = "none";
  });

  window.addEventListener("click", function (event) {
    if (event.target === popup) {
      popup.style.display = "none";
    }
  });
});
