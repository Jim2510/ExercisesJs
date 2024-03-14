// **Exercise: Task List Application**

// **Objective:** Create a simple task list application using React that allows users to add tasks, mark tasks as completed, and delete tasks.

// **Requirements:**
// 1. Create a React application using `create-react-app`.
// 2. Implement the following components:
//    - `App` component: The main component of the application.
//    - `TaskList` component: Responsible for displaying the list of tasks.
//    - `TaskItem` component: Represents an individual task in the list.
// 3. Utilize component composition to structure your application.
// 4. Use props to pass data between components.
// 5. Implement event handling for adding, completing, and deleting tasks.
// 6. Utilize `useState`, `useEffect`, and `useRef` hooks as necessary.

// **Instructions:**

// 1. **Setting Up the Application:**
//    - Create a new React application using `create-react-app`.
//    - Navigate into the project directory.
//    - Start the development server using `npm start` or `yarn start`.

// 2. **Component Structure:**
//    - Define the structure of your components (`App`, `TaskList`, `TaskItem`).

// 3. **State Management:**
//    - Use `useEffect` for fetching tasks from this API: 'https://dummyjson.com/todos'
//    - Use `useState` hook to manage the list of tasks.

// 4. **Adding Tasks:**
//    - Implement a form in the `App` component to add new task.
//    - Use event handling to capture form submissions.
//    - Update the task list state accordingly.

// 5. **Displaying Tasks:**
//    - Pass the list of tasks from the `App` component to the `TaskList` component as props.
//    - Use the `map` function to render each task in the `TaskList`.

// 6. **Completing Tasks:**
//    - Implement a function to toggle the `completed` status of a task.
//    - Pass this function down to the `TaskItem` component.
//    - Implement event handling in the `TaskItem` component to mark tasks as completed when clicked.

// 7. **Deleting Tasks:**
//    - Implement a function to delete a task.
//    - Pass this function down to the `TaskItem` component.
//    - Implement event handling in the `TaskItem` component to delete tasks when a delete button is clicked.

// 8. **Effects and Refs:**
//    - Use `useEffect` hook to perform side effects such as updating document title.
//    - Utilize `useRef` hook to access DOM elements or store mutable values.

// 9. **Styling (Optional):**
//    - Apply CSS or use a CSS framework to style your application.
