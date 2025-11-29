import jobs from "../../data/jobs";

export default async function JobDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;  // ✅ FIX: Await the params

  const job = jobs.find((job) => job.id === id);

  if (!job) {
    return (
      <div className="p-10 text-center">
        <h2 className="text-2xl font-bold">Job not found ❌</h2>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto mt-10 bg-white shadow p-6 rounded-xl">
      <h1 className="text-3xl font-bold mb-3">{job.title}</h1>
      <p className="text-gray-600 mb-5">{job.description}</p>

      <div className="space-y-3">
        <p><strong>Organization:</strong> {job.organization}</p>
        <p><strong>Vacancies:</strong> {job.vacancies}</p>
        <p><strong>Last Date:</strong> {job.lastDate}</p>
        <p><strong>Status:</strong> {job.status}</p>
      </div>
    </div>
  );
}
