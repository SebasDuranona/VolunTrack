package org.voluntrack.voluntrack.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.voluntrack.voluntrack.models.Volunteer;

@Repository
public interface VolunteerRepository extends JpaRepository<Volunteer, Integer> {
    Boolean existsByUserNameAndPassword(String username, String password);

    Volunteer findByVolunteerId(Integer volunteerId);
}
