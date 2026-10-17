import React, { useState } from 'react';
import Layout from './components/Layout';
import SimpleSaleBilling from './components/SimpleSaleBilling';

export default function App() {
  const [activeTab, setActiveTab] = useState('billing');

  return (
    <Layout activeTab={activeTab} setActiveTab={setActiveTab}>
      {activeTab === 'billing' && <SimpleSaleBilling />}
      
      {activeTab === 'dashboard' && (
        <div className="p-6 bg-white rounded-lg shadow border border-gray-200">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Dashboard Summary</h2>
          <p className="text-gray-600">Aapka Mandi overview aur quick stats yahan show honge.</p>
        </div>
      )}

      {activeTab === 'parties' && (
        <div className="p-6 bg-white rounded-lg shadow border border-gray-200">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Parties Management</h2>
          <p className="text-gray-600">Customers aur suppliers ki list yahan manage hogi.</p>
        </div>
      )}

      {activeTab === 'items' && (
        <div className="p-6 bg-white rounded-lg shadow border border-gray-200">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Items Management</h2>
          <p className="text-gray-600">Phal aur sabziyon ke items yahan add honge.</p>
        </div>
      )}

      {activeTab === 'reports' && (
        <div className="p-6 bg-white rounded-lg shadow border border-gray-200">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Reports & Ledgers</h2>
          <p className="text-gray-600">Daily commission aur sales ki reports yahan generate hongi.</p>
        </div>
      )}
    </Layout>
  );
}