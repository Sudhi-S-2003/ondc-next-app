const BuyerPage = () => {
    return (
      <div className="min-h-screen bg-gradient-to-r from-yellow-50 via-teal-50 to-blue-50 flex items-center justify-center">
        <div className="bg-white p-12 rounded-xl shadow-2xl max-w-lg w-full space-y-8">
          <h1 className="text-4xl font-extrabold text-center text-gray-800">
            Welcome to the Buyer Experience
            <span className="block text-lg font-medium text-gray-500 mt-2">
              Explore a variety of products and services
            </span>
          </h1>
          <div className="flex flex-col space-y-4">
            <p className="text-lg text-center text-gray-600">
              As a buyer, you have access to a wide range of products and services from verified sellers. Browse through categories and find the best deals for your needs.
            </p>
            <button className="bg-blue-600 text-white py-3 px-6 rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300 ease-in-out">
              Start Browsing Products
            </button>
            <button className="bg-green-600 text-white py-3 px-6 rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300 ease-in-out">
              View Your Cart
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  export default BuyerPage;
  