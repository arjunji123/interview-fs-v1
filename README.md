# Admin Panel - React + TailwindCSS + TypeScript

This is a modern, fully functional admin panel built using React, TailwindCSS, and TypeScript. It allows managing users with the ability to **list**, **add**, **edit**, and **delete** users through a clean and professional UI.

---

## 🚀 Features Implemented

### ✅ Sidebar Navigation

* Fully responsive sidebar
* Main links to Dashboard, Users, and other modules
* Active state highlighting

### ✅ Dashboard Page

* A landing page with stats and quick info
* Placeholder for future widgets like recent activity, user stats, etc.

### ✅ User Management

* **User List Page:**

  * Shows all users in a table
  * Columns: Name, Email, Role, Status, Actions
  * Action buttons for Edit and Delete

* **Add User Page:**

  * A form with multiple fields:

    * Name, Email, Phone Number
    * Role (dropdown), Status (toggle)
    * Gender (radio), Date of Birth (datepicker)
  * On successful submit, redirects back to user list

* **Edit User Page:**

  * Same form as Add User but prefilled with selected user data
  * Update the data and submit to reflect changes

### ✅ Delete User

* From the User List table, users can be deleted with a confirmation popup/modal

---

## 📁 Folder Structure

```
frontend-mui/
├── src/
│   ├── components/       → Reusable components (e.g., Sidebar, Header, FormFields)
│   ├── pages/            → Page-level components (Dashboard, UserList, AddUser, EditUser)
│   ├── routes/           → Route definitions using React Router
│   ├── services/         → API handling and endpoint logic
│   ├── types/            → TypeScript models and interfaces
│   ├── App.tsx          → Main App component with routing
│   └── main.tsx         → React root renderer
```

---

## 🧠 What I Did (My Contributions)

1. **Set up project with Vite + React + TypeScript**
2. **Installed TailwindCSS** with PostCSS config
3. **Created responsive layout:**

   * Sidebar + Header + Main content
4. **Implemented routing using React Router v6**
5. **Built user list table with edit and delete actions**
6. **Created Add/Edit User forms with validation and field types**
7. **Integrated form fields with useState for data management**
8. **Managed navigation on form submit and edit click**
9. **Created a mock data service (optional: could integrate real APIs later)**
10. **Handled styling with Tailwind for consistency and responsiveness**

---

## 📦 Technologies Used

* React.js (w/ TypeScript)
* Tailwind CSS
* React Router
* Vite

---

## 📌 How to Run the Project

```bash
# Clone the repo
https://github.com/your-username/admin-panel.git

# Navigate to folder
cd frontend-mui

# Install dependencies
npm install

# Run the development server
npm run dev
```


---

## 🔚 Final Note

This is a base-level scalable admin panel with user management features that can be extended further with authentication, pagination, real API integration, and role-based access control.

---

✅ *Developed by Arjun Singh*
