// ==========================
// Portfolio Script
// Author: Aditya Raut
// ==========================

// Loader
window.addEventListener("load", () => {
    const loader = document.getElementById("loader");

    setTimeout(() => {
        loader.style.opacity = "0";
        loader.style.visibility = "hidden";
    }, 1200);
});

// ==========================
// Dark / Light Mode
// ==========================

const themeBtn = document.getElementById("theme-btn");
if (localStorage.getItem("theme") === "light") {
    document.body.classList.add("light");
    themeBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';
}

// Toggle theme
themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("light");

    if (document.body.classList.contains("light")) {
        localStorage.setItem("theme", "light");
        themeBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';
    } else {
        localStorage.setItem("theme", "dark");
        themeBtn.innerHTML = '<i class="fa-solid fa-moon"></i>';
    }

});


// ==========================
// Active Navbar
// ==========================

const sections=document.querySelectorAll("section");
const navLinks=document.querySelectorAll("nav ul li a");

window.onscroll=()=>{

let current="";

sections.forEach(section=>{

const top=window.scrollY;

const offset=section.offsetTop-150;

const height=section.offsetHeight;

if(top>=offset && top<offset+height){

current=section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}

});

};

// ==========================
// Scroll To Top Button
// ==========================

const topBtn=document.createElement("button");

topBtn.innerHTML='<i class="fa-solid fa-arrow-up"></i>';

topBtn.id="topBtn";

document.body.appendChild(topBtn);

topBtn.style.cssText=`
position:fixed;
bottom:25px;
right:25px;
width:55px;
height:55px;
border:none;
border-radius:50%;
background:#00bcd4;
color:white;
font-size:22px;
cursor:pointer;
display:none;
z-index:999;
box-shadow:0 10px 25px rgba(0,0,0,.3);
`;

window.addEventListener("scroll",()=>{

if(window.scrollY>300){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

});

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};

// ==========================
// GitHub API
// ==========================

const username="adityaraut31";

fetch(`https://api.github.com/users/${username}`)

.then(res=>res.json())

.then(data=>{

document.getElementById("repo-count").innerHTML=data.public_repos;

document.getElementById("followers").innerHTML=data.followers;

document.getElementById("following").innerHTML=data.following;

});

// ==========================
// Load GitHub Repositories
// ==========================

fetch(`https://api.github.com/users/${username}/repos?sort=updated`)

.then(res=>res.json())

.then(repos=>{

const repoList=document.getElementById("repo-list");

repos.slice(0,6).forEach(repo=>{

const card=document.createElement("div");

card.className="project-card";

card.innerHTML=`

<div style="padding:25px;">

<h3>${repo.name}</h3>

<p>${repo.description || "No description available."}</p>

<p><strong>⭐ ${repo.stargazers_count}</strong></p>

<a href="${repo.html_url}" target="_blank" class="btn">

View Repository

</a>

</div>

`;

repoList.appendChild(card);

});

});

// ==========================
// Contact Form Validation
// ==========================

const form=document.querySelector("form");

form.addEventListener("submit",(e)=>{

e.preventDefault();

alert("Thank you! Your message has been received.");

form.reset();

});
// ===============================
// Typing Animation
// ===============================

const roles = [
  "Frontend Developer",
  "Data Analyst",
  "Power BI Developer",
  "SQL Developer",
  "Python Programmer"
];

let roleIndex = 0;
let charIndex = 0;

const roleElement = document.querySelector(".hero-left h2");

function typeRole() {

    if(!roleElement) return;

    if(charIndex < roles[roleIndex].length){

        roleElement.innerHTML += roles[roleIndex].charAt(charIndex);

        charIndex++;

        setTimeout(typeRole,100);

    }

    else{

        setTimeout(deleteRole,1800);

    }

}

function deleteRole(){

    if(charIndex>0){

        roleElement.innerHTML=roles[roleIndex].substring(0,charIndex-1);

        charIndex--;

        setTimeout(deleteRole,50);

    }

    else{

        roleIndex++;

        if(roleIndex>=roles.length){

            roleIndex=0;

        }

        setTimeout(typeRole,300);

    }

}

roleElement.innerHTML="";
typeRole();


// ===============================
// Counter Animation
// ===============================

const counters=document.querySelectorAll(".counter");

counters.forEach(counter=>{

let start=0;

const end=Number(counter.dataset.target);

const speed=end/150;

function update(){

start+=speed;

if(start<end){

counter.innerHTML=Math.floor(start);

requestAnimationFrame(update);

}

else{

counter.innerHTML=end;

}

}

update();

});


// ===============================
// Navbar Background
// ===============================

window.addEventListener("scroll",()=>{

const nav=document.querySelector("nav");

if(window.scrollY>80){

nav.style.background="#08111fe8";

}

else{

nav.style.background="rgba(15,23,42,.75)";

}

});


// ===============================
// Footer Year
// ===============================

const year=document.querySelector("#year");

if(year){

year.innerHTML=new Date().getFullYear();

}


// ===============================
// Project Search
// ===============================

const search=document.querySelector("#projectSearch");

