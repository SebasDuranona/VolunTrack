package org.voluntrack.voluntrack;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.voluntrack.voluntrack.controller.OrganizationController;
import org.voluntrack.voluntrack.controller.VolunteerController;
import org.voluntrack.voluntrack.enums.ResponseStatus;
import org.voluntrack.voluntrack.models.Organizations;
import org.voluntrack.voluntrack.models.Project;
import org.voluntrack.voluntrack.models.Volunteer;
import org.voluntrack.voluntrack.repository.OrganizationRepository;
import org.voluntrack.voluntrack.repository.ProjectRepository;
import org.voluntrack.voluntrack.repository.VolunteerRepository;
import org.voluntrack.voluntrack.service.OrganizationService;
import org.voluntrack.voluntrack.service.VolunteerService;
import org.voluntrack.voluntrack.serviceimpl.ProjectServiceImpl;
import org.voluntrack.voluntrack.vo.LoginVO;
import org.voluntrack.voluntrack.vo.ResponseVO;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import static org.mockito.Mockito.when;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertSame;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.verify;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@SpringBootTest
class VoluntrackApplicationTests {

    @Mock
    private ProjectRepository projectRepository;

    @Mock
    private OrganizationRepository organizationRepository;

    @Mock
    private VolunteerRepository volunteerRepository;

    @InjectMocks
    private ProjectServiceImpl projectService;

    @Test
    public void testGetProjects() {
        Organizations testOrg = new Organizations();
        testOrg.setOrganizationId(1);
        testOrg.setName("Organization 1");
        testOrg.setUserName("user1");
        testOrg.setPassword("password1");
        List<Project> projects = new ArrayList<>();
        Project P1 = new Project();
        Project P2 = new Project();
        P1.setProjectId(1);
        P1.setName("P1");
        P1.setDescription("D1");
        P1.setOrganizations(testOrg);
        P1.setHours("10");
        P2.setProjectId(2);
        P2.setName("P2");
        P2.setDescription("D2");
        P2.setOrganizations(testOrg);
        P2.setHours("20");
        projects.add(P1);
        projects.add(P2);

        ResponseVO<List<Project>> response = projectService.getProjects();

        assertSame(ResponseStatus.SUCCESS, response.getResponseStatus());
        assertSame(projects, response.getData());
    }

    @Test
    public void testSaveProjects() {
        Organizations testOrg = new Organizations();
        testOrg.setOrganizationId(1);
        testOrg.setName("Organization 1");
        testOrg.setUserName("user1");
        testOrg.setPassword("password1");
        List<Project> projects = new ArrayList<>();
        Project P1 = new Project();
        Project P2 = new Project();
        P1.setProjectId(1);
        P1.setName("P1");
        P1.setDescription("D1");
        P1.setOrganizations(testOrg);
        P1.setHours("10");
        P2.setProjectId(2);
        P2.setName("P2");
        P2.setDescription("D2");
        P2.setOrganizations(testOrg);
        P2.setHours("20");
        projects.add(P1);
        projects.add(P2);

        ResponseVO response = projectService.saveProjects(projects);

        assertSame(ResponseStatus.SUCCESS, response.getResponseStatus());
        assertEquals("Successfully saved Data", response.getStatusMessage());
        verify(projectRepository).saveAll(projects);
    }

    @Test
    public void testGetVolunteers() {
        VolunteerService volunteerService = mock(VolunteerService.class);

        Volunteer testVolunteer = new Volunteer();
        testVolunteer.setVolunteerId(1);
        testVolunteer.setFirstName("first");
        testVolunteer.setLastName("last");
        testVolunteer.setUserName("user");
        testVolunteer.setPassword("password");

        List<Volunteer> volunteers = new ArrayList<>();
        volunteers.add(testVolunteer);

        //when(volunteerService.getVolunteers()).thenReturn(volunteers);

        VolunteerController volunteerController = new VolunteerController(volunteerService);

        ResponseEntity response = volunteerController.getVolunteers();

        assertEquals(HttpStatus.OK, response.getStatusCode());
    }

