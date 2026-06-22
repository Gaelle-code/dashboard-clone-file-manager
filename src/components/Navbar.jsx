import { useEffect, useRef, useState } from 'react';
import { FiBell, FiChevronDown, FiShoppingBag, FiUser, FiLock, FiLogOut } from 'react-icons/fi';

function MenuPanel({ title, items }) {
  return (
    <div className="dropdown-panel">
      <h3>{title}</h3>
      <ul>
        {items.map((item) => (
          <li key={item.label}>
            <span>{item.label}</span>
            <span>{item.meta}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Navbar({ title, subtitle }) {
  const [activeMenu, setActiveMenu] = useState(null);
  const menuRef = useRef(null);

  useEffect(() => {
    const handlePointerDown = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setActiveMenu(null);
      }
    };

    document.addEventListener('mousedown', handlePointerDown);
    return () => document.removeEventListener('mousedown', handlePointerDown);
  }, []);

  const toggleMenu = (menuName) => {
    setActiveMenu((current) => (current === menuName ? null : menuName));
  };

  return (
    <header className="topbar">
      <div className="topbar-title">
        {subtitle ? <p>{subtitle}</p> : null}
        <h2>{title}</h2>
      </div>
      <div className="topbar-actions" ref={menuRef}>
        <button
          type="button"
          className={`icon-button ${activeMenu === 'cart' ? 'active' : ''}`}
          onClick={() => toggleMenu('cart')}
          aria-label="Open cart menu"
          aria-expanded={activeMenu === 'cart'}
        >
          <FiShoppingBag />
          <span className="badge-dot" />
        </button>
        {activeMenu === 'cart' && (
          <MenuPanel
            title="Cart activity"
            items={[
              { label: 'Draft delivery bundle', meta: '2 items' },
              { label: 'Team shared assets', meta: 'Ready' },
            ]}
          />
        )}
        <button
          type="button"
          className={`icon-button ${activeMenu === 'notifications' ? 'active' : ''}`}
          onClick={() => toggleMenu('notifications')}
          aria-label="Open notifications"
          aria-expanded={activeMenu === 'notifications'}
        >
          <FiBell />
          <span className="badge-dot" />
        </button>
        {activeMenu === 'notifications' && (
          <MenuPanel
            title="Notifications"
            items={[
              { label: 'Design review ready', meta: '4m' },
              { label: 'Image folder synced', meta: '1h' },
            ]}
          />
        )}
        <button
          type="button"
          className={`icon-button ${activeMenu === 'profile' ? 'active' : ''}`}
          onClick={() => toggleMenu('profile')}
          aria-label="Open profile menu"
          aria-expanded={activeMenu === 'profile'}
        >
          <FiUser />
          <FiChevronDown />
        </button>
        {activeMenu === 'profile' && (
          <div className="dropdown-panel">
            <h3>Profile</h3>
            <a className="dropdown-link" href="#profile">
              <FiUser /> Profile
            </a>
            <a className="dropdown-link" href="#privacy">
              <FiLock /> Privacy Settings
            </a>
            <a className="dropdown-link" href="#logout">
              <FiLogOut /> Logout
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
