export default function ContactsPage() {
  return (
    <div>
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Contacts</h2>
        <button className="bg-indigo-600 text-white px-4 py-2 rounded-md">
          Upload CSV
        </button>
      </div>
      <div className="mt-8">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-2">Name</th>
              <th className="p-2">Phone</th>
              <th className="p-2">Category</th>
              <th className="p-2">Segment</th>
            </tr>
          </thead>
          <tbody>
            {/* Placeholder data */}
            <tr>
              <td className="p-2">John Doe</td>
              <td className="p-2">555-555-5555</td>
              <td className="p-2">Buyer</td>
              <td className="p-2">VIP</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
