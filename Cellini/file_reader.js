import { read_file } from "../fs_helper.js";

const gestisci = (f) => {
    f = f.split('\n');
    for (let i = 0; i < f[0]; i++) {
        f = f.slice(1);
        let [N, M] = f[0].split(' ');
        f = f.slice(1);
        let list = f.slice(0, M);
        let map = new Map();
        list.map(e => {
            let [x, y] = e.split(' ');
            map.has(y) ? map.set(y, [...map.get(y), x]) : map.set(y, [x]);
        });
        return [N, M, map];            // invio alla funzione risolutrice
    }
};

async function main() {
    let file = await read_file("file.txt");
    console.log(gestisci(file));
}

main();