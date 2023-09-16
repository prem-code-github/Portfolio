function textTransformation(textArray, targetElementId) {
    let textIndex = 0;
    let charIndex = 0;
    const textElement = document.getElementById(targetElementId);

    function type() {
        if (charIndex < textArray[textIndex].length) {
            textElement.textContent += textArray[textIndex].charAt(charIndex);
            charIndex++;
            setTimeout(type, 100); // Adjust typing speed here
        } else {
            setTimeout(erase, 2000); // Wait for 2 seconds before erasing
        }
    }

    function erase() {
        if (charIndex > 0) {
            textElement.textContent = textArray[textIndex].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(erase, 50); // Adjust erasing speed here
        } else {
            textIndex = (textIndex + 1) % textArray.length;
            setTimeout(type, 1000); // Wait for 1 second before typing the next text
        }
    }

    document.addEventListener("DOMContentLoaded", function () {
        setTimeout(type, 1000); // Start typing after 1 second
    });
}

const textArray1 = ["Bloger", "Designer", "Freelancer", "Youtuber"];
textTransformation(textArray1, "profession");

const textArray2 = ["Bloger", "Designer", "Freelancer", "Youtuber"];
textTransformation(textArray2, "about-proffession");

var spn = document.querySelector("#nav>#left>h1>span");

gsap.to("nav",{
    backgroundColor : "#000",
    duration: 0.5,
    height: "5vh",
    scrollTrigger:{
        trigger: "nav",
        scroller: "body",
        start: "top -5%",
        end: "top -5%",
        scrub: 2
    },
})


function skillsMeter(id,progress){
    const htmlDiv = document.getElementById(id);
    const firstH4 = htmlDiv.querySelector("h4");
    const secondH4 = htmlDiv.querySelector("h4:nth-child(2)");
    const progressbar = htmlDiv.querySelector(".progress-bar");
    firstH4.textContent = id;
    secondH4.textContent = progress;
    progressbar.style.width=`${progress}`;
}

skillsMeter("html","90%");
skillsMeter("css","85%")
skillsMeter("java","75%");
skillsMeter("javascript","60%")
skillsMeter("sql","65%");