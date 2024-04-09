function getSeason(month: number) {
    switch (month) {
        case 1:
        case 2:
        case 12:
            return "Winter";
        case 3:
        case 4:
        case 5:
            return "Spring";
        case 6:
        case 7:
        case 8:
            return "Summer";
        case 9:
        case 10:
        case 11:
            return "Autumn";
        default:
            return "Invalid month";
    }
}

// Example usage:
const month = 6;
const season = getSeason(month);
console.log(`The season for month ${month} is ${season}`);
