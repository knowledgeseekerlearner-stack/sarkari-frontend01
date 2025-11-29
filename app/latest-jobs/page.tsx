import Link from "next/link";
import { latestJobs } from "../data/jobs";

export default function LatestJobsPage() {
  return (
    <div className="p-6">
      <h1 className="text-4xl font-extrabold text-center mb-10">
        Latest Government Jobs 2025 🏆
      </h1>

      <div className="space-y-6 max-w-4xl mx-auto">
        {latestJobs.map((job) => (
          <Link
            key={job.id}
            href={`/latest-jobs/${job.id}`}
            className="block border p-6 rounded-xl shadow-sm hover:shadow-md transition bg-white"
          >
            <h2 className="text-xl font-semibold">{job.title}</h2>
            <p className="text-gray-600">{job.shortDesc}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
