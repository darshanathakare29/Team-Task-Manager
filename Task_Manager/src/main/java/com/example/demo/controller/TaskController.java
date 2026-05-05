package com.example.demo.controller;

import com.example.demo.model.Task;
import com.example.demo.service.TaskService;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;

@RestController
@RequestMapping("/api/tasks")
public class TaskController {

    private final TaskService taskService;

    public TaskController(TaskService taskService) {
        this.taskService = taskService;
    }

    @PostMapping("/{projectId}/{userId}")
    public Task createTask(@RequestBody Task task,
                            @PathVariable Long projectId,
                            @PathVariable Long userId) {

        Task saved = taskService.createTask(task, projectId, userId);

         return taskService.createTask(task, projectId, userId);
    }

    @GetMapping("/project/{projectId}")
    public List<Task> getTasks(@PathVariable Long projectId) {
        return taskService.getTasksByProject(projectId);
    }
    @PutMapping("/{taskId}")
    public Task updateStatus(@PathVariable Long taskId, @RequestBody Task updatedTask) {
        return taskService.updateTaskStatus(taskId, updatedTask);
    }
    @GetMapping("/overdue")
    public List<Task> getOverdueTasks() {
        return taskService.getOverdueTasks();
    }
}