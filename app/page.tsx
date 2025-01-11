const Page = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center">
      <div className="bg-white p-10 rounded-xl shadow-2xl max-w-lg w-full space-y-6">
        <h1 className="text-4xl font-extrabold text-center text-gray-800">
          Welcome to ONDC Frontend
          <span className="block text-lg font-medium text-gray-500 mt-2">
            (Open Network for Digital Commerce)
          </span>
        </h1>
        <h3 className="text-2xl text-center text-gray-600 font-semibold mb-6">
          Explore Buyer & Seller Experience
        </h3>
        <div className="flex justify-center space-x-6">
          <button className="bg-blue-600 text-white py-3 px-6 rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300 ease-in-out">
            Explore Buyer Side
          </button>
          <button className="bg-green-600 text-white py-3 px-6 rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300 ease-in-out">
            Explore Seller Side
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page;
