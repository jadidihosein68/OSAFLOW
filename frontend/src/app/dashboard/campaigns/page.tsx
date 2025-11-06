'use client';

import { useState, useEffect } from 'react';
import axios from 'axios';
import Link from 'next/link';
import { BarChart, Send, Mail, MessageCircle } from 'lucide-react';

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
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Campaigns</h1>
        <Link
          href="/dashboard/campaigns/new"
          className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold"
        >
          Create Campaign
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {campaigns.map((campaign) => (
          <div key={campaign.id} className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-xl font-bold">{campaign.name}</h2>
              <span
                className={`px-3 py-1 text-sm rounded-full ${
                  campaign.status === 'sent'
                    ? 'bg-green-100 text-green-800'
                    : 'bg-yellow-100 text-yellow-800'
                }`}
              >
                {campaign.status}
              </span>
            </div>
            <p className="text-gray-500 mb-6">
              Scheduled for: {new Date(campaign.scheduled_at).toLocaleString()}
            </p>
            <div className="flex justify-around text-center">
              <div>
                <Send className="w-6 h-6 mx-auto text-gray-400" />
                <p className="font-bold text-lg">1,200</p>
                <p className="text-sm text-gray-500">Sent</p>
              </div>
              <div>
                <Mail className="w-6 h-6 mx-auto text-gray-400" />
                <p className="font-bold text-lg">800</p>
                <p className="text-sm text-gray-500">Opened</p>
              </div>
              <div>
                <MessageCircle className="w-6 h-6 mx-auto text-gray-400" />
                <p className="font-bold text-lg">250</p>
                <p className="text-sm text-gray-500">Clicked</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
