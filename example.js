import { write_file, read_file } from "./fs_helper.js";

async function main() { 
    await write_file("test.txt", "Hello World!");
    console.log(await read_file("test.txt"));
}

main();