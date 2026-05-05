package com.example.demo.service;

import com.example.demo.model.Project;
import com.example.demo.repository.ProjectRepo;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ProjectService {

    private final ProjectRepo projectRepository;

    public ProjectService(ProjectRepo projectRepository) {
		super();
		this.projectRepository = projectRepository;
	}

	public Project create(Project project) {
        return projectRepository.save(project);
    }

    public List<Project> getAll() {
        return projectRepository.findAll();
    }
}