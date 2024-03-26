package org.voluntrack.voluntrack.models;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@Entity
@Table(name = "request")
public class Request {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "REQUEST_ID")
    private Integer requestId;

    @Column(name = "REQUEST_INFO")
    private String requestInfo;

    @Column(name = "HOURS")
    private Integer hours;

    @Column(name = "APPROVED")
    private Boolean approved;

    @ManyToOne
    @JoinColumn(name = "VOLUNTEER_ID")
    private Volunteer volunteer;

    @ManyToOne
    @JoinColumn(name = "PROJECT_ID")
    private Project project;
}
