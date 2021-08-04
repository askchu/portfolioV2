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





// window.onload(() => {
//     title.classList.add('pop')
// })

// const topPx = titleName.getBoundingClientRect().top;
// console.log(top);






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
            star.style.animationIterationCount = "infinite";
            star.style.zIndex = `${random}`;
            stars.appendChild(copy);
        }
        else {
            star.style.animation = `shimmer ${random2}s linear infinite`
            stars.appendChild(copy);
        }
    }
}
generateObjects(900, smallStar);

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
    next1.style.display = "none";
    titleButton.style.opacity = "1";
    title.classList.remove("viewing");
    planet.classList.add("next");
    contactForm.classList.add("viewing");
    titleButton.style.animationDelay = "0s";
    titleButton.classList.add('connect');
    buttonContent.classList.add('connect');
    buttonFlame.classList.add('takeoff');
    // setTimeout(() => {
    //     titleButton.classList.remove("connect")
    //     buttonFlame.classList.remove("takeoff")
    //     buttonContent.classList.remove('connect');
    // }, 5000)
    // console.log(titleButton.getBoundingClientRect().top);
    // console.log(titleButton.getBoundingClientRect().right);
    const right = titleButton.getBoundingClientRect().right;
    const rightOfRope = right + 160;
    rope.style.display = "block";
    string.style.width = `${right}%`;
    // rope.style.animation = "connectToContactForm 2s ease-in-out forwards";
    rope.classList.add('connect');
    contactForm.style.background = "black";
    contactForm.style.border = "1px solid #eee";
    contactForm.style.boxShadow = "0 8px 32px 0 rgba(31, 38, 135, 0.45)";
    contactForm.style.transform = `translateX(${rightOfRope}px`;
    contactForm.style.opacity = "1";

    if (mobile_view.matches) {
        contactForm.style.animation = "stayPut 2s linear 2s forwards"
    }
    else if (desktop_view.matches) {
        contactForm.style.animation = "stayPut 3s linear 2s forwards"
    }
    else {
        contactForm.style.animation = "stayPut 2.5s linear 2s forwards"
    }

    titleName.style.opacity = "1";
    titleName.style.animationDelay = "2s";
    titleName.classList.add("fade");
    // titleName.style.animation = "fadeOut 1s 1s forwards";

})




next1.addEventListener('click', () => {
    console.log('next');
    planet.classList.remove("viewing");
    planet.classList.add("next");
    // const topPx = wrap1.getBoundingClientRect().top;
    // const leftPx = wrap1.getBoundingClientRect().left;
    // console.log(wrap1.getBoundingClientRect().top)
    // console.log(wrap1.getBoundingClientRect().left)
    // wrap1.style.transition = "2s"
    wrap1.style.opacity = "0";
    // ball1.style.animation = "paused";
    title.classList.add("fade");
    title.classList.remove("viewing");
    next1.style.display = "none";
    next1.classList.remove("viewing");


    setTimeout(() => {
        details.style.display = "block";
        details.style.animation = "ballToSquare 1.5s forwards";
        content1.style.display = "block";
    }, 950)

    setTimeout(() => {

        details.classList.add("viewing");
        content1.classList.add("viewing");
        content1.style.opacity = "1";
    }, 2300)


    // setTimeout(() => {
    //     next2.style.display = "block";
    // }, 3000)


    // setTimeout(() => {
    //     content1.style.display = "block"
    //     wrap1.style.animation = "showSection 2.5s forwards"
    //     ball1.style.animation = "ballToSquare 2.5s forwards"
    // }, 1500);
    // setTimeout(() => {
    //     content1.style.opacity = "1"
    //     content1.classList.add("viewing");
    // }, 3500);
})


