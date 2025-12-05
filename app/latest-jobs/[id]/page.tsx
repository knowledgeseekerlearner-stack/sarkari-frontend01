"use client";

import latestJobs from "@/data/jobDataLayer";
import Link from "next/link";

export default function JobDetail({ params }: { params: { id: string } }) {
  const job = latestJobs.find((j) => String(j.id) === String(params.id));

  if (!job) {
    return (
      <div style={{ padding: 20 }}>
        <h1>Job not found</h1>
        <Link href="/latest-jobs">← Back to Jobs</Link>
      </div>
    );
  }

  return (
    <div style={{ padding: 20 }}>
      <h1>{job.title}</h1>
      <p>{job.location}</p>
      <p>{job.salary}</p>

      <div style={{ marginTop: 20 }}>
        <Link
          href="/latest-jobs"
          style={{
            backgroundColor: "black",
            color: "white",
            padding: "10px 20px",
            borderRadius: "6px",
          }}
        >
          ← Back to Jobs
        </Link>
      </div>

      <div style={{ marginTop: 30 }}>
        <h3>Full Details:</h3>
        <p>{job.description}</p>
      </div>
    </div>
  );
}
