import React, { useState } from 'react';
import API from '../api';

export default function UploadPage() {
  const [file, setFile] = useState(null);
  const [progress, setProgress] = useState(0);
  const [result, setResult] = useState(null);
  const [length, setLength] = useState('short');

  const onFileChange = (e) => setFile(e.target.files[0]);

  const upload = async () => {
    if (!file) return alert('choose a file');
    const form = new FormData();
    form.append('file', file);
    form.append('length', length);

    try {
      const res = await API.post('/api/upload/', form, {
        headers: { 'Content-Type': 'multipart/form-data' },
        onUploadProgress: (ev) => setProgress(Math.round((ev.loaded / ev.total) * 100)),
      });
      setResult(res.data);
      setProgress(0);
    } catch (err) {
      alert('upload failed');
    }
  };

  return (
    <section>
      <h2 className="text-2xl font-semibold mb-4">Upload Document</h2>
      <div className="bg-white dark:bg-gray-800 p-6 rounded shadow">
        <input type="file" onChange={onFileChange} />
        <div className="mt-4">
          <label className="mr-2">Summary length:</label>
          <select value={length} onChange={e => setLength(e.target.value)} className="p-2 border rounded">
            <option value="short">Short</option>
            <option value="medium">Medium</option>
            <option value="long">Long</option>
          </select>
        </div>
        <div className="mt-4">
          <button onClick={upload} className="px-4 py-2 bg-blue-600 text-white rounded">Upload & Summarize</button>
        </div>
        {progress > 0 && <div className="mt-4">Uploading: {progress}%</div>}
        {result && (
          <div className="mt-6">
            <h3 className="font-semibold">Summary</h3>
            <pre className="whitespace-pre-wrap bg-gray-100 dark:bg-gray-700 p-4 rounded mt-2">{result.summary}</pre>
            <a
              className="mt-2 inline-block text-sm text-blue-600"
              href={`${import.meta.env.VITE_API_BASE}${result.file}`}
            >
              Download original
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
