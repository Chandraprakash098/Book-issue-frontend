// import { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import styled from 'styled-components';
// import { fetchWithAuth, updateAdminProfile, handleRequestAction } from '../api';

// const DashboardContainer = styled.div`
//   max-width: 1152px;
//   margin: 0 auto;
// `;

// const AdminDashboard = ({ showNotification }) => {
//   const navigate = useNavigate();
//   const [requests, setRequests] = useState([]);
//   const [profileForm, setProfileForm] = useState({ username: '', password: '' });
//   const [isProfileSubmitting, setIsProfileSubmitting] = useState(false);
//   const [isProfileValid, setIsProfileValid] = useState(false);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchRequests = async () => {
//       try {
//         const data = await fetchWithAuth('/admin/requests');
//         setRequests(data);
//       } catch (err) {
//         setError(err.message);
//         showNotification('Session expired', 'error');
//         navigate('/admin/login');
//       }
//     };
//     fetchRequests();
//   }, [navigate, showNotification]);

//   useEffect(() => {
//     setIsProfileValid(Object.values(profileForm).some(value => value));
//   }, [profileForm]);

//   const handleProfileChange = (e) => {
//     const { name, value } = e.target;
//     setProfileForm(prev => ({ ...prev, [name]: value }));
//   };

//   const handleProfileSubmit = async (e) => {
//     e.preventDefault();
//     setIsProfileSubmitting(true);
//     try {
//       const data = await updateAdminProfile(profileForm);
//       showNotification(data.msg, 'success');
//       setProfileForm({ username: '', password: '' });
//     } catch (error) {
//       showNotification(error.message, 'error');
//     } finally {
//       setIsProfileSubmitting(false);
//     }
//   };

//   const handleAction = async (studentId, action) => {
//     try {
//       await handleRequestAction(studentId, action);
//       showNotification(`Request ${action}ed successfully`, 'success');
//       const data = await fetchWithAuth('/admin/requests');
//       setRequests(data);
//     } catch (error) {
//       showNotification(error.message, 'error');
//     }
//   };

