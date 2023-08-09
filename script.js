// Simulated employee data (you would fetch this from a database)
const employees = [
    { id: 1, name: 'Aman', dob: '1990-05-15', doj: '2018-03-10', department: 'HR' },
    { id: 2, name: 'Allen', dob: '1985-10-21', doj: '2019-01-15', department: 'Finance' },
    { id: 3, name: 'Roshan', dob: '1988-12-05', doj: '2020-06-20', department: 'IT' }
  ];
  
  // Function to populate the employee table
  function populateTable() {
    const tableBody = document.querySelector('#employee-table tbody');
    
    employees.forEach(employee => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${employee.id}</td>
        <td>${employee.name}</td>
        <td>${employee.dob}</td>
        <td>${employee.doj}</td>
        <td>${employee.department}</td>
      `;
      tableBody.appendChild(row);
    });
  }
  
  // Call the function to populate the table when the page loads
  window.onload = populateTable;
  