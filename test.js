function season(s)
{
    switch(Number(s))
    {
        case 1:
            console.log("spring");
            break;
        case 2:
            console.log("winter");
            break;
        case 3:
            console.log("automn");
            break;
        case 4:
            console.log("summer");
            break;
    }
}

season("a");


console.log(typeof("aa") == 'object')

var d = new Date();
console.log(typeof(d) == 'object');

function User(){}
var u = new User();
u = 1;
console.log(typeof(u) == 'object');

var arr = new Array(3,4);
console.log(typeof(arr) == 'object');


function plus()
{

}



var obj = {
    title:'aaa'
}

var title = 'aaaa';

var obj2 = {title}




function so()
{
    var arr  = [123,123,123,123,123,5,47,587789];

    //arr.sort((a,b)=> a-b);

    arr.sort();

    console.log(arr)
}