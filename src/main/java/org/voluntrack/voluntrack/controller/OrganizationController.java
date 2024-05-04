package org.voluntrack.voluntrack.controller;

import lombok.RequiredArgsConstructor;
import lombok.extern.java.Log;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.voluntrack.voluntrack.models.Organizations;
import org.voluntrack.voluntrack.service.OrganizationService;
import org.voluntrack.voluntrack.vo.LoginVO;

import java.util.List;

@RestController
@RequestMapping("/organization")
@RequiredArgsConstructor
public class OrganizationController {
    private final OrganizationService organizationService;

    @GetMapping()
    public ResponseEntity getOrganizations() {
        return new ResponseEntity(organizationService.getOrganizations(), HttpStatus.OK);
    }

    @PostMapping()
    public ResponseEntity saveOrganizations(@RequestBody List<Organizations> organizations) {
        return new ResponseEntity(organizationService.saveOrganizations(organizations), HttpStatus.OK);
    }

    @PostMapping("/login")
    public ResponseEntity login(@RequestBody LoginVO loginVO) {
        return new ResponseEntity(organizationService.login(loginVO), HttpStatus.OK);
    }
}
