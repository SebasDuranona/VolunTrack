package org.voluntrack.voluntrack.serviceimpl;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.voluntrack.voluntrack.enums.ResponseStatus;
import org.voluntrack.voluntrack.models.Volunteer;
import org.voluntrack.voluntrack.repository.VolunteerRepository;
import org.voluntrack.voluntrack.service.VolunteerService;
import org.voluntrack.voluntrack.vo.ResponseVO;

import java.sql.PreparedStatement;
import java.util.List;

@Service
@Slf4j
@RequiredArgsConstructor
public class VolunteerServiceImpl implements VolunteerService {
    private final VolunteerRepository volunteerRepository;

    @Override
    public ResponseVO getVolunteers() {
        ResponseVO<List<Volunteer>> responseVO = new ResponseVO<>();
        responseVO.setResponseStatus(ResponseStatus.SUCCESS);
        responseVO.setData(volunteerRepository.findAll());
        return responseVO;
    }

    @Override
    public ResponseVO saveVolunteers(List<Volunteer> volunteers) {
        ResponseVO responseVO = new ResponseVO();
        try {
           volunteerRepository.saveAll(volunteers);
        } catch (Exception e) {
           log.error(e.getMessage());
           responseVO.setErrorMessage(e.getMessage());
           responseVO.setResponseStatus(ResponseStatus.ERROR);
           return responseVO;
        }
        responseVO.setResponseStatus(ResponseStatus.SUCCESS);
        responseVO.setStatusMessage("Successfully Saved Data");
        return responseVO;
    }
}
