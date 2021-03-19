
//scoping everything inside function so there are no global variables
const game = ()=>{
    let pscore = 0; //player score
    let cscore = 0; //computer score

    //start game
    const startGame = ()=>{
        const playBtn = document.querySelector('.intro button');
        const introScreen = document.querySelector('.intro');
        const match = document.querySelector('.match');

        playBtn.addEventListener('click', ()=>{
            introScreen.classList.add('fadeOut');
            match.classList.add('fadeIn');
        });

    };
    //play match
    const playMatch = ()=>{
        const options = document.querySelectorAll('.options button');
        const playerHand = document.querySelector('.playerHand');
        const computerHand = document.querySelector('.compHand');
        const hands = document.querySelectorAll('.hands img');

        hands.forEach(hand =>{
            hand.addEventListener('animationend', function(){
                this.style.animation = '';
            });
        });

        //computer options
        const compOptions = ['rock', 'paper', 'scissors'];
       
        options.forEach(option =>{
            option.addEventListener('click', function(){
                const computerNumber = Math.floor(Math.random()*3);
                const computerChoice = compOptions[computerNumber];
                const playerChoice = this.innerText;     
                
                setTimeout(()=>{
                    //  update Images and check who won       
                    playerHand.src = `rps_files/${playerChoice}.png`;
                    computerHand.src = `rps_files/${computerChoice}.png`; 
                    compareHands(playerChoice,computerChoice);
                }, 1000);
                
                playerHand.src = `rps_files/rock.png`;
                computerHand.src = `rps_files/rock.png`; 

                playerHand.style.animation = 'shakePlayer 1s ease';
                computerHand.style.animation = 'shakeComp 1s ease';  
                                     
                          
                
            });
        });       
    
    };

    const updateScore = () =>{
        const playerScore = document.querySelector('.playerScore p');
        const compScore = document.querySelector('.compScore p');
        playerScore.textContent = pscore;
        compScore.textContent = cscore;
    };

    const compareHands = (playerChoice, computerChoice) =>{
        //update text
        const winner = document.querySelector('.winner');        
        // checking for a tie
        if(playerChoice === computerChoice){
            winner.textContent = 'It is a tie';
            return;
        };
        //check for rock
        if(playerChoice === 'rock'){
            if(computerChoice === 'scissors'){
                winner.textContent = 'Player wins!';
                pscore++;
                updateScore(); 
                return;
            }
            else{
                winner.textContent === 'Computer wins!';
                cscore++;
                updateScore(); 
                return;
            }            
        };
        // check for paper
        if(playerChoice === 'paper'){
            if(computerChoice === 'scissors'){
                winner.textContent = 'Computer wins!';
                cscore++;
                updateScore(); 
                return;
            }
            else{
                winner.textContent = 'Player wins!';
                pscore++;
                updateScore(); 
                return;
            }            
        };
        // check for scissors
        if(playerChoice === 'scissors'){
            if(computerChoice === 'rock'){
                winner.textContent = 'Computer wins!';
                cscore++;
                updateScore(); 
                return;
            }
            else{
                winner.textContent = 'Player wins!';
                pscore++;
                updateScore(); 
                return;
            }            
        };
    };


    startGame();  
    playMatch();
};   


game();

