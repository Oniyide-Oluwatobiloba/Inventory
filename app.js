class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Something went wrong</h1>
            <p className="text-gray-600 mb-4">We're sorry, but something unexpected happened.</p>
            <button onClick={() => window.location.reload()} className="btn btn-primary">
              Reload Page
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

function App() {
  try {
    const [stats, setStats] = React.useState(null);
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
      loadDashboardData();
    }, []);

    const loadDashboardData = async () => {
      try {
        const dashboardStats = await getDashboardStats();
        setStats(dashboardStats);
        setLoading(false);
      } catch (error) {
        console.error('Error loading dashboard:', error);
        setLoading(false);
      }
    };

    if (loading) {
      return (
        <div className="flex h-screen">
          <Sidebar currentPage="dashboard" />
          <div className="flex-1 flex items-center justify-center">
            <div className="text-center">
              <div className="icon-loader text-4xl text-[var(--primary-color)] animate-spin mb-4"></div>
              <p className="text-[var(--text-secondary)]">Loading dashboard...</p>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="flex h-screen overflow-hidden" data-name="app" data-file="app.js">
        <Sidebar currentPage="dashboard" />
        <div className="flex-1 flex flex-col overflow-hidden">
          <Header title="Dashboard" />
          <main className="flex-1 overflow-y-auto p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <StatCard
                title="Total Products"
                value={stats?.totalProducts || 0}
                icon="package"
                color="blue"
                trend="+12%"
              />
              <StatCard
                title="Total Stock Value"
                value={`$${(stats?.totalValue || 0).toLocaleString()}`}
                icon="dollar-sign"
                color="green"
                trend="+8%"
              />
              <StatCard
                title="Low Stock Items"
                value={stats?.lowStockItems || 0}
                icon="alert-triangle"
                color="orange"
                trend="-3"
              />
              <StatCard
                title="Out of Stock"
                value={stats?.outOfStock || 0}
                icon="x-circle"
                color="red"
                trend="0"
              />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <RecentActivity />
              <LowStockAlert />
            </div>
          </main>
        </div>
      </div>
    );
  } catch (error) {
    console.error('App component error:', error);
    return null;
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>
);