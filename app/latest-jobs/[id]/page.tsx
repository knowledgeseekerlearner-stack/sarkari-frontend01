import { JOBS } from "../data/jobs";

type Props = { params: { id: string } };

export default async function JobDetail({ params }: Props) {
  const job = JOBS.find(j => j.id === params.id);
  if (!job) return <div style={{ padding: 40 }}>Job not found.</div>;

  return (
    <div style={{ padding: 40 }}>
      <h1>{job.title}</h1>
      <p style={{ color: "#666", marginTop: 10 }}>{job.summary}</p>
      <div style={{ marginTop: 20 }}>
        <a href="#" onClick={() => history.back()}>← Back</a>
      </div>
    </div>
  );
}
