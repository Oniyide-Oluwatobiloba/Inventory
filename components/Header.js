function Header({ title }) {
  try {
    return (
      <header className="bg-[var(--bg-primary)] border-b border-[var(--border-color)] px-6 py-4" data-name="header" data-file="components/Header.js">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-[var(--text-primary)]">{title}</h1>
          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <div className="icon-bell text-xl text-[var(--text-secondary)]"></div>
            </button>
            <div className="flex items-center gap-3 pl-4 border-l border-[var(--border-color)]">
              <div className="w-10 h-10 rounded-full bg-[var(--secondary-color)] flex items-center justify-center">
                <div className="icon-user text-xl text-[var(--primary-color)]"></div>
              </div>
              <div>
                <p className="text-sm font-medium text-[var(--text-primary)]">Admin User</p>
                <p className="text-xs text-[var(--text-secondary)]">Manager</p>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  } catch (error) {
    console.error('Header component error:', error);
    return null;
  }
}