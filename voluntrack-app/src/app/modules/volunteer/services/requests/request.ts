// Interface for Request
export interface Request {
    requestId: number;
    requestInfo: string;
    hours: number;
    approved: boolean;
    volunteerId: number;
    projectId: number;
}