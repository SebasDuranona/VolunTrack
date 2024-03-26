package org.voluntrack.voluntrack.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.voluntrack.voluntrack.models.Project;
import org.voluntrack.voluntrack.service.ProjectService;

import java.util.List;

@RestController
@RequestMapping("/projects")
@RequiredArgsConstructor
public class ProjectController {
    private final ProjectService projectService;

    @GetMapping()
    public ResponseEntity getProjects() {
        return new ResponseEntity(projectService.getProjects(), HttpStatus.OK);
    }

    @PostMapping()
    public ResponseEntity saveProjects(@RequestBody List<Project> projects) {
        return new ResponseEntity(projectService.saveProjects(projects), HttpStatus.OK);
    }
}
