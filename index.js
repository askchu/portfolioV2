const hamburger = document.querySelector('#nav-icon');
const links = document.querySelector('.links');
const navbar = document.querySelector('.navbar');
const title = document.querySelector('.title');
const titleButton = document.querySelector('.titleButton');
const titleName = document.querySelector('.titleName');


const link = document.querySelectorAll('.link');

const form = document.querySelector("#form");
const contactForm = document.querySelector('.contact-form');


const app1 = document.querySelector(".app1");
const app2 = document.querySelector(".app2");
const app3 = document.querySelector(".app3");
const app4 = document.querySelector(".app4");

const hangryApp = document.querySelector(".hangry");
const adventuresWithChu = document.querySelector(".adventuresWithChu");
const disneyPlus = document.querySelector(".disneyPlus");
const freshCuts = document.querySelector(".freshCuts");

const projects = document.querySelectorAll(".project");
const projectTitle = document.querySelector(".projectTitle");

const projectsMenu1 = document.querySelector(".projectsMenu1");
const projectsMenu2 = document.querySelector(".projectsMenu2");
const projectsMenu3 = document.querySelector(".projectsMenu3");
const projectsMenu4 = document.querySelector(".projectsMenu4");
const nextProject1 = document.querySelector(".nextProject1");
const nextProject2 = document.querySelector(".nextProject2");
const nextProject3 = document.querySelector(".nextProject3");
const nextProject4 = document.querySelector(".nextProject4");


const aboutLink = document.querySelector(".aboutLink");
const portfolioLink = document.querySelector(".portfolioLink");
const contactLink = document.querySelector(".contactLink");

const buttonFlame = document.querySelector(".flame1");
const buttonContent = document.querySelector('.fill');
const rope = document.querySelector('.rope');
const string = document.querySelector('.string');

let mobile_view = window.matchMedia("(max-width: 770px)");
let desktop_view = window.matchMedia("(min-width: 1440px)");


// Stars
const stars = document.querySelector("#stars");
const smallStar = document.querySelector(".small");

const generateObjects = (number, star) => {
    for (let i = 0; i < number; i++) {
        const n = i % 2;
        const random = Math.floor(Math.random() * 1000) * 5;
        const random1 = Math.floor((Math.random() * 50) + 3);
        const random2 = Math.floor((Math.random() * 10) + 1);
        const copy = star.cloneNode(true)
        star.style.transform = `translateX(${random}px)`;
        if (i % 2 == 0) {
            star.style.width = "1px"
            star.style.animationName = "starsAnimation"
            star.style.animationDuration = `${random1}s`;
            star.style.animationDelay = `${random2}s`;
            star.style.animationIterationCount = "1";
            star.style.zIndex = `${random}`;
            stars.appendChild(copy);
        }
        else {
            star.style.animation = `shimmer ${random2}s linear`
            star.style.animationIterationCount = "10";
            stars.appendChild(copy);
        }
    }
}
generateObjects(300, smallStar);

const allofNext = document.querySelectorAll(".next");

const next1 = document.querySelector(".instructions1");
const next2 = document.querySelector(".instructions2");
const next3 = document.querySelector(".instructions3");
const next4 = document.querySelector(".instructions4");
const allStars = document.querySelectorAll(".small");
const planet = document.querySelector('#planet')
const mainBall = document.querySelector('#ball_planet')
const ball1 = document.querySelector("#ball1");
const ball2 = document.querySelector("#ball2");
const ball3 = document.querySelector("#ball3");
const wrap1 = document.querySelector("#wrap1");
const wrap2 = document.querySelector("#wrap2");
const wrap3 = document.querySelector("#wrap3");
const allWrap = document.querySelectorAll('.wrap');
const details = document.querySelector(".details");
const content1 = document.querySelector(".content1");
const portfolio = document.querySelector(".portfolio");
const contactMe = document.querySelector(".contactMe");

// Title Button
titleButton.addEventListener('click', () => {
    let mobile_view = window.matchMedia("(max-width: 505px)");
    if (mobile_view.matches) {
        envelopeBG.style.width = "0";
    }

    details.style.border = "3px solid #F4B400"
    planet.classList.remove("viewing");
    planet.classList.add("next");
    hamburger.style.pointerEvents = "none";
    wrap3.style.opacity = "0";

    title.classList.add("fade");
    title.classList.remove("viewing");
    next1.style.display = "none";
    next1.classList.remove("viewing");
    next1.classList.remove("hide");

    if (mobile_view.matches) {
        contactForm.style.transform = "scale(0.9)";
    } else {
        contactForm.style.transform = "scale(1.1)";
    }


    aboutLink.style.pointerEvents = "none";
    portfolioLink.style.pointerEvents = "none";
    contactLink.style.pointerEvents = "none";

    setTimeout(() => {
        details.style.display = "block";
        details.style.animation = "ballToSquare 1.5s forwards";
        contactMe.style.display = "block";
    }, 950)

    setTimeout(() => {
        details.classList.add("viewing");
        contactMe.classList.add("viewing");
        contactMe.style.opacity = "1";
        contactForm.classList.add("viewing");
        contactForm.style.border = "none";
        contactForm.style.backgroundColor = "transparent";
        contactForm.style.boxShadow = "none";
        contactForm.style.pointerEvents = "auto";
        contactForm.style.opacity = "1";
    }, 2300)
    setTimeout(() => {
        contactForm.classList.add("open");
        hamburger.style.pointerEvents = "auto";

        aboutLink.style.pointerEvents = "auto";
        portfolioLink.style.pointerEvents = "auto";
        contactLink.style.pointerEvents = "auto";
    }, 2700)

})



