import { deepCloneObject } from './util.js';

const o1 = {
    a: 'a',
    b: {
        c: 'c',
        d: 'd',
        e: 'e',
        f: {
            g: 'g'
        }
    }
};

const o2 = deepCloneObject(o1);
o1.b.c = 'cc';
console.log(o1.b.c === o1.b.c ? `wrong` : `right`);
console.log(`o1`, o1);
console.log(`o2`, o2);