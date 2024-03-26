package org.voluntrack.voluntrack.service;

import org.voluntrack.voluntrack.models.Volunteer;
import org.voluntrack.voluntrack.vo.ResponseVO;

import java.util.List;

public interface VolunteerService {
    ResponseVO getVolunteers();

    ResponseVO saveVolunteers(List<Volunteer> volunteers);
}
