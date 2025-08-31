// alert("Working!");

// set random numbers for dice
randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6
randomNumber2 = Math.floor(Math.random() * 6) + 1; //1-6

// set the attributes for the images
player1_dice = document.querySelectorAll("img")[0]
player1_dice.setAttribute("src", "./images" + "/dice" + randomNumber1 + ".png")


player2_dice = document.querySelectorAll("img")[1]
player2_dice.setAttribute("src", "./images" + "/dice" + randomNumber2 + ".png")