
$(document).ready(function() {

    var createGrid = function(num) {
        // $(".grid-container").append('<div class="grid-item"> </div>')
        for (var i = 0; i < num; i ++) {
            for (var j = 0; j < num; j ++) {
                $(".grid-container").append(`<div class="grid-item row${i} col${j}"></div>`)
            }
        }
    }
    createGrid(3);
    
    var hasThree = function(square) {
        // check for a given square whether its row has 3
        var checkRow = square.attr("class").match(/row./)[0];
        var checkCol = square.attr("class").match(/col./)[0];
        var currentPiece = square.attr("class").match(/clicked.*/)[0].slice(8);

        // console.log($(`.${checkRow}`).length);
        // console.log($(`.${checkCol}`.children));

        // console.log($(".grid-container").children()[0].hasClass(`${checkRow}`))
        console.log($(".grid-container").children(`.${checkRow}`))

        // for (var i = 0; i < $(".grid-container").children().length; i++) {
        //     if ($(".grid-container").children()[i].hasClass(checkRow)) {
        //         console.log('ok')
        //     }
        // }
        // console.log(checkRow, checkCol, currentPiece)
        
        // console.log($(`.${checkRow}`).children())

        // if ($(`.${checkRow}`).children().length === 1) {
        //     console.log('yes')
        //     return true;
        // }

    }

    var boardFull = function() {
        // checks whether a board is full
        // this checks whether all the children class "clicked"
        if ($(".grid-container").children().length === $(".grid-container").children(".clicked").length) {
            return true;
        }
    }

    var turn = true;

    $(".grid-item").click(function() {
        if ($(this).hasClass('clicked')) {
            return;
        }
        var piece = turn ? 'X' : 'O';
        $(this).toggleClass(`clicked ${piece}`);
        $(this).append(`<p>${piece}</p>`);
        turn = !turn;

        if (hasThree($(this))) {
            $("body").append("<p>Three in a Row!</p>")
        };
        if (boardFull()) {
            $("body").append("<p>Game Over</p>")
        }
    });

    $(".play-button").click(function() {
        $(".grid-item").removeClass('clicked');
        $(".grid-item p").remove();
        $("body p").remove();
        turn = true;        
    });



})
