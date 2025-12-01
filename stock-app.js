class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary:', error, errorInfo.componentStack);
  }
  render() {
    if (this.state.hasError) {
      return <div className="min-h-screen flex items-center justify-center"><button onClick={() => window.location.reload()} className="btn btn-primary">Reload</button></div>;
    }
    return this.props.children;
  }
}

function StockApp() {
  try {
    return (
      <div className="flex h-screen overflow-hidden">
        <Sidebar currentPage="stock" />
        <div className="flex-1 flex flex-col overflow-hidden">
          <Header title="Stock Movement" />
          <main className="flex-1 overflow-y-auto p-6">
            <StockMovementTable />
          </main>
        </div>
      </div>
    );
  } catch (error) {
    console.error('StockApp error:', error);
    return null;
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ErrorBoundary><StockApp /></ErrorBoundary>);