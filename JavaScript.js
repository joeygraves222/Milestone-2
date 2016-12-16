var score = 0;
var lives = 3;

    for (var imagesArray = [], i = 0; i < 500; i++) {
        if (i < 250) {
            imagesArray[i] = 0;
        }
        else {
            imagesArray[i] = 1;
        }
    }
    for (var tilesArray = [], i = 0; i < 500; i++) {
        if (i < 25) {
            tilesArray[i] = document.getElementById('img1');
        }
        else if (i < 50) {
            tilesArray[i] = document.getElementById('img2');
        }
        else if (i < 75) {
            tilesArray[i] = document.getElementById('img3');
        }
        else if (i < 100) {
            tilesArray[i] = document.getElementById('img4');
        }
        else if (i < 125) {
            tilesArray[i] = document.getElementById('img5');
        }
        else if (i < 150) {
            tilesArray[i] = document.getElementById('img6');
        }
        else if (i < 175) {
            tilesArray[i] = document.getElementById('img7');
        }
        else if (i < 200) {
            tilesArray[i] = document.getElementById('img8');
        }
        else if (i < 225) {
            tilesArray[i] = document.getElementById('img9');
        }
        else if (i < 250) {
            tilesArray[i] = document.getElementById('img10');
        }
        else if (i < 275) {
            tilesArray[i] = document.getElementById('img11');
        }
        else if (i < 300) {
            tilesArray[i] = document.getElementById('img12');
        }
        else if (i < 325) {
            tilesArray[i] = document.getElementById('img13');
        }
        else if (i < 350) {
            tilesArray[i] = document.getElementById('img14');
        }
        else if (i < 375) {
            tilesArray[i] = document.getElementById('img15');
        }
        else if (i < 400) {
            tilesArray[i] = document.getElementById('img16');
        }
        else if (i < 425) {
            tilesArray[i] = document.getElementById('img17');
        }
        else if (i < 450) {
            tilesArray[i] = document.getElementById('img18');
        }
        else if (i < 475) {
            tilesArray[i] = document.getElementById('img19');
        }
        else if (i < 500) {
            tilesArray[i] = document.getElementById('img20');
        }
    }
    var phrase = [];
    function shuffle(a) {
        var j, x, i;
        for (i = a.length; i; i--) {
            j = Math.floor(Math.random() * i);
            x = a[i - 1];
            a[i - 1] = a[j];
            a[j] = x;
        }
    }
    shuffle(imagesArray);
    shuffle(tilesArray);
    var count = 0;

    function playFunction(imagesArray, tilesArray) {
        if (imagesArray[count] == 0) {
            tilesArray[count].setAttribute('src', 'Images/mole.png');
        }
        else {
            tilesArray[count].setAttribute('src', 'Images/dog.png');
        }
        //setTimeout(function ()
        //{
        //    tilesArray[count].setAttribute('src', 'Images/grass.jpg');
        //}, 1000);
        console.log(count);
        count++;
    };

    var interval;

    var startBtn = document.getElementById('startBtn').onclick = function ()
    {
      interval = setInterval(function () { playFunction(imagesArray, tilesArray);}, 1000);
    };
    function updateScore(scores, numLives)
    {
        document.getElementById('scoreTag').innerHTML = "Score: " + scores;
        document.getElementById('livesTag').innerHTML = "Lives: " + numLives;
    }

    var images = document.getElementsByClassName('pic');
    
    for (var id = 1; id <= 20; id++)
    {
        
        var img = document.getElementById('img' + id);
        var src = img.getAttribute("src");
        img.onclick = function () {

            console.log('src: ' + src);

            if (imagesArray[count] === 0) {
                //console.log("mole");
                score++;
                updateScore(score, lives);
            }
            else if (imagesArray[count] === 1) {
                // console.log("dog");
                if (lives > 0) {
                    score--;
                    lives--;
                    updateScore(score, lives);
                }
                else {
                    clearInterval(interval);
                    alert("Game Over, your score is " + score);
                }
            }
            else {
               // console.log("not Dog or Mole");
            }
        }

    }
