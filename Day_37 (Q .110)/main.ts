function assignGrade(score: number) {
    if (score >= 90) {
      return "A";
    } else if (score >= 80) {
      return "B";
    } else if (score >= 70) {
      return "C";
    } else if (score >= 60) {
      return "D";
    } else {
      return "F";
    }
  }
  
  // Example usage:
  const studentScore = 85;
  const studentGrade = assignGrade(studentScore);
  console.log(`Student score: ${studentScore}, Student grade: ${studentGrade}`);
  