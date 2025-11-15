//Mini Project Assignment – JS Arrays


let students = [
  { name: "Alice", marks: 85 },
  { name: "Bob", marks: 58 },
  { name: "Charlie", marks: 92 },
  { name: "David", marks: 37 },
  { name: "Eva", marks: 76 }
];

console.log("All Students:");
students.forEach(student => {
  console.log(`${student.name} - ${student.marks}`);
});

let totalMarks = students.reduce((sum, student) => sum + student.marks, 0);
let averageMarks = totalMarks / students.length;

console.log(`Total Marks: ${totalMarks}`);
console.log(`Average Marks: ${averageMarks.toFixed(2)}`);

let highest = students.reduce((max, student) => (student.marks > max.marks ? student : max));
let lowest = students.reduce((min, student) => (student.marks < min.marks ? student : min));

console.log(`\nHighest: ${highest.name} (${highest.marks})`);
console.log(`Lowest: ${lowest.name} (${lowest.marks})`);

let passingStudents = students.filter(student => student.marks >= 40);
console.log("\nStudents Who Passed:");
passingStudents.forEach(s => console.log(`${s.name} - ${s.marks}`));

let sortedStudents = [...students].sort((a, b) => b.marks - a.marks);
console.log("\nStudents Sorted by Marks (High → Low):");
sortedStudents.forEach(s => console.log(`${s.name} - ${s.marks}`));

let top3 = sortedStudents.slice(0, 3);
console.log("\nTop 3 Performers:");
top3.forEach((s, i) => console.log(`${i + 1}. ${s.name} - ${s.marks}`));

let addMore = false; // change to true to activate prompt mode
if (addMore) {
  let count = prompt("How many students do you want to add?");
  for (let i = 0; i < count; i++) {
    let name = prompt(`Enter name of student ${i + 1}:`);
    let marks = parseInt(prompt(`Enter marks for ${name}:`));
    students.push({ name, marks });
  }
}
let passPercentage = (passingStudents.length / students.length) * 100;
console.log(`\nPass Percentage: ${passPercentage.toFixed(2)}%`);

console.log("\nGrades:");
students.forEach(student => {
  let grade;
  if (student.marks >= 90) grade = "A";
  else if (student.marks >= 75) grade = "B";
  else if (student.marks >= 50) grade = "C";
  else grade = "Fail";
  console.log(`${student.name} - ${student.marks} (${grade})`);
});