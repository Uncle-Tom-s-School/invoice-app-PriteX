import React, { useEffect, useState } from "react";

type Invoice = {
  id: string;
  dueDate: string;
  recipient: string;
  amount: number;
  status: "Paid" | "Pending" | "Draft";
};

const Invoice: React.FC = () => {
  const [invoices, setInvoices] = useState<Invoice[]>([]);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setInvoices(data));
  }, []);

  return (
    <main>
      <h2>Invoices</h2>
      <p>There are {invoices.length} total invoices.</p>

      <div className="invoice-list">
     {invoices.map((inv) => (
  <div key={inv.id} className="invoice-card">
    <div className="invoice-id">#{inv.id}</div>
    <div className="invoice-due">Due {inv.dueDate}</div>
    <div className="invoice-recipient">{inv.recipient}</div>
    <div className="invoice-amount">£{Number(inv.amount).toFixed(2)}</div>
    <span className={`status ${inv.status.toLowerCase()}`}>
      {inv.status}
    </span>
  </div>
))}
      </div>
    </main>
  );
};

export default Invoice;