next1.addEventListener('click', () => {
    details.style.border = "3px solid #E3746B";
    planet.classList.remove("viewing");
    planet.classList.add("next");
    hamburger.style.pointerEvents = "none";
    wrap1.style.opacity = "0";
    title.classList.add("fade");
    title.classList.remove("viewing");
    next1.style.display = "none";
    next1.classList.remove("viewing");
    details.classList.add("viewing");

    setTimeout(() => {

        details.style.display = "block";
        details.style.animation = "ballToSquare 1.5s forwards";
        content1.style.display = "block";
        if (details.classList.contains("viewing") == true) {
            content1.scroll(0, 0);
        }
    }, 950)

    setTimeout(() => {


        content1.classList.add("viewing");
        content1.style.opacity = "1";
        hamburger.style.pointerEvents = "auto";
    }, 2300)


})


next2.addEventListener('click', () => {

    hamburger.style.pointerEvents = "none";

    content1.style.display = "none";
    content1.style.opacity = "0";
    next2.style.display = "none";



    setTimeout(() => {
        details.classList.remove("viewing");
        next2.classList.remove("viewing");
        details.style.animation = "squareToBall 2.3s ease-in-out forwards";
    }, 200)
    setTimeout(() => {
        wrap1.style.opacity = "1";
        wrap2.style.opacity = "0";
        details.style.border = "3px solid #397BF9"
        details.style.animation = "ballToSquare 1.5s 0.5s forwards";
        portfolio.style.display = "grid";
    }, 1000)
    setTimeout(() => {
        details.classList.add("viewing");
        content1.classList.remove("viewing");
        portfolio.classList.add("viewing");
    }, 2300)

    setTimeout(() => {


    }, 2800)

    setTimeout(() => {
        portfolio.style.opacity = "1";
        next3.style.display = "block";
        next3.classList.add("viewing");
        hamburger.style.pointerEvents = "auto";
    }, 2900)

})

next3.addEventListener('click', () => {
    let mobile_view = window.matchMedia("(max-width: 505px)");
    if (mobile_view.matches) {
        envelopeBG.style.width = "0";
    }

    details.style.border = "3px solid #397BF9"
    hamburger.style.pointerEvents = "none";
    portfolio.classList.remove("advWitChu");
    portfolio.classList.remove("disney");
    portfolio.classList.remove("fresh");



    portfolio.style.display = "none";
    portfolio.style.opacity = "0";

    setTimeout(() => {
        details.classList.add("viewing");
        portfolio.classList.remove("viewing");
        contactMe.classList.add("viewing");
        details.style.animation = "squareToBall 2.3s ease-in-out forwards";
        // content1.style.display = "none";
    }, 200)
    setTimeout(() => {
        wrap2.style.opacity = "1";
        wrap3.style.opacity = "0";
        details.style.border = "3px solid #F4B400"
        details.style.animation = "ballToSquare 1.5s 0.5s forwards";
        contactMe.style.display = "block";

        if (mobile_view.matches) {
            contactForm.style.transform = "scale(0.9)";
        } else {
            contactForm.style.transform = "scale(1.1)";
        }
        contactForm.style.opacity = "0";
        contactForm.style.display = "block";
    }, 1000)
    setTimeout(() => {
        next3.classList.remove("viewing");
        details.classList.add("viewing");
        contactForm.classList.add("viewing");
        contactForm.style.border = "none";
        contactForm.style.backgroundColor = "transparent";
        contactForm.style.boxShadow = "none";
        contactForm.style.pointerEvents = "auto";
    }, 2300)

    setTimeout(() => {
        contactForm.classList.add("open");
        contactForm.style.opacity = "1";
        hamburger.style.pointerEvents = "auto";
    }, 2700)

    next1.style.display = "none";
    next2.style.display = "none";
    next3.style.display = "none";
})





app1.addEventListener("click", () => {
    portfolio.style.display = "block";
    // setTimeout
    for (let project of projects) {
        project.style.display = "none"
    }
    details.style.border = "3px solid rgba(85, 172, 238, 1";
    portfolio.classList.add("hangry");
    hangryApp.style.display = "block";
    projectTitle.innerHTML = "Hangry App";

    projectsMenu1.style.display = "block";
    projectsMenu1.classList.add("viewing");
    nextProject1.style.display = "block";
    nextProject1.classList.add("viewing");
    next3.style.display = "none"
})
app2.addEventListener("click", () => {
    portfolio.style.display = "block";
    details.style.border = "3px solid rgb(74, 177, 245, 1)";
    portfolio.classList.add("advWitChu");
    // setTimeout
    for (let project of projects) {
        project.style.display = "none"
    }
    adventuresWithChu.style.display = "block";
    projectTitle.innerHTML = "Adventures With Chu";

    projectsMenu2.style.display = "block";
    projectsMenu2.classList.add("viewing");

    nextProject2.style.display = "block";
    nextProject2.classList.add("viewing");

    next3.style.display = "none"
})
app3.addEventListener("click", () => {
    portfolio.style.display = "block";
    details.style.border = "3px solid rgb(42, 59, 123)"
    portfolio.classList.add("disney");
    // setTimeout
    for (let project of projects) {
        project.style.display = "none"
    }
    disneyPlus.style.display = "block";
    projectTitle.innerHTML = "Disney Plus Clone";

    projectsMenu3.style.display = "block";
    projectsMenu3.classList.add("viewing");
    nextProject3.style.display = "block";
    nextProject3.classList.add("viewing");

    next3.style.display = "none"
})
app4.addEventListener("click", () => {
    portfolio.style.display = "block";
    details.style.border = "3px solid #4e9525";
    portfolio.classList.add("fresh");
    // setTimeout
    for (let project of projects) {
        project.style.display = "none"
    }
    freshCuts.style.display = "block";
    projectTitle.innerHTML = "Fresh Cuts";

    projectsMenu4.style.display = "block";
    projectsMenu4.classList.add("viewing");
    nextProject4.style.display = "block";
    nextProject4.classList.add("viewing");


    next3.style.display = "none"
})


