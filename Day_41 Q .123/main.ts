let str = "example string";
let vowels = "aeiou";

for (let i = 0; i < str.length; i++) {
    let char = str[i].toLowerCase();
    if (vowels.includes(char)) {
        console.log("First vowel found:", char);
        break;
    }
}
