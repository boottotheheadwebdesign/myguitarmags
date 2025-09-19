"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function AddMagForm() {
  const router = useRouter();
  const [publication, setPublication] = useState("");
  const [title, setTitle] = useState("");
  const [fullDate, setFullDate] = useState("");
  const [pubMonth, setPubMonth] = useState("");
  const [pubYear, setPubYear] = useState("");
  const [volume, setVolume] = useState("");
  const [issue, setIssue] = useState("");
  const [pages, setPages] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
   
    try {
      const response = await fetch('/api/mags', {
        cache: 'no-store',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          publication,
          title,
          fullDate, 
          pubMonth,
          pubYear,
          volume,
          issue,
          pages
        })
      });

      interface ApiResponse {
        success: boolean;
        message?: string;
      }

      const data: ApiResponse = await response.json();
      if (data.success) {
        setPublication("");
        setTitle("");
        setFullDate("");
        setPubMonth("");
        setPubYear("");
        setVolume("");
        setIssue("");
        setPages("");
        alert(data.message);
        router.push('/view-mags');
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };
  return (
    //   , title, fullDate, pubMonth, pubYear, volume, issue, pages
    <div>
      <form className="p-4 border rounded space-y-4 bg-gray-50" onSubmit={handleSubmit} autoComplete="off">
        <div className="space-y-12">
          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-base/7 font-semibold text-gray-900">Add your magazine</h2>
            <p className="mt-1 text-sm/6 text-gray-600">This submits right to the MongoDB database.</p>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="col-span-full">
                <label htmlFor="cover-photo" className="block text-sm/6 font-medium text-gray-900">Cover photo</label>
                <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                  <div className="text-center">
                    <svg viewBox="0 0 24 24" fill="currentColor" data-slot="icon" aria-hidden="true" className="mx-auto size-12 text-gray-300">
                      <path d="M1.5 6a2.25 2.25 0 0 1 2.25-2.25h16.5A2.25 2.25 0 0 1 22.5 6v12a2.25 2.25 0 0 1-2.25 2.25H3.75A2.25 2.25 0 0 1 1.5 18V6ZM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0 0 21 18v-1.94l-2.69-2.689a1.5 1.5 0 0 0-2.12 0l-.88.879.97.97a.75.75 0 1 1-1.06 1.06l-5.16-5.159a1.5 1.5 0 0 0-2.12 0L3 16.061Zm10.125-7.81a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Z" clipRule="evenodd" fillRule="evenodd" />
                    </svg>
                    <div className="mt-4 flex text-sm/6 text-gray-600">
                      <label htmlFor="file-upload" className="relative cursor-pointer rounded-md bg-transparent font-semibold text-indigo-600 focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-indigo-600 hover:text-indigo-500">
                        <span>Upload a file</span>
                        <input id="file-upload" type="file" name="file-upload" className="sr-only" />
                      </label>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs/5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-base/7 font-semibold text-gray-900">Issue Information</h2>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label htmlFor="publication" className="block text-sm/6 font-medium text-gray-900">Publication Name (ex. Guitar World)</label>
                <div className="mt-2">
                  <input id="publication" type="text" name="publication" value={publication} onChange={(e) => setPublication(e.target.value)} required className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label htmlFor="title" className="block text-sm/6 font-medium text-gray-900">Title</label>
                <div className="mt-2">
                  <input id="title" type="text" name="title" value={title} onChange={(e) => setTitle(e.target.value)} className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
                </div>
              </div>

              <div className="sm:col-span-2 sm:col-start-1">
                <label htmlFor="fullDate" className="block text-sm/6 font-medium text-gray-900">Full Date (ex. February 1990)</label>
                <div className="mt-2">
                  <input id="fullDate" type="text" name="fullDate" value={fullDate} onChange={(e) => setFullDate(e.target.value)} className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="pubMonth" className="block text-sm/6 font-medium text-gray-900">Publication Month</label>
                <div className="mt-2">
                  <input id="pubMonth" type="text" name="pubMonth" value={pubMonth} onChange={(e) => setPubMonth(e.target.value)} className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="pubYear" className="block text-sm/6 font-medium text-gray-900">Publication Year</label>
                <div className="mt-2">
                  <input id="pubYear" type="text" name="pubYear" value={pubYear} onChange={(e) => setPubYear(e.target.value)} className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
                </div>
              </div>

              <div className="sm:col-span-2 sm:col-start-1">
                <label htmlFor="volume" className="block text-sm/6 font-medium text-gray-900">Volume Number</label>
                <div className="mt-2">
                  <input id="volume" type="text" name="volume" value={volume} onChange={(e) => setVolume(e.target.value)} className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="issue" className="block text-sm/6 font-medium text-gray-900">Issue Number</label>
                <div className="mt-2">
                  <input id="issue" type="text" name="issue" value={issue}  onChange={(e) => setIssue(e.target.value)} className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="pages" className="block text-sm/6 font-medium text-gray-900">Number of Pages</label>
                <div className="mt-2">
                  <input id="pages" type="text" name="pages" value={pages} onChange={(e) => setPages(e.target.value)} className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
                </div>
              </div>

            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-start gap-x-6">
          <button type="submit" className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Save</button>
        </div>
      </form>
    </div>
  )
}
