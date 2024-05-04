package org.voluntrack.voluntrack.service;

import org.voluntrack.voluntrack.models.Request;
import org.voluntrack.voluntrack.vo.ResponseVO;

import java.util.List;

public interface RequestService {
    ResponseVO getRequests();

    ResponseVO saveRequests(List<Request> requests);

    ResponseVO getRequestsByVolunteerId(Integer volunteerId);
}
