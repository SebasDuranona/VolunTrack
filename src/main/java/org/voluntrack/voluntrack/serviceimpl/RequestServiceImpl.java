package org.voluntrack.voluntrack.serviceimpl;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.util.CollectionUtils;
import org.voluntrack.voluntrack.enums.ResponseStatus;
import org.voluntrack.voluntrack.models.Project;
import org.voluntrack.voluntrack.models.Request;
import org.voluntrack.voluntrack.models.Volunteer;
import org.voluntrack.voluntrack.repository.ProjectRepository;
import org.voluntrack.voluntrack.repository.RequestRepository;
import org.voluntrack.voluntrack.repository.VolunteerRepository;
import org.voluntrack.voluntrack.service.RequestService;
import org.voluntrack.voluntrack.vo.ResponseVO;

import java.util.List;
import java.util.Optional;

@Service
@Slf4j
@RequiredArgsConstructor
public class RequestServiceImpl implements RequestService {
    private final RequestRepository requestRepository;
    private final VolunteerRepository volunteerRepository;
    private final ProjectRepository projectRepository;

    @Override
    public ResponseVO getRequests() {
        ResponseVO<List<Request>> responseVO = new ResponseVO<>();
        responseVO.setResponseStatus(ResponseStatus.SUCCESS);
        responseVO.setData(requestRepository.findAll());
        return responseVO;
    }

    @Override
    public ResponseVO saveRequests(List<Request> requests) {
        ResponseVO responseVO = new ResponseVO();
        try {
            requests.stream().forEach(request -> {
                Optional<Volunteer> volunteer = volunteerRepository.findById(request.getVolunteer().getVolunteerId());
                Optional<Project> project = projectRepository.findById(request.getProject().getProjectId());
                volunteer.ifPresent(request::setVolunteer);
                project.ifPresent(request::setProject);
            });
            requestRepository.saveAll(requests);
        } catch (Exception e) {
            log.error(e.getMessage());
            responseVO.setResponseStatus(ResponseStatus.ERROR);
            responseVO.setErrorMessage(e.getMessage());
            return responseVO;
        }
        responseVO.setResponseStatus(ResponseStatus.SUCCESS);
        responseVO.setStatusMessage("Successfully Saved Data");
        return responseVO;
    }

    @Override
    public ResponseVO getRequestsByVolunteerId(Integer volunteerId) {
        ResponseVO responseVO = new ResponseVO();
        List<Request> requests = requestRepository.findAllByVolunteerVolunteerId(volunteerId);
        if (!CollectionUtils.isEmpty(requests)) {
            responseVO.setResponseStatus(ResponseStatus.SUCCESS);
            responseVO.setData(requests);
        } else {
            responseVO.setResponseStatus(ResponseStatus.ERROR);
            responseVO.setErrorMessage("No requests found for volunteer");
        }
        return responseVO;
    }

    public ResponseVO approveOrDisapproveHours(boolean isApproved, Request request) {
        ResponseVO responseVO = new ResponseVO();
        Optional<Request> savedReq = requestRepository.findById(request.getRequestId());
        if (savedReq.isPresent()) {
            savedReq.get().setApproved(isApproved);
            try {
                requestRepository.save(savedReq.get());
                responseVO.setResponseStatus(ResponseStatus.SUCCESS);
                responseVO.setStatusMessage("Successfully Approved Request");
                return responseVO;
            } catch (Exception e) {
                responseVO.setResponseStatus(ResponseStatus.ERROR);
                responseVO.setErrorMessage(e.getMessage());
                return responseVO;
            }
        } else {
            responseVO.setResponseStatus(ResponseStatus.ERROR);
            responseVO.setErrorMessage("No requests found for request");
            return responseVO;
        }
    }
}
