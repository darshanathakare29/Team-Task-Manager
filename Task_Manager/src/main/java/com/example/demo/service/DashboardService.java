package com.example.demo.service;

import com.example.demo.model.Task;
import com.example.demo.model.User;
import com.example.demo.repository.TaskRepo;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
public class DashboardService {

    private final TaskRepo taskRepository;

    public DashboardService(TaskRepo taskRepository) {
        this.taskRepository = taskRepository;
    }

    public List<Task> myTasks() {
        User user = (User) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        return taskRepository.findByAssignedToId(user.getId());
    }

    public List<Task> overdueTasks() {
        User user = (User) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        return taskRepository.findByAssignedToIdAndDueDateBefore(user.getId(), LocalDate.now());
    }
}