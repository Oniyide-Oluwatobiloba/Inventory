// Dashboard Statistics
async function getDashboardStats() {
  try {
    const products = await trickleListObjects('product', 100, true);
    const totalProducts = products.items.length;
    const totalValue = products.items.reduce((sum, p) => sum + (p.objectData.price * p.objectData.quantity), 0);
    const lowStockItems = products.items.filter(p => p.objectData.quantity < p.objectData.minStock && p.objectData.quantity > 0).length;
    const outOfStock = products.items.filter(p => p.objectData.quantity === 0).length;
    
    return { totalProducts, totalValue, lowStockItems, outOfStock };
  } catch (error) {
    console.error('Error getting dashboard stats:', error);
    return { totalProducts: 0, totalValue: 0, lowStockItems: 0, outOfStock: 0 };
  }
}

// Product Management
async function getProducts() {
  try {
    const result = await trickleListObjects('product', 100, true);
    return result.items;
  } catch (error) {
    console.error('Error getting products:', error);
    return [];
  }
}

async function createProduct(productData) {
  try {
    return await trickleCreateObject('product', productData);
  } catch (error) {
    console.error('Error creating product:', error);
    throw error;
  }
}

async function updateProduct(productId, productData) {
  try {
    return await trickleUpdateObject('product', productId, productData);
  } catch (error) {
    console.error('Error updating product:', error);
    throw error;
  }
}

async function deleteProduct(productId) {
  try {
    return await trickleDeleteObject('product', productId);
  } catch (error) {
    console.error('Error deleting product:', error);
    throw error;
  }
}

// Low Stock Products
async function getLowStockProducts() {
  try {
    const products = await trickleListObjects('product', 100, true);
    return products.items
      .filter(p => p.objectData.quantity < p.objectData.minStock && p.objectData.quantity > 0)
      .map(p => ({
        name: p.objectData.name,
        sku: p.objectData.sku,
        quantity: p.objectData.quantity,
        minStock: p.objectData.minStock
      }))
      .slice(0, 5);
  } catch (error) {
    console.error('Error getting low stock products:', error);
    return [];
  }
}

// Recent Activities
async function getRecentActivities() {
  try {
    const activities = await trickleListObjects('activity', 20, true);
    return activities.items.map(a => a.objectData);
  } catch (error) {
    console.error('Error getting activities:', error);
    return [];
  }
}

async function logActivity(type, description) {
  try {
    const now = new Date().toISOString();
    await trickleCreateObject('activity', {
      type,
      description,
      time: new Date().toLocaleString('en-US', { 
        month: 'short', 
        day: 'numeric', 
        hour: 'numeric', 
        minute: '2-digit' 
      }),
      timestamp: now
    });
  } catch (error) {
    console.error('Error logging activity:', error);
  }
}