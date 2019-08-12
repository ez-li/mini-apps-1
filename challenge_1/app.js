
$(document).ready(function() {

    var createGrid = function(num) {
        // $(".grid-container").append('<div class="grid-item"> </div>')
        for (var i = 0; i < num; i ++) {
            for (var j = 0; j < num; j ++) {
                $(".grid-container").append(`<div class="grid-item row${i} col${j}"></div>`)
            }
        }
    }

    var num = 3;
    createGrid(num);
    
    var hasThree = function(square) {
        // check for a given square whether its row has 3
        var checkRow = square.attr("class").match(/row./)[0];
        var checkCol = square.attr("class").match(/col./)[0];
        var currentPiece = square.attr("class").match(/clicked.*/)[0].slice(8);

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

        // checks diagonals

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

    // set the default piece to true, because X always plays first
    var turn = true;
    $(".grid-item").click(function() {
        // if item has already been played, skip
        if ($(this).hasClass('clicked')) {
            return;
        }
        var piece = turn ? 'X' : 'O';
        $(this).toggleClass(`clicked ${piece}`);
        $(this).append(`<p>${piece}</p>`);
        turn = !turn;

        // check if current row, col, diag has three
        if (hasThree($(this))) {
            $("body").append("<p>Three in a Row!</p>")
            stopGame();
        };

        // check if board is full
        if (boardFull()) {
            $("body").append("<p>Game Over</p>")
        }
    });

    // re-sets the game at any time
    $(".play-button").click(function() {
        $(".grid-item").removeClass('O');
        $(".grid-item").removeClass('X');
        $(".grid-item").removeClass('clicked');
        $(".grid-item p").remove();
        $("body p").remove();
        turn = true;        
    });



})
