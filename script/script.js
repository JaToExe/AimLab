const start = document.querySelector('.start');
const game = document.querySelector('.game');
const endGameScreen = document.querySelector('.endGame');
   
const startButton = document.querySelector('.startButton');

    startButton.addEventListener('click', () => {
        start.style.display = "none";
        endGameScreen.style.display = "none";
        game.style.display = "flex";

        startGame();
    });

    function startGame() {
        const timeBox = document.querySelector('.jsTime');
        const scoreBox = document.querySelector('.jsScore');
        const result = document.querySelector('.result');

        const palyAgin = document.querySelector('.palyAgin');

        const object = document.querySelector('.object');

        const gameBorder = document.querySelector('.gameBorder');

        let score = 0;
        let time = 30;

        function setRandomPosision() {
            const x = Math.floor(Math.random() * (gameBorder.clientWidth - object.offsetWidth));
            const y = Math.floor(Math.random() * (gameBorder.clientHeight - object.offsetHeight));

            
            object.style.marginLeft = `${x}px`;
            object.style.marginTop = `${y}px`;
        }

        object.addEventListener('click', () => {
            score++;
            
            scoreBox.textContent = score;

            setRandomPosision();
        });

        const timer = setInterval(() => {

            time--;
            timeBox.textContent = time;

            if (time === 0) {
                endGameScreen.style.display = "flex";
                game.style.display = "flex";

                clearInterval(timer);

                result.textContent = 'Score: ' + score; 

                score = 0;
                time = 30;
                
                scoreBox.textContent = score;

                palyAgin.addEventListener('click', () => {
                    start.style.display = "flex";
                    endGameScreen.style.display = "none";
                    game.style.display = "flex";
            
                    
                    startGame();
                });
            }

        }, 1000);

        
        setRandomPosision(); 
    }