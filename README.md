# To-Do List App  

A simple yet efficient **To-Do List App** built using **React.js** and **Firebase**. This app helps you manage your tasks effectively by allowing you to add, edit, delete, and prioritize tasks with a clean and intuitive user interface.  

---

## Features  

- **Task Prioritization**  
  Organize tasks with three priority levels:  
  - 🔴 **High**: Tasks requiring immediate attention.  
  - 🟡 **Medium**: Tasks of moderate urgency.  
  - 🟢 **Low**: Tasks that can be addressed later.  

- **CRUD Operations**  
  - **Add**: Create tasks with a priority level.  
  - **Edit**: Modify tasks as needed.  
  - **Delete**: Remove completed or unnecessary tasks.  

- **Real-Time Updates**  
  All tasks are stored and updated in **Firebase Realtime Database**, ensuring instant synchronization.  

- **Responsive Design**  
  The app is optimized for both desktop and mobile devices.  

---

## Tech Stack  

- **Frontend**: React.js  
- **Database**: Firebase Realtime Database  
- **Styling**: Bootstrap 5, CSS3  

---

## Setup  

### Prerequisites  
1. Node.js installed on your system.  
2. A Firebase account with a project set up.  

---

### Installation  

1. Clone the repository:  
   ```bash
   git clone https://github.com/yourusername/todo-list-app.git
   cd todo-list-app

2. Install dependencies:

`npm install`

3. Set up Firebase:
Go to the Firebase Console and create a new project.
Navigate to Build > Realtime Database and click Create Database.
Copy the database URL (e.g., https://your-database.firebaseio.com/).
4. Update Firebase configuration:
Replace the placeholder database URL in your app with the Firebase Realtime Database URL you copied in the previous step.

Start the development server:

`npm start`

**Usage**
* Add tasks with a name and priority.
* Edit tasks to update their content or priority.
* Delete tasks when completed.
* Enjoy an organized and productive day!

