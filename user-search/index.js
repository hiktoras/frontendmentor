const themes = {
    light: {
        '--body-background-color': '#f6f8ff',
        '--head-color': ' #222731',
        '--darklight-color': '#697c9a',
        '--search-background-color': 'white',
        '--search-color': '#4b6a9b',
        '--black': 'black',
        '--follow-color': '#4b6a9b',
        '--followTotal-color': ' #2b3442',
        '--social-color': 'black'
    },
    dark: {
        '--body-background-color': '#141d2f',
        '--head-color': ' #ffffff',
        '--darklight-color': '#ffffff',
        '--search-background-color': '#1e2a47',
        '--search-color': '#ffffff',
        '--black': 'white',
        '--follow-background-color': '#f6f8ff',
        '--follow-color': '#ffffff',
        '--followTotal-color': ' #ffffff',
        '--social-color': ' #ffffff'
    }
}

const input = document.querySelector(".searchInput");
const button = document.querySelector(".searchButton");
const darkButton = document.querySelector(".darkButton");
const lightButton = document.querySelector(".lightButton");

const user = document.querySelector(".githubUser");
const login = document.querySelector(".githubUserName");
const joined = document.querySelector(".githubJoinedDate");
const repo = document.querySelector(".repoTotal");
const follower = document.querySelector(".followersTotal");
const following = document.querySelector(".followingTotal");
const locations = document.querySelector(".locationText");
const twit = document.querySelector(".twitterText");
const websites = document.querySelector(".websiteText");
const companies = document.querySelector(".companyText");
const githubBio = document.querySelector(".githubBio");

let img = document.createElement("img");
let block = document.querySelector(".mainImage");

button.addEventListener("click", function() {
    const url = `https://api.github.com/users/${input.value}`;
    async function getUrl() {
        const response = await fetch(url);
        const data = await response.json();
        const dateData = data.created_at.slice(0, data.created_at.length - 10);


        img.src = data.avatar_url;
        block.appendChild(img);
        block.style.border = "none";

        user.innerHTML = data.name;
        login.innerHTML = `@${data.login}`;
        joined.innerHTML = `Joined ${dateData}`;
        repo.innerHTML = data.public_repos;
        follower.innerHTML = data.followers;
        following.innerHTML = data.following;


        if (data.location === "" || data.location === null) {
            locations.innerHTML = "No Location"
        } else {
            locations.innerHTML = data.location;
        }

        if (data.twitter_username === "" || data.twitter_username === null) {
            twit.innerHTML = "No Twitter"
        } else {
            twit.innerHTML = data.twitter_username;
        }


        if (data.blog === "" || data.blog === null) {
            websites.innerHTML = "No Website"
        } else {
            websites.innerHTML = data.blog;
        }


        if (data.company === "" || data.company === null) {
            companies.innerHTML = "No Company"
        } else {
            companies.innerHTML = data.company;
        }

        if (data.bio === "") {
            githubBio.innerHTML = "This profile has no bio.."
        } else {
            githubBio.innerHTML = data.bio;
        }


    }

    getUrl();

    input.value = "";

});

document.querySelectorAll('.color-button').forEach(themeButton => {
    themeButton.addEventListener('click', () => {
        console.log(themeButton.classList);
        if (themeButton.classList.contains("darkButton")) {
            const theme = themes["dark"];
            for (var variable in theme) {
                document.documentElement.style.setProperty(variable, theme[variable]);
            };
            darkButton.style.display = "none";
            lightButton.style.display = null;

        } else {
            const theme = themes["light"];
            for (var variable in theme) {
                document.documentElement.style.setProperty(variable, theme[variable]);
            };
            darkButton.style.display = null;
            lightButton.style.display = "none";
        }


    });
});