next2.addEventListener('click', () => {
    // wrap1.style.animation = "rotateDiagonally 2000ms infinite ease-in-out alternate, zindex 4000ms infinite ease-in-out";
    // ball1.style.animation = "scale 2000ms infinite ease-in-out alternate";
    // content1.classList.remove("viewing");
    // content1.style.display = "none";
    // wrap1.style.left = "0"
    content1.style.display = "none";
    content1.style.opacity = "0";
    next2.style.display = "none";



    setTimeout(() => {
        details.classList.remove("viewing");
        next2.classList.remove("viewing");
        details.style.animation = "squareToBall 2.3s ease-in-out forwards";
        // content1.style.display = "none";
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
        portfolio.style.opacity = "1";
        // next3.style.display = "block";
        next3.style.display = "block";
        next3.classList.add("viewing");
    }, 2700)

})

next3.addEventListener('click', () => {
    details.style.border = "3px solid #397BF9"
    portfolio.classList.remove("advWitChu");
    portfolio.classList.remove("disney");
    portfolio.classList.remove("fresh");

    // adventuresWithChu.style.display = "none";
    // disneyPlus.style.display = "none";
    // freshCuts.style.display = "none";
    // projectsMenu2.style.display = "none";
    // projectsMenu3.style.display = "none";
    // projectsMenu4.style.display = "none";
    // nextProject2.style.display = "none";
    // nextProject3.style.display = "none";
    // nextProject4.style.display = "none";



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
        contactForm.style.transform = "scale(1.2)";
        contactForm.style.opacity = "0";
        contactForm.style.display = "block";
    }, 1000)
    setTimeout(() => {
        // details.style.border = "3px solid #397BF9"
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
        // contactForm.style.zIndex = "7000";
        contactForm.style.opacity = "1";
    }, 2700)

    next1.style.display = "none";
    next2.style.display = "none";
    next3.style.display = "none";
})

// next4.addEventListener('click', () => {
//     wrap3.style.opacity = "1";
//     mainBall.style.transition = "1s";
//     mainBall.style.opacity = "0";
//     next3.style.display = "none";
//     next4.style.display = "block";
// })




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
    adventuresWithChu.style.display = "block";
    details.scroll(0, 0);
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
    disneyPlus.style.display = "block";
    details.scroll(0, 0);

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
    freshCuts.style.display = "block";
    details.scroll(0, 0);

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
    details.style.border = "3px solid #397BF9"
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
        contactForm.style.transform = "scale(1.2)";
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





// title.classList.toggle('close')
// title.classList.add('close')



// wrap2.style.opacity = "0";
// wrap3.style.opacity = "0";
// setTimeout(() => {
//     wrap2.style.animation = "rotateSideWays 2000ms infinite ease-in-out alternate-reverse, zindex 4000ms infinite ease-in-out";
//     wrap2.style.animationDelay = "-1000ms";
//     wrap3.style.animation = "rotateSideWays 2000ms infinite ease-in-out alternate-reverse, zindex 4000ms infinite ease-in-out";
//     wrap3.style.animationDelay = "-2500ms";

// }, 1500)

// ball2.style.animation = "paused";
// wrap2.style.animation = "paused";
// ball3.style.animation = "paused";
// wrap3.style.animation = "paused";
// wrap1.style.left = "15%";
// wrap2.style.left = "10%";
// wrap2.style.top = "-100px";
// wrap3.style.left = "70%";
// wrap3.style.top = "-100px";


// console.log(ball1);
// console.log(ball2);
// console.log(ball3);

// ball1.addEventListener('mouseenter', () => {
//     console.log('i am a ball')
//     ball1.style.animationPlayState = "paused";
//     ball2.style.animationPlayState = "paused";
//     ball3.style.animationPlayState = "paused";
//     wrap1.style.animationPlayState = "paused";
//     wrap2.style.animationPlayState = "paused";
//     wrap3.style.animationPlayState = "paused";
// })
// ball1.addEventListener('mouseleave', () => {
//     ball1.style.animationPlayState = "running";
//     ball2.style.animationPlayState = "running";
//     ball3.style.animationPlayState = "running";
//     wrap1.style.animationPlayState = "running";
//     wrap2.style.animationPlayState = "running";
//     wrap3.style.animationPlayState = "running";
// })


