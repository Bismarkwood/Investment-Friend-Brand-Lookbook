import React, { useState, useEffect } from 'react';
import { supabase } from '../../lib/supabaseClient';
import './AdminClubManagement.css';

export default function AdminClubManagement() {
  const [searchTerm, setSearchTerm] = useState('');
  const [applicants, setApplicants] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchApplicants = React.useCallback(async () => {
    try {
      const { data, error } = await supabase
        .from('applicants')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setApplicants(data || []);
    } catch (err) {
      console.error('Error fetching applicants:', err);
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchApplicants();
  }, [fetchApplicants]);

  const filteredApplicants = applicants.filter(app => 
    app.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    app.club.toLowerCase().includes(searchTerm.toLowerCase()) ||
    app.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="admin-club-mgmt">
      <div className="admin-page-header">
        <div>
          <h1 className="admin-page-title">Club Management</h1>
          <p className="admin-page-subtitle">View and manage applications to join clubs.</p>
        </div>
        
        <div className="admin-search">
          <svg className="search-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
          <input 
            type="text" 
            placeholder="Search applicants..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="admin-table-container">
        <table className="admin-table">
          <thead>
            <tr>
              <th>Applicant Name</th>
              <th>Email Address</th>
              <th>Phone Number</th>
              <th>Club</th>
              <th>Date Applied</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {isLoading ? (
              <tr><td colSpan="7" style={{textAlign: 'center', padding: '48px'}}>Loading applicants...</td></tr>
            ) : error ? (
              <tr><td colSpan="7" style={{textAlign: 'center', padding: '48px', color: 'red'}}>Error: {error}</td></tr>
            ) : filteredApplicants.length > 0 ? (
              filteredApplicants.map(applicant => (
                <tr key={applicant.id}>
                  <td>
                    <div className="td-name">{applicant.name}</div>
                  </td>
                  <td>{applicant.email}</td>
                  <td>{applicant.phone}</td>
                  <td>
                    <span className={`club-badge club-${applicant.club.replace(/\s+/g, '-').toLowerCase()}`}>
                      {applicant.club}
                    </span>
                  </td>
                  <td>{new Date(applicant.created_at).toLocaleDateString()}</td>
                  <td><span className="status-badge status-pending">{applicant.status || 'Pending'}</span></td>
                  <td>
                    <button className="action-btn">Review</button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" className="no-results">No applicants found matching "{searchTerm}"</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
