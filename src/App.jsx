import React from 'react'
import UploadPage from './pages/Upload'
import DocumentsPage from './pages/Documents'

export default function App(){
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <header className="p-6 bg-white dark:bg-gray-800 shadow">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold">Legal Analysis & Summarizer</h1>
          <nav>
            <a href="#" className="mr-4">Upload</a>
            <a href="#docs">History</a>
          </nav>
        </div>
      </header>
      <main className="max-w-4xl mx-auto p-6">
        <UploadPage />
        <div id="docs" className="mt-12">
          <DocumentsPage />
        </div>
      </main>
    </div>
  )
}