//   if (error) {
//     return (
//       <div className="max-w-md mx-auto">
//         <div className="bg-white p-6 rounded-lg shadow-md text-center border border-gray-200">
//           <i className="fas fa-exclamation-triangle text-4xl text-red-500 mb-4"></i>
//           <p className="text-red-600 font-medium">{error}</p>
//           <p className="text-gray-600 mt-2">Your session may have expired</p>
//           <button
//             onClick={() => navigate('/admin/login')}
//             className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-all"
//           >
//             <i className="fas fa-sign-in-alt mr-2"></i> Back to Login
//           </button>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <DashboardContainer>
//       <div className="mb-8">
//         <h2 className="text-2xl font-bold text-gray-800 mb-6">Admin Dashboard</h2>
//         <div className="grid md:grid-cols-3 gap-6 mb-8">
//           <div className="bg-white p-6 rounded-lg shadow border border-gray-200">
//             <h3 className="text-lg font-semibold text-gray-800 mb-4">
//               <i className="fas fa-user-cog mr-2 text-blue-600"></i>Admin Profile
//             </h3>
//             <form onSubmit={handleProfileSubmit} className="space-y-4">
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">New Username</label>
//                 <input
//                   type="text"
//                   name="username"
//                   value={profileForm.username}
//                   onChange={handleProfileChange}
//                   className="w-full p-2 border rounded form-input focus:outline-none"
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">New Password</label>
//                 <input
//                   type="password"
//                   name="password"
//                   value={profileForm.password}
//                   onChange={handleProfileChange}
//                   className="w-full p-2 border rounded form-input focus:outline-none"
//                 />
//               </div>
//               <button
//                 type="submit"
//                 disabled={isProfileSubmitting || !isProfileValid}
//                 className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 disabled:bg-gray-400 transition-all text-sm"
//               >
//                 {isProfileSubmitting ? (
//                   <>
//                     <i className="fas fa-spinner fa-spin mr-1"></i> Updating...
//                   </>
//                 ) : (
//                   <>
//                     <i className="fas fa-save mr-1"></i> Update Profile
//                   </>
//                 )}
//               </button>
//             </form>
//           </div>
//           <div className="bg-white p-6 rounded-lg shadow border border-gray-200">
//             <h3 className="text-lg font-semibold text-gray-800 mb-4">
//               <i className="fas fa-comment-dots mr-2 text-blue-600"></i>Feedback
//             </h3>
//             <p className="text-gray-600 mb-4">View feedback submitted by students</p>
//             <button
//               onClick={() => navigate('/admin/feedback')}
//               className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition-all"
//             >
//               <i className="fas fa-list mr-2"></i> View All Feedback
//             </button>
//           </div>
//           <div className="bg-white p-6 rounded-lg shadow border border-gray-200">
//             <h3 className="text-lg font-semibold text-gray-800 mb-4">
//               <i className="fas fa-chart-bar mr-2 text-blue-600"></i>Statistics
//             </h3>
//             <div className="space-y-2">
//               <div className="flex justify-between">
//                 <span className="text-gray-600">Pending Requests:</span>
//                 <span className="font-medium">{requests.length}</span>
//               </div>
//               <div className="flex justify-between">
//                 <span className="text-gray-600">Total Students:</span>
//                 <span className="font-medium">-</span>
//               </div>
//               <div className="flex justify-between">
//                 <span className="text-gray-600">Books Issued:</span>
//                 <span className="font-medium">-</span>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="bg-white p-6 rounded-lg shadow border border-gray-200">
//           <h3 className="text-lg font-semibold text-gray-800 mb-4">
//             <i className="fas fa-book mr-2 text-blue-600"></i>Pending Book Requests
//           </h3>
//           {requests.length === 0 ? (
//             <div className="text-center py-8 text-gray-500">
//               <i className="fas fa-inbox text-4xl mb-3"></i>
//               <p>No pending requests</p>
//             </div>
//           ) : (
//             <div className="overflow-x-auto">
//               <table className="min-w-full divide-y divide-gray-200">
//                 <thead className="bg-gray-50">
//                   <tr>
//                     <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Student</th>
//                     <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Contact</th>
//                     <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Address</th>
//                     <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Education</th>
//                     <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Books</th>
//                     <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Result</th>
//                     <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
//                   </tr>
//                 </thead>
//                 <tbody className="bg-white divide-y divide-gray-200">
//                   {requests.map(student => (
//                     <tr key={student._id} className="hover:bg-gray-50">
//                       <td className="px-6 py-4 whitespace-nowrap">
//                         <div className="font-medium text-gray-900">{student.fullName || 'N/A'}</div>
//                         <div className="text-sm text-gray-500">Father: {student.fatherName || 'N/A'}</div>
//                         <div className="text-sm text-gray-500">DOB: {student.dob ? new Date(student.dob).toLocaleDateString() : 'N/A'}</div>
//                       </td>
//                       <td className="px-6 py-4 whitespace-nowrap">
//                         <div className="text-sm text-gray-900">{student.email || 'N/A'}</div>
//                         <div className="text-sm text-gray-500">{student.mobileNo || 'N/A'}</div>
//                       </td>
//                       <td className="px-6 py-4 whitespace-nowrap">
//                         <div className="text-sm text-gray-900">{student.address || 'N/A'}</div>
//                         <div className="text-sm text-gray-500">
//                           {student.landmark || ''}, {student.city || ''}, {student.state || ''}, {student.country || ''}, {student.pincode || ''}
//                         </div>
//                       </td>
//                       <td className="px-6 py-4 whitespace-nowrap">
//                         <div className="text-sm text-gray-900">{student.schoolName || 'N/A'}</div>
//                         <div className="text-sm text-gray-500">Current: {student.runningStandard || 'N/A'}</div>
//                         <div className="text-sm text-gray-500">Previous: {student.previousStandard || 'N/A'}</div>
//                       </td>
//                       <td className="px-6 py-4 whitespace-nowrap">
//                         <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
//                           {student.booksRequested || '0'} Books
//                         </span>
//                       </td>
//                       <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                         <a href={student.resultUrl || '#'} target="_blank" className="text-blue-600 hover:text-blue-800">
//                           <i className="fas fa-file-alt mr-1"></i> View
//                         </a>
//                       </td>
//                       <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
//                         <div className="flex space-x-2">
//                           <button
//                             onClick={() => handleAction(student._id, 'approve')}
//                             className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 transition-all"
//                           >
//                             <i className="fas fa-check mr-1"></i> Approve
//                           </button>
//                           <button
//                             onClick={() => handleAction(student._id, 'reject')}
//                             className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition-all"
//                           >
//                             <i className="fas fa-times mr-1"></i> Reject
//                           </button>
//                         </div>
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           )}
//         </div>
//       </div>
//     </DashboardContainer>
//   );
// };

