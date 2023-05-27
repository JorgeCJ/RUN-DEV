let audio = document.querySelector('.audio');
audio.volume = 0.03;
let begin = document.createElement('button');
begin.classList.add('start');
begin.innerHTML = 'Start';
let nameGame = document.createElement('img');
nameGame.src = "./assets/img/title.png";
nameGame.alt = "Run dev";
nameGame.style.width = '400px';
nameGame.style.marginLeft = '470px';
nameGame.style.bottom = '300px';
document.body.append(nameGame, begin);

begin.addEventListener('click', (event) => {
    event.preventDefault();
    event.target.remove();
    nameGame.remove();
    let div2 = document.createElement('div');
    let div = document.createElement('div');
    let span = document.createElement('span');
    div2.classList.add('styleScore');
    div.classList.add('styleDiv');
    span.classList.add('score');
    span.innerText = 0;
    div.innerText = "Score:";
    div.appendChild(span);
    div2.appendChild(div);
    document.body.appendChild(div2);
    let scoreIncrement = 0;
    let score =
        setInterval(() => {
            console.log(scoreIncrement++)
            document.querySelector('.score').innerHTML = scoreIncrement;
        }, 700);
    let figther1 = document.createElement('img');
    figther1.classList.add('figther1');
    figther1.src = "./assets/img/figther1.gif";
    figther1.alt = "bloco";
    let figther2 = document.createElement('img');
    figther2.classList.add('figther2');
    figther2.src = "./assets/img/figther2.gif";
    figther2.alt = "figther2";
    if (Number(document.querySelector('.score').innerHTML) % 2 == 0) {
        figther1.style.animationDuration = '4s';
        figther2.style.animationDuration = '5s';
    } else if (Number(document.querySelector('.score').innerHTML) % 3 == 0) {
        figther1.style.animationDuration = '6s';
        figther2.style.animationDuration = '4s';
    } else {
        figther1.style.animationDuration = '6s';
        figther2.style.animationDuration = '5s';
    }
    let dev = document.createElement('img');
    dev.classList.add('dev');
    dev.src = "./assets/img/dev.gif";
    dev.alt = "dev";
    document.body.append(dev, figther1, figther2);

    function jumpEvent(event) {
        if (event.key == ' ') {
            dev.classList.add('jump');
            setTimeout(() => {
                dev.classList.remove('jump');
            }, 2000);
        }
    }

    const loop = setInterval(() => {
        const positionFighter1 = figther1.offsetLeft;
        const positionFighter2 = figther2.offsetLeft;
        const positionDev = window.getComputedStyle(dev).bottom.replace('px', '');
        if (positionFighter1 <= 50 && positionFighter1 > -210) {
            if (positionDev < 100) {
                clearInterval(score);
                figther2.style.animation = "none";
                figther2.style.left = `${positionFighter2}px`;
                figther1.style.animation = "none";
                figther1.style.left = `${positionFighter1}px`;
                dev.style.animation = "none";
                dev.style.bottom = `${positionDev}px`;
                let menu = document.createElement('button');
                menu.innerText = "Go to menu";
                menu.classList.add('menu');
                dev.src = "./assets/img/gameOver.png";
                dev.style.width = '750px';
                dev.style.marginLeft = '650px';
                dev.style.left = '-350px';
                dev.style.bottom = '300px';
                dev.insertAdjacentElement("afterend", menu);
                figther2.remove();
                figther1.remove();
                clearInterval(loop);
                return;
            }
        }

        if (positionFighter2 <= 0 && positionFighter2 > -230 && positionDev < 250) {
            clearInterval(score);
            figther2.style.animation = "none";
            figther2.style.left = `${positionFighter2}px`;
            figther1.style.animation = "none";
            figther1.style.left = `${positionFighter1}px`;
            dev.style.animation = "none";
            dev.style.bottom = `${positionDev}px`;
            let menu = document.createElement('button');
            menu.innerText = "Go to menu";
            menu.classList.add('menu');
            dev.src = "./assets/img/gameOver.png";
            dev.style.width = '750px';
            dev.style.marginLeft = '650px';
            dev.style.left = '-350px';
            dev.style.bottom = '300px';
            dev.insertAdjacentElement("afterend", menu);
            figther2.remove();
            figther1.remove();
            clearInterval(loop);
            return;
        }
    }, 10);

    document.addEventListener('keydown', jumpEvent);
    document.addEventListener('click', function (event) {
        if (event.target.classList.contains('menu')) {
            javascript: history.go(0);
        }
    })
})

