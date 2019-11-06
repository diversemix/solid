import * as fs from 'fs';
import * as path from 'path';
export class MessageStoreImplementation {
    constructor() {
        this.dir = null;
    }
    get workingDirectory() {
        return this.dir;
    }
    save(id, message) {
        const file = path.join(this.dir, id + '.txt');
        fs.appendFileSync(file, message);
        return file;
    }
    messageEventHandler(sender, args) {
        throw new Error('Method not implemented.');
    }
    read(id) {
        throw new Error('Method not implemented.');
    }
}
