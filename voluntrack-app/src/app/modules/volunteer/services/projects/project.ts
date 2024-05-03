import { Organization } from "../organization/organization";
  
// Interface for Project
export interface Project {
    projectId: number;
    name: string;
    description: string;
    hours: number;
    organization: Organization;
}

