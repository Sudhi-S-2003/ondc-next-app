

export default function InvoiceFooter({  settlementDetails }) {


  return (
    <div className="mt-8">
      <h2 className="text-xl font-semibold text-gray-700 mb-4">Settlement Details</h2>
      <div className="grid grid-cols-2 gap-4 mb-8">
        <div>
          <p className="text-gray-600">
            <span className="font-medium text-gray-700">Beneficiary Name:</span> {settlementDetails.beneficiary_name}
          </p>
          <p className="text-gray-600">
            <span className="font-medium text-gray-700">Bank Account:</span> {settlementDetails.settlement_bank_account_no}
          </p>
        </div>
        <div>
          <p className="text-gray-600">
            <span className="font-medium text-gray-700">IFSC Code:</span> {settlementDetails.settlement_ifsc_code}
          </p>
          <p className="text-gray-600">
            <span className="font-medium text-gray-700">Bank Name:</span> {settlementDetails.bank_name}
          </p>
        </div>
      </div>
     
    </div>
  );
}
