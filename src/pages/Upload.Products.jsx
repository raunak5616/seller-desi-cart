import { useState } from "react";

export const UploadProduct = () => {
  const [images, setImages] = useState([]);

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    const previews = files.map((file) => URL.createObjectURL(file));
    setImages(previews);
  };

  return (
    <div className="min-h-screen  flex items-center justify-center p-6">
     <div className="bg-white w-full max-w-3xl rounded-2xl p-6
                shadow-[0_20px_50px_rgba(0,0,0,0.35)]">

        
        {/* HEADER */}
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          Upload New Product
        </h2>

        {/* FORM */}
        <form className="space-y-5">

          {/* PRODUCT NAME */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Product Name
            </label>
            <input
              type="text"
              placeholder="Enter product name"
              className="w-full rounded-lg border border-gray-300 px-4 py-2
                         focus:ring-2 focus:ring-green-500 focus:outline-none"
            />
          </div>

          {/* CATEGORY + PRICE */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Category
              </label>
              <select
                className="w-full rounded-lg border border-gray-300 px-4 py-2
                           focus:ring-2 focus:ring-green-500 focus:outline-none"
              >
                <option>Select category</option>
                <option>Clothing</option>
                <option>Electronics</option>
                <option>Grocery</option>
                <option>Accessories</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Price (₹)
              </label>
              <input
                type="number"
                placeholder="0"
                className="w-full rounded-lg border border-gray-300 px-4 py-2
                           focus:ring-2 focus:ring-green-500 focus:outline-none"
              />
            </div>
          </div>

          {/* DISCOUNT + STOCK */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Discount (%)
              </label>
              <input
                type="number"
                placeholder="0"
                className="w-full rounded-lg border border-gray-300 px-4 py-2
                           focus:ring-2 focus:ring-green-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Stock Quantity
              </label>
              <input
                type="number"
                placeholder="0"
                className="w-full rounded-lg border border-gray-300 px-4 py-2
                           focus:ring-2 focus:ring-green-500 focus:outline-none"
              />
            </div>
          </div>

          {/* DESCRIPTION */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Product Description
            </label>
            <textarea
              rows="4"
              placeholder="Write product details..."
              className="w-full rounded-lg border border-gray-300 px-4 py-2
                         focus:ring-2 focus:ring-green-500 focus:outline-none"
            />
          </div>

          {/* IMAGE UPLOAD */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Product Images
            </label>

            <input
              type="file"
              multiple
              accept="image/*"
              onChange={handleImageChange}
              className="block w-full text-sm text-gray-600
                         file:mr-4 file:py-2 file:px-4
                         file:rounded-lg file:border-0
                         file:bg-green-500 file:text-white
                         hover:file:bg-green-600 cursor-pointer"
            />

            {/* IMAGE PREVIEW */}
            {images.length > 0 && (
              <div className="mt-4 grid grid-cols-3 gap-3">
                {images.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt="preview"
                    className="h-24 w-full object-cover rounded-lg border"
                  />
                ))}
              </div>
            )}
          </div>

          {/* SUBMIT BUTTON */}
          <div className="pt-4">
            <button
              type="submit"
              className="w-full bg-green-600 text-white py-3 rounded-lg
                         hover:bg-green-700 transition font-medium"
            >
              Upload Product
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};
