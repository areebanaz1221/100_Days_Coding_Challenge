"use strict";
// A list of grades
let grades = [86, 91, 52, 89, 58, 70];
// Calculates the average grade
let averageGrade = grades.reduce((total, grade) => total + grade, 0) / grades.length;
// Shows the average grade
console.log(averageGrade);
