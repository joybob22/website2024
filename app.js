// import { tsParticles } from "https://cdn.jsdelivr.net/npm/@tsparticles/engine@3.0.3/+esm";
// import { loadAll } from "https://cdn.jsdelivr.net/npm/@tsparticles/all@3.0.3/+esm";

(async () => {
    await loadAll(tsParticles);

    await tsParticles.addPreset("lightdark", {
        fullScreen: {
            enable: false
        },
        particles: {
            links: {
                enable: true
            },
            move: {
                enable: true
            },
            number: {
                value: 250
            },
            opacity: {
                value: { min: 0.3, max: 1 }
            },
            shape: {
                type: ["circle", "square", "triangle", "polygon"],
                options: {
                    polygon: [
                        {
                            sides: 5
                        },
                        {
                            sides: 6
                        },
                        {
                            sides: 8
                        }
                    ]
                }
            },
            size: {
                value: { min: 1, max: 3 }
            }
        }
    });

    await tsParticles.load({
        id: "light",
        options: {
            preset: "lightdark",
            particles: {
                color: {
                    value: "#777"
                },
                links: {
                    color: "#777"
                }
            }
        }
    });
})();




let wordContainer = document.getElementById("centerWordContainer")

let wordsToType = "Hello,\nMy name is\nBrayden Lemke"
let wordIndex = 0

var typeWordsInterval = setInterval(function () {
    let span = document.createElement("span")
    let textNode = document.createTextNode(`${wordsToType[wordIndex]}`)
    span.appendChild(textNode)
    if (wordsToType[wordIndex] == " ") {
        span.classList.add("space")
    }
    if (wordsToType[wordIndex] == "\n") {
        wordContainer.appendChild(document.createElement("br"))
    } else {
        wordContainer.appendChild(span)
    }


    wordIndex += 1
    if (wordIndex >= wordsToType.length) {
        clearInterval(typeWordsInterval)
    }
}, 50)

let slidesToShow = 1

if (window.innerWidth > 1250) {
    slidesToShow = 3
} else if (window.innerWidth > 800) {
    slidesToShow = 2
}

$('#slickEducationContainer').slick({
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: $('.leftArrow'),
    nextArrow: $('.rightArrow')
});

window.onresize = (event) => {
    let slidesToShow = 1

    if (window.innerWidth > 1250) {
        slidesToShow = 3
    } else if (window.innerWidth > 800) {
        slidesToShow = 2
    }
    $('#slickEducationContainer').slick('slickSetOption', 'slidesToShow', slidesToShow);
}
