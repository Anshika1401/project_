// Team Data (You can replace this with your backend fetch logic)
const teamData = [
    { leader: 'John Doe', id: 'TL001', members: ['Alice', 'Bob'] },
    { leader: 'Jane Smith', id: 'TL002', members: ['Charlie', 'David'] },
    { leader: 'Alice', id: 'TL003', members: ['rohan', 'dravid'] },
    { leader: 'Aman gupta', id: 'TL004', members: ['Sneha sharma', 'Krish'] },
    { leader: 'Vijay', id: 'TL005', members: ['Smantha', 'Anshika'] },
    { leader: 'Palak singh', id: 'TL006', members: ['Sam ', 'Rima verma'] },
];

const teamTable = document.getElementById('teamData');
teamData.forEach(team => {
    const row = document.createElement('tr');
    row.innerHTML = `<td>${team.leader}</td><td>${team.id}</td><td>${team.members.join(', ')}</td>`;
    teamTable.appendChild(row);
});

// Task Graph using Chart.js
const ctx = document.getElementById('taskGraph').getContext('2d');
const taskGraph = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Task 1', 'Task 2', 'Task 3'],
        datasets: [{
            label: 'Tasks Completed',
            data: [12, 19, 3],
            backgroundColor: 'rgba(75, 192, 192, 0.6)'
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
const attendanceData = [
    { name: 'Alice', status: 'Present', date: '2024-09-13' },
    { name: 'Bob', status: 'Absent', date: '2024-09-13' },
    { name: 'Charlie', status: 'On Leave', date: '2024-09-13' },
    // More attendance records...
];

// Function to render attendance data
const renderAttendanceData = () => {
    const attendanceTable = document.getElementById('attendanceTable').getElementsByTagName('tbody')[0];
    
    attendanceData.forEach(record => {
        const row = document.createElement('tr');
        row.classList.add(record.status.toLowerCase().replace(' ', '-')); // Add 'present', 'absent', 'on-leave' class
        
        row.innerHTML = `
            <td>${record.name}</td>
            <td>${record.status}</td>
            <td>${record.date}</td>
        `;
        
        attendanceTable.appendChild(row);
    });
};

// Call the function to render attendance data
renderAttendanceData();

// Task Details Data (You can replace this with your backend fetch logic)
const taskDetailsData = [
    { name: 'Alice', assigned: 5, completed: 3, ongoing: 2 },
    { name: 'Bob', assigned: 4, completed: 4, ongoing: 0 },
    { name: 'Charlie', assigned: 5, completed: 4, ongoing: 1 },
    { name: 'Smantha', assigned: 6, completed: 4, ongoing: 2 },
    { name: 'Krish', assigned: 4, completed: 3, ongoing: 1 },
    { name: 'rohan', assigned: 5, completed: 4, ongoing: 0 },
    { name: 'Anshika', assigned: 6, completed: 5, ongoing: 1 },
    { name: 'Sam', assigned: 4, completed: 4, ongoing: 0 },
    { name: 'Rima verma', assigned: 5, completed: 5, ongoing: 0 },
    { name: 'Sneha sharma', assigned: 4, completed: 3, ongoing: 1 },
    { name: 'dravid', assigned: 5, completed: 4, ongoing: 0 },
    { name: 'David', assigned: 4, completed: 4, ongoing: 0 }
];

const taskDetailsTable = document.getElementById('taskDetails');
taskDetailsData.forEach(task => {
    const row = document.createElement('tr');
    row.innerHTML = `<td>${task.name}</td><td>${task.assigned}</td><td>${task.completed}</td><td>${task.ongoing}</td>`;
    taskDetailsTable.appendChild(row);
});
