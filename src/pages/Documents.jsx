import React, { useEffect, useState } from 'react';
import API from '../api';

export default function DocumentsPage() {
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    API.get('/api/documents/')
      .then(r => setDocs(r.data))
      .catch(() => {});
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">History</h2>
      <div className="grid gap-4">
        {docs.map(d => (
          <div key={d.id} className="p-4 bg-white dark:bg-gray-800 rounded shadow">
            <div className="flex justify-between items-center">
              <div>
                <div className="font-medium">{d.original_filename}</div>
                <div className="text-sm text-gray-500">{new Date(d.uploaded_at).toLocaleString()}</div>
              </div>
              <a
                className="text-sm text-blue-600"
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  alert(d.summary);
                }}
              >
                View summary
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
