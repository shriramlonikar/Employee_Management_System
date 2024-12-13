


const employees = [
    {
      "id": 1,
      "firstname": "Amit",
      "email": "employee1@example.com",
      "password": "123",
      "tasks": [
        {
          "title": "Task 1",
          "description": "Complete the quarterly report.",
          "date": "2024-12-07",
          "category": "Reports",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        },
        {
          "title": "Task 2",
          "description": "Update client database.",
          "date": "2024-12-10",
          "category": "Data Management",
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false
        },
        {
          "title": "Task 3",
          "description": "Prepare presentation slides.",
          "date": "2024-12-08",
          "category": "Presentations",
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false
        }
      ],
      "taskNumbers": {
        "active": 2,
        "newTask": 1,
        "completed": 1,
        "failed": 0
      }
    },
    {
      "id": 2,
      "firstname": "Rajesh",
      "email": "employee2@example.com",
      "password": "123",
      "tasks": [
        {
          "title": "Task 1",
          "description": "Review project proposal.",
          "date": "2024-12-06",
          "category": "Project Management",
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false
        },
        {
          "title": "Task 2",
          "description": "Organize team meeting.",
          "date": "2024-12-08",
          "category": "Team Coordination",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        }
      ],
      "taskNumbers": {
        "active": 1,
        "newTask": 1,
        "completed": 1,
        "failed": 0
      }
    },
    {
      "id": 3,
      "firstname": "Sneha",
      "email": "employee3@example.com",
      "password": "123",
      "tasks": [
        {
          "title": "Task 1",
          "description": "Resolve client complaints.",
          "date": "2024-12-07",
          "category": "Customer Support",
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false
        },
        {
          "title": "Task 2",
          "description": "Draft email templates.",
          "date": "2024-12-09",
          "category": "Communications",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        }
      ],
      "taskNumbers": {
        "active": 1,
        "newTask": 1,
        "completed": 1,
        "failed": 0
      }
    },
    {
      "id": 4,
      "firstname": "Priya",
      "email": "employee4@example.com",
      "password": "123",
      "tasks": [
        {
          "title": "Task 1",
          "description": "Inspect inventory levels.",
          "date": "2024-12-06",
          "category": "Inventory Management",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        },
        {
          "title": "Task 2",
          "description": "Coordinate with suppliers.",
          "date": "2024-12-11",
          "category": "Procurement",
          "active": false,
          "newTask": false,
          "completed": false,
          "failed": true
        }
      ],
      "taskNumbers": {
        "active": 1,
        "newTask": 1,
        "completed": 0,
        "failed": 1
      }
    },
    {
      "id": 5,
      "firstname": "Anjali",
      "email": "employee5@example.com",
      "password": "123",
      "tasks": [
        {
          "title": "Task 1",
          "description": "Audit financial records.",
          "date": "2024-12-05",
          "category": "Finance",
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false
        },
        {
          "title": "Task 2",
          "description": "Prepare annual budget.",
          "date": "2024-12-15",
          "category": "Budgeting",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        }
      ],
      "taskNumbers": {
        "active": 1,
        "newTask": 1,
        "completed": 1,
        "failed": 0
      }
    }
  ];
  
  const admin = [
    {
      "id": 1,
      "firstname": "Kiran",
      "email": "admin@example.com",
      "password": "123"
    }
  ];
  
  
export const setLocalStorage = ()=>{
    localStorage.setItem('employees', JSON.stringify(employees))
    localStorage.setItem('admin', JSON.stringify(admin))
}
export const getLocalStorage = ()=>{
    const employees = JSON.parse(localStorage.getItem('employees'))
    const admin = JSON.parse(localStorage.getItem('admin'))

    return {employees, admin}
    
}
  