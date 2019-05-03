let wrap = document.querySelector('.wrap'),
    btn = document.querySelector('.btn'),
    block = document.querySelector('.block');   

function animate(draw, duration) {
    var start = performance.now();
    
    requestAnimationFrame(function animate(time) {
        var timePassed = time - start;

        if (timePassed > duration) timePassed = duration;
        draw(timePassed);

        if (timePassed < duration) {
        requestAnimationFrame(animate);
        }
    });
}

btn.addEventListener('click', function(){
    animate(function(timePassed) {
        block.style.top = timePassed / 5 + 'px';
    }, 2000);
});
