import { useState } from "react";

const initialProducts = [
  {
    id: 1,
    name: "Green T-Shirt",
    category: "Clothing",
    price: 499,
    stock: 20,
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
  },
  {
    id: 2,
    name: "Blue Sneakers",
    category: "Footwear",
    price: 2499,
    stock: 8,
    image:
      "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77",
  },
  {
    id: 3,
    name: "Smart Watch",
    category: "Electronics",
    price: 3999,
    stock: 12,
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
  },
  {
    id: 4,
    name: "Black Jeans",
    category: "Clothing",
    price: 1299,
    stock: 15,
    image:
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246",
  },
];






export const ManageProducts = () => {
  const [products, setProducts] = useState(initialProducts);

  const updatePrice = (id, newPrice) => {
    setProducts((prev) =>
      prev.map((p) =>
        p.id === id ? { ...p, price: newPrice } : p
      )
    );
  };

  const deleteProduct = (id) => {
    setProducts((prev) => prev.filter((p) => p.id !== id));
  };

  // Group products by category
  const groupedProducts = products.reduce((acc, product) => {
    acc[product.category] = acc[product.category] || [];
    acc[product.category].push(product);
    return acc;
  }, {});

  return (
    <div className="min-h-screen bg-slate-100 p-6">
      <h1 className="text-2xl font-semibold text-black mb-6">
        Manage Products
      </h1>

      {Object.keys(groupedProducts).map((category) => (
        <div key={category} className="mb-8">
          {/* CATEGORY HEADER */}
          <h2 className="text-xl font-semibold text-black mb-4">
            {category}
          </h2>

          <div className="space-y-4">
            {groupedProducts[category].map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.35)]
                           p-4 flex flex-col sm:flex-row items-center gap-4"
              >
                {/* IMAGE */}
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-20 w-20 object-cover rounded-lg border"
                />

                {/* INFO */}
                <div className="flex-1 w-full">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {product.name}
                  </h3>
                  <p className="text-sm text-gray-500">
                    Stock: {product.stock}
                  </p>
                </div>

                {/* PRICE EDIT */}
                <div className="flex items-center gap-2">
                  <span className="text-gray-700 font-medium">₹</span>
                  <input
                    type="number"
                    defaultValue={product.price}
                    onBlur={(e) =>
                      updatePrice(product.id, Number(e.target.value))
                    }
                    className="w-24 border border-gray-300 rounded-md px-2 py-1
                               focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                </div>

                {/* DELETE */}
                <button
                  onClick={() => deleteProduct(product.id)}
                  className="bg-red-500 text-white px-4 py-2 rounded-lg
                             hover:bg-red-600 transition"
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