if(search){

search.addEventListener("keyup",()=>{

const value=search.value.toLowerCase();

document.querySelectorAll(".project-card").forEach(card=>{

card.style.display=card.innerText.toLowerCase().includes(value)

? "block"

: "none";

});

});

}


// ===============================
// Welcome Console Message
// ===============================

console.log("%cWelcome To Aditya Raut Portfolio","font-size:22px;color:#00bcd4;font-weight:bold;");
console.log("%cFrontend Developer | Data Analyst","color:white;font-size:16px;");
// ==========================
// Mobile Menu
// ==========================

const menuBtn = document.createElement("div");

menuBtn.innerHTML='<i class="fa-solid fa-bars"></i>';

menuBtn.id="menuBtn";

document.querySelector("nav").appendChild(menuBtn);

const navMenu=document.querySelector("nav ul");

menuBtn.onclick=()=>{

navMenu.classList.toggle("showMenu");

};

// ==========================
// Scroll Progress Bar
// ==========================

const progress=document.createElement("div");

progress.id="progressBar";

document.body.appendChild(progress);

progress.style.cssText=`

position:fixed;

top:0;

left:0;

height:4px;

background:#00bcd4;

width:0%;

z-index:99999;

`;

window.addEventListener("scroll",()=>{

let scrollTop=document.documentElement.scrollTop;

let height=document.documentElement.scrollHeight-document.documentElement.clientHeight;

let percent=(scrollTop/height)*100;

progress.style.width=percent+"%";

});

// ==========================
// Skills Animation
// ==========================

const skills=document.querySelectorAll(".progress span");

const animateSkills=()=>{

skills.forEach(skill=>{

let value=skill.dataset.width;

skill.style.width=value;

});

}

window.addEventListener("scroll",()=>{

const skillSection=document.querySelector("#skills");

if(skillSection){

const position=skillSection.getBoundingClientRect().top;

if(position<window.innerHeight-100){

animateSkills();

}

}

});

// ==========================
// Cursor Glow
// ==========================

const cursor=document.createElement("div");

cursor.id="cursor";

document.body.appendChild(cursor);

cursor.style.cssText=`

width:20px;

height:20px;

background:#00bcd4;

border-radius:50%;

position:fixed;

pointer-events:none;

filter:blur(2px);

z-index:99999;

transition:.08s;

`;

document.addEventListener("mousemove",(e)=>{

cursor.style.left=e.clientX+"px";

cursor.style.top=e.clientY+"px";

});

// ==========================
// Navbar Shadow
// ==========================

window.addEventListener("scroll",()=>{

const nav=document.querySelector("nav");

if(window.scrollY>50){

nav.style.boxShadow="0 8px 25px rgba(0,0,0,.25)";

}else{

nav.style.boxShadow="none";

}

});

// ==========================
// Project Hover Sound (Optional)
// ==========================

document.querySelectorAll(".project-card").forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transition=".4s";

});

});

// ==========================
// Welcome Message
// ==========================

setTimeout(()=>{

console.log("%cWelcome Aditya 🚀","color:#00bcd4;font-size:22px;font-weight:bold");

console.log("%cPortfolio Loaded Successfully","color:white;font-size:15px");

},1000);
// =============================
// GitHub Portfolio Integration
// =============================

const githubUsername = "adityaraut31";

const profileURL = `https://api.github.com/users/${githubUsername}`;
const repoURL = `https://api.github.com/users/${githubUsername}/repos?sort=updated&per_page=6`;

// Load GitHub Profile

fetch(profileURL)

.then(response => response.json())

.then(data => {

document.getElementById("repo-count").innerHTML=data.public_repos;

document.getElementById("followers").innerHTML=data.followers;

document.getElementById("following").innerHTML=data.following;

})

// Load GitHub Repositories

fetch(repoURL)

.then(response=>response.json())

.then(repositories=>{

const repoContainer=document.getElementById("repo-list");

repoContainer.innerHTML="";

repositories.forEach(repo=>{

repoContainer.innerHTML+=`

<div class="project-card">

<div style="padding:25px;">

<h3>${repo.name}</h3>

<p>${repo.description || "No Description Available"}</p>

<p>

⭐ ${repo.stargazers_count}

&nbsp;&nbsp;

🍴 ${repo.forks_count}

</p>

<a class="btn"

target="_blank"

href="${repo.html_url}">

View Repository

</a>

</div>

</div>

`;

});

});
emailjs.init("YOUR_PUBLIC_KEY");

document
.getElementById("contactForm")
.addEventListener("submit",function(e){

e.preventDefault();

emailjs.sendForm(

"YOUR_SERVICE_ID",

"YOUR_TEMPLATE_ID",

this

).then(()=>{

alert("Message Sent Successfully");

this.reset();

});

});
// ============================
// Copy Email
// ============================

function copyEmail(){

navigator.clipboard.writeText("ramrajuraut@gmail.com");

alert("Email Copied");

}

// ============================
// Greeting
// ============================

const hour=new Date().getHours();

let greeting="";

if(hour<12){

greeting="Good Morning";

}

else if(hour<18){

greeting="Good Afternoon";

}

else{

greeting="Good Evening";

}