projectsMenu1.addEventListener("click", () => {
    hangryApp.style.display = "none";
    projectTitle.innerHTML = "Projects";
    portfolio.style.display = "grid";
    for (let project of projects) {
        project.style.display = "flex"
    }
    next3.style.display = "block"
    projectsMenu1.style.display = "none";
    projectsMenu1.classList.remove("viewing");
    nextProject1.style.display = "none";
    projectsMenu1.classList.remove("viewing");
    portfolio.classList.remove("hangry");
})
nextProject1.addEventListener("click", () => {
    hangryApp.style.display = "none";
    projectTitle.innerHTML = "Adventures With Chu";
    details.scrollTo(0, 0)
    adventuresWithChu.style.display = "block";
    projectsMenu1.style.display = "none";
    projectsMenu1.classList.remove("viewing");

    projectsMenu2.style.display = "block";
    projectsMenu2.classList.add("viewing");

    nextProject1.style.display = "none";
    nextProject1.classList.remove("viewing");

    nextProject2.style.display = "block";
    nextProject2.classList.add("viewing");

    portfolio.classList.add("advWitChu");
    details.style.border = "3px solid rgb(74, 177, 245, 1)";
});

projectsMenu2.addEventListener("click", () => {
    adventuresWithChu.style.display = "none";
    details.style.border = "3px solid #397BF9"
    projectTitle.innerHTML = "Projects";
    portfolio.style.display = "grid";
    for (let project of projects) {
        project.style.display = "flex"
    }
    next3.style.display = "block"
    projectsMenu2.style.display = "none";
    projectsMenu2.classList.remove("viewing");

    nextProject2.style.display = "none";
    nextProject2.classList.remove("viewing");

    portfolio.classList.remove("advWitChu");
});

nextProject2.addEventListener("click", () => {
    adventuresWithChu.style.display = "none";
    projectTitle.innerHTML = "Disney Plus Clone";
    details.scroll(0, 0);
    disneyPlus.style.display = "block";

    projectsMenu2.style.display = "none";
    projectsMenu2.classList.remove("viewing");

    projectsMenu3.style.display = "block";
    projectsMenu3.classList.add("viewing");

    nextProject2.style.display = "none";
    nextProject2.classList.remove("viewing");

    nextProject3.style.display = "block";
    nextProject3.classList.add("viewing");

    portfolio.classList.remove("advWitChu");
    portfolio.classList.add("disney");
    details.style.border = "3px solid rgb(42, 59, 123)"
})

nextProject3.addEventListener("click", () => {
    disneyPlus.style.display = "none";
    projectTitle.innerHTML = "Fresh Cuts";
    details.scroll(0, 0);
    freshCuts.style.display = "block";

    projectsMenu3.style.display = "none";
    projectsMenu3.classList.remove("viewing");

    projectsMenu4.style.display = "block";
    projectsMenu4.classList.add("viewing");

    nextProject3.style.display = "none";
    nextProject3.classList.remove("viewing");

    nextProject4.style.display = "block";
    nextProject4.classList.add("viewing");

    portfolio.classList.remove("disney");
    portfolio.classList.add("fresh");
    details.style.border = "3px solid #4e9525";

});

projectsMenu3.addEventListener("click", () => {
    portfolio.style.display = "grid";
    disneyPlus.style.display = "none";
    details.style.border = "3px solid #397BF9"
    projectTitle.innerHTML = "Projects";
    for (let project of projects) {
        project.style.display = "flex"
    }
    next3.style.display = "block"
    projectsMenu3.style.display = "none";
    projectsMenu3.classList.remove("viewing");

    nextProject3.style.display = "none";
    nextProject3.classList.remove("viewing");

    portfolio.classList.remove("disney");
})

