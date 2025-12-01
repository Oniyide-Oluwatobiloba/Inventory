function LowStockAlert() {
  try {
    const [lowStockProducts, setLowStockProducts] = React.useState([]);

    React.useEffect(() => {
      loadLowStockProducts();
    }, []);

    const loadLowStockProducts = async () => {
      try {
        const data = await getLowStockProducts();
        setLowStockProducts(data);
      } catch (error) {
        console.error('Error loading low stock products:', error);
      }
    };

    return (
      <div className="card" data-name="low-stock-alert" data-file="components/LowStockAlert.js">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-bold text-[var(--text-primary)]">Low Stock Alerts</h3>
          <div className="icon-alert-triangle text-xl text-orange-500"></div>
        </div>
        <div className="space-y-3">
          {lowStockProducts.length === 0 ? (
            <p className="text-[var(--text-secondary)] text-center py-8">All stock levels are healthy</p>
          ) : (
            lowStockProducts.map((product, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-orange-50 rounded-lg border border-orange-200">
                <div className="flex-1">
                  <p className="text-sm font-medium text-[var(--text-primary)]">{product.name}</p>
                  <p className="text-xs text-[var(--text-secondary)] mt-1">SKU: {product.sku}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-bold text-orange-600">{product.quantity} left</p>
                  <p className="text-xs text-[var(--text-secondary)]">Min: {product.minStock}</p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    );
  } catch (error) {
    console.error('LowStockAlert component error:', error);
    return null;
  }
}