// Функция выполнена без промисов, такая же функция с промисами будет в promise.js

let drink = .5;

function shoot(arrow, headshot, fail){
    console.log("You made a shot...");

    setTimeout(function(){
        Math.random() > .5 ? headshot({}) : fail("You missed");
    }, 3000)
};

function win(){
    console.log("You won!");
    (drink == 1) ? buyBeer() : giveMoney();
}

function buyBeer(){
    console.log("You buyed beer");
}

function giveMoney(){
    console.log("You got paid");
}

function loose(){
    console.log("You lost!");
}

shoot({},
    function (mark){
        console.log("You hit the target!");
        win(mark, buyBeer, giveMoney);
    },
    function (miss){
        console.error(miss);
        loose();
    }
)