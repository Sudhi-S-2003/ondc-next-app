// components/TrackingView.js
'use client';

import { FaMapMarkerAlt, FaTruck, FaCheckCircle } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix for default marker icons in Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
});

export default function TrackingView({ trackingData, order_id }) {
  if (!trackingData) {
    return <div className="text-center text-gray-600">No tracking data available.</div>;
  }

  const { fulfillments, trackings, state } = trackingData;
  const fulfillment = fulfillments[fulfillments.length - 1]; // latest
  const trackingPath = trackings.find((t) => t.fulfillment_id === fulfillment.id);

  // Extract coordinates for the map
  const coordinates =
    trackingPath &&
    Object.values(trackingPath)
      .filter((step) => step.code === 'path')
      .map((step) => {
        const [lat, lng] = step.list
          .find((item) => item.code === 'lat_lng')
          .value.split(',')
          .map(Number);
        return [lat, lng];
      });

  // Animation variants for tracking steps
  const stepVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="container mx-auto p-4 max-w-4xl">
      <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">Order Tracking</h1>

      {/* Order Details */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white p-6 rounded-lg shadow-lg mb-8 border border-gray-100"
      >
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Order Details</h2>
        <div className="space-y-3">
          <p className="text-gray-600">
            <span className="font-medium text-gray-700">Order ID:</span> {order_id}
          </p>
          <p className="text-gray-600">
            <span className="font-medium text-gray-700">Fulfillment ID:</span> {fulfillment.id}
          </p>
          <p className="text-gray-600">
            <span className="font-medium text-gray-700">Order State:</span>{' '}
            <span className="text-blue-600">{state}</span>
          </p>
          <p className="text-gray-600">
            <span className="font-medium text-gray-700">Fulfillment Status:</span>{' '}
            <span
              className={`font-semibold ${
                fulfillment.state.descriptor.code === 'Pending'
                  ? 'text-orange-500'
                  : fulfillment.state.descriptor.code === 'Delivered'
                  ? 'text-green-600'
                  : 'text-blue-600'
              }`}
            >
              {fulfillment.state.descriptor.code}
            </span>
          </p>
          <p className="text-gray-600">
            <span className="font-medium text-gray-700">Estimated Delivery Time:</span>{' '}
            <span className="text-green-600">{fulfillment['@ondc/org/TAT']}</span>
          </p>
        </div>
      </motion.div>

      {/* Tracking Path */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="bg-white p-6 rounded-lg shadow-lg border border-gray-100"
      >
        <h2 className="text-2xl font-semibold text-gray-700 mb-6">Tracking Path</h2>
        <div className="space-y-6">
          {trackingPath &&
            Object.values(trackingPath)
              .filter((step) => step.code === 'path')
              .map((step, index) => (
                <motion.div
                  key={index}
                  variants={stepVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: index * 0.2 }}
                  className="flex items-start space-x-4"
                >
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    {index === 0 ? (
                      <FaMapMarkerAlt className="text-green-500 text-3xl" />
                    ) : index === Object.values(trackingPath).length - 1 ? (
                      <FaCheckCircle className="text-blue-500 text-3xl" />
                    ) : (
                      <FaTruck className="text-orange-500 text-3xl" />
                    )}
                  </div>

                  {/* Step Details */}
                  <div className="flex-1">
                    <p className="font-semibold text-gray-700">
                      Step {step.list.find((item) => item.code === 'sequence').value}
                    </p>
                    <p className="text-gray-600">
                      Location: {step.list.find((item) => item.code === 'lat_lng').value}
                    </p>
                  </div>
                </motion.div>
              ))}
        </div>
      </motion.div>

      {/* Map */}
      {coordinates && coordinates.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-white p-6 rounded-lg shadow-lg border border-gray-100 mt-8"
        >
          <h2 className="text-2xl font-semibold text-gray-700 mb-6">Delivery Route</h2>
          <div className="h-96 w-full rounded-lg overflow-hidden">
            <MapContainer
              center={coordinates[0]} // Center the map on the first coordinate
              zoom={13}
              scrollWheelZoom={false}
              className="h-full w-full"
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              {coordinates.map((coord, index) => (
                <Marker key={index} position={coord}>
                  <Popup>
                    Step {index + 1}: {coord[0]}, {coord[1]}
                  </Popup>
                </Marker>
              ))}
              <Polyline positions={coordinates} color="blue" />
            </MapContainer>
          </div>
        </motion.div>
      )}
    </div>
  );
}