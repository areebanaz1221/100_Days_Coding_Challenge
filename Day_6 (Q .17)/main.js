"use strict";
let Guest_List = ['Sir Kamran Khan Tessori', 'Sir Zia Khan', 'Sir Daniyal Nagori'];
// for(let i=0; i<Guest_List.length; i++){
//     console.log('Dear Sir. ' + Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n')
// }
let absent_Guest = 'Sir Kamran Khan Tessori';
let new_Guest = 'Sir Aalam';
Guest_List[0] = new_Guest;
// for(let i=0; i<Guest_List.length; i++){
//     console.log('Dear Sir. ' + Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n')
// }
console.log(`Sir. ${absent_Guest} is not coming to the party.`);
console.log('Good News! We find Big Table So we are inviting 3 more guests.');
Guest_List.unshift('Sir Hamza');
Guest_List.splice(2, 0, ' Sir Zeeshan');
Guest_List.push('Sir Awais');
for (let i = 0; i < Guest_List.length; i++) {
    console.log('Dear Sir. ' + Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n');
}
console.log('/nSorry we can not arrange big table,Only Two peoples will be invited.');
while (Guest_List.length > 2) {
    let remove_Guest = Guest_List.pop();
    console.log(`Sorry Sir. ${remove_Guest}, You are not invited to Dinner.`);
}
for (let i = 0; i < Guest_List.length; i++) {
    console.log('Dear Sir. ' + Guest_List[i] + ',\n\nYou are still invited.\n\nThank You!\n\n');
}
Guest_List.splice(0, 2);
console.log(Guest_List);
