import { useEffect, useState } from "react";
import {
  getProjects,
  createProject,
  createTask,
  getTasks,
  updateTask, // ✅ NEW
} from "../api/api";

function Dashboard({ token }) {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [tasks, setTasks] = useState([]);

  const [projectName, setProjectName] = useState("");
  const [taskTitle, setTaskTitle] = useState("");

  const userId = 4; // TEMP

  const loadProjects = async () => {
    const data = await getProjects(token);
    setProjects(data);
  };

  const loadTasks = async (projectId) => {
    const data = await getTasks(token, projectId);
    setTasks(data);
  };

  useEffect(() => {
    loadProjects();
  }, []);

  const handleCreateProject = async () => {
    if (!projectName.trim()) return alert("Enter project name");

    await createProject(token, { name: projectName });
    setProjectName("");
    loadProjects();
  };

  const handleSelectProject = (p) => {
    setSelectedProject(p);
    loadTasks(p.id);
  };

  const handleCreateTask = async () => {
    if (!taskTitle.trim()) return alert("Enter task title");

    await createTask(token, selectedProject.id, userId, {
      title: taskTitle,
      status: "TODO",
    });

    setTaskTitle("");
    loadTasks(selectedProject.id);
  };

  // ✅ STATUS UPDATE FUNCTION
  const handleStatusChange = async (taskId, newStatus) => {
    await updateTask(token, taskId, { status: newStatus });
    loadTasks(selectedProject.id);
  };

  return (
    <div>
      {/* CREATE PROJECT */}
      <h2>📊 Team Task Manager</h2>
      <div className="card">
        <h3>Create Project</h3>
        <input
          placeholder="Project name"
          value={projectName}
          onChange={(e) => setProjectName(e.target.value)}
        />
        <button onClick={handleCreateProject}>Create</button>
      </div>

      {/* PROJECT LIST */}
      <div className="card">
        <h3 className="section-title">📁Projects</h3>
       <ul>
  {projects.map((p) => (
    <li
      key={p.id}
      className={`project-item ${
        selectedProject?.id === p.id ? "active-project" : ""
      }`}
      onClick={() => handleSelectProject(p)}
    >
      📁 {p.name}
    </li>
  ))}
</ul>
      </div>

      {/* TASK SECTION */}
      {selectedProject && (
        <div className="card">
          <h3 className="section-title">📝Tasks for {selectedProject.name}</h3>

          <input
            placeholder="Task title"
            value={taskTitle}
            onChange={(e) => setTaskTitle(e.target.value)}
          />
          <button onClick={handleCreateTask}>Add Task</button>
<ul>
  {tasks.map((t) => (
    <li key={t.id} className="task-row">
      <span className={`status-${t.status}`}>
        {t.title}
      </span>

      <select
        value={t.status}
        onChange={(e) =>
          handleStatusChange(t.id, e.target.value)
        }
      >
        <option value="TODO">TODO</option>
        <option value="IN_PROGRESS">IN_PROGRESS</option>
        <option value="DONE">DONE</option>
      </select>
    </li>
  ))}
</ul>
        </div>
      )}
    </div>
  );
}

export default Dashboard;