
// A list showing a programmer's skills in detail


let developerSkills = {
    languages: ["JavaScript", "TypeScript", "Python", "C++", "Java"],
    frameworks: ["React", "Angular", "Vue", "Django", "String"],
    tools: ["Git", "Webpack", "Docker", "Jenkins"],
};

// Getting specific skills from the list


let { languages, frameworks, tools } = developerSkills;

// Showing a skill from each category

console.log(`Language: ${languages[0]}, Framework: ${frameworks[0]}, Tool: ${tools[0]}`);