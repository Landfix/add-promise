// Здесь функция выполнена с промисами

let drink = .5;

function shoot(arrow){
    console.log("You made a shot...");
    let promise = new Promise(function(resolve, reject){

        setTimeout(function(){
            Math.random() > .5 ? resolve({}) : reject("You missed");
        }, 3000) 
    });

    return promise;
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

shoot({})
    .then(mark => console.log("You hit the target!"))
    .then(win)
    .catch(loose)