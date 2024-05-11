package org.voluntrack.voluntrack.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.voluntrack.voluntrack.models.Volunteer;
import org.voluntrack.voluntrack.service.VolunteerService;
import org.voluntrack.voluntrack.vo.LoginVO;

import java.util.List;

@RestController
@RequestMapping("/volunteer")
@RequiredArgsConstructor
public class VolunteerController {
    private final VolunteerService volunteerService;

    @GetMapping()
    public ResponseEntity getVolunteers() {
        return new ResponseEntity(volunteerService.getVolunteers(), HttpStatus.OK);
    }

    @PostMapping()
    public ResponseEntity saveVolunteers(@RequestBody List<Volunteer> volunteers) {
        return new ResponseEntity(volunteerService.saveVolunteers(volunteers), HttpStatus.OK);
    }

    @PostMapping("/login")
    public ResponseEntity login(@RequestBody LoginVO loginVO) {
        return new ResponseEntity(volunteerService.login(loginVO), HttpStatus.OK);
    }


    @GetMapping("/{volunteerId}")
    public ResponseEntity getVolunteerData(@PathVariable Integer volunteerId) {
        return new ResponseEntity(volunteerService.getVolunteerById(volunteerId), HttpStatus.OK);
    }
}