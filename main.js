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

//new code for above, fix the errors 
// const gradients = ["gradient1", "gradient2", "gradient3", "gradient4", "gradient5", "gradient6", "gradient7", "gradient8", "gradient9", "gradient10", "gradient11", "gradient12", "gradient13", "gradient14", "gradient15", "gradient16"];
// let current = 0;

// setInterval(() => {
//     const next = (current + 1) % gradients.length;

//     //adding next gradient first
//     document.body.classList.add(gradients[next]);

//     //wait for css transitions to complete, then remove old grad
//     setTimeout(() => {
//         document.body.classList.remove(gradients[current]);
//         current = next;
//     }, 1000); //to match the transition time (1s)
// }, 5000); //5s 

//new 2nd code
const backgrounds = [
    "url('./assets/Gradients/4.png')",
    "url('./assets/Gradients/5.png')",
    "url('./assets/Gradients/6.png')",
    "url('./assets/Gradients/7.png')",
    "url('./assets/Gradients/8.png')",
    "url('./assets/Gradients/9.png')",
    "url('./assets/Gradients/10.png')",
    "url('./assets/Gradients/11.png')",
    "url('./assets/Gradients/12.png')",
    "url('./assets/Gradients/13.png')",
    "url('./assets/Gradients/14.png')",
    "url('./assets/Gradients/15.png')",
    "url('./assets/Gradients/16.png')",
    "url('./assets/Gradients/17.png')",
    "url('./assets/Gradients/18.png')",
    "url('./assets/Gradients/19.png')",
    "url('./assets/Gradients/20.png')"
];

//preload images
// const preload = () => {
//     backgrounds.forEach(bg => {
//         const img = new Image();
//         //extract url between brackets

//         img.src = bg.slice(4, -1).replace(/['"]/g, "");
//     });
// };

// preload();

// const backgrounds = [
//     "'./assets/moody-gradients-texture-assets-vol1_NjhlZTlmNzBmNjY0NzQwMDMzNWYyYTNk/moody-gradient_3.jpg'",
//     "'./assets/moody-gradients-texture-assets-vol1_NjhlZTlmNzBmNjY0NzQwMDMzNWYyYTNk/moody-gradient_20.jpg'",
//     "'./assets/moody-gradients-texture-assets-vol1_NjhlZTlmNzBmNjY0NzQwMDMzNWYyYTNk/moody-gradient_22.jpg'",
//     "'./assets/moody-gradients-texture-assets-vol1_NjhlZTlmNzBmNjY0NzQwMDMzNWYyYTNk/moody-gradient_23.jpg'",
//     "'./assets/moody-gradients-texture-assets-vol1_NjhlZTlmNzBmNjY0NzQwMDMzNWYyYTNk/moody-gradient_26.jpg'",
//     "'./assets/moody-gradients-texture-assets-vol1_NjhlZTlmNzBmNjY0NzQwMDMzNWYyYTNk/moody-gradient_28.jpg'",
//     "'./assets/moody-gradients-texture-assets-vol1_NjhlZTlmNzBmNjY0NzQwMDMzNWYyYTNk/moody-gradient_34.jpg'",
//     "'./assets/moody-gradients-texture-assets-vol1_NjhlZTlmNzBmNjY0NzQwMDMzNWYyYTNk/moody-gradient_37.jpg'",
//     "'./assets/moody-gradients-texture-assets-vol1_NjhlZTlmNzBmNjY0NzQwMDMzNWYyYTNk/moody-gradient_38.jpg'",
//     "'./assets/moody-gradients-texture-assets-vol1_NjhlZTlmNzBmNjY0NzQwMDMzNWYyYTNk/moody-gradient_40.jpg'",
//     "'./assets/moody-gradients-texture-assets-vol1_NjhlZTlmNzBmNjY0NzQwMDMzNWYyYTNk/moody-gradient_1.jpg'",
//     "'./assets/moody-gradients-texture-assets-vol1_NjhlZTlmNzBmNjY0NzQwMDMzNWYyYTNk/moody-gradient_9.jpg'",
//     "'./assets/moody-gradients-texture-assets-vol1_NjhlZTlmNzBmNjY0NzQwMDMzNWYyYTNk/moody-gradient_10.jpg'",
//     "'./assets/moody-gradients-texture-assets-vol1_NjhlZTlmNzBmNjY0NzQwMDMzNWYyYTNk/moody-gradient_15.jpg'",
//     "'./assets/moody-gradients-texture-assets-vol1_NjhlZTlmNzBmNjY0NzQwMDMzNWYyYTNk/moody-gradient_4.jpg'",
//     "'./assets/moody-gradients-texture-assets-vol1_NjhlZTlmNzBmNjY0NzQwMDMzNWYyYTNk/moody-gradient_5.jpg'"
// ];

let current = parseInt(localStorage.getItem("bgIndex")) || 0; //to load saved index from localStorage or to default back to 0

backgrounds.forEach(bg => {
    const img = new Image();
    img.src = bg.slice(4, -1).replace(/['"]/g, "");
    // img.src = url;
});

document.body.style.backgroundImage = backgrounds[current]; //apply saved background on load
// document.body.style.backgroundImage = `url(${backgrounds[current]})`;

const button = document.getElementById("grad-switch");

button.addEventListener("click", () => {
    current = (current + 1) % backgrounds.length;
    document.body.style.backgroundImage = backgrounds[current];
    // document.body.style.backgroundImage = `url(${backgrounds[current]})`;
    localStorage.setItem("bgIndex", current); //save index
});

// setInterval(() => {
//     index = (index + 1) % backgrounds.length;
//     document.body.style.backgroundImage = backgrounds[index];
// }, 5000);

//animation functions