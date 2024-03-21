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
    return map;
}

fill(10, initial);

