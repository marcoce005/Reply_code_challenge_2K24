import { read_file } from "../fs_helper.js";

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
            map.has(y) ? map.set(y, [...map.get(y), x]) : map.set(y, [x]);
        });
        f = f.slice(M);
        console.log(N, M, map);            // invio alla funzione risolutrice
    }
};

async function main() {
    let file = await read_file("file.txt");
    gestisci(file);
}

main();