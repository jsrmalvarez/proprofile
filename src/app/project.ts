export interface Project {
    id: number;
    title: string;
    externalLink: string | null;
    startDate: string;
    endDate: string | null;
    photo: string;
    company: string;
    tools: string[];
    summary: string;
    detail: string;
    tasks: string[];
}