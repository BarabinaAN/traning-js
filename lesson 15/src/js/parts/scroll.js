function scroll() {
    let navWrapp = document.getElementsByTagName('nav')[0];

    navWrapp.addEventListener('click', function(event) {
        event.preventDefault();

        let target = event.target;

        if (target && target.hasAttribute('href')) {
            let ancore = target.getAttribute('href').replace('#', ''),
                topY = document.getElementById(ancore).offsetTop;

            try {
                window.scrollTo({
                  behavior: 'smooth',
                  top: topY,
                })
            } catch(err) {
                if (err instanceof TypeError) {
                    window.scroll(0, topY)
                } else {
                    throw err
                }
            }
        }
    });
}
module.exports = scroll;