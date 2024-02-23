function setCookie(cookieName, cookieValue, expirationDays) {
  const date = new Date();
  date.setTime(date.getTime() + (expirationDays * 24 * 60 * 60 * 1000));
  const expires = "expires=" + date.toUTCString();
  document.cookie = cookieName + "=" + cookieValue + ";" + expires + ";path=/";
}

function showCookiePopup() {
  setTimeout(() => {
      alert("Questo è un cookie popup!");
  }, 5000);
}

function handleSubmit(event) {
  event.preventDefault();
  window.location.href = "thankyou.html";
}

document.querySelector('.contacts__form').addEventListener('submit', handleSubmit);

document.addEventListener("DOMContentLoaded", function () {
  var input = document.querySelector("#phone");
  window.intlTelInput(input, {
  });
});

showCookiePopup();

setCookie("popupShown", "true", 1);
