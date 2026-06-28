export default function Home() {
  return (
    <main className="max-w-4xl mx-auto px-8 py-10 text-gray-900">
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold tracking-wide">ELIANA J. BARENBOYM</h1>
        <p className="text-sm text-gray-600 mt-2">
          www.linkedin.com/in/elianabarenboym | (617) 460-0259 | ebarenboym@usf.edu
        </p>
      </header>

      <section className="mb-8">
        <h2 className="text-xl font-bold border-b border-gray-300 pb-2 mb-4 uppercase">
          Education
        </h2>
        <h3 className="font-semibold">University of South Florida – Muma College of Business</h3>
        <p className="text-sm text-gray-700">Tampa, FL</p>
        <p>Bachelor of Science in Finance & Business Analytics and Information Systems</p>
        <p>Expected Graduation: Spring 2027</p>
        <p>GPA: 3.77/4.00 | Dean’s List</p>
        <p className="mt-2">Master of Science in Financial Analytics</p>
        <p>Expected Graduation: Spring 2028</p>
        <p>Concentration in Financial Planning and Wealth Management</p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold border-b border-gray-300 pb-2 mb-4 uppercase">
          Professional Experience
        </h2>

        <div className="mb-5">
          <h3 className="font-semibold">Maxim Group LLC</h3>
          <p className="text-sm text-gray-700">Investment Banking Intern | Miami, FL | May 2026 – August 2026</p>
          <ul className="list-disc ml-6 mt-2 space-y-1">
            <li>Supported capital markets team evaluating equity offerings, IPOs, and follow-on transactions across various industries.</li>
            <li>Conducted market research and financial analysis on companies, industry trends, and recent deal activity.</li>
            <li>Assisted in preparing pitch materials and investor presentations for client engagements.</li>
          </ul>
        </div>

        <div className="mb-5">
          <h3 className="font-semibold">Nails and Ellie</h3>
          <p className="text-sm text-gray-700">Owner & Operator | Tampa, FL | December 2024 – Present</p>
          <ul className="list-disc ml-6 mt-2 space-y-1">
            <li>Founded a nail business, managing growth, pricing, and profit margins.</li>
            <li>Executed social media campaigns and referral programs that grew the client base by 40%.</li>
            <li>Tracked revenue, costs, and inventory usage to improve cash flow and supply planning.</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold">Rumble Boxing Gym</h3>
          <p className="text-sm text-gray-700">Sales Associate | Boca Raton, FL | December 2023 – Present</p>
          <ul className="list-disc ml-6 mt-2 space-y-1">
            <li>Created personalized sales tactics that contributed to a 20% increase in memberships.</li>
            <li>Managed inventory and point-of-sale transactions averaging $5,000+ weekly.</li>
            <li>Supported promotional events and retail displays that increased quarterly sales.</li>
          </ul>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold border-b border-gray-300 pb-2 mb-4 uppercase">
          Leadership & Extracurricular Activities
        </h2>

        <div className="mb-5">
          <h3 className="font-semibold">Delta Sigma Pi – Theta Phi</h3>
          <p className="text-sm text-gray-700">Chapter Operations Executive Chair & Member | Tampa, FL | May 2026 – Present</p>
          <ul className="list-disc ml-6 mt-2 space-y-1">
            <li>Oversee chapter operations, meeting logistics, and administrative processes.</li>
            <li>Coordinate chapter events, calendars, and member communications.</li>
            <li>Lead operational initiatives that improve efficiency and member experience.</li>
          </ul>
        </div>

        <div className="mb-5">
          <h3 className="font-semibold">University of South Florida – Investment Club</h3>
          <p className="text-sm text-gray-700">Financial Planning Senior Analyst | Tampa, FL | December 2025 – Present</p>
          <ul className="list-disc ml-6 mt-2 space-y-1">
            <li>Built financial models to evaluate portfolio performance and asset allocation.</li>
            <li>Conducted equity and valuation analysis using DCF, P/E ratios, and beta comparisons.</li>
            <li>Presented data-driven investment strategies to support decision-making.</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold">University of South Florida – Chabad on Campus</h3>
          <p className="text-sm text-gray-700">Treasurer & Event Planner | Tampa, FL | April 2025 – Present</p>
          <ul className="list-disc ml-6 mt-2 space-y-1">
            <li>Supported fundraising initiatives and financial reporting for student programs.</li>
            <li>Planned Shabbat dinners and holiday events for 150+ students.</li>
            <li>Managed logistics and budgeting for a student trip to NYC.</li>
          </ul>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-bold border-b border-gray-300 pb-2 mb-4 uppercase">
          Skills, Certifications & Interests
        </h2>
        <p><span className="font-semibold">Languages:</span> Russian, English</p>
        <p><span className="font-semibold">Technical:</span> Microsoft Office, Excel, Canva, POS Systems, HTML, Tableau, PowerPoint</p>
        <p><span className="font-semibold">Programs & Certifications:</span> JPMorgan Chase & Co. Morning at Morgan, Blackstone Future Innovators, Bloomberg Certificates</p>
        <p><span className="font-semibold">Interests:</span> Boxing, Pickleball, Art, Fishing, Coffee</p>
      </section>
    </main>
  );
}