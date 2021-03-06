
$(document).ready(function() {

    var createGrid = function(num) {
        // draws the grid
        // set the default piece to true, because X always plays first
        var turn = true;

        var addPiece = function() {
            // if item has already been played, skip
            if (this.classList.contains('clicked')) {
                return;
            }
            var piece = turn ? 'X' : 'O';
            this.classList.add('clicked');
            var pieceNode = document.createElement('p');
            var text = document.createTextNode(piece);
            pieceNode.appendChild(text);
            this.classList.add(piece);
            this.appendChild(pieceNode);
            // toggle turn so that next play is other piece
            turn = !turn;

            // // check if current row, col, diag has three
            if (hasThree(this.classList)) {
                var text = 'Three in a Row!';
                var winNode = document.createElement('p');
                var winText = document.createTextNode(text);
                winNode.appendChild(winText);
                document.body.appendChild(winNode);
                stopGame();
            };

            if (diagonalWin()) {
                var text = 'Three in a Row!';
                var winNode = document.createElement('p');
                var winText = document.createTextNode(text);
                winNode.appendChild(winText);
                document.body.appendChild(winNode);
                stopGame();
            }

            // // check if board is full
            if (boardFull()) {
                var text = 'Game Over';
                var overNode = document.createElement('p');
                var overText = document.createTextNode(text);
                overNode.appendChild(overText);
                document.body.appendChild(overNode);
            }

        }

        // drawing grid
        for (var i = 0; i < num; i ++) {
            for (var j = 0; j < num; j ++) {
                var child = document.createElement('div');
                child.className = 'grid-item row' + i + ' col' + j;
                child.addEventListener('click', addPiece)
                document.getElementsByClassName('grid-container')[0].appendChild(child);
            }
        }

        // CLICK BUTTON TO RESTART
        // document.getElementById('play-button').addEventListener('click', function() {
        //     // document.getElementsByClassName("grid-container").remove();
        //     // var pNode = document.getElementsByTagName('p');
        //     // pNode.remove();
        //     document.getElementsByClassName('grid-container').innerHTML = '';
        //     createGrid(num);
        //     // document.body.removeChild(pNode)
        // })
        $("#play-button").click(function() {
            $(".grid-container").html('')
            $("body p").remove()
            createGrid(num);
        });

    }
    var num = 3;
    createGrid(num)


    // PLAY FUNCTIONS
    // checks whether the current play gives us a win

    var diagonalWin = function() {
        var center = document.querySelectorAll(`.row1.col1`)[0].classList;
        if (!center[4]) {
            return false;
        }
        var centerPiece = center[4];
        if (document.querySelectorAll(`.row0.col0`)[0].classList[4] === centerPiece) {
            if(document.querySelectorAll(`.row2.col2`)[0].classList[4] === centerPiece) {
                return true;
            }
        }
        if (document.querySelectorAll(`.row0.col2`)[0].classList[4] === centerPiece) {
            if(document.querySelectorAll(`.row2.col0`)[0].classList[4] === centerPiece) {
                return true;
            }
        }
    }

    var hasThree = function(currentPlay) {
        // check for a given square whether its row has 3
        var checkRow = currentPlay[1];
        var checkCol = currentPlay[2];
        var currentPiece = currentPlay[4]

        // finds the children of grid that have the same row class and piece
        var testRow = $(`.grid-container > .${checkRow}.${currentPiece}`).children().prevObject.length;
        if (testRow === num) {
            return true;
        }

        // finds the children of grid that have the same col class and piece
        var testCol = $(`.grid-container > .${checkCol}.${currentPiece}`).children().prevObject.length;
        if (testCol === num) {
            return true;
        }
    }

    // checks whether a board is full and ends game
    var boardFull = function() {
        // this checks whether all the children class "clicked"
        if ($(".grid-container").children().length === $(".grid-container").children(".clicked").length) {
            return true;
        }
    }

    // when three in a row, end game so no more pieces can be added
    var stopGame = function() {
        $(".grid-item").addClass('clicked');
    }

    // re-sets the game at any time
    // $(".play-button").click(function() {
    //     $(".grid-item").removeClass('O');
    //     $(".grid-item").removeClass('X');
    //     $(".grid-item").removeClass('clicked');
    //     $(".grid-item p").remove();
    //     $("body p").remove();
    //     turn = true;
    // });

    // tracking player wins and counts

})