projectsMenu4.addEventListener("click", () => {
    portfolio.style.display = "grid";
    freshCuts.style.display = "none";
    details.style.border = "3px solid #397BF9"
    projectTitle.innerHTML = "Projects";
    for (let project of projects) {
        project.style.display = "flex"
    }
    next3.style.display = "block"
    projectsMenu4.style.display = "none";
    projectsMenu4.classList.remove("viewing");

    nextProject4.style.display = "none";
    nextProject4.classList.remove("viewing");

    portfolio.classList.remove("disney");
    portfolio.classList.remove("fresh");
})
nextProject4.addEventListener('click', () => {
    let mobile_view = window.matchMedia("(max-width: 505px)");
    if (mobile_view.matches) {
        envelopeBG.style.width = "0";
    }

    details.style.border = "3px solid #397BF9"
    next3.classList.remove("viewing");

    portfolio.classList.remove("fresh");
    freshCuts.style.display = "none";

    projectsMenu4.style.display = "none";
    projectsMenu4.classList.remove("viewing");

    nextProject4.style.display = "none";
    nextProject4.classList.remove("viewing");



    portfolio.style.display = "none";
    portfolio.style.opacity = "0";

    setTimeout(() => {
        portfolio.classList.remove("viewing");
        details.classList.remove("viewing");
        details.style.animation = "squareToBall 2.3s ease-in-out forwards";
        // content1.style.display = "none";
    }, 200)
    setTimeout(() => {
        projectTitle.innerHTML = "Projects";
        portfolio.style.display = "grid";
        for (let project of projects) {
            project.style.display = "flex"
        }
        wrap2.style.opacity = "1";
        wrap3.style.opacity = "0";
        details.style.border = "3px solid #F4B400"
        details.style.animation = "ballToSquare 1.5s 0.5s forwards";
        contactMe.style.display = "block";
        if (mobile_view.matches) {
            contactForm.style.transform = "scale(0.9)";
        } else {
            contactForm.style.transform = "scale(1.1)";
        }

    }, 1000)
    setTimeout(() => {
        // details.style.border = "3px solid #397BF9"
        details.classList.add("viewing");
        contactMe.classList.add("viewing");
        contactForm.classList.add("viewing");
        contactForm.style.border = "none";
        contactForm.style.backgroundColor = "transparent";
        contactForm.style.boxShadow = "none";
        contactForm.style.pointerEvents = "auto";
    }, 2300)

    setTimeout(() => {
        contactForm.classList.add("open");
        contactForm.style.display = "block";
        contactForm.classList.remove("hide");
        // contactForm.style.zIndex = "7000";
        contactForm.style.opacity = "1";
    }, 2900)

    next3.style.display = "none";
    // next4.style.display = "block";
})


// Contact input message effect
const inputs = document.querySelectorAll(".input")

function focusFunc() {
    let parent = this.parentNode;
    parent.classList.add("focus");
}

function blur() {
    let parent = this.parentNode;
    if (this.value == "") {
        parent.classList.remove("focus");
    }

}

inputs.forEach(input => {
    input.addEventListener("focus", focusFunc);
    input.addEventListener("blur", blur);
})

const formBG = document.querySelector('.bg');
const formFG = document.querySelector('.fg');
const formFG1 = document.querySelector('.fg1');
const sticker = document.querySelector('.sticker')

form.addEventListener('submit', (e) => {

    e.preventDefault();
    hamburger.style.pointerEvents = "none";
    contactForm.classList.remove("open");
    details.classList.remove("viewing");
    details.style.display = "none";


    setTimeout(() => {
        wrap3.style.opacity = "1";
    }, 1000);



    contactForm.style.animation = "shrink 1s forwards";
    formBG.style.animation = "bg-mail 1s forwards 0.5s"
    formFG.style.display = "block"
    formFG.style.animation = "fg-mail 0.5s forwards 1s";
    formFG1.style.display = "block";
    sticker.style.display = "block";
    title.classList.remove('pop')
    titleButton.style.opacity = "0";
    titleButton.classList.remove("pop");
    const data = {
        name: form.name.value,
        email: form.email.value,
        message: form.message.value
    }

    planet.classList.remove("next");
    planet.style.top = "5%";
    planet.style.opacity = "1";
    planet.style.transform = "scale(0.6)";


    sendEmail('https://formsubmit.co/ajax/alex.chu16@hotmail.com', data)



    setTimeout(() => {
        contactForm.style.animation = "sendOutEmail 6s forwards";
        titleButton.classList.remove('connect');
        titleName.classList.remove("fade");
        titleName.style.opacity = "0";
        buttonContent.classList.remove('connect');
        buttonFlame.classList.remove('takeoff');
        rope.classList.remove('connect');
        if (mobile_view.matches) {
            envelopeBG.style.width = "450px";
            // envelopeBG.style.width = "0";
        }

    }, 4000)
    setTimeout(() => {
        title.classList.remove("fade");
        title.classList.remove("close");
        title.classList.remove("pop");
        titleName.classList.remove("pop");
        // titleName.classList.add('pop');
        form.reset();
        const topPx = titleButton.getBoundingClientRect().top - 220;
        planet.style.transition = "3s";
        planet.style.top = `${topPx}px`;
        planet.style.transform = "scale(0.6)";
        titleButton.style.opacity = "0";
    }, 6000)

    setTimeout(() => {
        title.classList.add('pop');
        titleName.style.animationDelay = "0s";
        titleName.classList.add('pop');
        titleButton.style.animationDelay = "1s";
        titleButton.classList.add('pop');
        title.classList.add("viewing");



        formFG1.style.display = "none";
        formFG.style.display = "none";
        sticker.style.display = "none";
        formBG.style.animation = "none";
        details.style.border = "#E3746B";
    }, 7500)

    setTimeout(() => {
        next1.style.display = "block";
        next1.classList.add("viewing");
        planet.classList.add("viewing");
        hamburger.style.pointerEvents = "auto";
    }, 8300)
})



const sendEmail = async (url = '', data) => {
    const response = await fetch(url, {
        method: 'POST',
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
            'Content-Type': 'application/json'
        },
        redirect: 'follow', // manual, *follow, error
        body: JSON.stringify(data),
        dataType: "json"
    });
    return response.json();
}


const downloadResume = document.querySelector(".download");

downloadResume.addEventListener('click', () => {
    downloadResume.innerHTML = "Downloading...";
    downloadResume.style.background = "white";
    downloadResume.style.color = "black";
    setTimeout(() => {
        window.open('./resume.pdf');
        downloadResume.innerHTML = "Download Resume";
        downloadResume.style.color = "";
        downloadResume.style.background = "transparent";
    }, 1500)
})

