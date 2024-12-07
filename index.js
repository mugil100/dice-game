var randomNumber1 =Math.random();
randomNumber1= Math.floor((randomNumber1*6)+1);

console.log("dice1 : "+randomNumber1);

var randomNumber2 =Math.random();
randomNumber2= Math.floor((randomNumber2*6)+1);

console.log("dice2 : "+randomNumber2);

if(randomNumber1==1)
{
    document.querySelector(".img1").setAttribute("src","./images/dice1.png");
}

else if(randomNumber1==2)
    {
        document.querySelector(".img1").setAttribute("src","./images/dice2.png");
    }

else if(randomNumber1==3)
    {
        document.querySelector(".img1").setAttribute("src","./images/dice3.png");
    }

else if(randomNumber1==4)
    {
        document.querySelector(".img1").setAttribute("src","./images/dice4.png");
    }

else if(randomNumber1==5)
    {
        document.querySelector(".img1").setAttribute("src","./images/dice5.png");
    }

else if(randomNumber1===6)
    {
        document.querySelector(".img1").setAttribute("src","./images/dice6.png");
    }
else{
    alert("Wait a minute ! ! !");
}

// for dice2

if(randomNumber2==1)
    {
        document.querySelector(".img2").setAttribute("src","./images/dice1.png");
    }
    
    else if(randomNumber2==2)
        {
            document.querySelector(".img2").setAttribute("src","./images/dice2.png");
        }
    
    else if(randomNumber2==3)
        {
            document.querySelector(".img2").setAttribute("src","./images/dice3.png");
        }
    
    else if(randomNumber2==4)
        {
            document.querySelector(".img2").setAttribute("src","./images/dice4.png");
        }
    
    else if(randomNumber2==5)
        {
            document.querySelector(".img2").setAttribute("src","./images/dice5.png");
        }
    
    else if(randomNumber2===6)
        {
            document.querySelector(".img2").setAttribute("src","./images/dice6.png");
        }
    else{
        alert("Wait a minute ! ! !");
    }

if (randomNumber1>randomNumber2)
{
    document.querySelector("h1").innerHTML= "PLAYER1 WINS &#128681; ! ! !";

}
else if(randomNumber2 > randomNumber1)
{
    document.querySelector("h1").innerHTML= "PLAYER2 WINS &#128681;! ! !";
}
else{
    document.querySelector("h1").innerHTML= "DRAW ! ! !";
}