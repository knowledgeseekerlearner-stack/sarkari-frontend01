// app/page.tsx (इस कोड से पूरा बदल दें)
import Link from 'next/link'; 

export default function Home() {
  return (
    <div className="min-h-screen bg-white p-8">
      {/* नेविगेशन बार: लॉगिन/साइनअप लिंक */}
      <nav className="flex justify-end mb-4 space-x-4">
        <Link href="/signup" className="text-indigo-600 hover:text-indigo-800 font-medium">
          साइनअप
        </Link>
        <Link href="/login" className="text-indigo-600 hover:text-indigo-800 font-medium">
          लॉगिन
        </Link>
      </nav>

      {/* बाकी वेबसाइट लेआउट यहाँ से शुरू होता है */}
      <header className="mb-6">
        <h1 className="text-4xl font-extrabold text-gray-900 flex items-center">
          Sarkari Jeet — Your One-Stop Exam Partner 🚀
        </h1>
        <p className="mt-2 text-lg text-gray-600">
          From Board Exam to First Government Job - Har Kadam Par Aapka Saathi.
        </p>
      </header>
      <main>
        <div className="flex gap-8">
          <aside className="w-64">
            <h2 className="text-xl font-semibold mb-3 text-gray-800">Start: Admissions</h2>
            <ul className="space-y-2">
              <li><a href="#" className="text-blue-600 hover:underline">Admit Cards</a></li>
              <li><a href="#" className="text-blue-600 hover:underline">Mock Tests</a></li>
              <li><a href="#" className="text-blue-600 hover:underline">Smart Study Plans</a></li>
              {/*... बाकी लिस्ट आइटम */}
            </ul>
          </aside>
          <section className="flex-1">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Latest Jobs</h2>
            <div className="border p-4 rounded-lg bg-gray-50">
              <ul className="space-y-3">
                <li className="flex justify-between items-center">
                  <span>• SSC CGL Recruitment 2025</span>
                  <span className="font-semibold">Vacancies: 9,320</span>
                </li>
                {/*... बाकी लिस्ट आइटम */}
              </ul>
              <button className="mt-4 px-4 py-2 bg-indigo-100 text-indigo-700 rounded hover:bg-indigo-200">
                View All Jobs →
              </button>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
