import * as dotenv from 'dotenv';

dotenv.config();

export function creerClassDynamiquement(): any {

    const nomDeClass = process.env.MY_CLASS_NAME;

    if(!nomDeClass) {
        throw new Error("MY_CLASS_NAME environment variable is not set.");
    }

    const nouvelleClass = class nomDeClass {
        constructor() {
            console.log(`${nomDeClass} class created!`);
        }
    };
    
    return nouvelleClass;

}

