// components/InvoiceDetails.js
export default function InvoiceDetails({ payment, fulfillments }) {
    const fulfillment = fulfillments[0];
  
    return (
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Order & Payment Details</h2>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-gray-600">
              <span className="font-medium text-gray-700">Transaction ID:</span> {payment.params.transaction_id}
            </p>
            <p className="text-gray-600">
              <span className="font-medium text-gray-700">Amount:</span> {payment.params.amount} {payment.params.currency}
            </p>
            <p className="text-gray-600">
              <span className="font-medium text-gray-700">Status:</span> {payment.status}
            </p>
          </div>
          <div>
            <p className="text-gray-600">
              <span className="font-medium text-gray-700">Delivery Address:</span> {fulfillment.end.location.address.building}, {fulfillment.end.location.address.city}
            </p>
            <p className="text-gray-600">
              <span className="font-medium text-gray-700">Contact:</span> {fulfillment.end.contact.phone}
            </p>
          </div>
        </div>
      </div>
    );
  }