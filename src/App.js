import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from "react";
import "./index.css";

const App = () => {
     const [tasks, setTasks] = useState([
          {
               id: 1,
               text: "Doctors Appointment",
               day: "Feb 3th at 5:49pm",
               reminder: true,
          },
          {
               id: 2,
               text: "Meeting at School",
               day: "Feb 8th at 7:19pm",
               reminder: true,
          },
          {
               id: 3,
               text: "Food Shopping",
               day: "Feb 6th at 15:49pm",
               reminder: false,
          },
     ]);

     const deleteTask = (id) => {
          setTasks(tasks.filter((task) => task.id !== id));
     };

     return (
          <div className="container">
               <Header title="Task Tracker" />
               {tasks.length > 0 ? (
                    <Tasks tasks={tasks} onDelete={deleteTask} />
               ) : (
                    "No Tasks To Show"
               )}
          </div>
     );
};

export default App;
