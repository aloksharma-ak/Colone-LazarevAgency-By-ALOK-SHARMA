function locomotiveScrollTriggerAnimation() {
    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true,

        // for tablet smooth
        tablet: { smooth: true },

        // for mobile
        smartphone: { smooth: true }
    });
    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length
                ? locoScroll.scrollTo(value, 0, 0)
                : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
            return {
                top: 0,
                left: 0,
                width: window.innerWidth,
                height: window.innerHeight
            };
        }
    });

    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    ScrollTrigger.refresh();

}

function navAnimation() {
    var nav = document.querySelector("nav .nav-part2");

    nav.addEventListener("mouseenter", function () {
        let tl = gsap.timeline();

        tl
            .to("#nav-hover-bottom", {
                height: "40vh"
            }, "nav")
            .to("#nav-bottom", {
                height: "0vh"
            }, "nav")
            .to(".nav-part2 h5", {
                display: "block",
            })
            .to(".nav-part2 h5 span", {
                y: 0,
                stagger: {
                    amount: 0.6
                }
            })
    })

    nav.addEventListener("mouseleave", function () {
        let tl = gsap.timeline();

        tl
            .to(".nav-part2 h5 span", {
                y: 25,
                stagger: {
                    amount: 0.2
                }
            })
            .to(".nav-part2 h5", {
                display: "none",
                duration: .1,
            })
            .to("#nav-bottom", {
                height: "0vh",
                duration: .1,
            }, "nav1")
            .to("#nav-hover-bottom", {
                height: "13.2vh",
                duration: .1,
            }, "nav1")
    })
}

function navButtonAnimation() {
    var navButton = document.querySelector('nav button')

    navButton.addEventListener("mouseenter", function () {
        gsap.to(".nav-button-after", {
            width: "30%"
        })
    })
    navButton.addEventListener("mouseleave", function () {
        gsap.to(".nav-button-after", {
            width: "100%"
        })
    })
}

function navScrollTriggerAnimation() {


    const nav = document.querySelector("nav");
    const navH1 = document.querySelector("nav h1");
    const navPart2 = document.querySelector(".nav-part2");
    const navButton = document.querySelector("nav button");

    var tl = gsap.timeline();

    tl
        .to(nav, {
            height: '8vh',
            duration: 0.3,
            scrollTrigger: {
                trigger: nav,
                scroller: "#main",
                y: 10,
                // markers: true,
                start: 'top top',
                end: '+=200',
                scrub: true
            }
        })
        .to(navH1, {
            marginTop: "-16px",
            duration: 0.3,
            scrollTrigger: {
                trigger: navH1,
                scroller: "#main",
                y: 0,
                // markers: true,
                start: 'top top',
                end: '+=200',
                scrub: true
            }
        })
        .to(navPart2, {
            marginTop: "-14px",
            duration: 0.3,
            scrollTrigger: {
                trigger: navPart2,
                scroller: "#main",
                y: 10,
                // markers: true,
                start: 'top top',
                end: '+=200',
                scrub: true
            }
        })
        .to(navButton, {
            marginTop: "-20px",
            duration: 0.3,
            scrollTrigger: {
                trigger: navButton,
                scroller: "#main",
                y: 0,
                // markers: true,
                start: 'top top',
                end: '+=200',
                scrub: true
            }
        })

}

function page2Animation() {
    var rightElems = document.querySelectorAll(".right-elem")

    rightElems.forEach(function (elem) {
        elem.addEventListener("mouseenter", function () {
            gsap.to(elem.childNodes[5], {
                opacity: 1,
                scale: 1
            })
        })
        elem.addEventListener("mouseleave", function () {
            gsap.to(elem.childNodes[5], {
                opacity: 0,
                scale: 0
            })
        })
        elem.addEventListener("mousemove", function (dets) {
            gsap.to(elem.childNodes[5], {
                x: dets.x - elem.getBoundingClientRect().x - 50,
                y: dets.y - elem.getBoundingClientRect().y - 80
            })
        })
    })
}

function page3VideoAnimation() {
    var page3Center = document.querySelector(".page3-center")
    var video = document.querySelector("#page3 video")

    page3Center.addEventListener("click", function () {
        video.play()
        gsap.to(video, {
            transform: "scaleX(1) scaleY(1)",
            opacity: 1,
            borderRadius: 0,
            bottom: "0%"
        })
    })
    video.addEventListener("click", function () {
        video.pause()
        gsap.to(video, {
            transform: "scaleX(0.5) scaleY(0)",
            opacity: 0,
            borderRadius: "30px",
            bottom: "-50%"
        })
    })
}