// Contact input message effect
const inputs = document.querySelectorAll(".input")
// console.log(inputs);

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
    // console.log(form);
    // console.log(form.name.value);
    // console.log(form.email.value);
    // console.log(form.message.value);
    const data = {
        name: form.name.value,
        email: form.email.value,
        message: form.message.value
    }
    // const result = JSON.stringify(data);

    planet.classList.remove("next");
    planet.style.top = "5%";
    planet.style.opacity = "1";
    planet.style.transform = "scale(0.6)";


    sendEmail('https://formsubmit.co/ajax/alex.chu16@hotmail.com', data)
    // .then(res => console.log(res))
    // .catch(err => console.log(err));



    setTimeout(() => {
        contactForm.style.animation = "sendOutEmail 6s forwards";
        titleButton.classList.remove('connect');
        titleName.classList.remove("fade");
        titleName.style.opacity = "0";
        buttonContent.classList.remove('connect');
        buttonFlame.classList.remove('takeoff');
        rope.classList.remove('connect');

    }, 4000)
    setTimeout(() => {
        title.classList.remove("fade");
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
    }, 7500)

    setTimeout(() => {
        next1.style.display = "block";
        next1.classList.add("viewing");
    }, 8300)
})

// fetch('https://formsubmit.co/ajax/alex.chu16@hotmail.com')
//     .then(response => {
//         console.log(response);
//     })
//     .catch(err => console.log(err));

const sendEmail = async (url = '', data) => {
    const response = await fetch(url, {
        method: 'POST',
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        body: JSON.stringify(data),
        dataType: "json"
    });
    return response.json();
}

// console.log(titleName.getBoundingClientRect().top);

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



window.addEventListener('load', () => {
    title.classList.add('pop')
    title.classList.add('viewing');
    titleButton.classList.add("pop");
    planet.classList.add('viewing');
    const topPx = titleButton.getBoundingClientRect().top - 220;
    planet.style.top = `${topPx}px`

    setTimeout(() => {
        next1.style.display = "block"
        next1.classList.add("viewing");
    }, 6000);
})



