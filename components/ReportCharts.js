const ChartJS = window.Chart;

function ReportCharts() {
  try {
    const inventoryChartRef = React.useRef(null);
    const salesChartRef = React.useRef(null);

    React.useEffect(() => {
      const invCtx = inventoryChartRef.current?.getContext('2d');
      const salesCtx = salesChartRef.current?.getContext('2d');

      if (invCtx) {
        new ChartJS(invCtx, {
          type: 'bar',
          data: {
            labels: ['Electronics', 'Office', 'Furniture', 'Hardware'],
            datasets: [{
              label: 'Stock Value (₦)',
              data: [12500, 8900, 5600, 9200],
              backgroundColor: '#2563eb',
            }]
          },
          options: { plugins: { legend: { display: false } } }
        });
      }

      if (salesCtx) {
        new ChartJS(salesCtx, {
          type: 'line',
          data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            datasets: [{
              label: 'Monthly Sales',
              data: [3200, 4100, 3800, 5200, 4800, 6100],
              borderColor: '#10b981',
              backgroundColor: 'rgba(16, 185, 129, 0.1)',
              tension: 0.4
            }]
          },
          options: { plugins: { legend: { display: false } } }
        });
      }
    }, []);

    return (
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="card">
          <h3 className="text-lg font-bold mb-4">Stock Value by Category</h3>
          <canvas ref={inventoryChartRef}></canvas>
        </div>
        <div className="card">
          <h3 className="text-lg font-bold mb-4">Monthly Sales Trend</h3>
          <canvas ref={salesChartRef}></canvas>
        </div>
      </div>
    );
  } catch (error) {
    console.error('ReportCharts error:', error);
    return null;
  }
}