document.addEventListener('DOMContentLoaded', () =>{
    
    let cardArray = [];

    const cardArrayEight = [
        {
            name: '1',
            img: 'images/1.png'
        },
        {
            name: '2',
            img: 'images/2.png'
        },
        {
            name: '3',
            img: 'images/3.png'
        },
        {
            name: '4',
            img: 'images/4.png'
        },
        {
            name: '5',
            img: 'images/5.png'
        },
        {
            name: '6',
            img: 'images/6.png'
        },
        {
            name: '7',
            img: 'images/7.png'
        },
        {
            name: '8',
            img: 'images/8.png'
        },
        {
            name: '1',
            img: 'images/1.png'
        },
        {
            name: '2',
            img: 'images/2.png'
        },
        {
            name: '3',
            img: 'images/3.png'
        },
        {
            name: '4',
            img: 'images/4.png'
        },
        {
            name: '5',
            img: 'images/5.png'
        },
        {
            name: '6',
            img: 'images/6.png'
        },
        {
            name: '7',
            img: 'images/7.png'
        },
        {
            name: '8',
            img: 'images/8.png'
        }
    ];

    const cardArrayTen = [
        {
            name: '1',
            img: 'images/1.png'
        },
        {
            name: '2',
            img: 'images/2.png'
        },
        {
            name: '3',
            img: 'images/3.png'
        },
        {
            name: '4',
            img: 'images/4.png'
        },
        {
            name: '5',
            img: 'images/5.png'
        },
        {
            name: '6',
            img: 'images/6.png'
        },
        {
            name: '7',
            img: 'images/7.png'
        },
        {
            name: '8',
            img: 'images/8.png'
        },
        {
            name: '9',
            img: 'images/9.png' 
        },
        {
            name: '10',
            img: 'images/10.png' 
        },
        {
            name: '1',
            img: 'images/1.png'
        },
        {
            name: '2',
            img: 'images/2.png'
        },
        {
            name: '3',
            img: 'images/3.png'
        },
        {
            name: '4',
            img: 'images/4.png'
        },
        {
            name: '5',
            img: 'images/5.png'
        },
        {
            name: '6',
            img: 'images/6.png'
        },
        {
            name: '7',
            img: 'images/7.png'
        },
        {
            name: '8',
            img: 'images/8.png'
        },
        {
            name: '9',
            img: 'images/9.png'
        },
        {
            name: '10',
            img: 'images/10.png'
        }
    ];

    const cardArrayTwelve = [
        {
            name: '1',
            img: 'images/1.png'
        },
        {
            name: '2',
            img: 'images/2.png'
        },
        {
            name: '3',
            img: 'images/3.png'
        },
        {
            name: '4',
            img: 'images/4.png'
        },
        {
            name: '5',
            img: 'images/5.png'
        },
        {
            name: '6',
            img: 'images/6.png'
        },
        {
            name: '7',
            img: 'images/7.png'
        },
        {
            name: '8',
            img: 'images/8.png'
        },
        {
            name: '9',
            img: 'images/9.png' 
        },
        {
            name: '10',
            img: 'images/10.png' 
        },
        {
            name: '11',
            img: 'images/11.png' 
        },
        {
            name: '12',
            img: 'images/12.png' 
        },
        {
            name: '1',
            img: 'images/1.png'
        },
        {
            name: '2',
            img: 'images/2.png'
        },
        {
            name: '3',
            img: 'images/3.png'
        },
        {
            name: '4',
            img: 'images/4.png'
        },
        {
            name: '5',
            img: 'images/5.png'
        },
        {
            name: '6',
            img: 'images/6.png'
        },
        {
            name: '7',
            img: 'images/7.png'
        },
        {
            name: '8',
            img: 'images/8.png'
        },
        {
            name: '9',
            img: 'images/9.png'
        },
        {
            name: '10',
            img: 'images/10.png'
        },
        {
            name: '11',
            img: 'images/11.png'
        },
        {
            name: '12',
            img: 'images/12.png'
        }
    ];

    //start game
    const startGame = ()=>{
        const playBtn = document.querySelector('.intro button');
        const introScreen = document.querySelector('.intro');
        const grid = document.querySelector('.grid');
        const cardChoices = document.querySelector('.card-choices')
        const scoreBoard = document.querySelector('.playerScore');
        const options = document.querySelectorAll('.options button'); 

        playBtn.addEventListener('click', ()=>{
            introScreen.classList.add('fadeOut');
            cardChoices.classList.add('fadeIn');
            
        });

        options.forEach(option =>{
            option.addEventListener('click', function(){                
                const playerChoice = this.innerText;
                cardChoices.classList.remove('fadeIn');
                scoreBoard.classList.add('fadeIn'); 
                grid.classList.add('fadeIn');               
                if(playerChoice==='eight'){
                   cardArray = cardArrayEight;
                   gamePlay();
                   //console.log(cardArray);
                   
                }
                if(playerChoice==='ten'){                    
                    grid.style.width = "550px";
                    cardArray = cardArrayTen;
                    gamePlay();
                    //console.log(cardArray);
                }
                if(playerChoice==='twelve'){                    
                    grid.style.width = "665px";
                    cardArray = cardArrayTwelve;
                    gamePlay();
                    //console.log(cardArray);
                }   
              
            });
        }); 
        

    };
       
        function gamePlay(){
            cardArray.sort(() => 0.5 - Math.random());
    
        const grid = document.querySelector('.grid');
        const resultDisplay = document.querySelector('#result');
        let cardsChosen = [];
        let cardsChosenId = [];
        let cardsWon = [];
    
        //create board
        function createBoard(){
            for(let i = 0; i< cardArray.length; i++){
                let card = document.createElement('img');
                card.setAttribute('src', 'images/13.png');
                card.setAttribute('data-id', i);
                card.addEventListener('click', flipCard)
                grid.appendChild(card);
            }
        }
    
        //check for matches
        function checkForMatch(){
            let cards = document.querySelectorAll('img');
            const optionOneId = cardsChosenId[0];
            const optionTwoId = cardsChosenId[1];
            const match = document.querySelector('.match');
            if (cardsChosen[0] === cardsChosen[1]){                                
                match.textContent = "It's a match!";                                      
                cards[optionOneId].setAttribute('src', 'images/white.png');
                
                cards[optionOneId].style.pointerEvents = "none";                
                cards[optionTwoId].setAttribute('src', 'images/white.png');
                
                cards[optionTwoId].style.pointerEvents = "none"; 
                cardsWon.push(cardsChosen);
            }
            else{          
                match.textContent = "It's not a match!";  
                cards[optionOneId].setAttribute('src', 'images/13.png');
                cards[optionTwoId].setAttribute('src', 'images/13.png');
                
            }
            
            cardsChosen=[];
            cardsChosenId=[];
            resultDisplay.textContent = cardsWon.length;
            if(cardsWon.length === cardArray.length/2){
                const scoreBoard = document.querySelector('.playerScore');
                scoreBoard.classList.remove('fadeIn');
                const final = document.querySelector('.congrats');
                final.classList.add('fadeIn');

            }
    
    
        }
        
        
        //flip the card
        function flipCard(){
            let cardId = this.getAttribute('data-id');
            cardsChosen.push(cardArray[cardId].name);
            cardsChosenId.push(cardId);
            this.setAttribute('src', cardArray[cardId].img)
            if(cardsChosen.length === 2){
                setTimeout(checkForMatch, 1000)
            }
        }

       
        
        createBoard();
        }
    
        
    
    startGame();
    
    
});