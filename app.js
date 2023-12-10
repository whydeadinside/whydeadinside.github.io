function setupCanvas(canvasId, imageSrc, translateY) {
    var canvas = document.getElementById(canvasId);
    var ctx = canvas.getContext("2d");

    canvas.style.position = "absolute";
    canvas.style.top = "60%";
    canvas.style.left = "60%";
    canvas.style.transform = "translate(-60%, " + translateY + ")";
    canvas.style.pointerEvents = "none";

    var canvasWidth = 2200;
    var canvasHeight = 2000;

    var img = new Image();
    img.src = imageSrc;

    img.onload = function () {
        var x = (canvasWidth - img.width) / 4;
        var y = (canvasHeight - img.height) / 4;
        ctx.drawImage(img, x, y);
    };
}

setupCanvas("canvas", "image.png", "-5%");
setupCanvas("canvas1", "gui.png", "-25%");

particlesJS("particles-js", {
    particles: {
        number: {
            value: 30,
            density: {
                enable: true,
                value_area: 1000
            }
        },
        color: {
            value: "#ffffff"
        },
        shape: {
            type: "star",
            stroke: {
                width: 0,
                color: "#000000"
            },
            polygon: {
                nb_sides: 6
            }
        },
        opacity: {
            value: 0.4,
            random: false,
            anim: {
                enable: false,
                speed: 1,
                opacity_min: 0.1,
                sync: false
            }
        },
        size: {
            value: 6,
            random: true,
            anim: {
                enable: false,
                speed: 40,
                size_min: 0.1,
                sync: false
            }
        },
        line_linked: {
            enable: true,
            distance: 100,
            color: "#ffffff",
            opacity: 0.3,
            width: 1
        },
        move: {
            enable: true,
            speed: 6,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: {
                enable: false,
                rotateX: 700,
                rotateY: 1300
            }
        }
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: {
                enable: false,
                mode: "repulse"
            },
            onclick: {
                enable: false,
                mode: "push"
            },
            resize: false
        },
        modes: {
            grab: {
                distance: 500,
                line_linked: {
                    opacity: 1
                }
            },
            bubble: {
                distance: 400,
                size: 50,
                duration: 4,
                opacity: 10,
                speed: 4
            },
            repulse: {
                distance: 200
            },
            push: {
                particles_nb: 10
            },
            remove: {
                particles_nb: 4
            }
        }
    },
    retina_detect: true
});
