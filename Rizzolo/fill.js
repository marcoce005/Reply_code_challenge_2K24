const initial = new Map([
    [7, [2, 3]],
    [8, [4, 3, 6]],
    [5, [8]]
]);


function fill(n, map){
    let numbers = [];
    // console.log(map)
    for (let i of map) {
        numbers.push(i.flat())
        // console.log(i.flat())
    }
    numbers = numbers.flat()
    // console.log(numbers)
    for(let i=0 ; i<n ; i++){
        if(numbers.indexOf(i)==-1){
            map.set(i, [])
        }
    }
    console.log(map)
}

fill(10, initial);