const rocket = document.querySelector(".rocketCon");
const rocketFlame = document.querySelector(".flame");




window.addEventListener('load', () => {
    hamburger.style.pointerEvents = "none"
    title.classList.add('pop')
    title.classList.add('viewing');
    titleButton.classList.add("pop");
    planet.classList.add('viewing');
    const topPx = titleButton.getBoundingClientRect().top - 220;




    planet.style.top = `${topPx}px`


    aboutLink.style.pointerEvents = "none";
    portfolioLink.style.pointerEvents = "none";
    contactLink.style.pointerEvents = "none";

    setTimeout(() => {
        next1.style.display = "block"
        next1.classList.add("viewing");
        hamburger.style.pointerEvents = "auto";
        aboutLink.style.pointerEvents = "auto";
        portfolioLink.style.pointerEvents = "auto";
        contactLink.style.pointerEvents = "auto";
    }, 6000);

    setTimeout(() => {
        rocket.style.display = "none";
        rocketFlame.style.animation = "none";
    }, 10000);
})



// Hamburger Icon
hamburger.addEventListener('click',
    () => {
        hamburger.classList.toggle('open');

        links.classList.toggle('open');
        for (let i = 0; i < link.length; i++) {
            link[i].classList.toggle('open');
            link[i].style.animationDelay = `0.${i}s`
        }


        planet.style.animationDelay = "0s";



        if (planet.classList.contains("viewing") == true) {
            planet.classList.toggle("next");
        }



        if (title.classList.contains("viewing") == true) {
            title.style.opacity = "1";
            title.style.pointerEvents = "auto";
            title.classList.toggle('close')
            title.style.animationDelay = "0s";

        }

        if (details.classList.contains("viewing") == true) {
            details.classList.toggle("hide");
        }

        if (contactForm.classList.contains("viewing") == true) {
            contactForm.classList.toggle("hide");
            contactForm.classList.toggle("open");
        }


        if (content1.classList.contains("viewing") == true) {
            planet.classList.add("next");
        }
        if (next1.classList.contains("viewing") == true) {
            next1.classList.toggle("hide");
        }
        if (next2.classList.contains("viewing") == true) {
            next2.classList.toggle("hide");
        }
        if (next3.classList.contains("viewing") == true) {
            next3.classList.toggle("hide");
        }
        if (projectsMenu1.classList.contains("viewing") == true) {
            projectsMenu1.classList.toggle("hide");
        };
        if (nextProject1.classList.contains("viewing") == true) {
            nextProject1.classList.toggle("hide");
        };
        if (projectsMenu2.classList.contains("viewing") == true) {
            projectsMenu2.classList.toggle("hide");
        };
        if (nextProject2.classList.contains("viewing") == true) {
            nextProject2.classList.toggle("hide");
        };
        if (projectsMenu3.classList.contains("viewing") == true) {
            projectsMenu3.classList.toggle("hide");
        };
        if (nextProject3.classList.contains("viewing") == true) {
            nextProject3.classList.toggle("hide");
        };

        if (projectsMenu4.classList.contains("viewing") == true) {
            projectsMenu4.classList.toggle("hide");
        };
        if (nextProject4.classList.contains("viewing") == true) {
            nextProject4.classList.toggle("hide");
        };


    }
);

const logo = document.querySelector(".logo");

logo.addEventListener("click", () => {
    window.location.reload(true);
})




// NAV LINKS

