let noClickCount = 0;


function handleYesClick() {
    
    const gifContainer = document.querySelector('.gif_container img');
    gifContainer.src = "https://media.tenor.com/arqlNu8gyJYAAAAM/cat-cat-jumping.gif"; 
    
    const heading = document.querySelector('h1');
    heading.textContent = "YIPPIE!!! YOU CLICKED YES ❤️ 💜 💖 hahaha";

    
    const buttons = document.querySelector('.buttons');
    buttons.style.display = "none";
}


function handleNoClick() {
    const yesButton = document.querySelector('.yes-button');
    const noButton = document.querySelector('.no-button');
    
    noClickCount++;
    
    let scaleFactor = 1 + (noClickCount * 0.5);
    
    
    if (scaleFactor >= 5) {
        scaleFactor = 5; 
        noButton.style.display = "none"; 
    }

    yesButton.style.transform = `scale(${scaleFactor})`;
    yesButton.style.transition = "transform 0.3s ease-in-out";

    
    if (noButton.style.display !== "none") {
        const screenWidth = window.innerWidth - noButton.offsetWidth;
        const screenHeight = window.innerHeight - noButton.offsetHeight;

        const randomX = Math.random() * screenWidth;
        const randomY = Math.random() * screenHeight;

        noButton.style.position = "absolute";
        noButton.style.left = `${randomX}px`;
        noButton.style.top = `${randomY}px`;
    }
}
