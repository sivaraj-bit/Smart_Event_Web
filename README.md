# Planora — Smart Event Management Platform

Planora is a modern, responsive frontend web application designed to help users organize and manage their events in one place.

Users can create events, manage event details, search and filter events, track guests and budgets, and store event data directly in the browser using LocalStorage.

## 🚀 Live Demo

**Live Website:**
https://sivaraj-bit.github.io/Smart_Event_Web/

## 📌 Features

* 🔐 Login form validation
* 📅 Create and manage events
* 📝 Add event name, category, date, time, venue, guests, budget and description
* 🔎 Search events
* 🏷️ Filter events by category
* 🗑️ Delete events
* 📊 Display event statistics
* 💾 Store event data using LocalStorage
* 📱 Responsive design for different screen sizes
* ✨ Modern dark-themed user interface
* 🎨 Glassmorphism and gradient-based UI
* ⚡ Dynamic event rendering using JavaScript

## 🛠️ Technologies Used

### HTML

Used to create the structure and content of the application.

### Tailwind CSS

Used to create the responsive and modern user interface.

### JavaScript

Used to implement the main functionality and interactivity of the application.

### LocalStorage

Used to store event information in the browser so that the data remains available after refreshing the page.

## 📂 Project Pages

### 1. Login Page

The login page validates the user's email and password before allowing access to the application.

### 2. Home Page

The home page introduces Planora and provides access to the event planning features.

### 3. Planner Page

The planner page is the main part of the application where users can create, search, filter and manage their events.

## 📁 Project Structure

```text
Smart_Event_Web/
│
├── index.html
├── home.html
├── planner.html
├── script.js
│
├── src/
│   └── input.css
│
├── dist/
│   └── output.css
│
├── package.json
├── package-lock.json
└── README.md
```

## 🔄 Application Flow

```text
Login
  ↓
Validate User
  ↓
Home Page
  ↓
Planner
  ↓
Create Event
  ↓
Validate Event Data
  ↓
Create Event Object
  ↓
Store in Array
  ↓
Save to LocalStorage
  ↓
Display Event
  ↓
Search / Filter / Delete
```

## 💡 JavaScript Concepts Used

The project helped me work with several important JavaScript concepts:

* Variables using `let` and `const`
* Functions
* Conditional statements
* DOM manipulation
* Event listeners
* Form handling
* Input validation
* Arrays
* Objects
* `push()`
* `forEach()`
* `filter()`
* `reduce()`
* Template literals
* LocalStorage
* `JSON.stringify()`
* `JSON.parse()`

## 💾 LocalStorage

Planora uses LocalStorage to keep event information in the browser.

When an event is created, the event data is converted into a JSON string using:

```javascript
JSON.stringify(events)
```

The data is stored in LocalStorage.

When the application loads again, the stored data is converted back into a JavaScript array using:

```javascript
JSON.parse(localStorage.getItem("eventlyEvents"))
```

This allows the created events to remain available after refreshing the page.

## 🔎 Search and Filtering

Planora provides dynamic event searching and category filtering.

The search functionality checks whether the entered search text matches the event information, while the category filter displays events belonging to the selected category.

JavaScript array methods such as:

```javascript
filter()
```

are used to create the required list of events.

## 📊 Dashboard Statistics

The planner displays useful event statistics such as:

* Total Events
* Total Guests
* Total Budget
* Completed Tasks

These values are calculated dynamically from the stored event data.

## 📱 Responsive Design

Planora is designed to work across different screen sizes, including:

* Desktop
* Laptop
* Tablet
* Mobile devices

Tailwind CSS responsive utilities are used to create the responsive layout.

## 🎯 Project Objective

The main objective of Planora is to provide a simple digital platform for organizing event information instead of managing everything manually.

The application combines a modern user interface with JavaScript functionality to make event planning easier and more organized.

## 🧠 What I Learned

While developing Planora, I learned:

* How JavaScript interacts with HTML elements
* How to handle user input
* How to validate forms
* How to work with arrays and objects
* How to dynamically update webpage content
* How to use JavaScript array methods
* How to store and retrieve data using LocalStorage
* How to debug JavaScript functionality
* How to build responsive interfaces using Tailwind CSS
* How to organize a frontend web application

## 👨‍💻 Author

**Sivaraj G**

B.Sc. Data Science

Aspiring Web / Full Stack Developer

### GitHub

https://github.com/sivaraj-bit

### Project Repository

https://github.com/sivaraj-bit/Smart_Event_Web

### Live Demo

https://sivaraj-bit.github.io/Smart_Event_Web/

## 📄 License

This project is created for learning and portfolio purposes.

---

### Planora

**Plan • Organize • Celebrate 🎉**
