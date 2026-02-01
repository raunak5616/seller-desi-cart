import { useState } from "react";

export const Bills = () => {
  const [searchId, setSearchId] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const billsData = [
  {
    id: "ORD-10234",
    date: "2026-02-01",
    time: "14:32",
    customer: "Rahul Sharma",
    amount: 2499,
    status: "Paid",
  },
  {
    id: "ORD-10235",
    date: "2026-02-01",
    time: "16:10",
    customer: "Amit Verma",
    amount: 1299,
    status: "Paid",
  },
  {
    id: "ORD-10236",
    date: "2026-01-31",
    time: "11:05",
    customer: "Neha Singh",
    amount: 3999,
    status: "Pending",
  },
];


  const filteredBills = billsData.filter((bill) => {
    // Search by Order ID
    if (
      searchId &&
      !bill.id.toLowerCase().includes(searchId.toLowerCase())
    ) {
      return false;
    }

    // Status filter
    if (statusFilter !== "All" && bill.status !== statusFilter) {
      return false;
    }

    // Date range filter
    if (fromDate && bill.date < fromDate) return false;
    if (toDate && bill.date > toDate) return false;

    return true;
  });

  // Group by date
  const groupedBills = filteredBills.reduce((acc, bill) => {
    acc[bill.date] = acc[bill.date] || [];
    acc[bill.date].push(bill);
    return acc;
  }, {});

  const downloadInvoice = (orderId) => {
    alert(`Downloading invoice for ${orderId}`);
  };

  return (
    <div className="min-h-screen bg-white p-6">
      <h1 className="text-2xl font-semibold text-black mb-6">
        Bills & Invoices
      </h1>

      {/* FILTER BAR */}
      <div className="bg-white rounded-xl p-4 mb-6
                      shadow-[0_15px_40px_rgba(0,0,0,0.35)]
                      grid grid-cols-1 sm:grid-cols-4 gap-4">

        {/* SEARCH */}
        <input
          type="text"
          placeholder="Search Order ID"
          value={searchId}
          onChange={(e) => setSearchId(e.target.value)}
          className="border rounded-lg px-3 py-2 focus:ring-2
                     focus:ring-blue-500 outline-none"
        />

        {/* STATUS */}
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="border rounded-lg px-3 py-2 focus:ring-2
                     focus:ring-blue-500 outline-none"
        >
          <option value="All">All Status</option>
          <option value="Paid">Paid</option>
          <option value="Pending">Pending</option>
        </select>

        {/* FROM DATE */}
        <input
          type="date"
          value={fromDate}
          onChange={(e) => setFromDate(e.target.value)}
          className="border rounded-lg px-3 py-2 focus:ring-2
                     focus:ring-blue-500 outline-none"
        />

        {/* TO DATE */}
        <input
          type="date"
          value={toDate}
          onChange={(e) => setToDate(e.target.value)}
          className="border rounded-lg px-3 py-2 focus:ring-2
                     focus:ring-blue-500 outline-none"
        />
      </div>

      {/* RESULTS */}
      {Object.keys(groupedBills).length === 0 ? (
        <p className="text-slate-400 text-center">
          No bills found for selected filters.
        </p>
      ) : (
        Object.keys(groupedBills).map((date) => (
          <div key={date} className="mb-8">
            <h2 className="text-lg font-semibold text-black mb-3">
              {date}
            </h2>

            <div className="space-y-3">
              {groupedBills[date].map((bill) => (
                <div
                  key={bill.id}
                  className="bg-white rounded-xl p-4
                             shadow-[0_20px_50px_rgba(0,0,0,0.35)]
                             flex flex-col sm:flex-row gap-4 items-center"
                >
                  {/* INFO */}
                  <div className="flex-1">
                    <p className="text-sm text-gray-500">Order ID</p>
                    <p className="font-medium">{bill.id}</p>
                    <p className="text-sm text-gray-500">
                      {bill.time} • {bill.customer}
                    </p>
                  </div>

                  {/* AMOUNT */}
                  <div className="text-right">
                    <p className="text-sm text-gray-500">Amount</p>
                    <p className="text-lg font-semibold">
                      ₹{bill.amount}
                    </p>
                  </div>

                  {/* STATUS */}
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium
                      ${
                        bill.status === "Paid"
                          ? "bg-green-100 text-green-700"
                          : "bg-yellow-100 text-yellow-700"
                      }`}
                  >
                    {bill.status}
                  </span>

                  {/* ACTION */}
                  <button
                    onClick={() => downloadInvoice(bill.id)}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg
                               hover:bg-blue-700 transition"
                  >
                    Download
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))
      )}
    </div>
  );
};
