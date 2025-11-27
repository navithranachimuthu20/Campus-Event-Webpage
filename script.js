
function toggleMenu() {
    const menu = document.getElementById("menuList");
    menu.style.display = (menu.style.display === "block") ? "none" : "block";
}


function submitForm(event) {
    event.preventDefault(); 
    alert("Thank you! Your registration has been submitted successfully.");
}