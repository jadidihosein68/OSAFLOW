import Link from 'next/link';

export default function TemplatesPage() {
  return (
    <div>
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Templates</h2>
        <Link
          href="/dashboard/templates/new"
          className="bg-indigo-600 text-white px-4 py-2 rounded-md"
        >
          Create Template
        </Link>
      </div>
      <div className="mt-8">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-2">Name</th>
              <th className="p-2">Content</th>
            </tr>
          </thead>
          <tbody>
            {/* Placeholder data */}
            <tr>
              <td className="p-2">Follow-up Greeting</td>
              <td className="p-2">
                Hi name, just checking if you had a chance to view project…
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
