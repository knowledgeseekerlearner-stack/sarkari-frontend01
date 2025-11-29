"use client";

import { latestJobs } from "@/data/jobs";   // FIXED IMPORT
import Link from "next/link";

export default function JobDetail({ params }: any) {
  const job = latestJobs.find((j) => j.id === params.id);   // FIXED FIND()

  if (!job) {
    return <h1>Job not found</h1>;
  }

  return (
    <div style={{ padding: 20 }}>
      <h1>{job.title}</h1>
      <p>{job.location}</p>
      <p>{job.salary}</p>

      <div style={{ marginTop: 20 }}>
        <button
          style={{
            backgroundColor: "black",
            color: "white",
            border: "none",
            padding: "10px 20px",
            borderRadius: "6px",
            cursor: "pointer",
          }}
        >
          <Link href="/latest-jobs">← Back to Jobs</Link>
        </button>
      </div>

      <div style={{ marginTop: 30 }}>
        <h3>Full Details:</h3>
        <p>{job.description}</p>
      </div>
    </div>
  );
}
