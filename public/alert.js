window.addEventListener("DOMContentLoaded", (event) => {
    const alertMesasge = document.getElementById("alert-message");
    if (alertMesasge) {
      setTimeout(() => {
        alertMesasge.style.display = "none";
      }, 3000);
    }
  });