// export default AdminDashboard;

import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { fetchWithAuth, updateAdminProfile, handleRequestAction } from '../api';

// --- Styled Components ---
const PageWrapper = styled.div`
  min-height: 100vh;
  width: 100%;
  background: linear-gradient(135deg, #f0f4ff 0%, #e6f7ff 100%);
  padding: 2rem 1rem;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
`;

const ActionsWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  justify-content: flex-start;
`;

const PageHeader = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  color: #1a365d;
  margin-bottom: 2rem;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  
  @media (min-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  margin-bottom: 2rem;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const Card = styled.div`
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  padding: 1.5rem;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  }
`;

const CardTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: #3182ce;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const StatsRow = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2rem 0;
  border-bottom: 1px solid #edf2f7;
  font-size: 1.3rem;
  
  &:last-child {
    border-bottom: none;
  }
`;

const StatLabel = styled.span`
  color: #718096;
  font-size: 0.95rem;
`;

const StatValue = styled.span`
  color: #2d3748;
  font-weight: 600;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  color: #4a5568;
  margin-bottom: 0.5rem;
  font-weight: 500;
  font-size: 0.95rem;
`;

const Input = styled.input`
  padding: 0.75rem 1rem;
  border: 1px solid #e2e8f0;
  border-radius: 6px;
  font-size: 1rem;
  transition: all 0.2s;
  
  &:focus {
    outline: none;
    border-color: #3182ce;
    box-shadow: 0 0 0 3px rgba(49, 130, 206, 0.2);
  }
`;

const Button = styled.button`
  background: #3182ce;
  color: white;
  border: none;
  border-radius: 6px;
  padding: 0.75rem 1rem;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  transition: background 0.2s;
  
  &:hover:not(:disabled) {
    background: #2c5282;
  }
  
  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

const TableContainer = styled.div`
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  padding: 1.5rem;
  overflow-x: auto;
  margin-bottom: 2rem;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
`;

const THead = styled.thead`
  background: #f7fafc;
`;

const Th = styled.th`
  text-align: left;
  padding: 1rem;
  color: #4a5568;
  font-weight: 600;
  font-size: 0.95rem;
  border-bottom: 2px solid #e2e8f0;
`;

const Tr = styled.tr`
  &:hover td {
    background: #f7fafc;
  }
`;

const Td = styled.td`
  padding: 1rem;
  border-bottom: 1px solid #e2e8f0;
  vertical-align: top;
`;

// const ActionButton = styled.button`
//   background: ${props => props.$approve ? '#38a169' : '#e53e3e'};
//   color: white;
//   border: none;
//   border-radius: 4px;
//   padding: 0.5rem 0.75rem;
//   font-size: 0.875rem;
//   font-weight: 600;
//   cursor: pointer;
//   margin-right: 0.5rem;
//   display: inline-flex;
//   align-items: center;
//   gap: 0.25rem;
//   transition: background 0.2s;
  
//   &:hover {
//     background: ${props => props.$approve ? '#2f855a' : '#c53030'};
//   }
// `;

const ActionButton = styled.button`
  background: ${props => props.$approve ? '#38a169' : '#e53e3e'};
  color: #fff;
  border: none;
  border-radius: 6px;
  padding: 0.6rem 1.2rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  box-shadow: 0 2px 8px rgba(49, 130, 206, 0.08);
  transition: background 0.2s, transform 0.1s, box-shadow 0.2s;
  width: 120px;  /* Fixed width for uniform size */
  height: 40px;  /* Fixed height for uniform size */

  &:hover {
    background: ${props => props.$approve ? '#2f855a' : '#c53030'};
    transform: translateY(-2px) scale(1.04);
    box-shadow: 0 4px 16px rgba(49, 130, 206, 0.12);
  }

  &:active {
    transform: scale(0.98);
  }
`;



