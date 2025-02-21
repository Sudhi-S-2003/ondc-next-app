// app/tracking/page.js
import axios from 'axios';
import TrackingView from '@/components/TrackingView';

export default async function TrackingPage({ searchParams }) {
  const { order_id } = searchParams;

  if (!order_id) {
    return <div>Error: No order ID provided.</div>;
  }

  try {
    // Fetch tracking data from the backend
    const response = await axios.get(
      `https://staging-ondc-sellernp.eatiko.com/api/data/tracking?order_id=${order_id}`
    );
    const trackingData = response.data.trackingData;

    return <TrackingView trackingData={trackingData} order_id={order_id} />;
  } catch (error) {
    console.error('Failed to fetch tracking data:', error);
    return <div>Error: Failed to fetch tracking data. Please try again later.</div>;
  }
}