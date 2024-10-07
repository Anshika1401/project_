// Task Graph for Employee using Chart.js
const ctx = document.getElementById('employeeTaskGraph').getContext('2d');
const employeeTaskGraph = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ['Assigned', 'Completed', 'Ongoing'],
        datasets: [{
            label: 'Tasks',
            data: [5, 3, 2],
            backgroundColor: [
                'rgba(255, 99, 132, 0.6)',
                'rgba(54, 162, 235, 0.6)',
                'rgba(255, 206, 86, 0.6)'
            ]
        }]
    }
});
// Filter and render attendance for the specific employee (e.g., 'Alice')
const renderEmployeeAttendance = (employeeName) => {
    const employeeAttendance = attendanceData.filter(record => record.name === employeeName);
    const employeeAttendanceTable = document.getElementById('employeeAttendanceTable').getElementsByTagName('tbody')[0];

    employeeAttendance.forEach(record => {
        const row = document.createElement('tr');
        row.classList.add(record.status.toLowerCase().replace(' ', '-')); // Add 'present', 'absent', 'on-leave' class
        
        row.innerHTML = `
            <td>${record.date}</td>
            <td>${record.status}</td>
        `;
        
        employeeAttendanceTable.appendChild(row);
    });
};

// Example: Call the function for employee 'Alice'
renderEmployeeAttendance('Alice');