aboutLink.addEventListener("click", () => {
    next2.style.display = "none";
    content1.scroll(0, 0);
    if (planet.classList.contains("next") == true) {
        hamburger.classList.toggle('open');
        links.classList.toggle('open');
    }
    if (title.classList.contains("viewing") == true) {
        content1.scroll(0, 0);


        planet.classList.remove("viewing");
        planet.classList.add("next");
        wrap1.style.opacity = "0";
        title.classList.add("fade");
        title.classList.remove("viewing");
        next1.style.display = "none";
        next1.classList.remove("viewing");
        next1.classList.remove("hide");

        hamburger.style.pointerEvents = "none";
        aboutLink.style.pointerEvents = "none";
        portfolioLink.style.pointerEvents = "none";
        contactLink.style.pointerEvents = "none";


        setTimeout(() => {
            details.style.display = "block";
            details.style.animation = "ballToSquare 1.5s forwards";
            content1.style.display = "block";
        }, 950)

        setTimeout(() => {
            details.classList.add("viewing");
            content1.classList.add("viewing");
            content1.style.opacity = "1";

            hamburger.style.pointerEvents = "auto";
            aboutLink.style.pointerEvents = "auto";
            portfolioLink.style.pointerEvents = "auto";
            contactLink.style.pointerEvents = "auto";
        }, 2300)
    }
    if (content1.classList.contains("viewing") == true) {
        content1.scroll(0, 0);


        next2.classList.remove("viewing");

        hamburger.classList.remove('open');
        links.classList.remove('open');
        details.classList.remove("hide");
        next1.classList.remove("hide");
        next2.classList.remove("hide");

    }
    if (portfolio.classList.contains("viewing") == true) {
        portfolio.style.display = "none";
        portfolio.style.opacity = "0";
        next1.style.display = "none";
        next1.classList.remove("viewing");
        next1.classList.remove("hide");


        next3.style.display = "none";
        next3.classList.remove("viewing");
        next3.classList.remove("hide");

        hamburger.style.pointerEvents = "none";
        aboutLink.style.pointerEvents = "none";
        portfolioLink.style.pointerEvents = "none";
        contactLink.style.pointerEvents = "none";

        setTimeout(() => {
            details.classList.remove("viewing");
            portfolio.classList.remove("viewing");
            details.classList.remove("hide");
            details.style.animation = "squareToBall 2.3s ease-in-out forwards";
        }, 200)
        setTimeout(() => {
            wrap1.style.opacity = "0";
            wrap2.style.opacity = "1";
            details.style.border = "3px solid #E3746B"
            details.style.animation = "ballToSquare 1.5s 0.5s forwards";
            content1.style.display = "block";
        }, 1000)
        setTimeout(() => {
            content1.scroll(0, 0);
            details.classList.add("viewing");
            content1.classList.add("viewing");
        }, 2300)

        setTimeout(() => {
            content1.style.opacity = "1";

            hamburger.style.pointerEvents = "auto";
            aboutLink.style.pointerEvents = "auto";
            portfolioLink.style.pointerEvents = "auto";
            contactLink.style.pointerEvents = "auto";
        }, 2700)


    }
    if (portfolio.classList.contains("hangry") == true) {
        hangryApp.style.display = "none";
        projectTitle.innerHTML = "Projects";
        portfolio.style.display = "grid";
        for (let project of projects) {
            project.style.display = "flex"
        }
        projectsMenu1.style.display = "none";
        projectsMenu1.classList.remove("viewing");

        nextProject1.style.display = "none";
        nextProject1.classList.remove("viewing");

        portfolio.classList.remove("hangry");
    }
    if (portfolio.classList.contains("advWitChu") == true) {
        adventuresWithChu.style.display = "none";
        projectTitle.innerHTML = "Projects";
        portfolio.style.display = "grid";
        for (let project of projects) {
            project.style.display = "flex"
        }
        projectsMenu2.style.display = "none";
        projectsMenu2.classList.remove("viewing");

        nextProject2.style.display = "none";
        nextProject2.classList.remove("viewing");

        portfolio.classList.remove("advWitChu");
    }
    if (portfolio.classList.contains("disney") == true) {
        disneyPlus.style.display = "none";
        projectTitle.innerHTML = "Projects";
        portfolio.style.display = "grid";
        for (let project of projects) {
            project.style.display = "flex"
        }
        projectsMenu3.style.display = "none";
        projectsMenu3.classList.remove("viewing");

        nextProject3.style.display = "none";
        nextProject3.classList.remove("viewing");

        portfolio.classList.remove("disney");
    }
    if (portfolio.classList.contains("fresh") == true) {
        freshCuts.style.display = "none";
        projectTitle.innerHTML = "Projects";
        portfolio.style.display = "grid";
        for (let project of projects) {
            project.style.display = "flex"
        }
        projectsMenu4.style.display = "none";
        projectsMenu4.classList.remove("viewing");

        nextProject4.style.display = "none";
        nextProject4.classList.remove("viewing");

        portfolio.classList.remove("fresh");
    }
    if (contactMe.classList.contains("viewing") == true) {
        contactMe.style.display = "none";
        contactForm.style.display = "none";
        contactMe.style.opacity = "0";



        hamburger.style.pointerEvents = "none";
        aboutLink.style.pointerEvents = "none";
        portfolioLink.style.pointerEvents = "none";
        contactLink.style.pointerEvents = "none";

        setTimeout(() => {
            details.classList.remove("viewing");
            contactForm.classList.remove("open");
            contactForm.classList.remove("hide");
            contactMe.classList.remove("viewing");
            contactForm.classList.remove("viewing");
            details.classList.remove("hide");
            details.style.animation = "squareToBall 2.3s ease-in-out forwards";
        }, 200)
        setTimeout(() => {
            wrap1.style.opacity = "0";
            wrap3.style.opacity = "1";
            details.style.border = "3px solid #E3746B"
            details.style.animation = "ballToSquare 1.5s 0.5s forwards";
            content1.style.display = "block";
        }, 1000)
        setTimeout(() => {
            form.reset();
            content1.scroll(0, 0);
            details.classList.add("viewing");
            content1.classList.add("viewing");
        }, 2300)

        setTimeout(() => {

            hamburger.style.pointerEvents = "auto"; content1.style.opacity = "1";
            aboutLink.style.pointerEvents = "auto";
            portfolioLink.style.pointerEvents = "auto";
            contactLink.style.pointerEvents = "auto";
        }, 2700)

        // next2.style.display = "block";
        next4.style.display = "none";

    }
    if (contactForm.classList.contains("viewing") == true) {
        content1.scroll(0, 0);
    }
});

