import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import logoImg from '../../assets/Logo/Logo Transparent Gradient Gold.png';
import './AdminLayout.css';

export default function AdminLayout() {
  return (
    <div className="admin-layout">
      <aside className="admin-sidebar">
        <div className="admin-sidebar-header">
          <img src={logoImg} alt="Investment Friend Logo" className="admin-logo" />
        </div>
        <nav className="admin-nav">
          <NavLink 
            to="/admin/club-management" 
            className={({ isActive }) => isActive ? "admin-nav-item active" : "admin-nav-item"}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
            Club Management
          </NavLink>
        </nav>
        <div className="admin-sidebar-footer">
          <NavLink to="/" className="admin-nav-item back-to-site">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
            Back to Website
          </NavLink>
        </div>
      </aside>
      <main className="admin-main-content">
        <header className="admin-topbar">
          <h2>Admin Portal</h2>
          <div className="admin-user-profile">
            <span>Admin</span>
            <div className="admin-avatar">A</div>
          </div>
        </header>
        <div className="admin-page-content">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
