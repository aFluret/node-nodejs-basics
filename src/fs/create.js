import fs,{exists} from 'fs'
const create =  () => {
    
    exists('fresh.txt', (exists) => {
        if (exists) { throw new Error("FS operation failed")};
    });
    const content = 'I am fresh and young';

    fs.writeFile('fresh.txt', content, err => {
        if (err) {
            console.error(err);
        } else {
            // file written successfully
        }
    });
    

};

create();