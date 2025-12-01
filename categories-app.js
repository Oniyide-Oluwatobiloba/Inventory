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

function CategoriesApp() {
  try {
    const categories = [
      { name: 'Electronics', count: 45, icon: 'cpu' },
      { name: 'Office Supplies', count: 128, icon: 'briefcase' },
      { name: 'Furniture', count: 23, icon: 'armchair' },
      { name: 'Hardware', count: 67, icon: 'wrench' },
    ];

    return (
      <div className="flex h-screen overflow-hidden">
        <Sidebar currentPage="categories" />
        <div className="flex-1 flex flex-col overflow-hidden">
          <Header title="Categories" />
          <main className="flex-1 overflow-y-auto p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {categories.map((cat, idx) => (
                <div key={idx} className="card hover:shadow-md transition-shadow cursor-pointer">
                  <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mb-4">
                    <div className={`icon-${cat.icon} text-xl text-blue-600`}></div>
                  </div>
                  <h3 className="text-lg font-bold mb-1">{cat.name}</h3>
                  <p className="text-gray-600">{cat.count} products</p>
                </div>
              ))}
            </div>
          </main>
        </div>
      </div>
    );
  } catch (error) {
    console.error('CategoriesApp error:', error);
    return null;
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ErrorBoundary><CategoriesApp /></ErrorBoundary>);