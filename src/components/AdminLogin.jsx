// import { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import styled from 'styled-components';
// import { adminLogin, setToken, validateToken } from '../api';

// const FormContainer = styled.div`
//   max-width: 384px;
//   margin: 0 auto;
// `;

// const AdminLogin = ({ showNotification }) => {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({ username: '', password: '' });
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [isFormValid, setIsFormValid] = useState(false);

//   useEffect(() => {
//     const checkAuth = async () => {
//       if (await validateToken()) {
//         navigate('/admin/dashboard');
//       }
//     };
//     checkAuth();
//   }, [navigate]);

//   useEffect(() => {
//     setIsFormValid(Object.values(formData).every(value => value));
//   }, [formData]);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);
//     try {
//       const data = await adminLogin(formData);
//       setToken(data.token);
//       showNotification('Logged in successfully', 'success');
//       navigate('/admin/dashboard');
//     } catch (error) {
//       showNotification(error.response?.data?.msg || 'Login failed', 'error');
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <FormContainer>
//       <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
//         <div className="text-center mb-6">
//           <i className="fas fa-user-shield text-4xl text-blue-600"></i>
//           <h2 className="text-2xl font-bold mt-2">Admin Login</h2>
//           <p className="text-gray-600 mt-1">Access the admin dashboard</p>
//         </div>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">Username</label>
//             <div className="relative">
//               <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
//                 <i className="fas fa-user"></i>
//               </span>
//               <input
//                 type="text"
//                 name="username"
//                 required
//                 value={formData.username}
//                 onChange={handleInputChange}
//                 className="w-full pl-10 p-3 border rounded form-input focus:outline-none"
//                 placeholder="Enter username"
//               />
//             </div>
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
//             <div className="relative">
//               <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
//                 <i className="fas fa-lock"></i>
//               </span>
//               <input
//                 type="password"
//                 name="password"
//                 required
//                 value={formData.password}
//                 onChange={handleInputChange}
//                 className="w-full pl-10 p-3 border rounded form-input focus:outline-none"
//                 placeholder="Enter password"
//               />
//             </div>
//           </div>
//           <button
//             type="submit"
//             disabled={isSubmitting || !isFormValid}
//             className="w-full bg-blue-600 text-white p-3 rounded hover:bg-blue-700 disabled:bg-gray-400 transition-all flex items-center justify-center"
//           >
//             {isSubmitting ? (
//               <>
//                 <i className="fas fa-spinner fa-spin mr-2"></i> Logging in...
//               </>
//             ) : (
//               <>
//                 <i className="fas fa-sign-in-alt mr-2"></i> Login
//               </>
//             )}
//           </button>
//         </form>
//       </div>
//     </FormContainer>
//   );
// };

// export default AdminLogin;



import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { adminLogin, setToken, validateToken } from '../api';

// Styled Components
const Container = styled.div`
  display: flex;
  min-height: 100vh;
  background: linear-gradient(135deg, #007bff, #6610f2);
  justify-content: center;
  align-items: center;
  padding: 20px;
  
`;

const Card = styled.div`
  background: #fff;
  padding: 32px;
  border-radius: 12px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  width: 100%;
  max-width: 400px;
  text-align: center;
`;

const Icon = styled.div`
  font-size: 48px;
  color: #007bff;
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-top: 12px;
`;

const Subtitle = styled.p`
  color: #6c757d;
  font-size: 14px;
  margin-bottom: 20px;
`;

const InputField = styled.input`
  width: 100%;
  padding: 12px;
  margin-bottom: 16px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 16px;
  transition: border-color 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: #007bff;
    box-shadow: 0 0 8px rgba(0, 123, 255, 0.3);
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 12px;
  background: #007bff;
  color: #fff;
  font-size: 18px;
  font-weight: bold;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.3s ease;
  
  &:hover {
    background: #0056b3;
  }

  &:disabled {
    background: #6c757d;
    cursor: not-allowed;
  }
`;

const AdminLogin = ({ showNotification }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      if (await validateToken()) {
        navigate('/admin/dashboard');
      }
    };
    checkAuth();
  }, [navigate]);

  useEffect(() => {
    setIsFormValid(Object.values(formData).every(value => value));
  }, [formData]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const data = await adminLogin(formData);
      setToken(data.token);
      showNotification('Logged in successfully', 'success');
      navigate('/admin/dashboard');
    } catch (error) {
      showNotification(error.response?.data?.msg || 'Login failed', 'error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Container>
      <Card>
        <Icon><i className="fas fa-user-shield"></i></Icon>
        <Title>Admin Login</Title>
        <Subtitle>Secure access to the admin dashboard</Subtitle>
        <form onSubmit={handleSubmit}>
          <InputField
            type="text"
            name="username"
            required
            value={formData.username}
            onChange={handleInputChange}
            placeholder="Enter username"
          />
          <InputField
            type="password"
            name="password"
            required
            value={formData.password}
            onChange={handleInputChange}
            placeholder="Enter password"
          />
          <Button type="submit" disabled={isSubmitting || !isFormValid}>
            {isSubmitting ? 'Logging in...' : 'Login'}
          </Button>
        </form>
      </Card>
    </Container>
  );
};

export default AdminLogin;
