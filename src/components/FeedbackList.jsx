// import { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import styled from 'styled-components';
// import { getFeedbacks } from '../api';

// const ListContainer = styled.div`
//   max-width: 896px;
//   margin: 0 auto;
// `;

// const FeedbackList = ({ showNotification }) => {
//   const navigate = useNavigate();
//   const [feedbacks, setFeedbacks] = useState([]);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchFeedbacks = async () => {
//       try {
//         const data = await getFeedbacks();
//         setFeedbacks(data);
//       } catch (err) {
//         setError(err.message);
//         showNotification('Session expired', 'error');
//         navigate('/admin/login');
//       }
//     };
//     fetchFeedbacks();
//   }, [navigate, showNotification]);

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
//     <ListContainer>
//       <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
//         <div className="flex justify-between items-center mb-6">
//           <h2 className="text-2xl font-bold text-gray-800">
//             <i className="fas fa-comments mr-2 text-blue-600"></i>Feedback List
//           </h2>
//           <button
//             onClick={() => navigate('/admin/dashboard')}
//             className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-all"
//           >
//             <i className="fas fa-arrow-left mr-1"></i> Back to Dashboard
//           </button>
//         </div>
//         {feedbacks.length === 0 ? (
//           <div className="text-center py-12 text-gray-500">
//             <i className="fas fa-inbox text-4xl mb-3"></i>
//             <p>No feedback available</p>
//           </div>
//         ) : (
//           <div className="space-y-4">
//             {feedbacks.map(feedback => (
//               <div key={feedback._id} className="border border-gray-200 p-4 rounded-lg hover:bg-gray-50 transition-all">
//                 <div className="flex justify-between">
//                   <div className="mb-2">
//                     <span className="font-medium text-gray-800">{feedback.studentId?.fullName || 'Unknown'}</span>
//                     <span className="text-sm text-gray-500 ml-2">{feedback.studentId?.email || 'Unknown'}</span>
//                   </div>
//                   <div className="text-sm text-gray-500">
//                     {new Date(feedback.createdAt).toLocaleString()}
//                   </div>
//                 </div>
//                 <p className="text-gray-700 bg-gray-50 p-3 rounded border border-gray-200">{feedback.feedback || 'N/A'}</p>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </ListContainer>
//   );
// };

// export default FeedbackList;


import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { getFeedbacks } from '../api';

// --- Styled Components ---
const PageWrapper = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #f0f4ff 0%, #e6f7ff 100%);
  padding: 3rem 1rem;
`;

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  width: 100%;
`;

const Card = styled.div`
  background: #ffffff;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  border: 1px solid #eaedf5;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  flex-wrap: wrap;
  gap: 1rem;
  
  @media (max-width: 640px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const Title = styled.h2`
  font-size: 1.75rem;
  font-weight: 700;
  color: #2d3748;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  i {
    color: #4f6ef7;
  }
`;

const Button = styled.button`
  background: #4f6ef7;
  color: white;
  border: none;
  border-radius: 10px;
  padding: 0.75rem 1.25rem;
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.2s ease;
  
  &:hover {
    background: #4059db;
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(79, 110, 247, 0.3);
  }
  
  @media (max-width: 640px) {
    width: 100%;
    justify-content: center;
  }
`;

const EmptyState = styled.div`
  text-align: center;
  padding: 4rem 0;
  color: #a0aec0;
  
  i {
    font-size: 3rem;
    margin-bottom: 1rem;
    display: block;
  }
`;

const FeedbackGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const FeedbackItem = styled.div`
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 1.5rem;
  transition: all 0.2s ease;
  
  &:hover {
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
    transform: translateY(-2px);
    border-color: #cbd5e0;
  }
`;

const FeedbackHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
  flex-wrap: wrap;
  gap: 0.5rem;
  
  @media (max-width: 500px) {
    flex-direction: column;
  }
`;

const StudentInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const StudentName = styled.span`
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 0.25rem;
`;

const StudentEmail = styled.span`
  font-size: 0.875rem;
  color: #718096;
`;

const FeedbackDate = styled.div`
  font-size: 0.875rem;
  color: #718096;
`;

const FeedbackContent = styled.div`
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 10px;
  padding: 1.25rem;
  color: #4a5568;
  line-height: 1.6;
`;

const ErrorContainer = styled.div`
  max-width: 450px;
  margin: 4rem auto;
`;

const ErrorCard = styled.div`
  background: #ffffff;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  text-align: center;
  border: 1px solid #eaedf5;
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
const FeedbackList = ({ showNotification }) => {
  const navigate = useNavigate();
  const [feedbacks, setFeedbacks] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFeedbacks = async () => {
      try {
        const data = await getFeedbacks();
        setFeedbacks(data);
      } catch (err) {
        setError(err.message);
        showNotification('Session expired', 'error');
        navigate('/admin/login');
      }
    };
    fetchFeedbacks();
  }, [navigate, showNotification]);

  if (error) {
    return (
      <PageWrapper>
        <ErrorContainer>
          <ErrorCard>
            <ErrorIcon>
              <i className="fas fa-exclamation-triangle"></i>
            </ErrorIcon>
            <ErrorMessage>{error}</ErrorMessage>
            <ErrorSubtext>Your session may have expired</ErrorSubtext>
            <Button onClick={() => navigate('/admin/login')}>
              <i className="fas fa-sign-in-alt"></i> Back to Login
            </Button>
          </ErrorCard>
        </ErrorContainer>
      </PageWrapper>
    );
  }

  return (
    <PageWrapper>
      <Container>
        <Card>
          <Header>
            <Title>
              <i className="fas fa-comments"></i> Feedback List
            </Title>
            <Button onClick={() => navigate('/admin/dashboard')}>
              <i className="fas fa-arrow-left"></i> Back to Dashboard
            </Button>
          </Header>
          
          {feedbacks.length === 0 ? (
            <EmptyState>
              <i className="fas fa-inbox"></i>
              <div>No feedback available</div>
            </EmptyState>
          ) : (
            <FeedbackGrid>
              {feedbacks.map(feedback => (
                <FeedbackItem key={feedback._id}>
                  <FeedbackHeader>
                    <StudentInfo>
                      <StudentName>{feedback.studentId?.fullName || 'Unknown Student'}</StudentName>
                      <StudentEmail>{feedback.studentId?.email || 'No email provided'}</StudentEmail>
                    </StudentInfo>
                    <FeedbackDate>
                      {new Date(feedback.createdAt).toLocaleString()}
                    </FeedbackDate>
                  </FeedbackHeader>
                  <FeedbackContent>
                    {feedback.feedback || 'No feedback provided'}
                  </FeedbackContent>
                </FeedbackItem>
              ))}
            </FeedbackGrid>
          )}
        </Card>
      </Container>
    </PageWrapper>
  );
};

export default FeedbackList;