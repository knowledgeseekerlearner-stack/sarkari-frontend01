// app/latest-jobs/page.tsx
import Link from "next/link";
import { JOBS } from "./data/jobs";

export default function LatestJobsPage() {
  return (
    <div style={{ padding: "40px" }}>
      <h1>Latest Government Jobs 2024 🏆</h1>
      <p>Find the latest Sarkari Job Notifications updated daily.</p>

      <ul>
        {JOBS.map((job) => (
          <li key={job.id} style={{ margin: "8px 0" }}>
            <Link href={`/latest-jobs/${job.id}`} style={{ textDecoration: "none", color: "#111" }}>
              {job.title}
            </Link>
            <div style={{ color: "#666", marginTop: 4 }}>{job.summary}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
