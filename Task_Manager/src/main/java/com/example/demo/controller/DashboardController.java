package com.example.demo.controller;

import com.example.demo.model.Task;
import com.example.demo.service.DashboardService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/dashboard")
public class DashboardController {

    private final DashboardService dashboardService;

    public DashboardController(DashboardService dashboardService) {
        this.dashboardService = dashboardService;
    }

    @GetMapping("/my-tasks")
    public List<Task> myTasks() {
        return dashboardService.myTasks();
    }

    @GetMapping("/overdue")
    public List<Task> overdue() {
        return dashboardService.overdueTasks();
    }
}