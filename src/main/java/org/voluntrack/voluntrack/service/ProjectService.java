package org.voluntrack.voluntrack.service;

import org.voluntrack.voluntrack.models.Project;
import org.voluntrack.voluntrack.vo.ResponseVO;

import java.util.List;

public interface ProjectService {
    ResponseVO getProjects();

    ResponseVO saveProjects(List<Project> projects);
}
