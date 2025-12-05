// app/data/jobDataLayer.ts
export type Job = {
  id: string | number;
  title: string;
  location: string;
  salary?: string;
  description?: string;
  vacancies?: number;
  qualification?: string[];
  lastDate?: string;
  tags?: string[];
};

export const latestJobs: Job[] = [
  {
    id: "1",
    title: "SSC CGL Recruitment 2025",
    location: "All India",
    salary: "—",
    vacancies: 9320,
    qualification: ["Graduate"],
    lastDate: "2025-12-31",
    tags: ["SSC", "Central Govt", "Graduate"],
    description: "SSC CGL 2025 official notification released.",
  },
  {
    id: "2",
    title: "Delhi Police Constable 2025",
    location: "Delhi",
    salary: "—",
    vacancies: 60000,
    qualification: ["12th Pass"],
    lastDate: "2025-12-25",
    tags: ["Police", "Delhi Govt", "12th Pass"],
    description: "Delhi Police Constable 2025 vacancy details.",
  },
  {
    id: "3",
    title: "IBPS PO Bank Jobs",
    location: "All India",
    salary: "—",
    vacancies: 18500,
    qualification: ["Graduate"],
    lastDate: "2025-12-20",
    tags: ["Bank Jobs", "IBPS", "Graduate"],
    description: "IBPS PO recruitment 2025.",
  },
];

// export default too — lets both named & default imports work
export default latestJobs;
