function golaTextEffect() {
    const circle = document.querySelectorAll('#page11-circle');

    circle.forEach(function (gola) {
        const myText = new SplitType(gola.querySelector('#page11-circle h4'));
        const chars = myText.chars;



        gola.addEventListener('mouseenter', function () {
            var tl = gsap.timeline();

            tl
                .from(chars, {
                    opacity: 0,
                    y: 10,
                    rotateX: -50,
                    stagger: 0.05,
                }, "<")
                .to(chars, {
                    opacity: 1,
                    y: -5,
                    rotateX: 20,
                    stagger: 0.05,
                }, "<")
        })
        gola.addEventListener('mouseleave', function () {
            var tl = gsap.timeline();

            tl
                .from(chars, {
                    opacity: 0,
                    y: -5,
                    rotateX: 20,
                    stagger: 0.05,
                }, "<")
                .to(chars, {
                    opacity: 1,
                    y: 5,
                    rotateX: -20,
                    stagger: 0.05,
                }, "<")
        })
    })

}
golaTextEffect();