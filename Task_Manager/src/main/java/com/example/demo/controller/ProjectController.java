package com.example.demo.controller;

import com.example.demo.model.Project;
import com.example.demo.service.ProjectService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import org.springframework.security.access.prepost.PreAuthorize;

import java.util.List;

@RestController
@RequestMapping("/api/projects")
@RequiredArgsConstructor
public class ProjectController {

    private final ProjectService projectService;
    public ProjectController(ProjectService projectService) {
		super();
		this.projectService = projectService;
	}

    @PreAuthorize("hasRole('ADMIN')")
	@PostMapping
    public Project createProject(@RequestBody Project project) {
        return projectService.create(project);
    }

    @GetMapping
    public List<Project> getAllProjects() {
        return projectService.getAll();
    }
    
    
}