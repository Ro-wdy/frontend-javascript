// 1. Define the Student interface
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// 2. Create two students
const student1: Student = {
  firstName: "Rhodah",
  lastName: "Mulera",
  age: 21,
  location: "Nairobi",
};

const student2: Student = {
  firstName: "James",
  lastName: "Mwangi",
  age: 23,
  location: "Mombasa",
};

// 3. Create an array of students
const studentsList: Student[] = [student1, student2];

// 4. Render a table using Vanilla JS
const table = document.createElement("table");
const tableHead = document.createElement("thead");
const tableBody = document.createElement("tbody");

// Create table headers
const headerRow = document.createElement("tr");
const headerName = document.createElement("th");
headerName.textContent = "First Name";
const headerLocation = document.createElement("th");
headerLocation.textContent = "Location";

headerRow.appendChild(headerName);
headerRow.appendChild(headerLocation);
tableHead.appendChild(headerRow);

// Append rows for each student
studentsList.forEach((student) => {
  const row = document.createElement("tr");

  const nameCell = document.createElement("td");
  nameCell.textContent = student.firstName;

  const locationCell = document.createElement("td");
  locationCell.textContent = student.location;

  row.appendChild(nameCell);
  row.appendChild(locationCell);
  tableBody.appendChild(row);
});

// Combine thead and tbody into table
table.appendChild(tableHead);
table.appendChild(tableBody);

// Add table to document body
document.body.appendChild(table);
