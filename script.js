// This function controls the mobile navigation menu.
// When the user taps the menu icon (☰),
// it toggles the visibility of the navigation links.
function toggleMenu() {
    const menu = document.getElementById("menuList");
    menu.style.display = (menu.style.display === "block") ? "none" : "block";
}



// This function handles the form submission on the Registration page.
// It prevents the default page reload, collects user data,
// and shows a confirmation message.
// This makes the form feel smoother and more interactive.
function submitForm(event) {
    event.preventDefault(); // Stops page refresh
    alert("Thank you! Your registration has been submitted successfully.");
}
