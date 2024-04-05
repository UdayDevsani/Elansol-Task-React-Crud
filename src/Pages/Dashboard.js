import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AddCompanyForm from './AddCompanyForm';

const Dashboard = () => {
  const [companies, setCompanies] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/companies');
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      setCompanies(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleAddCompany = async () => {
    await fetchData(); 
  };

  const handleEditCompany = (companyId) => {
    navigate(`/edit-company/${companyId}`);
  };

  const handleDeleteCompany = async (companyId) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this company?');
    if (!confirmDelete) {
      return;
    }
  
    try {
      const response = await fetch(`http://localhost:5000/api/companies/delete/${companyId}`, {
        method: 'DELETE'
      });
      if (!response.ok) {
        throw new Error('Failed to delete company');
      }
      await fetchData();
    } catch (error) {
      console.error('Error deleting company:', error);
    }
  };
  

  return (
    <>
      <main id="main" className="main">
        <div className="pagetitle d-flex justify-content-between align-items-center">
          <h1>Data Tables</h1>
          <div>
            <Link to="/add-company" className="btn btn-primary">Add Company</Link>
          </div>
        </div>
        <section className="section">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-12">
                <h5 className="card-title">Datatables</h5>
                <div className="table-responsive">
                  <table className="table table-bordered table-striped">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Position</th>
                        <th scope="col">Age</th>
                        <th scope="col">Start Date</th>
                        <th scope="col">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {companies.map((company, index) => (
                        <tr key={company.id}>
                          <th scope="row">{company.id}</th>
                          <td>{company.name}</td>
                          <td>{company.position}</td>
                          <td>{company.age}</td>
                          <td>{company.startDate}</td>
                          <td>
                            <button className="btn btn-primary mr-2" onClick={() => handleEditCompany(company.id)}>Edit</button>
                            {' '}
                            <button className="btn btn-danger" onClick={() => handleDeleteCompany(company.id)}>Delete</button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <div className="modal" id="exampleModal">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Add Company</h5>
            </div>
            <div className="modal-body">
              <AddCompanyForm onAddCompany={handleAddCompany} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
