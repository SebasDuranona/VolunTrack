package org.voluntrack.voluntrack.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.voluntrack.voluntrack.models.Organizations;
import java.util.Optional;


@Repository
public interface OrganizationRepository extends JpaRepository<Organizations, Integer> {
    Boolean existsByUserNameAndPassword(String userName, String password);

    Optional<Organizations> findByUserNameAndPassword(String userName, String password);
}
