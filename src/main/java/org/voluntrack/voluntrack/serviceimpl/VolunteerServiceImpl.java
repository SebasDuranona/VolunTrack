package org.voluntrack.voluntrack.serviceimpl;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.voluntrack.voluntrack.enums.ResponseStatus;
import org.voluntrack.voluntrack.models.Volunteer;
import org.voluntrack.voluntrack.repository.VolunteerRepository;
import org.voluntrack.voluntrack.service.VolunteerService;
import org.voluntrack.voluntrack.vo.LoginVO;
import org.voluntrack.voluntrack.vo.ResponseVO;

import java.sql.PreparedStatement;
import java.util.List;
import java.util.Objects;
import java.util.Optional;

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
           volunteers.stream().forEach(volunteer -> {
               if (Objects.isNull(volunteer.getUserName())) {
                   volunteer.setUserName(volunteer.getFirstName().toLowerCase().charAt(0) + volunteer.getLastName().toLowerCase());
               }
           });
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

    @Override
    public Object login(LoginVO loginVO) {
        ResponseVO responseVO = new ResponseVO();
        Optional<Volunteer> volunteer = volunteerRepository.findVolunteerByUserNameAndPassword(loginVO.getUserName(), loginVO.getPassword());

        if (volunteer.isPresent()) {
            responseVO.setData(volunteer.get());  // Set the found volunteer as the data
            responseVO.setResponseStatus(ResponseStatus.SUCCESS);
        } else {
            responseVO.setResponseStatus(ResponseStatus.ERROR);
            responseVO.setData("Invalid username or password");  // Optionally provide more specific error info
        }
        var data = responseVO.getData();
        return data;
    }

    @Override
    public ResponseVO getVolunteerById(Integer id) {
        ResponseVO responseVO = new ResponseVO();
        Volunteer volunteer = volunteerRepository.findByVolunteerId(id);
        if (Objects.nonNull(volunteer)) {
            responseVO.setData(volunteer);
            responseVO.setResponseStatus(ResponseStatus.SUCCESS);
        } else {
            responseVO.setResponseStatus(ResponseStatus.ERROR);
            responseVO.setErrorMessage("Volunteer Not Found");
        }
        return responseVO;
    }
}
