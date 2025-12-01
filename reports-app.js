class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(error, info) {
    console.error('Error:', error, info.componentStack);
  }
  render() {
    if (this.state.hasError) {
      return <div className="min-h-screen flex items-center justify-center"><button onClick={() => window.location.reload()} className="btn btn-primary">Reload</button></div>;
    }
    return this.props.children;
  }
}

function ReportsApp() {
  try {
    return (
      <div className="flex h-screen overflow-hidden">
        <Sidebar currentPage="reports" />
        <div className="flex-1 flex flex-col overflow-hidden">
          <Header title="Reports & Analytics" />
          <main className="flex-1 overflow-y-auto p-6">
            <ReportCharts />
          </main>
        </div>
      </div>
    );
  } catch (error) {
    console.error('ReportsApp error:', error);
    return null;
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ErrorBoundary><ReportsApp /></ErrorBoundary>);