package org.voluntrack.voluntrack.models;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@Entity
@Table(name = "organization")
public class Organizations {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ORGANIZATION_ID")
    private Integer organizationId;

    @Column(name = "NAME")
    private String name;
}
