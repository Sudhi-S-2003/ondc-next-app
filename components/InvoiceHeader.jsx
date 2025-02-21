// components/InvoiceHeader.js
export default function InvoiceHeader({ orderId }) {
    return (
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Invoice</h1>
          <p className="text-gray-600">Order ID: {orderId}</p>
        </div>
        <div className="text-right">
          <h2 className="text-2xl font-semibold text-gray-800">Eatiko Pvt Ltd</h2>
          <p className="text-gray-600">Jayanagara 9th Block, Bengaluru</p>
          <p className="text-gray-600">GSTIN: 29ABCDE1234F1Z5</p>
        </div>
      </div>
    );
  }