package com.example.demo.service;

import com.example.demo.model.Project;
import com.example.demo.model.Task;
import com.example.demo.model.User;
import com.example.demo.repository.ProjectRepo;
import com.example.demo.repository.TaskRepo;
import com.example.demo.repository.UserRepo;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
public class TaskService {

    private final TaskRepo taskRepository;
    private final ProjectRepo projectRepository;
    private final UserRepo userRepository;

    public TaskService(TaskRepo taskRepository,
                       ProjectRepo projectRepository,
                       UserRepo userRepository) {
        this.taskRepository = taskRepository;
        this.projectRepository = projectRepository;
        this.userRepository = userRepository;
    }

    public Task createTask(Task task, Long projectId, Long userId) {

        Project project = projectRepository.findById(projectId)
                .orElseThrow(() -> new RuntimeException("Project not found"));

        User user = userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("User not found"));

        task.setProject(project);
        task.setAssignedTo(user);

        return taskRepository.save(task);
    }

    public List<Task> getTasksByProject(Long projectId) {
        return taskRepository.findByProjectId(projectId);
    }

    public Task updateTaskStatus(Long taskId, Task updatedTask) {
        Task task = taskRepository.findById(taskId)
                .orElseThrow(() -> new RuntimeException("Task not found"));

        task.setStatus(updatedTask.getStatus());

        return taskRepository.save(task);
    }
    
    public List<Task> getOverdueTasks() {
        return taskRepository.findByDueDateBefore(LocalDate.now());
    }
}