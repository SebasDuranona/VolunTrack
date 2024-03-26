package org.voluntrack.voluntrack.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.voluntrack.voluntrack.models.Request;
import org.voluntrack.voluntrack.service.RequestService;

import java.util.List;

@RestController
@RequestMapping("/requests")
@RequiredArgsConstructor
public class RequestController {
    private final RequestService requestService;

    @GetMapping()
    public ResponseEntity getRequests() {
        return new ResponseEntity(requestService.getRequests(), HttpStatus.OK);
    }

    @PostMapping()
    public ResponseEntity saveRequest(@RequestBody List<Request> requests) {
        return new ResponseEntity(requestService.saveRequests(requests), HttpStatus.OK);
    }
}