portfolioLink.addEventListener("click", () => {
    if (planet.classList.contains("next") == true) {
        hamburger.classList.toggle('open');
        links.classList.toggle('open');
    }
    if (title.classList.contains("viewing") == true) {
        planet.classList.remove("viewing");
        planet.classList.add("next");

        wrap2.style.opacity = "0";
        title.classList.add("fade");
        title.classList.remove("viewing");
        next1.style.display = "none";
        next1.classList.remove("viewing");
        next1.classList.remove("hide");

        next2.style.display = "none";
        next2.classList.remove("viewing");
        next2.classList.remove("hide");

        next3.classList.remove("hide");

        hamburger.style.pointerEvents = "none";
        aboutLink.style.pointerEvents = "none";
        portfolioLink.style.pointerEvents = "none";
        contactLink.style.pointerEvents = "none";


        setTimeout(() => {
            details.style.display = "block";
            details.style.border = "3px solid #397BF9"
            details.style.animation = "ballToSquare 1.5s forwards";
            portfolio.style.display = "grid";
        }, 950)

        setTimeout(() => {


        }, 2500)

        setTimeout(() => {
            details.classList.add("viewing");
            portfolio.classList.add("viewing");
            portfolio.style.opacity = "1";
            next3.style.display = "block";
            next3.classList.add("viewing");

            hamburger.style.pointerEvents = "auto";
            aboutLink.style.pointerEvents = "auto";
            portfolioLink.style.pointerEvents = "auto";
            contactLink.style.pointerEvents = "auto";

        }, 2700)
    }
    if (content1.classList.contains("viewing") == true) {
        content1.style.display = "none";
        content1.style.opacity = "0";
        next1.style.display = "none";
        next1.classList.remove("viewing");
        next1.classList.remove("hide");


        next2.style.display = "none";
        next2.classList.remove("viewing");
        next2.classList.remove("hide");

        hamburger.style.pointerEvents = "none";
        aboutLink.style.pointerEvents = "none";
        portfolioLink.style.pointerEvents = "none";
        contactLink.style.pointerEvents = "none";


        setTimeout(() => {
            next3.classList.remove("hide");
            details.classList.remove("viewing");
            content1.classList.remove("viewing");
            details.classList.remove("hide");
            details.style.animation = "squareToBall 2.3s ease-in-out forwards";
        }, 200)

        setTimeout(() => {
            wrap1.style.opacity = "1";
            wrap2.style.opacity = "0";
            details.style.border = "3px solid #397BF9"
            details.style.animation = "ballToSquare 1.5s 0.5s forwards";
            portfolio.style.display = "grid";
        }, 1000)

        setTimeout(() => {
            details.classList.add("viewing");
            portfolio.classList.add("viewing");
        }, 2300)
        setTimeout(() => {


        }, 2500)

        setTimeout(() => {
            portfolio.style.opacity = "1";
            next3.style.display = "block";

            hamburger.style.pointerEvents = "auto";
            next3.classList.add("viewing");
            aboutLink.style.pointerEvents = "auto";
            portfolioLink.style.pointerEvents = "auto";
            contactLink.style.pointerEvents = "auto";
        }, 3000)


    }
    if (portfolio.classList.contains("viewing") == true) {
        hamburger.classList.remove('open');
        links.classList.remove('open');
        details.classList.remove("hide");
    }
    if (contactMe.classList.contains("viewing") == true) {
        contactMe.style.display = "none";
        contactMe.style.opacity = "0";
        next1.style.display = "none";
        next1.classList.remove("viewing");
        next1.classList.remove("hide");


        next2.style.display = "none";
        next2.classList.remove("viewing");
        next2.classList.remove("hide");

        hamburger.style.pointerEvents = "none";
        aboutLink.style.pointerEvents = "none";
        portfolioLink.style.pointerEvents = "none";
        contactLink.style.pointerEvents = "none";


        setTimeout(() => {
            details.classList.remove("viewing");
            contactMe.classList.remove("viewing");
            contactForm.classList.remove("hide");
            contactForm.classList.remove("open");
            contactForm.classList.remove("viewing");
            contactForm.style.display = "none";
            details.classList.remove("hide");
            details.style.animation = "squareToBall 2.3s ease-in-out forwards";
        }, 200)
        setTimeout(() => {
            next3.classList.remove("hide");
            wrap2.style.opacity = "0";
            wrap3.style.opacity = "1";
            details.style.border = "3px solid  #397BF9"
            details.style.animation = "ballToSquare 1.5s 0.5s forwards";
            portfolio.style.display = "grid";
            for (let project of projects) {
                project.style.display = "flex"
            }
        }, 1000)

        setTimeout(() => {


        }, 2000)
        setTimeout(() => {
            form.reset();
            details.classList.add("viewing");
            portfolio.classList.add("viewing");
        }, 2300)

        setTimeout(() => {
            portfolio.style.opacity = "1";
            next3.style.display = "block";

            hamburger.style.pointerEvents = "auto"; next3.classList.add("viewing");
            aboutLink.style.pointerEvents = "auto";
            portfolioLink.style.pointerEvents = "auto";
            contactLink.style.pointerEvents = "auto";

        }, 2700)

        next4.style.display = "none";

    }
    if (contactForm.classList.contains("viewing") == true) {
    }
    if (contactForm.classList.contains("hide") == true) {
    }
});

const envelopeBG = document.querySelector(".bg");

