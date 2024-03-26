package org.voluntrack.voluntrack.serviceimpl;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.voluntrack.voluntrack.enums.ResponseStatus;
import org.voluntrack.voluntrack.models.Project;
import org.voluntrack.voluntrack.repository.ProjectRepository;
import org.voluntrack.voluntrack.service.ProjectService;
import org.voluntrack.voluntrack.vo.ResponseVO;

import java.util.List;

@Service
@Slf4j
@RequiredArgsConstructor
public class ProjectServiceImpl implements ProjectService {
    private final ProjectRepository projectRepository;

    @Override
    public ResponseVO getProjects() {
        ResponseVO<List<Project>> responseVO = new ResponseVO<>();
        responseVO.setResponseStatus(ResponseStatus.SUCCESS);
        responseVO.setData(projectRepository.findAll());
        return responseVO;
    }

    @Override
    public ResponseVO saveProjects(List<Project> projects) {
        ResponseVO responseVO = new ResponseVO();
        try {
            projectRepository.saveAll(projects);
        } catch (Exception e) {
            log.error(e.getMessage());
            responseVO.setErrorMessage(e.getMessage());
            responseVO.setResponseStatus(ResponseStatus.ERROR);
            return responseVO;
        }
        responseVO.setResponseStatus(ResponseStatus.SUCCESS);
        responseVO.setStatusMessage("Successfully saved Data");
        return responseVO;
    }
}
