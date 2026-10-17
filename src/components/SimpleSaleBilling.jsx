import React, { useState, useEffect } from 'react';

export default function SimpleSaleBilling() {
  const [billNo, setBillNo] = useState(101);
  const [saleDate, setSaleDate] = useState(new Date().toISOString().split('T')[0]);
  const [selectedCustomer, setSelectedCustomer] = useState('');
  const [selectedItem, setSelectedItem] = useState('');
  
  const [nug, setNug] = useState('');
  const [wtPerNug, setWtPerNug] = useState('');
  const [rate, setRate] = useState('');
  const [commissionPercent, setCommissionPercent] = useState(5.0);

  const [totalWeight, setTotalWeight] = useState(0);
  const [grossAmount, setGrossAmount] = useState(0);
  const [commissionAmount, setCommissionAmount] = useState(0);
  const [netAmount, setNetAmount] = useState(0);

  useEffect(() => {
    const calculatedWeight = (parseFloat(nug) || 0) * (parseFloat(wtPerNug) || 0);
    const calculatedGross = calculatedWeight * (parseFloat(rate) || 0);
    const calculatedComm = (calculatedGross * (parseFloat(commissionPercent) || 0)) / 100;
    const calculatedNet = calculatedGross - calculatedComm;

    setTotalWeight(calculatedWeight.toFixed(2));
    setGrossAmount(calculatedGross.toFixed(2));
    setCommissionAmount(calculatedComm.toFixed(2));
    setNetAmount(calculatedNet.toFixed(2));
  }, [nug, wtPerNug, rate, commissionPercent]);

  const handleSaveSale = (e) => {
    e.preventDefault();
    alert("Sale Entry Saved Successfully!");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8">
      <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        
        <div className="bg-emerald-700 px-6 py-4 flex justify-between items-center text-white">
          <h2 className="text-xl font-bold tracking-wide">SIMPLE SALE & BILLING ENTRY</h2>
          <div className="flex space-x-2">
            <button 
              type="submit" 
              form="sale-form"
              className="bg-white text-emerald-800 font-bold px-4 py-1.5 rounded hover:bg-emerald-50 text-sm shadow cursor-pointer"
            >
              SAVE BILL
            </button>
            <button 
              type="button" 
              className="bg-gray-200 text-gray-800 font-bold px-4 py-1.5 rounded hover:bg-gray-300 text-sm cursor-pointer"
            >
              CLEAR
            </button>
          </div>
        </div>

        <form id="sale-form" onSubmit={handleSaveSale} className="p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 bg-emerald-50 p-4 rounded-md border border-emerald-200">
            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Bill No</label>
              <input 
                type="number" 
                value={billNo} 
                onChange={(e) => setBillNo(e.target.value)}
                className="w-full border border-gray-300 rounded px-3 py-1.5 font-semibold bg-white"
                required
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Date</label>
              <input 
                type="date" 
                value={saleDate} 
                onChange={(e) => setSaleDate(e.target.value)}
                className="w-full border border-gray-300 rounded px-3 py-1.5 font-semibold bg-white"
                required
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Customer / Party</label>
              <select 
                value={selectedCustomer} 
                onChange={(e) => setSelectedCustomer(e.target.value)}
                className="w-full border border-gray-300 rounded px-3 py-1.5 font-semibold bg-white"
                required
              >
                <option value="">Select Party</option>
                <option value="1">Ali Traders</option>
                <option value="2">Khan Commission Shop</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Item (Phal / Sabzi)</label>
              <select 
                value={selectedItem} 
                onChange={(e) => setSelectedItem(e.target.value)}
                className="w-full border border-gray-300 rounded px-3 py-1.5 font-semibold bg-white"
                required
              >
                <option value="">Select Item</option>
                <option value="101">Aloo (Potato)</option>
                <option value="102">Piyaz (Onion)</option>
                <option value="103">Tamatar (Tomato)</option>
              </select>
            </div>
          </div>

          <div className="border border-gray-200 rounded-lg overflow-hidden">
            <table className="w-full text-left border-collapse">
              <thead className="bg-gray-800 text-white text-xs uppercase">
                <tr>
                  <th className="p-3">Nug (Count)</th>
                  <th className="p-3">Wt per Nug (Kg)</th>
                  <th className="p-3">Total Wt (Kg)</th>
                  <th className="p-3">Rate (Rs)</th>
                  <th className="p-3">Gross Amt (Rs)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                <tr>
                  <td className="p-3">
                    <input 
                      type="number" 
                      placeholder="0" 
                      value={nug} 
                      onChange={(e) => setNug(e.target.value)}
                      className="w-full border border-gray-300 rounded px-2 py-1 text-center font-bold focus:ring-2 focus:ring-emerald-500 outline-none"
                      required
                    />
                  </td>
                  <td className="p-3">
                    <input 
                      type="number" 
                      step="0.01" 
                      placeholder="0.00" 
                      value={wtPerNug} 
                      onChange={(e) => setWtPerNug(e.target.value)}
                      className="w-full border border-gray-300 rounded px-2 py-1 text-center font-bold focus:ring-2 focus:ring-emerald-500 outline-none"
                      required
                    />
                  </td>
                  <td className="p-3">
                    <input 
                      type="text" 
                      value={totalWeight} 
                      readOnly 
                      className="w-full bg-gray-100 border border-gray-300 rounded px-2 py-1 text-center font-bold text-gray-700"
                    />
                  </td>
                  <td className="p-3">
                    <input 
                      type="number" 
                      step="0.01" 
                      placeholder="0.00" 
                      value={rate} 
                      onChange={(e) => setRate(e.target.value)}
                      className="w-full border border-gray-300 rounded px-2 py-1 text-center font-bold focus:ring-2 focus:ring-emerald-500 outline-none"
                      required
                    />
                  </td>
                  <td className="p-3">
                    <input 
                      type="text" 
                      value={grossAmount} 
                      readOnly 
                      className="w-full bg-gray-100 border border-gray-300 rounded px-2 py-1 text-center font-bold text-gray-800"
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 space-y-3">
              <h4 className="font-bold text-gray-700 text-sm uppercase">Commission & Charges</h4>
              <div className="flex items-center justify-between">
                <label className="text-sm text-gray-600 font-medium">Commission (%):</label>
                <input 
                  type="number" 
                  step="0.1" 
                  value={commissionPercent} 
                  onChange={(e) => setCommissionPercent(e.target.value)}
                  className="w-28 border border-gray-300 rounded px-2 py-1 text-right font-bold"
                />
              </div>
              <div className="flex items-center justify-between">
                <label className="text-sm text-gray-600 font-medium">Commission Amount:</label>
                <span className="font-bold text-red-600">Rs. {commissionAmount}</span>
              </div>
            </div>

            <div className="bg-emerald-50 p-4 rounded-lg border border-emerald-300 flex flex-col justify-between">
              <span className="text-sm font-bold text-emerald-800 uppercase">Net Payable Amount</span>
              <div className="text-3xl font-extrabold text-emerald-700 text-right my-2">
                Rs. {netAmount}
              </div>
              <p className="text-xs text-gray-500 text-right">Includes all weight & commission deductions</p>
            </div>
          </div>
        </form>

      </div>
    </div>
  );
}