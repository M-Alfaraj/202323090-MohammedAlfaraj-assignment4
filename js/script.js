
//function used to switch between light and dark mode 
function toggleTheme(){
    //refers to the body element
    const body = document.body;

    //refers to the button in the nav section
    const buttonSymbol = document.getElementById("buttonTheme");

    //toggles to dark mode or lightmode
    body.classList.toggle("darkMode");

    //checks if the mode is darkmode or not and changes the icon based on that
    if(body.classList.contains("darkMode")){
        buttonSymbol.textContent = "☀️";
        localStorage.setItem("theme", "dark");
    }

    else{
        buttonSymbol.textContent = "🌙";
        localStorage.setItem("theme", "light");
    }
}

//function to load the theme from localstorage
function themeDataHandling(){
    const currTheme =  localStorage.getItem("theme");
    const buttonSymbol = document.getElementById("buttonTheme");

    if(currTheme === "dark"){
        document.body.classList.add("darkMode");
        buttonSymbol.textContent = "☀️";
    }

    else{
        document.body.classList.remove("darkMode");
        buttonSymbol.textContent = "🌙";
    }
}

//function to show a greeting message above the navbar
function greetingMessage(){
    //variables to store the current hour and message for the greetings
    const greetingElement = document.getElementById("greeting");
    const currentHour = (new Date()).getHours();
    let message = "";

    //checks the current hour to determine the greeting
    //
    if(currentHour >= 5 && currentHour < 12){
        message = "Good Morning!";
    }
    else if(currentHour >= 12 && currentHour < 18){
        message = "Good Afternoon!";
    }
    else if(currentHour >= 18 && currentHour < 22){
        message = "Good Evening!";
    }
    else{
        message = "Greetings and good night!";
    }

    greetingElement.textContent = message;
}

//function to filter and sort the projects based on the keywords selected or entered
function projectSearchControls(){
    const input = document.getElementById("projectSearch");
    const filter = document.getElementById("projectFilter");
    const sort = document.getElementById("projectSort");
    const nullMessage = document.getElementById("projectMessageNull");
    const projectList = document.getElementById("projectList");
    const allProjects = Array.from(document.querySelectorAll(".projectSection"));

    function updateProjects(){
        const value = input.value.toLowerCase().trim();
        const selectedFilter = filter.value;
        const selectedSort = sort.value;

        //lowercase keywords for comparisons and check if the filter is used or not
        let visibleProjects = allProjects.filter(function (project) {
            const searchText = project.dataset.search.toLowerCase();
            const category = project.dataset.category.toLowerCase();
            const matchesSearch = searchText.includes(value);
            const matchesFilter = selectedFilter === "all" || category === selectedFilter;

            return matchesSearch && matchesFilter;
        });

        //sorts the projects based on the selected sort method
        if (selectedSort === "az"){
            visibleProjects.sort(function (a, b) {
                return a.dataset.title.localeCompare(b.dataset.title);
            });
        }

        else if (selectedSort === "za"){
            visibleProjects.sort(function (a, b) {
                return b.dataset.title.localeCompare(a.dataset.title);
            });
        }

        //display projects based on the filter criteria
        allProjects.forEach(function (project) {
            project.style.display = "none";
        });

        visibleProjects.forEach(function (project) {
            project.style.display = "flex";
            projectList.appendChild(project);
        });

        //display the "no projects found" message when no projects are available
        if (visibleProjects.length === 0) {
            nullMessage.style.display = "block";
        }
        else {
            nullMessage.style.display = "none";
        }
    }

    //Check if the user is interacting with them
    input.addEventListener("input", updateProjects);
    filter.addEventListener("change", updateProjects);
    sort.addEventListener("change", updateProjects);

    updateProjects();
}