// Hamburger Icon
hamburger.addEventListener('click',
    function (e) {
        hamburger.classList.toggle('open');

        links.classList.toggle('open');
        for (let i = 0; i < link.length; i++) {
            link[i].classList.toggle('open');
            link[i].style.animationDelay = `0.${i}s`
        }
        // contactForm.classList.toggle('close')
        // contactForm.style.animationDelay = "0.2s"

        planet.style.animationDelay = "0s";
        // console.log(titleName.classList.contains('fade'));
        // if (titleName.classList.contains('fade') == true) {
        //     titleName.classList.remove('fade');
        //     title.style.zIndex = "900";
        // }
        console.log(contactForm.classList.contains("hide"));


        if (planet.classList.contains("viewing") == true) {
            planet.classList.toggle("next");
        }
        // else if (planet.classList.contains("next") == true) {
        //     planet.classList.remove("next");
        //     planet.classList.add("viewing");
        // }


        if (title.classList.contains("viewing") == true) {
            title.style.opacity = "1";
            title.style.pointerEvents = "auto";
            title.classList.toggle('close')
            title.style.animationDelay = "0s";

        }
        // if (planet.classList.contains("viewing") == true) {
        //     planet.classList.toggle("next");
        // }
        if (details.classList.contains("viewing") == true) {
            details.classList.toggle("hide");
        }
        // if (details.classList.contains("hide") == true) {
        //     details.classList.remove("hide");
        // }
        if (contactForm.classList.contains("viewing") == true) {
            contactForm.classList.toggle("hide");
            contactForm.classList.toggle("open");
        }
        // else if (contactForm.classList.contains("viewing") == false) {
        //     contactForm.classList.add("viewing");
        //     setTimeout(() => {
        //         contactForm.classList.remove("hide");
        //     }, 300);
        // }

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
        // const topPx = wrap1.getBoundingClientRect().top;
        // const leftPx = wrap1.getBoundingClientRect().left;
        // console.log(wrap1.getBoundingClientRect().top)
        // console.log(wrap1.getBoundingClientRect().left)
        // wrap1.style.transition = "2s"
        wrap1.style.opacity = "0";
        // ball1.style.animation = "paused";
        title.classList.add("fade");
        title.classList.remove("viewing");
        next1.style.display = "none";
        next1.classList.remove("viewing");
        next1.classList.remove("hide");

        // next2.style.display = "block";

        setTimeout(() => {
            details.style.display = "block";
            details.style.animation = "ballToSquare 1.5s forwards";
            content1.style.display = "block";
        }, 950)

        setTimeout(() => {
            details.classList.add("viewing");
            content1.classList.add("viewing");
            content1.style.opacity = "1";

        }, 2300)
    }
    if (content1.classList.contains("viewing") == true) {
        content1.scroll(0, 0);
        next2.classList.remove("viewing");

        console.log("already on about page");
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


        setTimeout(() => {
            details.classList.remove("viewing");
            portfolio.classList.remove("viewing");
            details.classList.remove("hide");
            details.style.animation = "squareToBall 2.3s ease-in-out forwards";
            // content1.style.display = "none";
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
        }, 2700)
        // setTimeout(() => {
        //     next2.style.display = "block";
        // }, 5000)


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
        console.log("on about page");
        contactMe.style.display = "none";
        contactForm.style.display = "none";
        contactMe.style.opacity = "0";

        setTimeout(() => {
            details.classList.remove("viewing");
            contactForm.classList.remove("open");
            contactForm.classList.remove("hide");
            contactMe.classList.remove("viewing");
            contactForm.classList.remove("viewing");
            details.classList.remove("hide");
            details.style.animation = "squareToBall 2.3s ease-in-out forwards";
            // content1.style.display = "none";
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
            content1.style.opacity = "1";
        }, 2700)

        // next2.style.display = "block";
        next4.style.display = "none";

    }
    if (contactForm.classList.contains("viewing") == true) {
        content1.scroll(0, 0);
        console.log("viewing contact form");
    }
    // if (contactForm.classList.contains("hide") == true) {
    //     content1.scroll(0, 0);
    //     console.log("viewing contact form");
    //     titleButton.classList.remove('connect');
    //     titleName.classList.remove("fade");
    //     titleName.style.opacity = "0";
    //     buttonContent.classList.remove('connect');
    //     buttonFlame.classList.remove('takeoff');
    //     rope.classList.remove('connect');


    //     title.classList.remove("fade");
    //     title.classList.remove("pop");
    //     titleName.classList.remove("pop");



    // }
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


        setTimeout(() => {
            details.style.display = "block";
            details.style.border = "3px solid #397BF9"
            details.style.animation = "ballToSquare 1.5s forwards";
            portfolio.style.display = "grid";
        }, 950)

        setTimeout(() => {
            details.classList.add("viewing");
            portfolio.classList.add("viewing");
            portfolio.style.opacity = "1";
            next3.style.display = "block";
            next3.classList.add("viewing");

        }, 2300)
    }
    if (content1.classList.contains("viewing") == true) {
        console.log("on about page");
        content1.style.display = "none";
        content1.style.opacity = "0";
        next1.style.display = "none";
        next1.classList.remove("viewing");
        next1.classList.remove("hide");


        next2.style.display = "none";
        next2.classList.remove("viewing");
        next2.classList.remove("hide");


        setTimeout(() => {
            next3.classList.remove("hide");
            details.classList.remove("viewing");
            content1.classList.remove("viewing");
            details.classList.remove("hide");
            details.style.animation = "squareToBall 2.3s ease-in-out forwards";
            // content1.style.display = "none";
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
            portfolio.style.opacity = "1";
            next3.style.display = "block";
            next3.classList.add("viewing");
        }, 2700)


    }
    if (portfolio.classList.contains("viewing") == true) {
        console.log("already on about portfolio page");
        hamburger.classList.remove('open');
        links.classList.remove('open');
        details.classList.remove("hide");
    }
    if (contactMe.classList.contains("viewing") == true) {
        console.log("on about page");
        contactMe.style.display = "none";
        contactMe.style.opacity = "0";
        next1.style.display = "none";
        next1.classList.remove("viewing");
        next1.classList.remove("hide");


        next2.style.display = "none";
        next2.classList.remove("viewing");
        next2.classList.remove("hide");


        setTimeout(() => {
            details.classList.remove("viewing");
            contactMe.classList.remove("viewing");
            contactForm.classList.remove("hide");
            contactForm.classList.remove("open");
            contactForm.classList.remove("viewing");
            contactForm.style.display = "none";
            details.classList.remove("hide");
            details.style.animation = "squareToBall 2.3s ease-in-out forwards";
            // content1.style.display = "none";
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
            form.reset();
            details.classList.add("viewing");
            portfolio.classList.add("viewing");
        }, 2300)

        setTimeout(() => {
            portfolio.style.opacity = "1";
            next3.style.display = "block";
            next3.classList.add("viewing");

        }, 2700)

        next4.style.display = "none";

    }
    if (contactForm.classList.contains("viewing") == true) {
        console.log("viewing contact form");
    }
    if (contactForm.classList.contains("hide") == true) {
        console.log("viewing contact form");
    }
});

