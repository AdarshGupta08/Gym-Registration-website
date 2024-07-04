document.getElementById("gymForm").addEventListener("submit", function (event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const formDataObject = Object.fromEntries(formData.entries());
  let storedData = JSON.parse(localStorage.getItem("formDataArray")) || [];
  storedData.push(formDataObject);
  localStorage.setItem("formDataArray", JSON.stringify(storedData));
  event.target.reset();
  window.location.href = "table.html";
});
