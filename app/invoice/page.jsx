import axios from "axios";
import InvoiceContent from "@/components/InvoiceContent";

export default async function InvoicePage({ searchParams }) {
  const { order_id } = searchParams;

  if (!order_id) {
    return <div>Error: No order ID provided.</div>;
  }

  try {
    const response = await axios.get(
      `https://staging-ondc-sellernp.eatiko.com/api/data/invoice?order_id=${order_id}`
    );
    const { payment, quote, fulfillments } = response.data.invoiceData;
    const settlementDetails = payment["@ondc/org/settlement_details"][0];

    return <InvoiceContent orderId={order_id} payment={payment} quote={quote} fulfillments={fulfillments} settlementDetails={settlementDetails} />;
  } catch (error) {
    console.error("Failed to fetch invoice data:", error);
    return <div>Error: Failed to fetch invoice data. Please try again later.</div>;
  }
}