    @Test
    public void testSaveVolunteers() {
        VolunteerService volunteerService = mock(VolunteerService.class);

        Volunteer testVolunteer = new Volunteer();
        testVolunteer.setVolunteerId(1);
        testVolunteer.setFirstName("first");
        testVolunteer.setLastName("last");
        testVolunteer.setUserName("user");
        testVolunteer.setPassword("password");
        
        List<Volunteer> volunteers = new ArrayList<>();
        volunteers.add(testVolunteer);

        //when(volunteerService.saveVolunteers(volunteers)).thenReturn(volunteers);

        VolunteerController volunteerController = new VolunteerController(volunteerService);
        ResponseEntity response = volunteerController.saveVolunteers(volunteers);
        assertEquals(HttpStatus.OK, response.getStatusCode());
    }

    @Test
    public void testGetVolunteerData() {
        VolunteerService volunteerService = mock(VolunteerService.class);

        Volunteer testVolunteer = new Volunteer();
        testVolunteer.setVolunteerId(1);
        testVolunteer.setFirstName("first");
        testVolunteer.setLastName("last");
        testVolunteer.setUserName("user");
        testVolunteer.setPassword("password");

        //when(volunteerService.getVolunteerById(1)).thenReturn(testVolunteer);

        VolunteerController volunteerController = new VolunteerController(volunteerService);
        ResponseEntity response = volunteerController.getVolunteerData(1);
        assertEquals(HttpStatus.OK, response.getStatusCode());
    }

    @Test
    public void testVolunteerLogin() {
        VolunteerService volunteerService = mock(VolunteerService.class);
        LoginVO loginVO = new LoginVO();
        loginVO.setUserName("user");
        loginVO.setPassword("password");

        //when(volunteerService.login(loginVO)).thenReturn("loginSuccess");

        VolunteerController volunteerController = new VolunteerController(volunteerService);
        ResponseEntity response = volunteerController.login(loginVO);
        assertEquals(HttpStatus.OK, response.getStatusCode());
    }

    @Test
    public void testGetOrganizations() {
        OrganizationService organizationService = mock(OrganizationService.class);

        Organizations testOrg = new Organizations();
        testOrg.setOrganizationId(1);
        testOrg.setName("Organization 1");
        testOrg.setUserName("user1");
        testOrg.setPassword("password1");

        List<Organizations> organizations = new ArrayList<>();
        organizations.add(testOrg);

        //when(organizationService.getOrganizations()).thenReturn(organizations);

        OrganizationController organizationController = new OrganizationController(organizationService);
        ResponseEntity response = organizationController.getOrganizations();

        assertEquals(HttpStatus.OK, response.getStatusCode());
    }

    @Test
    public void testSaveOrganizations() {
        OrganizationService organizationService = mock(OrganizationService.class);

        Organizations testOrg = new Organizations();
        testOrg.setOrganizationId(1);
        testOrg.setName("Organization 1");
        testOrg.setUserName("user1");
        testOrg.setPassword("password1");

        List<Organizations> organizations = new ArrayList<>();
        organizations.add(testOrg);

        //when(organizationService.saveOrganizations(organizations)).thenReturn(organizations);

        OrganizationController organizationController = new OrganizationController(organizationService);
        ResponseEntity response = organizationController.saveOrganizations(organizations);

        assertEquals(HttpStatus.OK, response.getStatusCode());
    }

    @Test
    public void testOrgLogin() {
        OrganizationService organizationService = mock(OrganizationService.class);
        LoginVO loginVO = new LoginVO();
        loginVO.setUserName("user");
        loginVO.setPassword("password");

        //when(organizationService.login(loginVO)).thenReturn("loginSuccess");

        OrganizationController organizationController = new OrganizationController(organizationService);
        ResponseEntity response = organizationController.login(loginVO);

        assertEquals(HttpStatus.OK, response.getStatusCode());
    }

}
