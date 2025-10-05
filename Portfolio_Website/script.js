var typed = new Typed(".text", {
  strings: [
    "Student",
    "Developer",
    // "Web Developer",
    "Frontend Developer",
    "Backend Developer",
    // "Full - Stack Web Developer",
  ],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});

let tablinks = document.getElementsByClassName("tab-links");
let tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
  for (tablink of tablinks) {
    tablink.classList.remove("active-link");
  }
  for (tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}

function openProjectsWindow() {
  // URL of the page containing your projects
  var projectsURL = "path_to_your_projects_page.html";

  // Open the projects page in a new window with specific features
  window.open(projectsURL, "_blank", "width=800,height=600,scrollbars=yes");
}

var sidemeu = document.getElementById("sidemenu");

function openmenu() {
  sidemeu.style.right = "0";
}
function closemenu() {
  sidemeu.style.right = "-200px";
}
const scriptURL =
  "https://script.google.com/macros/s/AKfycbwV4Z30BvhhBbLoCCGjCWlXIp9Oh9v57jkey8YepfKtLImZEJJ_cnwOBtnTFQGAluoV/exec";
const form = document.forms["submit-to-google-sheet"];
const msg = document.getElementById("msg");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      msg.innerHTML = "Message Sent Successfully";
      setTimeout(function () {
        msg.innerHTML = "";
      }, 5000);
      form.reset();
    })

    .catch((error) => console.error("Error!", error.message));
});
