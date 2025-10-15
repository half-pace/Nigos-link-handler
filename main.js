// dark/light mode 

let darkmode = localStorage.getItem("darkmode");
const themeSwitch = document.getElementById("theme-switch");

const enableDarkmode = () => {
    document.body.classList.add("darkmode");
    localStorage.setItem("darkmode", "active");
}

const disableDarkmode = () => {
    document.body.classList.remove("darkmode");
    localStorage.setItem("darkmode", null);
}

if(darkmode === "active") enableDarkmode();

themeSwitch.addEventListener("click", () => {
    darkmode = localStorage.getItem("darkmode");
    darkmode !== "active" ? enableDarkmode() : disableDarkmode();
})


//background change function
//this develops a white colour flicker for every grad change due to class changes so new js code just below this code

const gradients = ["gradient1", "gradient2", "gradient3", "gradient4", "gradient5", "gradient6", "gradient7", "gradient8", "gradient9", "gradient10", "gradient11", "gradient12", "gradient13", "gradient14", "gradient15", "gradient16"];
let index = 0;

setInterval(() => {
    //remove current gradient
    document.body.classList.remove(gradients[index]);

    //move to the next one
    index = (index + 1) % gradients.length;

    //add the new grad
    document.body.classList.add(gradients[index]);
}, 5000);

//new code for above, fix the errors 

//animation functions