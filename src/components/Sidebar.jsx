import { NavLink } from 'react-router-dom';
import {
  FiFileText,
  FiFolder,
  FiGrid,
  FiHelpCircle,
  FiImage,
  FiLogOut,
  FiVideo,
  FiTrash2,
} from 'react-icons/fi';

const linkClassName = ({ isActive }) => `nav-link ${isActive ? 'active' : ''}`;

const groups = [
  {
    title: 'File Manager',
    items: [
      { to: '/file-manager', label: 'Dashboard', icon: FiGrid },
    ],
  },
  {
    title: 'Pages',
    items: [
      { to: '/file-manager/images', label: 'Images', icon: FiImage },
      { to: '/file-manager/videos', label: 'Videos', icon: FiVideo },
      { to: '/file-manager/documents', label: 'Documents', icon: FiFileText },
      { to: '/file-manager/all-files', label: 'All Files', icon: FiFolder },
      { to: '/file-manager/trash', label: 'Trash', icon: FiTrash2 },
    ],
  },
];

export function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="brand-mark">
        <div className="brand-badge brand-badge--ga">GA</div>
        <div className="brand-copy">
          <h1>Gaelle UI</h1>
        </div>
      </div>

      <nav className="sidebar-nav" aria-label="Sidebar navigation">
        {groups.map((group) => (
          <section key={group.title}>
            <div className="nav-group-title">{group.title}</div>
            <div className="nav-list">
              {group.items.map((item) => {
                const Icon = item.icon;
                return (
                  <NavLink key={item.label} to={item.to} className={linkClassName} end={item.to === '/file-manager'}>
                    <Icon />
                    <span>{item.label}</span>
                  </NavLink>
                );
              })}
            </div>
          </section>
        ))}
      </nav>

      <div className="sidebar-footer">
        {[
          { label: 'Sign Out', icon: FiLogOut },
          { label: 'Help', icon: FiHelpCircle },
        ].map((item) => {
          const Icon = item.icon;
          return (
            <button key={item.label} type="button" className="nav-link nav-link-button" onClick={() => {}}>
              <Icon />
              <span>{item.label}</span>
            </button>
          );
        })}
      </div>
    </aside>
  );
}
