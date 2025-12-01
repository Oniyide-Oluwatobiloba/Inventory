function ProductTable({ products, loading, onEdit, onDelete }) {
  try {
    if (loading) {
      return (
        <div className="card">
          <div className="text-center py-12">
            <div className="icon-loader text-4xl text-[var(--primary-color)] animate-spin mb-4 inline-block"></div>
            <p className="text-[var(--text-secondary)]">Loading products...</p>
          </div>
        </div>
      );
    }

    return (
      <div className="card" data-name="product-table" data-file="components/ProductTable.js">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-[var(--border-color)]">
                <th className="text-left py-3 px-4 text-sm font-semibold text-[var(--text-primary)]">SKU</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-[var(--text-primary)]">Product Name</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-[var(--text-primary)]">Category</th>
                <th className="text-right py-3 px-4 text-sm font-semibold text-[var(--text-primary)]">Quantity</th>
                <th className="text-right py-3 px-4 text-sm font-semibold text-[var(--text-primary)]">Price</th>
                <th className="text-center py-3 px-4 text-sm font-semibold text-[var(--text-primary)]">Status</th>
                <th className="text-center py-3 px-4 text-sm font-semibold text-[var(--text-primary)]">Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.length === 0 ? (
                <tr>
                  <td colSpan="7" className="text-center py-12 text-[var(--text-secondary)]">
                    No products found. Click "Add Product" to get started.
                  </td>
                </tr>
              ) : (
                products.map((product) => (
                  <tr key={product.objectId} className="border-b border-[var(--border-color)] hover:bg-gray-50">
                    <td className="py-3 px-4 text-sm text-[var(--text-secondary)]">{product.objectData.sku}</td>
                    <td className="py-3 px-4 text-sm font-medium text-[var(--text-primary)]">{product.objectData.name}</td>
                    <td className="py-3 px-4 text-sm text-[var(--text-secondary)]">{product.objectData.category}</td>
                    <td className="py-3 px-4 text-sm text-right text-[var(--text-primary)]">{product.objectData.quantity}</td>
                    <td className="py-3 px-4 text-sm text-right text-[var(--text-primary)]">${product.objectData.price}</td>
                    <td className="py-3 px-4 text-center">
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        product.objectData.quantity === 0 ? 'bg-red-100 text-red-600' :
                        product.objectData.quantity < product.objectData.minStock ? 'bg-orange-100 text-orange-600' :
                        'bg-green-100 text-green-600'
                      }`}>
                        {product.objectData.quantity === 0 ? 'Out of Stock' :
                         product.objectData.quantity < product.objectData.minStock ? 'Low Stock' : 'In Stock'}
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex items-center justify-center gap-2">
                        <button onClick={() => onEdit(product)} className="p-1 hover:bg-blue-50 rounded transition-colors">
                          <div className="icon-pencil text-lg text-blue-600"></div>
                        </button>
                        <button onClick={() => onDelete(product.objectId)} className="p-1 hover:bg-red-50 rounded transition-colors">
                          <div className="icon-trash-2 text-lg text-red-600"></div>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    );
  } catch (error) {
    console.error('ProductTable component error:', error);
    return null;
  }
}