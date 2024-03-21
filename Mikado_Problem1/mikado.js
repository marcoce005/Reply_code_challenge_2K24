import fs from 'fs';

async function read_file(file_name) {
    return fs.readFileSync(file_name, "utf-8");
}

async function write_file(file_name, payload) {
    return fs.writeFileSync(file_name, payload);
}

const gestisci = async (f) => {
    f = f.split('\n');
    let T = f[0];
    for (let i = 0; i < T; i++) {
        i === 0 ? f = f.slice(1) : null;
        let [N, M] = f[0].split(' ');
        f = f.slice(1);
        let list = f.slice(0, M);
        let l = [];
        list.map(e => {
            let [x, y] = e.split(' ');
            l.push({x: +x, y: +y});
        });
        f = f.slice(M);
        await risolutore(N, l, i + 1);            // invio alla funzione risolutrice
    }
};

async function main() {
    await write_file("output.txt", "");
    let file = await read_file("file.txt");
    gestisci(file);
}

main();

const risolutore = async (n, l, T) => {
    let first = Array(n);
    for(let i = 0; i < n; i++) {
        first[i] = i;
    }
    let second = [];
    let cas = [];
    let y = [];
    while(first.length != 0) {
        for(let i = 0; i < first.length; i++) {
            if (l.reduce((a, e) => a || e.y === first[i], false)) {
                second.push(first[i]);
            }
            else {
                cas.push(first[i]);
                l = l.filter(e => !(e.x === first[i]));
            }
        }
        first = [];
        for(let i = 0; i < second.length; i++) {
            if (l.reduce((a, e) => a || e.y === second[i], false)) {
                first.push(second[i]);
            }
            else {
                cas.push(second[i]);
                l = l.filter(e => !(e.x === second[i]));
            }
        }
        second = [];
    }
    let s = cas.join(' ');
    s = "Case #" + T + ": " + s + "\n"
    await write_file("output.txt", await read_file("output.txt") + s);
}