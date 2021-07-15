const hamburger = document.querySelector('#nav-icon');
const links = document.querySelector('.links');
const navbar = document.querySelector('.navbar');
const title = document.querySelector('.title');
const titleButton = document.querySelector('.titleButton');
const titleName = document.querySelector('.titleName');


const link = document.querySelectorAll('.link');

const form = document.querySelector("#form");
const contactForm = document.querySelector('.contact-form');


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


// Title Button
titleButton.addEventListener('click', () => {
    title.classList.remove("viewing");
    planet.classList.add("next");
    contactForm.classList.add("viewing");
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
    titleName.classList.add("fade");
    // titleName.style.animation = "fadeOut 1s 1s forwards";

})


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

const next1 = document.querySelector(".instructions1")
const next2 = document.querySelector(".instructions2")
const next3 = document.querySelector(".instructions3")
const next4 = document.querySelector(".instructions4")
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
const content1 = document.querySelector(".content1");
const details = document.querySelector(".details");

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
    next2.style.display = "block";

    setTimeout(() => {
        details.style.animation = "ballToSquare 1.5s forwards";
        content1.style.display = "block";
    }, 950)

    setTimeout(() => {
        details.classList.add("viewing");
        content1.style.opacity = "1";
    }, 2300)

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
    content1.style.opacity = "0";

    setTimeout(() => {
        details.classList.remove("viewing");
        details.style.animation = "squareToBall 2.3s ease-in-out forwards";
        // content1.style.display = "none";
    }, 200)
    setTimeout(() => {
        wrap1.style.opacity = "1";
        wrap2.style.opacity = "0";
        details.style.border = "3px solid #397BF9"
        details.style.animation = "ballToSquare 1.5s 0.5s forwards";
    }, 1000)

    next2.style.display = "none";
    next3.style.display = "block";
})

next3.addEventListener('click', () => {
    wrap2.style.opacity = "1";
    wrap3.style.opacity = "0";
    next3.style.display = "none";
    next4.style.display = "block";
})

next4.addEventListener('click', () => {
    wrap3.style.opacity = "1";
    mainBall.style.transition = "1s";
    mainBall.style.opacity = "0";
    next3.style.display = "none";
    next4.style.display = "block";
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
    contactForm.style.animation = "shrink 1s forwards";
    formBG.style.animation = "bg-mail 1s forwards 0.5s"
    formFG.style.display = "block"
    formFG.style.animation = "fg-mail 0.5s forwards 1s";
    formFG1.style.display = "block";
    sticker.style.display = "block";
    title.classList.remove('pop')
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
        titleButton.opacity = "0";
        title.style.animationDelay = "0s";
        titleButton.classList.remove('connect');
        titleName.classList.remove("fade");
        titleName.style.opacity = "0";
        buttonContent.classList.remove('connect');
        buttonFlame.classList.remove('takeoff');
        rope.classList.remove('connect');
    }, 4000)
    setTimeout(() => {
        titleName.classList.add('pop');
        title.classList.add("viewing");
        form.reset();
        const topPx = titleButton.getBoundingClientRect().top - 220;
        planet.style.transition = "3s";
        planet.style.top = `${topPx}px`;
        planet.style.transform = "scale(0.6)";
    }, 5500)

    setTimeout(() => {
        formFG1.style.display = "none";
        formFG.style.display = "none";
        sticker.style.display = "none";
        formBG.style.animation = "none";
    }, 7500)

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

console.log(titleName.getBoundingClientRect().top);

const downloadResume = document.querySelector(".download");


downloadResume.addEventListener('click', () => {
    downloadResume.innerHTML = "Downloading...";
    setTimeout(() => {
        window.open('./resume.pdf');
        downloadResume.innerHTML = "Download Resume";
    }, 1500)
})



window.addEventListener('load', () => {
    title.classList.add('pop')
    title.classList.add('viewing');
    const topPx = titleButton.getBoundingClientRect().top - 220;
    planet.style.top = `${topPx}px`
    planet.classList.add("viewing");

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

        // planet.classList.toggle("next");
        planet.style.animationDelay = "0s";
        // console.log(titleName.classList.contains('fade'));
        // if (titleName.classList.contains('fade') == true) {
        //     titleName.classList.remove('fade');
        //     title.style.zIndex = "900";
        // }
        console.log(contactForm.classList.contains("hide"));

        if (title.classList.contains("viewing") == true) {
            title.style.opacity = "1";
            title.style.pointerEvents = "auto";
            title.classList.toggle('close')
            title.style.animationDelay = "0s";
        }
        if (planet.classList.contains("viewing") == true) {
            planet.classList.toggle("next");
        }
        if (details.classList.contains("viewing") == true) {
            details.classList.toggle("hide");
        }
        if (contactForm.classList.contains("viewing") == true) {
            contactForm.classList.remove("viewing");
            contactForm.classList.add("hide");
        }
        else if (contactForm.classList.contains("viewing") == false) {
            contactForm.classList.add("viewing");
            contactForm.classList.remove("hide");
        }

    }
);