'use client'

import { useCategorySidebar } from "../context/CategorySidebarContext"

export default function TestSidebar() {
  const { isOpen, toggleSidebar } = useCategorySidebar()

 return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Sidebar Test Page</h1>
      <p className="mb-4">Current sidebar state: <strong>{isOpen ? 'OPEN' : 'CLOSED'}</strong></p>
      
      <button
        onClick={toggleSidebar}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Toggle Sidebar (Test Button)
      </button>
      
      <div className="mt-8 p-4 bg-gray-100 rounded">
        <h2 className="font-bold mb-2">Instructions:</h2>
        <ol className="list-decimal list-inside space-y-2">
          <li>Click the "Toggle Sidebar" button above</li>
          <li>Check if sidebar opens/closes</li>
          <li>Open browser console (F12)</li>
          <li>Look for these logs:
            <ul className="list-disc list-inside ml-4 mt-2">
              <li>"🔄 Toggling sidebar via context"</li>
              <li>"📬 Global toggle event received"</li>
            </ul>
          </li>
        </ol>
      </div>
    </div>
  )
}
