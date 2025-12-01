"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";

type Job = {
  id: string;
  title: string;
  dept: string;
  qualification: string;
  vacancies: number;
  lastDate: string;
  tags: string[];
};

export default function ClientJobs({ jobs }: { jobs: Job[] }) {
  const [quickViewJob, setQuickViewJob] = useState<Job | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement | null>(null);

  const [hoverDelay, setHoverDelay] = useState<number>(() => {
    try {
      const v = localStorage.getItem("sj_hover_delay");
      return v ? Number(v) : 300;
    } catch (e) {
      return 300;
    }
  });
  const hoverTimeout = useRef<number | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem("sj_hover_delay", String(hoverDelay));
    } catch {}
  }, [hoverDelay]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        if (isModalOpen) closeModal();
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isModalOpen]);

  useEffect(() => {
    if (isModalOpen) {
      modalRef.current?.focus();
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      setQuickViewJob(null);
    }
  }, [isModalOpen]);

  function openModal(job: Job) {
    setQuickViewJob(job);
    setIsModalOpen(true);
  }
  function closeModal() {
    setIsModalOpen(false);
  }

  function handleSidebarEnter() {
    if (hoverDelay === -1) return;
    if (hoverTimeout.current) window.clearTimeout(hoverTimeout.current);
    hoverTimeout.current = window.setTimeout(() => setSidebarOpen(true), hoverDelay);
  }
  function handleSidebarLeave() {
    if (hoverTimeout.current) window.clearTimeout(hoverTimeout.current);
    setSidebarOpen(false);
  }

  function slugify(id: string) { return id; }

  return (
    <div>
      <div className="flex items-start justify-between mb-4">
        <p className="text-sm text-gray-600">Showing {jobs.length} results</p>
        <div className="relative">
          <button
            aria-haspopup="true"
            aria-expanded={sidebarOpen}
            aria-controls="settings-sidebar"
            onMouseEnter={handleSidebarEnter}
            onMouseLeave={handleSidebarLeave}
            className="p-2 rounded-md border bg-white shadow-sm"
            title="Popup Settings"
          >
            ⚙️
          </button>

          <aside
            id="settings-sidebar"
            role="complementary"
            aria-hidden={!sidebarOpen}
            onMouseEnter={handleSidebarEnter}
            onMouseLeave={handleSidebarLeave}
            className={`absolute right-0 mt-2 w-56 z-20 transform transition-all duration-200 ${sidebarOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"}`}
          >
            <div className="bg-white p-3 rounded-lg shadow-lg border">
              <h3 className="font-medium mb-2">Hover delay (ms)</h3>
              <div className="grid grid-cols-2 gap-2">
                {[0, 300, 500, 1000, -1].map((d) => (
                  <button
                    key={d}
                    onClick={() => setHoverDelay(d)}
                    className={`py-1 px-2 rounded text-sm border ${hoverDelay === d ? "bg-gray-100" : "bg-white"}`}
                    aria-pressed={hoverDelay === d}
                  >
                    {d}
                  </button>
                ))}
              </div>
              <p className="mt-2 text-xs text-gray-500">Saved to localStorage</p>
            </div>
          </aside>
        </div>
      </div>

      <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {jobs.map((job) => (
          <li key={job.id} className="bg-white p-4 rounded-lg shadow-sm border">
            <article aria-labelledby={`job-${job.id}-title`}>
              <h2 id={`job-${job.id}-title`} className="text-lg font-semibold mb-1">{job.title}</h2>
              <p className="text-sm text-gray-500 mb-2">{job.dept} • {job.qualification}</p>

              <div className="flex flex-wrap gap-2 mb-3">
                {job.tags.map((t) => (<span key={t} className="text-xs px-2 py-1 rounded-full border">{t}</span>))}
              </div>

              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-600">Vacancies: <span className="font-medium">{job.vacancies}</span></div>

                <div className="flex items-center gap-2">
                  <button className="text-sm px-3 py-1 rounded-md border focus:outline-none focus:ring" onClick={() => openModal(job)} aria-haspopup="dialog">Quick View</button>

                  <Link href={`/jobs/${slugify(job.id)}`} className="text-sm px-3 py-1 rounded-md border bg-gray-50" aria-label={`View details for ${job.title}`}>View Details</Link>

                  <a href={`https://apply.example.com/${job.id}`} target="_blank" rel="noopener noreferrer" className="text-sm px-3 py-1 rounded-md border bg-blue-600 text-white">Apply</a>
                </div>
              </div>
            </article>
          </li>
        ))}
      </ul>

      {isModalOpen && quickViewJob && (
        <div role="dialog" aria-modal="true" aria-labelledby="modal-title" tabIndex={-1} ref={modalRef} className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 backdrop-blur-sm bg-black/40" onClick={closeModal} aria-hidden="true" />
          <div className="relative max-w-xl w-full rounded-2xl p-6" style={{ background: "rgba(255,255,255,0.6)", boxShadow: "0 8px 32px rgba(31,38,135,0.37)", backdropFilter: "blur(8px)" }}>
            <button onClick={closeModal} className="absolute top-3 right-3 p-2 rounded-md" aria-label="Close Quick view">✕</button>
            <h3 id="modal-title" className="text-xl font-bold mb-2">{quickViewJob.title}</h3>
            <p className="text-sm text-gray-600">{quickViewJob.dept} • {quickViewJob.qualification}</p>

            <dl className="mt-4 grid grid-cols-2 gap-2 text-sm">
              <div>
                <dt className="text-xs text-gray-500">Vacancies</dt>
                <dd className="font-medium">{quickViewJob.vacancies}</dd>
              </div>
              <div>
                <dt className="text-xs text-gray-500">Last Date</dt>
                <dd className="font-medium">{quickViewJob.lastDate}</dd>
              </div>
            </dl>

            <div className="mt-4 flex gap-2">
              <Link href={`/jobs/${slugify(quickViewJob.id)}`} className="px-3 py-1 rounded-md border">View Details</Link>
              <a href={`https://apply.example.com/${quickViewJob.id}`} target="_blank" rel="noreferrer" className="px-3 py-1 rounded-md border bg-blue-600 text-white">Apply</a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
