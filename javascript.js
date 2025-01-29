document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    document.getElementById("responseMessage").innerText = "Thank you for reaching out!";
});
function openProject(project) {
    window.location.href = project;
}
