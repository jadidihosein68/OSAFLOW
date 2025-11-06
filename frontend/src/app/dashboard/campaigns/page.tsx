'use client';

import { useState, useEffect } from 'react';
import axios from 'axios';
import Link from 'next/link';

interface Campaign {
  id: number;
  name: string;
  template: number;
  scheduled_at: string;
  status: string;
}

export default function CampaignsPage() {
  const [campaigns, setCampaigns] = useState<Campaign[]>([]);

  useEffect(() => {
    const fetchCampaigns = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/api/v1/campaigns/`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setCampaigns(response.data);
      } catch (error) {
        console.error('Failed to fetch campaigns:', error);
      }
    };

    fetchCampaigns();
  }, []);

  return (
    <div>
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Campaigns</h2>
        <Link
          href="/dashboard/campaigns/new"
          className="bg-indigo-600 text-white px-4 py-2 rounded-md"
        >
          Create Campaign
        </Link>
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
            {campaigns.map((campaign) => (
              <tr key={campaign.id}>
                <td className="p-2">{campaign.name}</td>
                <td className="p-2">{campaign.template}</td>
                <td className="p-2">{new Date(campaign.scheduled_at).toLocaleString()}</td>
                <td className="p-2">{campaign.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