const EmptyState = styled.div`
  text-align: center;
  padding: 3rem 0;
  color: #a0aec0;
`;

const Badge = styled.span`
  display: inline-block;
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  background: #ebf8ff;
  color: #3182ce;
  font-weight: 600;
  font-size: 0.875rem;
`;

const ErrorContainer = styled.div`
  max-width: 400px;
  margin: 4rem auto;
  text-align: center;
`;

const ErrorIcon = styled.div`
  font-size: 3rem;
  color: #e53e3e;
  margin-bottom: 1rem;
`;

const ErrorMessage = styled.div`
  color: #e53e3e;
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

const ErrorSubtext = styled.div`
  color: #718096;
  margin-bottom: 1.5rem;
`;

// --- Main Component ---
const AdminDashboard = ({ showNotification }) => {
  const navigate = useNavigate();
  const [requests, setRequests] = useState([]);
  const [profileForm, setProfileForm] = useState({ username: '', password: '' });
  const [isProfileSubmitting, setIsProfileSubmitting] = useState(false);
  const [isProfileValid, setIsProfileValid] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const data = await fetchWithAuth('/admin/requests');
        setRequests(data);
      } catch (err) {
        setError(err.message);
        showNotification('Session expired', 'error');
        navigate('/admin/login');
      }
    };
    fetchRequests();
  }, [navigate, showNotification]);

  useEffect(() => {
    setIsProfileValid(Object.values(profileForm).some(value => value));
  }, [profileForm]);

  const handleProfileChange = (e) => {
    const { name, value } = e.target;
    setProfileForm(prev => ({ ...prev, [name]: value }));
  };

  const handleProfileSubmit = async (e) => {
    e.preventDefault();
    setIsProfileSubmitting(true);
    try {
      const data = await updateAdminProfile(profileForm);
      showNotification(data.msg, 'success');
      setProfileForm({ username: '', password: '' });
    } catch (error) {
      showNotification(error.message, 'error');
    } finally {
      setIsProfileSubmitting(false);
    }
  };

  const handleAction = async (studentId, action) => {
    try {
      await handleRequestAction(studentId, action);
      showNotification(`Request ${action}ed successfully`, 'success');
      const data = await fetchWithAuth('/admin/requests');
      setRequests(data);
    } catch (error) {
      showNotification(error.message, 'error');
    }
  };

  if (error) {
    return (
      <PageWrapper>
        <Container>
          <Card as={ErrorContainer}>
            <ErrorIcon>
              <i className="fas fa-exclamation-triangle"></i>
            </ErrorIcon>
            <ErrorMessage>{error}</ErrorMessage>
            <ErrorSubtext>Your session may have expired</ErrorSubtext>
            <Button onClick={() => navigate('/admin/login')}>
              <i className="fas fa-sign-in-alt"></i> Back to Login
            </Button>
          </Card>
        </Container>
      </PageWrapper>
    );
  }

  return (
    <PageWrapper>
      <Container>
        <PageHeader>
          <i className="fas fa-tachometer-alt"></i> Admin Dashboard
        </PageHeader>
        
        <Grid>
          {/* Profile Card */}
          <Card>
            <CardTitle>
              <i className="fas fa-user-cog"></i> Admin Profile
            </CardTitle>
            <Form onSubmit={handleProfileSubmit}>
              <FormGroup>
                <Label htmlFor="username">New Username</Label>
                <Input
                  id="username"
                  type="text"
                  name="username"
                  value={profileForm.username}
                  onChange={handleProfileChange}
                  placeholder="Enter new username"
                  autoComplete="off"
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="password">New Password</Label>
                <Input
                  id="password"
                  type="password"
                  name="password"
                  value={profileForm.password}
                  onChange={handleProfileChange}
                  placeholder="Enter new password"
                  autoComplete="off"
                />
              </FormGroup>
              <Button type="submit" disabled={isProfileSubmitting || !isProfileValid}>
                {isProfileSubmitting ? (
                  <>
                    <i className="fas fa-spinner fa-spin"></i> Updating...
                  </>
                ) : (
                  <>
                    <i className="fas fa-save"></i> Update Profile
                  </>
                )}
              </Button>
            </Form>
          </Card>

          {/* Feedback Card */}
          <Card>
            <CardTitle>
              <i className="fas fa-comment-dots"></i> Feedback
            </CardTitle>
            <div style={{ color: '#718096', marginBottom: '1.5rem' }}>
              View feedback submitted by students
            </div>
            <Button onClick={() => navigate('/admin/feedback')}>
              <i className="fas fa-list"></i> View All Feedback
            </Button>
          </Card>

          {/* Statistics Card */}
          <Card>
            <CardTitle>
              <i className="fas fa-chart-bar"></i> Statistics
            </CardTitle>
            <StatsRow>
              <StatLabel>Pending Requests:</StatLabel>
              <StatValue>{requests.length}</StatValue>
            </StatsRow>
            {/* <StatsRow>
              <StatLabel>Total Students:</StatLabel>
              <StatValue>-</StatValue>
            </StatsRow>
            <StatsRow>
              <StatLabel>Books Issued:</StatLabel>
              <StatValue>-</StatValue>
            </StatsRow> */}
          </Card>
        </Grid>

        {/* Pending Requests Table */}
        <TableContainer>
          <CardTitle>
            <i className="fas fa-book"></i> Pending Book Requests
          </CardTitle>
          
          {requests.length === 0 ? (
            <EmptyState>
              <i className="fas fa-inbox" style={{ fontSize: '2.5rem', display: 'block', marginBottom: '1rem' }}></i>
              <div>No pending requests</div>
            </EmptyState>
          ) : (
            <Table>
              <THead>
                <tr>
                  <Th>Student</Th>
                  <Th>Contact</Th>
                  <Th>Address</Th>
                  <Th>Education</Th>
                  <Th>Books</Th>
                  <Th>Result</Th>
                  <Th>Actions</Th>
                </tr>
              </THead>
              <tbody>
                {requests.map(student => (
                  <Tr key={student._id}>
                    <Td>
                      <div style={{ fontWeight: 600 }}>{student.fullName || 'N/A'}</div>
                      <div style={{ color: '#718096', fontSize: '0.875rem' }}>
                        Father: {student.fatherName || 'N/A'}
                      </div>
                      <div style={{ color: '#718096', fontSize: '0.875rem' }}>
                        DOB: {student.dob ? new Date(student.dob).toLocaleDateString() : 'N/A'}
                      </div>
                    </Td>
                    <Td>
                      <div>{student.email || 'N/A'}</div>
                      <div style={{ color: '#718096', fontSize: '0.875rem' }}>{student.mobileNo || 'N/A'}</div>
                    </Td>
                    <Td>
                      <div>{student.address || 'N/A'}</div>
                      <div style={{ color: '#718096', fontSize: '0.875rem' }}>
                        {[student.landmark, student.city, student.state, student.country, student.pincode].filter(Boolean).join(', ')}
                      </div>
                    </Td>
                    <Td>
                      <div>{student.schoolName || 'N/A'}</div>
                      <div style={{ color: '#718096', fontSize: '0.875rem' }}>
                        Current: {student.runningStandard || 'N/A'}
                      </div>
                      <div style={{ color: '#718096', fontSize: '0.875rem' }}>
                        Previous: {student.previousStandard || 'N/A'}
                      </div>
                    </Td>
                    <Td>
                      <Badge>
                        {student.booksRequested || '0'} Books
                      </Badge>
                    </Td>
                    <Td>
                      <a
                        href={student.resultUrl || '#'}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: '#3182ce', textDecoration: 'underline', fontWeight: 500, display: 'flex', alignItems: 'center', gap: '0.25rem' }}
                      >
                        <i className="fas fa-file-alt"></i> View
                      </a>
                    </Td>
                    <Td>
                       <ActionsWrapper>
                      <ActionButton $approve onClick={() => handleAction(student._id, 'approve')}>
                        <i className="fas fa-check"></i> Approve
                      </ActionButton>
                      <ActionButton onClick={() => handleAction(student._id, 'reject')}>
                        <i className="fas fa-times"></i> Reject
                      </ActionButton>
                      </ActionsWrapper>
                    </Td>
                  </Tr>
                ))}
              </tbody>
            </Table>
          )}
        </TableContainer>
      </Container>
    </PageWrapper>
  );
};

export default AdminDashboard;