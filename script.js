let spawner = document.querySelector('.div-generator');
let scoreDiv = document.querySelector('.score')
let smasher = document.querySelector('.smasher');
let viewTop = 0;
let score = 1;


function machine() {

    var randomColor = Math.floor(Math.random() * 16777215).toString(16);
    var randomLeft = Math.floor(Math.random() * 85);
    var randomDur = Math.floor(Math.random() * 2) + 1;
    var elem = document.createElement(`div`);
    elem.style.cssText = `background-color:#${randomColor};left:${randomLeft}%;animation:move linear ${randomDur}s;`
    spawner.appendChild(elem)
}
setInterval(machine, 500);

document.addEventListener('keydown', main)
function main(e) {
    switch (e.key) {
        case `ArrowUp`:
            var topWala = getComputedStyle(smasher).top;
            topWala = topWala.slice(0, (topWala.length - 2));
            if (topWala >= `105`) {
                smasher.style.top = (eval(topWala) - 18) + `px`;
            }
            break;

        case `ArrowDown`:
            var downWala = getComputedStyle(smasher).top;
            downWala = downWala.slice(0, (downWala.length - 2));
            if (downWala <= `500`) {
                smasher.style.top = (eval(downWala) + 18) + `px`;
            }
            break;

        case `ArrowLeft`:
            var leftWala = getComputedStyle(smasher).left;
            leftWala = leftWala.slice(0, (leftWala.length - 2));

            if (leftWala >= `100`) {
                smasher.style.left = (eval(leftWala) - 18) + `px`;
            }
            break;

        case `ArrowRight`:
            var rightWala = getComputedStyle(smasher).left;
            rightWala = rightWala.slice(0, (rightWala.length - 2));

            if (rightWala < 1050) {
                smasher.style.left = (eval(rightWala) + 18) + `px`;
            }
            break;
    }

}
function remover() {
    for (i = 0; i < spawner.childNodes.length; i++) {
        let divY = spawner.childNodes[i].getBoundingClientRect().y;
        let divX = spawner.childNodes[i].getBoundingClientRect().x;
        let smashY = smasher.getBoundingClientRect().y;
        let smashX = smasher.getBoundingClientRect().x;
        if (divY - smashY <= '10' && divY - smashY >= '-5' && smashX - divX < '100' && smashX - divX > '-100') {
            spawner.childNodes[i].style.cssText = `display:none !important;`
            scoreDiv.innerHTML = score++;
            

            // you can also make car game by using this method
        }
    }
}
setInterval(remover, 1)