contactLink.addEventListener("click", () => {
    let mobile_view = window.matchMedia("(max-width: 505px)");

    if (mobile_view.matches) {
        envelopeBG.style.width = "0";
    }

    if (planet.classList.contains("next") == true) {
        hamburger.classList.toggle('open');
        links.classList.toggle('open');
    }
    if (title.classList.contains("viewing") == true) {
        planet.classList.remove("viewing");
        planet.classList.add("next");
        // const topPx = wrap1.getBoundingClientRect().top;
        // const leftPx = wrap1.getBoundingClientRect().left;
        // wrap1.style.transition = "2s"
        wrap3.style.opacity = "0";
        // ball1.style.animation = "paused";
        title.classList.add("fade");
        title.classList.remove("viewing");
        next1.style.display = "none";
        next1.classList.remove("viewing");
        next1.classList.remove("hide");

        hamburger.style.pointerEvents = "none";
        aboutLink.style.pointerEvents = "none";
        portfolioLink.style.pointerEvents = "none";
        contactLink.style.pointerEvents = "none";

        if (mobile_view.matches) {
            contactForm.style.transform = "scale(0.9)";
        } else {
            contactForm.style.transform = "scale(1.1)";
        }

        setTimeout(() => {
            details.style.display = "block";
            details.style.border = "3px solid #F4B400"
            details.style.animation = "ballToSquare 1.5s forwards";
            contactMe.style.display = "block";
        }, 950)

        setTimeout(() => {
            details.classList.add("viewing");
            contactMe.classList.add("viewing");
            contactMe.style.opacity = "1";
            contactForm.classList.add("viewing");
            contactForm.style.border = "none";
            contactForm.style.backgroundColor = "transparent";
            contactForm.style.boxShadow = "none";
            contactForm.style.pointerEvents = "auto";
            contactForm.style.opacity = "1";
        }, 2300)
        setTimeout(() => {

            hamburger.style.pointerEvents = "auto"; contactForm.classList.add("open");
            aboutLink.style.pointerEvents = "auto";
            portfolioLink.style.pointerEvents = "auto";
            contactLink.style.pointerEvents = "auto";
        }, 2700)
    }
    if (content1.classList.contains("viewing") == true) {
        content1.style.display = "none";
        content1.scroll(0, 0);
        next2.style.display = "none";
        next2.classList.remove("viewing");
        next2.classList.remove("hide");

        content1.style.opacity = "0";
        if (mobile_view.matches) {
            contactForm.style.transform = "scale(0.9)";
        } else {
            contactForm.style.transform = "scale(1.1)";
        }

        hamburger.style.pointerEvents = "none";
        aboutLink.style.pointerEvents = "none";
        portfolioLink.style.pointerEvents = "none";
        contactLink.style.pointerEvents = "none";

        setTimeout(() => {
            details.classList.remove("viewing");
            content1.classList.remove("viewing");
            details.classList.remove("hide");
            details.style.animation = "squareToBall 2.3s ease-in-out forwards";
        }, 200)
        setTimeout(() => {
            wrap1.style.opacity = "1";
            wrap3.style.opacity = "0";
            details.style.border = "3px solid  #F4B400"
            details.style.animation = "ballToSquare 1.5s 0.5s forwards";
            contactMe.style.display = "block";
            contactForm.style.display = "block";
            contactForm.style.opacity = "0";
        }, 1000)
        setTimeout(() => {
            details.classList.add("viewing");
            contactMe.classList.add("viewing");
            contactMe.style.opacity = "1";
            contactForm.classList.add("viewing");
            contactForm.style.border = "none";
            contactForm.style.backgroundColor = "transparent";
            contactForm.style.boxShadow = "none";
            contactForm.style.pointerEvents = "auto";
            contactForm.classList.add("open");

        }, 2300)

        setTimeout(() => {
            hamburger.style.pointerEvents = "auto";
            aboutLink.style.pointerEvents = "auto";
            portfolioLink.style.pointerEvents = "auto";
            contactLink.style.pointerEvents = "auto";
            contactForm.style.opacity = "1";
        }, 2900)

        next4.style.display = "none";
    }
    if (portfolio.classList.contains("viewing") == true) {
        portfolio.style.display = "none";
        portfolio.style.opacity = "0";


        if (mobile_view.matches) {
            contactForm.style.transform = "scale(0.9)";
        } else {
            contactForm.style.transform = "scale(1.1)";
        }

        next3.style.display = "none";
        next3.classList.remove("viewing");

        hamburger.style.pointerEvents = "none"; next3.classList.remove("hide");
        aboutLink.style.pointerEvents = "none";
        portfolioLink.style.pointerEvents = "none";
        contactLink.style.pointerEvents = "none";

        setTimeout(() => {
            details.classList.remove("viewing");
            portfolio.classList.remove("viewing");
            details.classList.remove("hide");
            details.style.animation = "squareToBall 2.3s ease-in-out forwards";
        }, 200)
        setTimeout(() => {
            wrap2.style.opacity = "1";
            wrap3.style.opacity = "0";
            details.style.border = "3px solid  #F4B400"
            details.style.animation = "ballToSquare 1.5s 0.5s forwards";

            contactMe.style.display = "block";
            contactForm.style.display = "block";
            contactForm.style.opacity = "0";
        }, 1000)
        setTimeout(() => {
            details.classList.add("viewing");
            contactMe.classList.add("viewing");
            contactMe.style.opacity = "1";
            contactForm.classList.add("viewing");
            contactForm.style.border = "none";
            contactForm.style.backgroundColor = "transparent";
            contactForm.style.boxShadow = "none";
            contactForm.style.pointerEvents = "auto";
            contactForm.classList.add("open");
            next1.style.display = "none";
            next1.classList.remove("viewing");
            next1.classList.remove("hide");

        }, 2300)

        setTimeout(() => {

            hamburger.style.pointerEvents = "auto"; contactForm.style.opacity = "1";
            aboutLink.style.pointerEvents = "auto";
            portfolioLink.style.pointerEvents = "auto";
            contactLink.style.pointerEvents = "auto";
        }, 2900)
    }
    if (contactForm.classList.contains("viewing") == true) {
        contactForm.classList.toggle("hide");
        details.classList.toggle("hide");
        contactForm.classList.toggle("open");
    }

});




content1.addEventListener("scroll", () => {

    const button = downloadResume.getBoundingClientRect().top;
    if (button > content1.getBoundingClientRect().bottom) {
        next2.style.display = "none";
    }
    if (button < content1.getBoundingClientRect().bottom) {
        next2.style.display = "block";
        next2.classList.add("viewing");
    }

})
