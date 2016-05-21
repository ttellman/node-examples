var rect = require('./rectangle-2'),
    argv = require('yargs')
        .usage('Usage: node $0 --l=[num] ==b=[num]')
        .demand('l', 'b')
        .argv;

function solveRect(l,b) {
    console.log("Solving for rectangle with l = " + l + " and b = " + b);

    rect(l,b, function (err, rectangle) {
        if(err){
            console.log(err);
        }else{
            console.log("The area of a rectangle of dimensions length = " + l + " and breath = " + b + " is " + rectangle.area() );
            console.log("The perimeter of a rectangle of dimensions length = " + l + " and breath = " + b + " is " + rectangle.perimeter() );
        }
    });
    
    
};

solveRect(argv.l, argv.b);
// solveRect(2,4);
// solveRect(3,5);
// solveRect(-3,5);