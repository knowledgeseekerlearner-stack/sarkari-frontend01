"use client";
import React, { useRef, useState, useEffect } from "react";
import { latestJobs } from "@/data/jobs";
import JobCard, { Job } from "@/components/JobCard";
import QuickPreview from "@/components/QuickPreview";
import PopupSettings from "@/components/PopupSettings";
import { useRouter } from "next/navigation";

export default function LatestJobsPage() {
  const router = useRouter();
  const [previewJob, setPreviewJob] = useState<Job | null>(null);

  function openDetails(id: string) {
    router.push(`/latest-jobs/${id}`);
  }

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-6">
        Latest Government Jobs
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="md:col-span-3 space-y-4">
          {latestJobs.map((job) => (
            <JobCard
              key={job.id}
              job={job as Job}
              onOpenDetails={(id) => openDetails(id)}
            />
          ))}
        </div>

        <aside className="hidden md:block">
          <PopupSettings />
        </aside>
      </div>

      <QuickPreview job={previewJob} onClose={() => setPreviewJob(null)} />
    </div>
  );
}
