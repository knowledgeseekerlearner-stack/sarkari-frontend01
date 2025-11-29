// components/JobCard.tsx
"use client";
import React from "react";

export type Job = {
  id: string;
  title: string;
  org?: string;
  shortDesc?: string;
  qualification?: string;
  vacancies?: string;
  lastDate?: string;
  notificationPdf?: string;
  applyLink?: string;
  description?: string;
};

export default function JobCard({
  job,
  onPreview,
  onOpenDetails,
  onHoverStart,
  onHoverEnd,
}: {
  job: Job;
  onPreview: (j: Job) => void;
  onOpenDetails: (id: string) => void;
  onHoverStart?: () => void;
  onHoverEnd?: () => void;
}) {
  // Determine mobile quickly
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  return (
    <div
      className="bg-white border rounded-lg p-4 shadow-sm hover:shadow-md transition cursor-pointer flex flex-col justify-between"
      // hover/touch behavior handled here
      onMouseEnter={() => onHoverStart && onHoverStart()}
      onMouseLeave={() => onHoverEnd && onHoverEnd()}
      onClick={(e) => {
        // if mobile, open preview on tap
        if (isMobile) {
          e.stopPropagation();
          onPreview(job);
        }
      }}
      role="button"
    >
      <div>
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">{job.title}</h3>
          <span className="text-sm text-gray-500">{job.org || "—"}</span>
        </div>

        {job.shortDesc && (
          <p className="text-sm text-gray-600 mt-2">{job.shortDesc}</p>
        )}

        <div className="mt-3 flex flex-wrap gap-2 text-sm text-gray-700">
          {job.qualification && (
            <span className="px-2 py-1 bg-gray-100 rounded">{job.qualification}</span>
          )}
          {job.vacancies && (
            <span className="px-2 py-1 bg-gray-100 rounded">Vacancies: {job.vacancies}</span>
          )}
          {job.lastDate && (
            <span className="px-2 py-1 bg-yellow-50 text-yellow-800 rounded">
              Last: {job.lastDate}
            </span>
          )}
        </div>
      </div>

      <div className="mt-4 flex items-center gap-3">
        <button
          onClick={(e) => {
            e.stopPropagation();
            onPreview(job);
          }}
          className="px-3 py-2 rounded-md bg-primary text-white text-sm hover:bg-blue-700 transition"
        >
          Quick View
        </button>

        <button
          onClick={(e) => {
            e.stopPropagation();
            onOpenDetails(job.id);
          }}
          className="px-3 py-2 rounded-md border text-sm hover:bg-gray-50 transition"
        >
          View Details
        </button>
      </div>
    </div>
  );
}
