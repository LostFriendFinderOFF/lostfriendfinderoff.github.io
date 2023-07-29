function search(event) {
  event.preventDefault();
  var searchTerm = document.getElementById('searchInput').value.toLowerCase();
  console.log("Search by: " + searchTerm);

  if (searchTerm === "logo") {
    document.getElementById('imagenDiv').innerHTML = '<img src="logo-hub.PNG" />';
  }

  document.getElementById('loadingAnimation').style.display = 'inline-block';
  setTimeout(function () {
    document.getElementById('loadingAnimation').style.display = 'none';
  }, 3000); // Adjust the delay (in milliseconds) as needed
}
