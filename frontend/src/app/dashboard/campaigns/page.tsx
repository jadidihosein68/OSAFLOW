export default function CampaignsPage() {
  return (
    <div>
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Campaigns</h2>
        <button className="bg-indigo-600 text-white px-4 py-2 rounded-md">
          Create Campaign
        </button>
      </div>
      <div className="mt-8">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-2">Name</th>
              <th className="p-2">Template</th>
              <th className="p-2">Scheduled At</th>
              <th className="p-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {/* Placeholder data */}
            <tr>
              <td className="p-2">New Listing Campaign</td>
              <td className="p-2">New Listing</td>
              <td className="p-2">2024-12-01 10:00 AM</td>
              <td className="p-2">Sent</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
