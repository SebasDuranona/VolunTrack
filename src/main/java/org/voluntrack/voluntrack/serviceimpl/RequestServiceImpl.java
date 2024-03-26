package org.voluntrack.voluntrack.serviceimpl;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.voluntrack.voluntrack.enums.ResponseStatus;
import org.voluntrack.voluntrack.models.Request;
import org.voluntrack.voluntrack.repository.RequestRepository;
import org.voluntrack.voluntrack.service.RequestService;
import org.voluntrack.voluntrack.vo.ResponseVO;

import java.util.List;

@Service
@Slf4j
@RequiredArgsConstructor
public class RequestServiceImpl implements RequestService {
    private final RequestRepository requestRepository;

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
}