//function to validate the content form and show a feedback message
function formValidation(){
    //takes the values from the fields from the page
    const form = document.getElementById("contactForm");
    const inputName = document.getElementById("name");
    const inputEmail = document.getElementById("email");
    const inputMessage = document.getElementById("message");
    const formMessage = document.getElementById("formMessage");

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        
        //takes the values from the variables
        const valueName = inputName.value.trim();
        const valueEmail = inputEmail.value.trim();
        const valueMessage = inputMessage.value.trim();

        formMessage.classList.remove("success", "error");

        //Error message and will tell the user that they need to fill the field first
        if(valueName === "" || valueEmail === "" || valueMessage === "") {
            formMessage.textContent = "Please fill all fields before submitting.";
            formMessage.classList.add("error");
            formMessage.style.display = "block";
            return;
        }

        const patterns = /^[^ ]+@[^ ]+\.[a-z]{2,}$/i;

        //Error message and will show that the email address format entered is incorrect
        if(!patterns.test(valueEmail)) {
            formMessage.textContent = "Please enter a valid email address.";
            formMessage.classList.add("error");
            formMessage.style.display = "block";
            return;
        }

        //shows a success message and save the visitor name if accepted
        formMessage.textContent = "Your information has been submitted successfully.";
        formMessage.classList.add("success");
        formMessage.style.display = "block";
        localStorage.setItem("visitorName", valueName);
        loadVisitorName();
        form.reset();
    });
}

//function for displaying repos available
async function loadGitHubRepos() {
    const repoContainer = document.getElementById("repoContainer");
    const repoMessage = document.getElementById("repoMessage");

    //check if the GitHub is connected or not
    try{
        const response = await fetch("https://api.github.com/users/M-Alfaraj/repos");

        //throw an exception if the GitHub was not fetched
        if (!response.ok){
            throw new Error("Failed to fetch repositories.");
        }

        //stores the repos
        const repos = await response.json();

        //displays when there are no repos available
        if (repos.length === 0) {
            repoMessage.textContent = "No repositories found.";
            return;
        }

        //hides the message if there are repos available
        repoMessage.style.display= "none";

        //display the most recently updated repos first
        repos.sort(function(a,b){
            return new Date(b.updated_at) - new Date(a.updated_at);
        }).slice(0, 6).forEach(function(repo){
            const card = document.createElement("div");
            card.className = "repoCard";

            card.innerHTML = `
                    <h3><a href="${repo.html_url}" target="_blank" rel="noopener noreferrer">${repo.name}</a></h3>
                    <p>${repo.description ? repo.description : "No description available."}</p>
                    <p><strong>Language:</strong> ${repo.language ? repo.language : "Not specified"}</p>
                    <p><strong>Last Updated:</strong> ${new Date(repo.updated_at).toLocaleDateString()}</p>
                `;

            repoContainer.appendChild(card);
        });
    }

    catch(error){
        repoMessage.textContent = "Unable to load GitHub repositories at the moment. Please try again later.";
    }
}

//function to load the visitor after entering their name in the contact form and being accepted
function loadVisitorName() {
    const visitorWelcome = document.getElementById("visitor");
    const savedName = localStorage.getItem("visitorName");

    //displays the name when the variable has a name to set it to true.
    if (savedName) {
        visitorWelcome.textContent = `Welcome back, ${savedName}!`;
    }
    else {
        visitorWelcome.textContent = "";
    }
}

//function for displaying and incrementing a counter for how long the user is viewing the site
function siteCounter(){
    const counter = document.getElementById("siteCounter");
    let seconds = 0;

    //increments the counter every second
    setInterval(function () {
        seconds++;

        //displays the counter under the visitor name
        counter.textContent =  `You have been viewing this site for ${seconds} seconds.`; 
        
    }, 1000);
}

function backToTopButton(){
    const backToTop = document.getElementById("backToTop");

    window.addEventListener("scroll", function() {
        if (window.scrollY > 200) {
            backToTop.style.display = "block";
        }
        else {
            backToTop.style.display = "none";
        }
    });

    backToTop.addEventListener("click", function() {
        window.scrollTo({
            top=0,
            behavior: "smooth"
        });
    });
}


//Run all functions on startup after the content loads
window.addEventListener("DOMContentLoaded", function() {
    themeDataHandling();
    greetingMessage();
    
    const themeButton = document.getElementById("buttonTheme");
    themeButton.addEventListener("click", toggleTheme);

    projectSearchControls();
    formValidation();
    loadGitHubRepos();
    loadVisitorName();
    siteCounter();
    backToTopButton()
});