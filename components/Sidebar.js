function Sidebar({ currentPage }) {
  try {
    const menuItems = [
      { id: 'dashboard', label: 'Dashboard', icon: 'layout-dashboard', href: 'index.html' },
      { id: 'products', label: 'Products', icon: 'package', href: 'products.html' },
      { id: 'stock', label: 'Stock Movement', icon: 'trending-up', href: 'stock.html' },
      { id: 'categories', label: 'Categories', icon: 'folder', href: 'categories.html' },
      { id: 'reports', label: 'Reports', icon: 'chart-bar', href: 'reports.html' },
    ];

    return (
      <aside className="w-64 bg-[var(--bg-primary)] border-r border-[var(--border-color)] flex flex-col" data-name="sidebar" data-file="components/Sidebar.js">
        <div className="p-6 border-b border-[var(--border-color)]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-[var(--primary-color)] flex items-center justify-center">
              <div className="icon-package text-xl text-white"></div>
            </div>
            <div>
              <h1 className="text-xl font-bold text-[var(--text-primary)]">Inventory</h1>
              <p className="text-xs text-[var(--text-secondary)]">Management System</p>
            </div>
          </div>
        </div>
        <nav className="flex-1 p-4">
          <ul className="space-y-2">
            {menuItems.map(item => (
              <li key={item.id}>
                <a
                  href={item.href}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                    currentPage === item.id
                      ? 'bg-[var(--secondary-color)] text-[var(--primary-color)]'
                      : 'text-[var(--text-secondary)] hover:bg-gray-50'
                  }`}
                >
                  <div className={`icon-${item.icon} text-xl`}></div>
                  <span className="font-medium">{item.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="p-4 border-t border-[var(--border-color)]">
          <p className="text-xs text-[var(--text-secondary)] text-center">© 2025 Inventory System</p>
        </div>
      </aside>
    );
  } catch (error) {
    console.error('Sidebar component error:', error);
    return null;
  }
}