'use client';

import { useState, useEffect } from 'react';
import axios from 'axios';
import Link from 'next/link';

interface Template {
  id: number;
  name: string;
  body: string;
}

export default function TemplatesPage() {
  const [templates, setTemplates] = useState<Template[]>([]);

  useEffect(() => {
    const fetchTemplates = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/api/v1/templates/`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setTemplates(response.data);
      } catch (error) {
        console.error('Failed to fetch templates:', error);
      }
    };

    fetchTemplates();
  }, []);

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
            {templates.map((template) => (
              <tr key={template.id}>
                <td className="p-2">{template.name}</td>
                <td className="p-2">{template.body}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
