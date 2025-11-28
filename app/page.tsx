import Link from "next/link";

export default function Home() {
  return (
    <div style={{ padding: "40px", fontFamily: "sans-serif" }}>
      <h1>Sarkari Jeet — Your One-Stop Exam Partner 🚀</h1>
      <p>From First Board Exam to First Government Job — हर कदम पर आपका साथी.</p>

      <p style={{ marginTop: 20, fontWeight: "bold" }}>
        Start: Latest Jobs • Admit Cards • Mock Tests • Smart Study Plans
      </p>

      <div style={{
        marginTop: 40,
        padding: 20,
        border: "1px solid #ddd",
        borderRadius: 10,
        background: "#fafafa",
        maxWidth: 920
      }}>
        <h2>🟢 Latest Jobs</h2>
        <ul>
          <li>🔹 SSC MTS 2024 – Apply Online</li>
          <li>🔹 UP Police Constable 2024 – 60,000+ Vacancies</li>
          <li>🔹 Railway RRB Group D – Coming Soon</li>
          <li>🔹 UPSC EPFO 2024 – Notification Out</li>
        </ul>

        <Link href="/latest-jobs">
          <button style={{
            marginTop: 10, padding: "10px 20px", background: "black",
            color: "white", border: "none", borderRadius: 6, cursor: "pointer"
          }}>
            View All Jobs →
          </button>
        </Link>
      </div>
    </div>
  );
}
