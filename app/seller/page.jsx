
const SellerPage = () => {
    return (
      <div className="min-h-screen bg-gradient-to-r from-pink-50 via-orange-50 to-yellow-50 flex items-center justify-center">
        <div className="bg-white p-12 rounded-xl shadow-2xl max-w-lg w-full space-y-8">
          <h1 className="text-4xl font-extrabold text-center text-gray-800">
            Welcome to the Seller Experience
            <span className="block text-lg font-medium text-gray-500 mt-2">
              Grow your business on the ONDC network
            </span>
          </h1>
          <div className="flex flex-col space-y-4">
            <p className="text-lg text-center text-gray-600">
              As a seller, you can list your products and connect with a wide audience of buyers. Manage your listings, track orders, and boost your sales with ease.
            </p>
            <button className="bg-indigo-600 text-white py-3 px-6 rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300 ease-in-out">
              Add New Product
            </button>
            <button className="bg-orange-600 text-white py-3 px-6 rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300 ease-in-out">
              Manage Your Store
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  export default SellerPage;
  