function page7ImgVideoAnimation() {

    var sections = document.querySelectorAll(".sec-right")

    sections.forEach(function (elem) {
        elem.addEventListener("mouseenter", function () {
            elem.childNodes[3].style.opacity = 1,
                elem.childNodes[3].play(),
                gsap.to(elem.childNodes[5], {
                    opacity: 1,
                    scale: 1
                })
        })
        elem.addEventListener("mouseleave", function () {
            elem.childNodes[3].style.opacity = 0,
                elem.childNodes[3].load(),
                gsap.to(elem.childNodes[5], {
                    opacity: 0,
                    scale: 0
                })
        })
        elem.addEventListener("mousemove", function (dets) {
            gsap.to(elem.childNodes[5], {
                x: dets.x - elem.getBoundingClientRect().x - 560,
                y: dets.y - elem.getBoundingClientRect().y - 350
            })
        })
    })

}

function page8ImgVideoAnimation() {
    var p8ConRight = document.querySelectorAll(".p8-con-r")
    var videoCon = document.querySelectorAll(".p8-img-vid")
    var p8Video = document.querySelectorAll(".p8-img-vid video")

    p8ConRight.forEach(function (elem) {
        elem.addEventListener("mouseenter", function () {
            gsap.to(elem.childNodes[7], {
                height: "75%"
            })
            gsap.to(elem.childNodes[3], {
                opacity: 0
            })
            gsap.to(elem.childNodes[5], {
                opacity: 0
            })
        })
    })
    p8Video.forEach(function (elem) {
        elem.addEventListener("mouseenter", function () {
            elem.play(),
                gsap.to(elem, {
                    opacity: 1,
                    scale: 1.5
                })
        })
    })
    p8ConRight.forEach(function (elem) {
        elem.addEventListener("mouseleave", function () {
            gsap.to(elem.childNodes[7], {
                height: "45%"
            })
            gsap.to(elem.childNodes[3], {
                opacity: 1
            })
            gsap.to(elem.childNodes[5], {
                opacity: 1
            })
        })
    })
    p8Video.forEach(function (elem) {
        elem.addEventListener("mouseleave", function () {
            elem.play(),
                gsap.to(elem, {
                    opacity: 0,
                    scale: 1.1
                })
        })
    })

}

function page10ClickEvent() {

    function onLoadPage10() {
        var summary = document.querySelectorAll("summary")
        var icon = document.querySelectorAll(".p10-head i")
        var flag = 0;
        summary.addEventListener("click", function () {
            if (flag == 0) {
                gsap.to(icon, {
                    rotate: "-180"
                })
                flag = 1;
            } else {
                gsap.to(icon, {
                    rotate: "0"
                })
                flag = 0;
            }
        })
    }
    function afterLoadPage10() {
        var summary = document.querySelectorAll(".design summary")
        var flag = 0;
        summary.forEach(function (elem) {
            elem.addEventListener("click", function () {
                if (flag == 0) {
                    gsap.to(elem.childNodes[1].childNodes[3], {
                        rotate: "-180"
                    })
                    flag = 1;
                } else {
                    gsap.to(elem.childNodes[1].childNodes[3], {
                        rotate: "0"
                    })
                    flag = 0;
                }
            })
        })
        var design = document.querySelectorAll(".design")
        design.forEach(function (elem) {
            elem.addEventListener("click", function () {
                if (flag == 0) {
                    gsap.to(elem.childNodes[1], {
                        opacity: 1
                    })
                } else {
                    gsap.to(elem.childNodes[1], {
                        opacity: 0
                    })
                }
            })
        })
    }

    if (window.onload) {
        onLoadPage10();
    } else {
        afterLoadPage10();
    }
}

function page10HoverDivAnimation() {

    var page10Elem = document.querySelectorAll(".page10-elem")
    var over10 = document.querySelectorAll(".over10")

    page10Elem.forEach(function (elem) {
        elem.addEventListener("mouseenter", function () {
            gsap.to(elem.childNodes[1], {
                y: "0%",
                opacity: 1
            })
        })
        elem.addEventListener("mousemove", function () {
            gsap.to(elem.childNodes[1], {
                y: "0%",
                opacity: 1
            })
        })
        elem.addEventListener("mouseleave", function () {
            gsap.to(elem.childNodes[1], {
                y: "100%",
                // delay: 0.2,
                opacity: 0
            })
        })
        elem.addEventListener("mouseleave", function () {
            gsap.to(elem.childNodes[1], {
                y: "-100%",
                delay: 0.4,
                opacity: 0
            })
        })
    })
}

