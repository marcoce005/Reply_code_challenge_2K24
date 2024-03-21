import { read_file } from "../fs_helper.js";

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

const gestisci = (f) => {
    f = f.split('\n');
    let T = f[0];
    for (let i = 0; i < T; i++) {
        i === 0 ? f = f.slice(1) : null;
        let [N, M] = f[0].split(' ');
        f = f.slice(1);
        let list = f.slice(0, M);
        let map = new Map();
        list.map(e => {
            let [x, y] = e.split(' ');
            x = +x; y = +y;
            map.has(y) ? map.set(y, [...map.get(y), x]) : map.set(y, [x]);
        });
        f = f.slice(M);
        map = fill(N, map);
        console.log(N, M, map);            // invio alla funzione risolutrice
    }
};

async function main() {
    let file = await read_file("file.txt");
    gestisci(file);
}

main();