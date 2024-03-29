
const userNames: string[] = ['Admin', 'Aree Rajput', 'Khansa', 'Rabia', 'Zaid', 'Duraid'];

function greetUser(): void { 
    for (const i in userNames) {
        if (userNames[i].toLowerCase() === 'Admin') {
            console.log(`Hello Admin, would you like to see a status report?`);

        } else {
            console.log (`Hello ${userNames[i]}, thank you for logging in again.`);
        }
    }
}

greetUser()