function page12ScrollingAnimation() {
    gsap.from(".btm12-parts h4", {
        x: 0,
        duration: 2,
        stagger: 0.005,
        scrollTrigger: {
            trigger: ".btm12-parts",
            scroller: "#main",
            // markers: true,
            start: "top 85%",
            end: "top -10%",
            scrub: true
        }
    })
    gsap.from(".btm12-parts-overlay", {
        height: 0,
        duration: 3,
        stagger: 0.005,
        scrollTrigger: {
            trigger: ".btm12-parts-overlay",
            scroller: "#main",
            // markers: true,
            start: "top 50%",
            end: "top -10%",
            scrub: true
        }
    })
}

function imageScrollimgAnimation() {

    var imgContainer = document.querySelectorAll(".page14-bg1-img-container");
    imgContainer.forEach(function (elem) {
        gsap.from(elem.childNodes[1], {
            scale: 1.5,
            duration: 2,
            scrollTrigger: {
                trigger: elem,
                scroller: "#main",
                // markers: true,
                start: "top bottom",
                end: "top top",
                scrub: true
            }
        })
    })

}

function page14Animation() {

    var p14Container = document.querySelector(".page14-content");
    var svg1 = document.querySelector(".p14-con-right svg .p14-svg1");
    var svg2 = document.querySelector(".p14-con-right svg .p14-svg2");

    p14Container.addEventListener("mouseenter", function () {
        gsap.to(svg1, {
            rotate: "150deg",
            scaleY: 0,
            transformOrigin: "50% 50%",
            duration: 2,
            ease: "expo.out",
            opacity: 0
        }, "svg")
        gsap.to(svg2, {
            opacity: 1,
            duration: 0.5,
            ease: "expo.out",
            scale: 1
        }, "svg")
    })

    p14Container.addEventListener("mouseleave", function () {
        gsap.to(svg1, {
            rotate: "0deg",
            scaleY: 1,
            transformOrigin: "50% 50%",
            duration: 0,
            ease: "expo.out",
            opacity: 1
        }, "svg")
        gsap.to(svg2, {
            opacity: 0,
            duration: 0.5,
            ease: "expo.out",
            scale: 0
        }, "svg")
    })

    var p14Containers = document.querySelectorAll(".page14-content");

    p14Containers.forEach(function (elem) {
        elem.addEventListener("mouseenter", function () {
            gsap.to(elem.childNodes[5], {
                // duration: 0.2,
                opacity: 1,
                scale: 1
            })
        })
        elem.addEventListener("mouseleave", function () {
            gsap.to(elem.childNodes[5], {
                opacity: 0,
                scale: 0
            })
        })
        elem.addEventListener("mousemove", function (dets) {
            gsap.to(elem.childNodes[5], {
                x: dets.x - elem.getBoundingClientRect().x - 730,
                y: dets.y - elem.getBoundingClientRect().y - 280
            })
        })
    })
}

function page16ImgAnimation() {

    var p16Container = document.querySelectorAll(".p16-a-c-parts");
    var p16Img = document.querySelector(".p16-a-c-parts img")

    p16Container.forEach(function (ele) {
        ele.addEventListener("mouseenter", function () {
            gsap.to(ele.childNodes[5], {
                height: "11vw",
                scale: 1
            })
        })
        ele.addEventListener("mouseleave", function () {
            gsap.to(ele.childNodes[5], {
                height: "0vw",
                scale: 0.5
            })
        })

        ele.addEventListener("mousemove", function (event) {
            var rect = ele.getBoundingClientRect();
            var mouseX = event.clientX - rect.left; // X position relative to the element
            var centerX = rect.width / 2; // X position of the element's center

            // Calculate the angle based on the cursor position
            var angle = mouseX < centerX ? -10 : 10;

            // Calculate the distance to move the image in the x-axis
            var moveX = (mouseX - centerX) * 0.2; // Adjust the factor to control the movement

            gsap.to(ele.childNodes[5], {
                rotate: angle,
                x: moveX
            });
        });
    })


}

function page16ClickEvent() {

    var clickYear = document.querySelectorAll(".p16-y-achiev");

    clickYear.forEach(function (elem) {
        var flag = 1;
        elem.addEventListener("click", function () {
            if (flag == 1) {
                gsap.to(elem.childNodes[1], {
                    opacity: 1
                })
                flag = 0;
            } else {
                gsap.to(elem.childNodes[1], {
                    opacity: 0
                })
                flag = 1;
            }
        })
    })




    var summary = document.querySelectorAll(".p16-y-achiev summary");

    summary.forEach(function (elem) {
        flag = 1;
        elem.addEventListener("click", function () {
            if (flag == 1) {
                gsap.to(elem.childNodes[1].childNodes[5], {
                    rotate: "180"
                })
                flag = 0;
            } else {
                gsap.to(elem.childNodes[1].childNodes[5], {
                    rotate: "0"
                })
                flag = 1;
            }
            console.log(flag)
        })
    })


}

