function StockMovementTable() {
  try {
    const [movements] = React.useState([
      { date: '2025-11-12', product: 'Laptop Computer', type: 'In', quantity: 15, reference: 'PO-2025-001' },
      { date: '2025-11-11', product: 'Wireless Mouse', type: 'Out', quantity: 25, reference: 'SO-2025-045' },
      { date: '2025-11-10', product: 'USB Cable', type: 'In', quantity: 100, reference: 'PO-2025-002' },
      { date: '2025-11-09', product: 'Monitor 24"', type: 'Out', quantity: 8, reference: 'SO-2025-044' },
    ]);

    return (
      <div className="card" data-name="stock-movement-table" data-file="components/StockMovementTable.js">
        <h2 className="text-xl font-bold mb-4">Recent Stock Movements</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 text-sm font-semibold">Date</th>
                <th className="text-left py-3 px-4 text-sm font-semibold">Product</th>
                <th className="text-left py-3 px-4 text-sm font-semibold">Type</th>
                <th className="text-right py-3 px-4 text-sm font-semibold">Quantity</th>
                <th className="text-left py-3 px-4 text-sm font-semibold">Reference</th>
              </tr>
            </thead>
            <tbody>
              {movements.map((movement, index) => (
                <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-3 px-4 text-sm">{movement.date}</td>
                  <td className="py-3 px-4 text-sm font-medium">{movement.product}</td>
                  <td className="py-3 px-4">
                    <span className={`px-2 py-1 text-xs rounded-full ${movement.type === 'In' ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}`}>
                      {movement.type}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-sm text-right">{movement.quantity}</td>
                  <td className="py-3 px-4 text-sm text-gray-600">{movement.reference}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  } catch (error) {
    console.error('StockMovementTable error:', error);
    return null;
  }
}