package com.example.demo.repository;


import com.example.demo.model.Task;
import org.springframework.data.jpa.repository.JpaRepository;

import java.time.LocalDate;
import java.util.List;

public interface TaskRepo extends JpaRepository<Task, Long> {

    List<Task> findByProjectId(Long projectId);
    List<Task> findByAssignedToIdAndDueDateBefore(Long userId, LocalDate date);
	List<Task> findByAssignedToId(Long id);
	List<Task> findByDueDateBefore(LocalDate date);
}