function page18ClickEvent() {

    var p18Part = document.querySelectorAll(".p18-part");

    p18Part.forEach(function (elem) {
        var flag = 1;
        elem.addEventListener('click', function () {
            if (flag == 1) {
                gsap.to(elem.childNodes[1], {
                    opacity: 1
                })
                flag = 0;
            } else {
                gsap.to(elem.childNodes[1], {
                    opacity: 0
                })
                flag = 1;
            }
        })
    })

    var p18Content = document.querySelectorAll(".p18-sum-content");

    p18Content.forEach(function (elem) {
        var flag = 1;
        elem.addEventListener('click', function () {
            if (flag == 1) {
                gsap.to(elem.childNodes[3].childNodes[3], {
                    rotate: 180,
                    duration: .3
                })
                flag = 0;
            } else {
                gsap.to(elem.childNodes[3].childNodes[3], {
                    rotate: 0,
                    duration: .3
                })
                flag = 1;
            }
        })
    })
}

function page21CircleRotationAnimation() {

    var circle = document.querySelector('#p21-left svg');

    gsap.to(circle, {
        rotation: -360,
        transformOrigin: "50% 50%",
        duration: 2,
        scrollTrigger: {
            trigger: circle,
            scroller: "#main",
            // markers: true,
            start: "top bottom",
            end: "top top",
            scrub: true
        }
    })
}

function page23CircleAnimation() {

    var p23CircleDiv = document.querySelector("#p23-left");
    p23CircleDiv.addEventListener('mouseenter', function () {
        gsap.to("#p23-circle", {
            scale: 1,
            opacity: 1,
        })
    })
    p23CircleDiv.addEventListener('mouseleave', function () {
        gsap.to("#p23-circle", {
            scale: 0,
            opacity: 0,
        })
    })
    p23CircleDiv.addEventListener("mousemove", function (dets) {
        gsap.to('#p23-circle', {
            x: dets.x - p23CircleDiv.getBoundingClientRect().x - 350,
            y: dets.y - p23CircleDiv.getBoundingClientRect().y - 180
        })
    })
}

function menuIconAnimation() {
    function locomotiveMenuBar() {
        gsap.registerPlugin(ScrollTrigger);

        const locoScroll = new LocomotiveScroll({
            el: document.querySelector("#menu-bar"),
            smooth: true,

            // for tablet smooth
            tablet: { smooth: true },

            // for mobile
            smartphone: { smooth: true }
        });
        locoScroll.on("scroll", ScrollTrigger.update);

        ScrollTrigger.scrollerProxy("#menu-bar", {
            scrollTop(value) {
                return arguments.length
                    ? locoScroll.scrollTo(value, 0, 0)
                    : locoScroll.scroll.instance.scroll.y;
            },
            getBoundingClientRect() {
                return {
                    top: 0,
                    left: 0,
                    width: window.innerWidth,
                    height: window.innerHeight
                };
            }
        });

        ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

        ScrollTrigger.refresh();


    }
    // locomotiveMenuBar();
    function menuDisplayedAni() {

        var navMenu = document.querySelector("nav #mobile-button i");
        var menu = document.querySelector("#menu");
        var main = document.querySelector("#main");
        var ff = 1;

        navMenu.addEventListener("click", function () {
            if (ff === 1) {
                gsap.set(menu, {
                    display: "block"
                });
                gsap.set(main, {
                    display: "none"
                });
                ff = 0;
            } else {
                gsap.set(menu, {
                    display: "none"
                });
                gsap.set(main, {
                    display: "block"
                });
                ff = 1;
            }
        });

    }
    menuDisplayedAni();
}


locomotiveScrollTriggerAnimation();
navAnimation();
navButtonAnimation();
navScrollTriggerAnimation();
page2Animation();
page3VideoAnimation();
page7ImgVideoAnimation();
page8ImgVideoAnimation();
page10ClickEvent();
page10HoverDivAnimation();
page12ScrollingAnimation();
imageScrollimgAnimation();
page14Animation();
page16ImgAnimation();
page16ClickEvent();
page18ClickEvent();
page21CircleRotationAnimation();
page23CircleAnimation();
menuIconAnimation();



