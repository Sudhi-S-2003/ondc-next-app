// components/InvoiceItems.js
export default function InvoiceItems({ quote }) {
    return (
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Items</h2>
        <div className="overflow-x-auto rounded-lg shadow-sm border border-gray-100">
          <table className="min-w-full bg-white">
            <thead className="bg-gray-50">
              <tr>
                <th className="py-3 px-6 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">
                  Item
                </th>
                <th className="py-3 px-6 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">
                  Quantity
                </th>
                <th className="py-3 px-6 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">
                  Unit Value
                </th>
                <th className="py-3 px-6 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">
                  Total Value
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {quote.breakup.map((item, index) => {
                const quantity = item['@ondc/org/item_quantity']?.count || "-"; // Default to "-" if quantity is missing
                const totalValue = parseFloat(item.price.value) || 0; // Ensure totalValue is a number
                const unitValue = quantity === "-" ? totalValue : totalValue / quantity; // Calculate unit value
  
                return (
                  <tr key={index} className="hover:bg-gray-50 transition-colors">
                    <td className="py-4 px-6 text-sm text-gray-700">{item.title}</td>
                    <td className="py-4 px-6 text-sm text-gray-700">{quantity}</td>
                    <td className="py-4 px-6 text-sm text-gray-700">
                      {unitValue.toFixed(2)} {item.price.currency}
                    </td>
                    <td className="py-4 px-6 text-sm text-gray-700">
                      {totalValue.toFixed(2)} {item.price.currency}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="mt-6 text-right">
          <p className="text-lg font-semibold text-gray-800">
            Total: {parseFloat(quote.price.value).toFixed(2)} {quote.price.currency}
          </p>
        </div>
      </div>
    );
  }