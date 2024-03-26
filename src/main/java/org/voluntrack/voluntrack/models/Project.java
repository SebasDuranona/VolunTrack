package org.voluntrack.voluntrack.models;

import lombok.Getter;
import lombok.Setter;
import org.springframework.web.bind.annotation.GetMapping;

import javax.persistence.*;

@Getter
@Setter
@Entity
@Table(name = "project")
public class Project {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "PROJECT_ID")
    private Integer projectId;

    @Column(name = "NAME")
    private String name;

    @Column(name = "DESCRIPTION")
    private String description;

    @ManyToOne
    @JoinColumn(name = "ORGANIZATION_ID")
    private Organizations organizations;

    @Column(name = "HOURS")
    private String hours;
}
