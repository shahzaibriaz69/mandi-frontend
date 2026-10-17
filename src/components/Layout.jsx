import React, { useState } from 'react';

export default function Layout({ children, activeTab, setActiveTab }) {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="flex h-screen bg-gray-100 overflow-hidden font-sans">
      
      {/* Sidebar */}
      <aside className={`bg-emerald-900 text-white w-64 space-y-6 py-6 px-4 absolute inset-y-0 left-0 transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:relative md:translate-x-0 transition duration-200 ease-in-out z-20 shadow-lg`}>
        <div className="flex items-center space-x-2 px-2">
          <div className="bg-emerald-600 p-2 rounded-lg font-extrabold text-xl tracking-wider">
            🌾 MANDI
          </div>
          <span className="text-sm text-emerald-200 font-semibold">Commission System</span>
        </div>

        <nav className="space-y-1">
          <button 
            onClick={() => setActiveTab('dashboard')}
            className={`w-full flex items-center space-x-3 px-4 py-2.5 rounded-lg text-sm font-medium transition ${activeTab === 'dashboard' ? 'bg-emerald-700 text-white shadow' : 'text-emerald-100 hover:bg-emerald-800'}`}
          >
            <span>📊</span>
            <span>Dashboard</span>
          </button>

          <button 
            onClick={() => setActiveTab('billing')}
            className={`w-full flex items-center space-x-3 px-4 py-2.5 rounded-lg text-sm font-medium transition ${activeTab === 'billing' ? 'bg-emerald-700 text-white shadow' : 'text-emerald-100 hover:bg-emerald-800'}`}
          >
            <span>📝</span>
            <span>Sale & Billing</span>
          </button>

          <button 
            onClick={() => setActiveTab('parties')}
            className={`w-full flex items-center space-x-3 px-4 py-2.5 rounded-lg text-sm font-medium transition ${activeTab === 'parties' ? 'bg-emerald-700 text-white shadow' : 'text-emerald-100 hover:bg-emerald-800'}`}
          >
            <span>👥</span>
            <span>Parties (Khata)</span>
          </button>

          <button 
            onClick={() => setActiveTab('items')}
            className={`w-full flex items-center space-x-3 px-4 py-2.5 rounded-lg text-sm font-medium transition ${activeTab === 'items' ? 'bg-emerald-700 text-white shadow' : 'text-emerald-100 hover:bg-emerald-800'}`}
          >
            <span>🥔</span>
            <span>Items & Stock</span>
          </button>

          <button 
            onClick={() => setActiveTab('reports')}
            className={`w-full flex items-center space-x-3 px-4 py-2.5 rounded-lg text-sm font-medium transition ${activeTab === 'reports' ? 'bg-emerald-700 text-white shadow' : 'text-emerald-100 hover:bg-emerald-800'}`}
          >
            <span>📈</span>
            <span>Reports & Ledger</span>
          </button>
        </nav>

        <div className="pt-10 border-t border-emerald-800 text-xs text-emerald-300 px-2">
          <p>Offline-First Mode</p>
          <p className="font-semibold text-emerald-100">Status: Connected 🟢</p>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        
        {/* Top Header */}
        <header className="bg-white shadow-sm z-10 flex justify-between items-center px-6 py-4 border-b border-gray-200">
          <div className="flex items-center space-x-4">
            <button 
              onClick={() => setSidebarOpen(!sidebarOpen)} 
              className="text-gray-500 hover:text-gray-700 focus:outline-none md:hidden"
            >
              ☰
            </button>
            <h1 className="text-lg font-bold text-gray-800 uppercase">
              {activeTab === 'dashboard' && 'Dashboard Overview'}
              {activeTab === 'billing' && 'Sale & Billing Entry'}
              {activeTab === 'parties' && 'Customer & Commission Agent Khata'}
              {activeTab === 'items' && 'Mandi Item Management'}
              {activeTab === 'reports' && 'Daily Sales & Commission Reports'}
            </h1>
          </div>

          <div className="flex items-center space-x-4">
            <div className="text-right hidden sm:block">
              <p className="text-sm font-bold text-gray-800">Commission Agent</p>
              <p className="text-xs text-gray-500">Mandi Branch #1</p>
            </div>
            <div className="h-9 w-9 bg-emerald-700 text-white rounded-full flex items-center justify-center font-bold text-sm shadow">
              CA
            </div>
          </div>
        </header>

        {/* Dynamic Page Content */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-50 p-4 md:p-6">
          {children}
        </main>
      </div>

    </div>
  );
}