// components/QuickPreview.tsx
"use client";
import React, { useEffect } from "react";
import { Job } from "./JobCard";

export default function QuickPreview({
  job,
  onClose,
}: {
  job: Job | null;
  onClose: () => void;
}) {
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  if (!job) return null;

  return (
    <>
      {/* backdrop */}
      <div
        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
        onClick={onClose}
      />

      <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
        <div className="w-full max-w-xl bg-white/90 backdrop-blur-md rounded-xl shadow-2xl border border-gray-100 overflow-hidden">
          <div className="p-5">
            <div className="flex items-start justify-between">
              <div>
                <h2 className="text-2xl font-bold leading-tight">{job.title}</h2>
                <p className="text-sm text-gray-600 mt-1">{job.org || ""}</p>
              </div>

              <button
                onClick={onClose}
                className="text-gray-500 hover:text-gray-700"
                aria-label="Close preview"
              >
                ✕
              </button>
            </div>

            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-700">
              <div>
                <p><strong>Eligibility:</strong> {job.qualification || "Not specified"}</p>
                <p className="mt-1"><strong>Vacancies:</strong> {job.vacancies || "—"}</p>
              </div>
              <div>
                <p><strong>Apply:</strong> {job.lastDate || "Not specified"}</p>
                <p className="mt-1"><strong>Mode:</strong> {job.shortDesc || "—"}</p>
              </div>
            </div>

            <p className="text-sm text-gray-700 mt-4 line-clamp-4">{job.description}</p>

            <div className="mt-5 flex gap-3">
              <a
                href={job.notificationPdf || "#"}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition text-sm"
              >
                📄 Download
              </a>

              <a
                href={job.applyLink || "#"}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 rounded-md bg-green-600 text-white hover:bg-green-700 transition text-sm"
              >
                📝 Apply Now
              </a>

              <button
                onClick={onClose}
                className="ml-auto px-4 py-2 rounded-md border text-sm"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
