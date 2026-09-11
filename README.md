# Dev Stack

## About This Project

Dev Stack is a simple website where developers can explore different technologies and choose the technologies they need for their projects.

I made this project using React and Tailwind CSS. Users can see different technologies, filter them by category, and add their favorite technologies to their own stack.

## Technologies I Used

- React.js
- JavaScript
- Vite
- Tailwind CSS
- React-Toastify
- JSON

## Main Features

- Users can explore different technologies by category.
- Users can add technologies to their own development stack and remove them anytime.
- Toast notifications are shown when adding, removing, or trying to add the same technology again.

---

# React Questions & Answers

### 1. What is JSX, and why is it used in React?

JSX holo JavaScript er moddhe HTML er moto code lekhar ekta way. React e JSX use kori jate component er UI easily bujha and create kora jai.

### 2. What is the difference between props and state?

Props diye parent component theke child component e data pathano hoy. Ar state component er nijer data store and change korar jonno use hoy.

### 3. What does the `useState` hook do, and where did you use it in this project?

`useState` diye React e changing data store kora hoy. Ami ei project e technologies, selected stack, loading state and selected category manage korar jonno `useState` use korechi.

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

`useEffect` component load howar por kono code run korar jonno use hoy. Ami `useEffect` use kore JSON file theke technology data load korechi.

### 5. Why does every item in a `.map()` list need a unique `key` prop?

`key` React ke prottekta item alada kore identify korte help kore. Tai `.map()` diye list show korar somoy unique `key` use kora hoy.

### 6. What is conditional rendering? Show one place you used it.

Conditional rendering mane condition er upor depend kore different UI show kora. Ami ei project e stack empty thakle "Your stack is empty" message show korar jonno conditional rendering use korechi.

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

Parent theke child e data props er maddhome pathano hoy. Ar child theke parent e kichu pathate hole parent theke ekta function props hisebe child e pathano hoy, tarpor child oi function call kore.