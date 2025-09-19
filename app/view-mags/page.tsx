import Link from "next/link";

async function fetchMags() {
  const response = await fetch('http://localhost:3000/api/mags', { 
    cache: 'no-store' 
  });
  const data = await response.json();
  return data;
}

export default async function ViewMags() {
  const allMags = await fetchMags();

  if (allMags.success) {
    const mags = allMags.data;
    return (
      <>
        <section className="p-5">
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200">
              <thead>
                <tr>
                  <th className="py-2 px-4 border-b border-gray-200 bg-gray-50 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">_id</th>
                  <th className="py-2 px-4 border-b border-gray-200 bg-gray-50 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Publication</th>
                  <th className="py-2 px-4 border-b border-gray-200 bg-gray-50 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Title</th>
                  <th className="py-2 px-4 border-b border-gray-200 bg-gray-50 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Date</th>
                  <th className="py-2 px-4 border-b border-gray-200 bg-gray-50 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Volume</th>
                  <th className="py-2 px-4 border-b border-gray-200 bg-gray-50 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Issue</th>
                  <th className="py-2 px-4 border-b border-gray-200 bg-gray-50 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Pages</th>
                  <th className="py-2 px-4 border-b border-gray-200 bg-gray-50 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Date Entered</th>
                  <th className="py-2 px-4 border-b border-gray-200 bg-gray-50 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Action</th>
                </tr>
              </thead>
              <tbody>
                {mags.map((mag: any, index: number) => (
                  <tr key={mag._id}>
                    <td className="py-2 px-4 border-b border-gray-200 text-sm">{index + 1}. {mag._id}</td>
                    <td className="py-2 px-4 border-b border-gray-200 text-sm">{mag.publication}</td>
                    <td className="py-2 px-4 border-b border-gray-200 text-sm">{mag.title}</td>
                    <td className="py-2 px-4 border-b border-gray-200 text-sm">
                      <p>{mag.fullDate}</p>
                      {mag.pubMonth} - {mag.pubYear}
                    </td>  
                    <td className="py-2 px-4 border-b border-gray-200 text-sm">{mag.volume}</td>
                    <td className="py-2 px-4 border-b border-gray-200 text-sm">{mag.issue}</td>
                    <td className="py-2 px-4 border-b border-gray-200 text-sm">{mag.pages}</td>
                    <td className="py-2 px-4 border-b border-gray-200 text-sm">{new Date(mag.createdAt).toLocaleDateString()}</td>
                    <td className="py-2 px-4 border-b border-gray-200 text-sm"><Link className="text-blue-500 underline hover:text-blue-700" href={`/view-mags/${mag._id}`}>View</Link></td>
                  </tr>
                ))}
                
                
                
              </tbody>
            </table>
          </div>
        </section>
      </>
    );
  } else {
    return (
      <>
        <section className="py-5">
          <div className="container px-5 my-5">
            <div className="text-center mb-5">
              <h1 className="fw-bolder">No Magazines Found</h1>
              <p className="lead fw-normal text-muted mb-0">{allMags.message}</p>
            </div>
          </div>
        </section>
      </>
    );
  }
}
