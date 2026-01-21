// Medium

const students = [
{ id: 1, name: "Sara" },
{ id: 2, name: "Lars" }, // forgot comma
{ id: 3, name: "Emma" }
];
//console.log(students[1].name); // need to chose witch student or map
//console.log(students.map((s) => s.name)); // quick, can change to just print the name instead of the whole array
//

const item = {
name: "Laptop",
retailPrice: 1200, // renamed retail price
orderPrice: 1000 //duplicate price
};
//console.log(item.retailPrice);

//

const team = {
members: [
{ name: "Ana", skills: ["JS", "React"] },
{ name: "Bo", skills: ["Node", "SQL"] } // forgot to do an array, and to have it in two strings
]
};
//console.log(team.members[1].skills[0]);

//

const settings = { darkMode: false };
if (settings.darkMode == true) { // forgot to ad a =
console.log("Dark mode ON");
} else {
console.log("Dark mode OFF");
}