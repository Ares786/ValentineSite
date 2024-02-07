document.addEventListener('DOMContentLoaded', () => {
    const noButton = document.getElementById('nobutton');
    const yesButton = document.getElementById('yesbutton');
    const secondNoButton = document.getElementById('second-no-button');
    const secondYesButton = document.getElementById('second-yes-button');
    const thirdNoButton = document.getElementById('third-no-button');
    const thirdYesButton = document.getElementById('third-yes-button')
    const mainQuestion = document.querySelector('.Mainquestion');
    const noMessage = document.getElementById('no-message');
    const yesMessage = document.getElementById('yes-message');
    const secondNoMessage = document.getElementById('secondnomessage')
    const mainImage = document.querySelector('.mainimage');
    const noChoice = document.getElementById('nochoice')
    const awkwardText = document.getElementById('awkwardtext')

    const yesSound = document.getElementById('amidreaming');
    const idea22 = document.getElementById('idea')
    const amongUs = document.getElementById('amongus')
    ///all of the above is to apply a const to each element ID from the html you can identify everything easier 

    yesSound.volume = 0.3
    idea22.volume = 0.3
    amongUs.volume = 0.4


    // moves the 3rd no button when pressed 
    function moveButton(button) {
        const maxX = window.innerWidth - button.offsetWidth;
        const maxY = window.innerHeight - button.offsetHeight;
        const randomX = Math.floor(Math.random() * maxX)
        const randomY = Math.floor(Math.random() * maxY);
        button.style.position = 'fixed'; // Using 'fixed' to position relative to the viewport
        button.style.left = `${randomX}px`;
        button.style.top = `${randomY}px`;

    }


  noButton.addEventListener('click', function() {
      mainQuestion.style.display = 'none';
      noMessage.style.display = 'block';
      mainImage.src = "images/angrycat.jpg"
      idea22.play();
    });

    yesButton.addEventListener('click', function() {
      mainQuestion.style.display = 'none';
      yesMessage.style.display = 'block';
      mainImage.src = 'images/celebrationgif.gif';
      yesSound.play(); ///plays the yessound when yes is clicked 
    
    });
  
    secondNoButton.addEventListener('click', function() {
        noMessage.style.display = 'none';
        secondNoMessage.style.display = 'block';
        noChoice.style.display = 'none'; ///this makes sure the nochoice txt doesn't show until the thirdnobutton click
        mainImage.src = "images/sideeye.jpeg"
        idea22.pause();
        amongUs.play();
        
    });
  
    secondYesButton.addEventListener('click', function() {
      noMessage.style.display = 'none';
      yesMessage.style.display = 'block';
      mainImage.src = 'images/celebrationgif.gif';
      yesSound.play();
      idea22.pause();
      amongUs.pause(); ///as soon as second yes is clicked we want the sat music to stop
    });

    ///i am directing the third no button to carry 
    ///the moveButton function when it's clicked 
    thirdNoButton.addEventListener('click', function() {
        moveButton(this);
        noChoice.style.display = 'block';
        awkwardText.style.display = 'none';


    });


    thirdYesButton.addEventListener('click', function() {
        secondNoMessage.style.display = 'none';
        yesMessage.style.display = 'block';
        noChoice.style.display = 'none';
        yesSound.play();
        idea22.pause();
        amongUs.pause()

    });     

});



  
