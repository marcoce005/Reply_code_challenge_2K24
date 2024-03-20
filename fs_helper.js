import fs from 'fs';

async function read_file(file_name) {
    return fs.readFileSync(file_name, "utf-8");
}

async function write_file(file_name, payload) {
    return fs.writeFileSync(file_name, payload);
}

export { read_file, write_file };

