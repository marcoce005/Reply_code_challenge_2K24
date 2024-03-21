const initial = new Map([
    [7, [2, 3]],
    [8, [4, 3, 6]],
    [5, [8]]
]);


function fill(n, map){
    let numbers = [];
    for (let i of map) {
        numbers.push(i.flat())
    }
    numbers = numbers.flat()
    for(let i=0 ; i<n ; i++){
        if(numbers.indexOf(i)==-1){
            map.set(i, [])
        }
    }
    return new Map([...map.entries()].sort())
}

let n = 10

let map = fill(n, initial);

for(let i of map){
    console.log(i)
}

let caso = [];
// while(free=false){
    for (let i = 0; i < n; i++) {
        let up_stick = map.get(i)
        if(up_stick!=undefined && up_stick.toString()==[].toString()){
            console.log(i)
            caso.push(i)
        }else{
            while(up_stick!="" && up_stick!=undefined){
                console.log(i)
            }
        }
    }
// }