contactLink.addEventListener("click", () => {
    if (planet.classList.contains("next") == true) {
        hamburger.classList.toggle('open');
        links.classList.toggle('open');
    }
    if (title.classList.contains("viewing") == true) {
        console.log("on title page");
        planet.classList.remove("viewing");
        planet.classList.add("next");
        // const topPx = wrap1.getBoundingClientRect().top;
        // const leftPx = wrap1.getBoundingClientRect().left;
        // console.log(wrap1.getBoundingClientRect().top)
        // console.log(wrap1.getBoundingClientRect().left)
        // wrap1.style.transition = "2s"
        wrap3.style.opacity = "0";
        // ball1.style.animation = "paused";
        title.classList.add("fade");
        title.classList.remove("viewing");
        next1.style.display = "none";
        next1.classList.remove("viewing");
        next1.classList.remove("hide");

        contactForm.style.transform = "scale(1.2)";

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
            contactForm.classList.add("open");
            // contactForm.style.zIndex = "7000";
        }, 2700)
    }
    if (content1.classList.contains("viewing") == true) {
        console.log("on about page");
        content1.style.display = "none";
        content1.scroll(0, 0);
        next2.style.display = "none";
        next2.classList.remove("viewing");
        next2.classList.remove("hide");

        content1.style.opacity = "0";
        contactForm.style.transform = "scale(1.2)";

        setTimeout(() => {
            details.classList.remove("viewing");
            content1.classList.remove("viewing");
            details.classList.remove("hide");
            details.style.animation = "squareToBall 2.3s ease-in-out forwards";
            // content1.style.display = "none";
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
            // contactForm.style.zIndex = "7000";
        }, 2300)

        setTimeout(() => {
            contactForm.style.opacity = "1";
        }, 2900)

        next4.style.display = "none";
    }
    if (portfolio.classList.contains("viewing") == true) {
        console.log("on portfolio page");
        portfolio.style.display = "none";
        portfolio.style.opacity = "0";
        contactForm.style.transform = "scale(1.2)";
        next3.style.display = "none";
        next3.classList.remove("viewing");
        next3.classList.remove("hide");

        setTimeout(() => {
            details.classList.remove("viewing");
            portfolio.classList.remove("viewing");
            details.classList.remove("hide");
            details.style.animation = "squareToBall 2.3s ease-in-out forwards";
            // content1.style.display = "none";
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
            // contactForm.style.zIndex = "7000";
            next1.style.display = "none";
            next1.classList.remove("viewing");
            next1.classList.remove("hide");

        }, 2300)

        setTimeout(() => {
            contactForm.style.opacity = "1";
        }, 2900)
    }
    if (contactForm.classList.contains("viewing") == true) {
        console.log("viewing contact form");
        contactForm.classList.toggle("hide");
        details.classList.toggle("hide");
        contactForm.classList.toggle("open");
    }
    // if (contactForm.classList.contains("hide") == true) {
    //     console.log("viewing contact form");
    // }
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



