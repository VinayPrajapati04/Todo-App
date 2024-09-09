import React from "react";

const Description = () => {
  return (
    <div>
      <h2>
        Here are some key points to describe a To-Do app with add and delete
        functionality:
      </h2>
      <ul>
        <li>
          User-Friendly Interface: The app provides a clean and simple user
          interface where users can easily manage their tasks.
        </li>
        <li>
          <b>Task Addition:</b> Users can add new tasks to the To-Do list by
          typing in a task name and clicking an "Add" button.
        </li>
        <li>
          <b>Task Deletion:</b>Each task in the list has a "Delete" button,
          allowing users to remove individual tasks from the list.
        </li>
        <li>
          <b>Task Completed Message</b>When all task completed and deleted from
          todoApp then it will showing welcome message Enjoy Your day to show
          that all the task are completed0
        </li>
        <li>
          <b>Dynamic Task List:</b>The list updates dynamically, meaning tasks
          are added or removed instantly without the need to refresh the page.
        </li>
        <li>
          <b>Responsive Design:</b>The app works on different devices (mobile,
          tablet, desktop) and adapts to different screen sizes.
        </li>
        <li>
          <b>React.js Based:</b>The app is built using React.js, ensuring
          component reusability, state management, and efficient updates.
        </li>
      </ul>
    </div>
  );
};

export default Description;
