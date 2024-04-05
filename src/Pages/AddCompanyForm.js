import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddCompanyForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    companyName: '',
    position: '',
    age: '',
    startDate: '',
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, companyName, position, age, startDate } = formData;
    if (!name || !companyName || !position || !age || !startDate) {
      setError('Please fill in all fields');
      toast.error('Please fill in all fields');
      return;
    }
  
    try {
      const response = await fetch('http://localhost:5000/api/companies/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (!response.ok) {
        toast.error('Failed to add employee');
        throw new Error('Failed to add employee');
      }
  
      setFormData({
        name: '',
        companyName: '',
        position: '',
        age: '',
        startDate: '',
      });
      
      toast.success('Employee added successfully');
      navigate('/');
    } catch (error) {
      console.error('Error adding company:', error);
      setError('Failed to add employee. Please try again later.');
    }
  };

  const handleCloseModal = () => {
    navigate('/'); 
  };

  return (
    <main>
      <div className="container">
        <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">
                <div className="card mb-3">
                  <div className="card-body">
                    <div className="pt-4 pb-2">
                      <h5 className="card-title text-center pb-0 fs-4">Add Company</h5>
                      <p className="text-center small">Enter company details</p>
                    </div>
                    <form className="row g-3" onSubmit={handleSubmit}>
                      <div className="col-12">
                        <label htmlFor="name" className="form-label">Name <span className="text-danger">*</span></label>
                        <input
                          type="text"
                          name="name"
                          className="form-control"
                          id="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="col-12">
                        <label htmlFor="companyName" className="form-label">Company Name <span className="text-danger">*</span></label>
                        <input
                          type="text"
                          name="companyName"
                          className="form-control"
                          id="companyName"
                          value={formData.companyName}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="col-12">
                        <label htmlFor="position" className="form-label">Position <span className="text-danger">*</span></label>
                        <input
                          type="text"
                          name="position"
                          className="form-control"
                          id="position"
                          value={formData.position}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="col-12">
                        <label htmlFor="age" className="form-label">Age <span className="text-danger">*</span></label>
                        <input
                          type="number"
                          name="age"
                          className="form-control"
                          id="age"
                          value={formData.age}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="col-12">
                        <label htmlFor="startDate" className="form-label">Start Date <span className="text-danger">*</span></label>
                        <input
                          type="date"
                          name="startDate"
                          className="form-control"
                          id="startDate"
                          value={formData.startDate}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      {error && <div className="col-12 text-danger">{error}</div>}
                      <div className="col-6">
                        <button className="btn btn-primary w-100" type="submit">Add Company</button>
                      </div>
                      <div className="col-6">
                        <button className="btn btn-danger w-100" type="submit" onClick={handleCloseModal} >Close</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <ToastContainer />
    </main>
  );
};

export default AddCompanyForm;
