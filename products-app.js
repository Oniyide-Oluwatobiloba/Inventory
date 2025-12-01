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
      return <div className="min-h-screen flex items-center justify-center"><button onClick={() => window.location.reload()} className="btn btn-primary">Reload</button></div>;
    }
    return this.props.children;
  }
}

function ProductsApp() {
  try {
    const [products, setProducts] = React.useState([]);
    const [loading, setLoading] = React.useState(true);
    const [showModal, setShowModal] = React.useState(false);
    const [editProduct, setEditProduct] = React.useState(null);

    React.useEffect(() => {
      loadProducts();
    }, []);

    const loadProducts = async () => {
      try {
        const data = await getProducts();
        setProducts(data);
        setLoading(false);
      } catch (error) {
        console.error('Error loading products:', error);
        setLoading(false);
      }
    };

    const handleAddProduct = () => {
      setEditProduct(null);
      setShowModal(true);
    };

    const handleEditProduct = (product) => {
      setEditProduct(product);
      setShowModal(true);
    };

    const handleDeleteProduct = async (productId) => {
      if (confirm('Are you sure you want to delete this product?')) {
        await deleteProduct(productId);
        loadProducts();
      }
    };

    const handleSaveProduct = async (productData) => {
      if (editProduct) {
        await updateProduct(editProduct.objectId, productData);
      } else {
        await createProduct(productData);
      }
      setShowModal(false);
      loadProducts();
    };

    return (
      <div className="flex h-screen overflow-hidden" data-name="products-app" data-file="products-app.js">
        <Sidebar currentPage="products" />
        <div className="flex-1 flex flex-col overflow-hidden">
          <Header title="Products" />
          <main className="flex-1 overflow-y-auto p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-[var(--text-primary)]">Product Inventory</h2>
              <button onClick={handleAddProduct} className="btn btn-primary flex items-center gap-2">
                <div className="icon-plus text-lg"></div>
                Add Product
              </button>
            </div>
            <ProductTable
              products={products}
              loading={loading}
              onEdit={handleEditProduct}
              onDelete={handleDeleteProduct}
            />
          </main>
        </div>
        {showModal && (
          <ProductModal
            product={editProduct}
            onClose={() => setShowModal(false)}
            onSave={handleSaveProduct}
          />
        )}
      </div>
    );
  } catch (error) {
    console.error('ProductsApp component error:', error);
    return null;
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ErrorBoundary><ProductsApp /></ErrorBoundary>);