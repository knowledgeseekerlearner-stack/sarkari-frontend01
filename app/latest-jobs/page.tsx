export const revalidate = 300;

import React from "react";
import ClientJobs from "./ClientJobs";

type Job = {
  id: string;
  title: string;
  dept: string;
  qualification: string;
  vacancies: number;
  lastDate: string;
  tags: string[];
};

const SAMPLE_DATA: Job[] = [
  { id: "ssc-mts-2025", title: "SSC MTS 2025 Notification", dept: "Staff Selection Commission", qualification: "10th Pass", vacancies: 9320, lastDate: "2025-02-25", tags: ["10th Pass","Vacancies: 9320"] },
  { id: "rrb-ntpc-2025", title: "RRB NTPC 2025 Notification", dept: "Indian Railways", qualification: "10th/12th/Graduate", vacancies: 18500, lastDate: "2025-03-30", tags: ["Graduate","Vacancies: 18500"] },
  { id: "up-police-const-2025", title: "UP Police Constable 2025", dept: "UP Police", qualification: "10th/12th", vacancies: 60000, lastDate: "2025-04-20", tags: ["10th/12th","High Vacancy"] }
];

export default async function Page() {
  // Replace SAMPLE_DATA with real fetch if needed
  const jobs = SAMPLE_DATA;
  return (
    <div className="min-h-screen p-4 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <header className="mb-4 flex items-center justify-between">
          <h1 className="text-2xl font-semibold">Latest Jobs</h1>
        </header>

        {/* Client component */}
        {/* @ts-expect-error Server -> Client prop passing allowed */}
        <ClientJobs jobs={jobs} />
      </div>
    </div>
  );
}
