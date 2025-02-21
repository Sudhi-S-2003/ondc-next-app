"use client"
import { useRef, useEffect } from "react";
import { usePDF } from "react-to-pdf";
import InvoiceHeader from "@/components/InvoiceHeader";
import InvoiceDetails from "@/components/InvoiceDetails";
import InvoiceItems from "@/components/InvoiceItems";
import InvoiceFooter from "@/components/InvoiceFooter";

export default function InvoiceContent({ orderId, payment, quote, fulfillments, settlementDetails }) {
  const invoiceRef = useRef(null);
  const { toPDF, targetRef } = usePDF({ filename: `invoice-${orderId}.pdf` });

  // Ensure targetRef is assigned once invoiceRef is available
  useEffect(() => {
    if (invoiceRef.current) {
      targetRef.current = invoiceRef.current;
    }
  }, [invoiceRef]);

  return (
    <div className="container mx-auto p-8 bg-gray-50">
      {/* Download Button */}
      <button
        onClick={toPDF}
        className="mb-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
      >
        Download Invoice
      </button>

      {/* Invoice Content (PDF Target) */}
      <div ref={invoiceRef} className="bg-white p-6 shadow-md rounded-lg">
        <InvoiceHeader orderId={orderId} />
        <InvoiceDetails payment={payment} fulfillments={fulfillments} />
        <InvoiceItems quote={quote} />
        <InvoiceFooter settlementDetails={settlementDetails} />
      </div>
    </div>
  );
}
