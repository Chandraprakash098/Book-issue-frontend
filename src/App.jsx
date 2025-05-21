import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import Navbar from './components/Navbar';
import StudentForm from './components/StudentForm';
import AdminLogin from './components/AdminLogin';
import AdminDashboard from './components/AdminDashboard';
import FeedbackForm from './components/FeedbackForm';
import FeedbackList from './components/FeedbackList';
import Notification from './components/Notification';
import ProtectedRoute from './ProtectedRoute';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Content = styled.div`
  flex-grow: 1;
  padding: 1.5rem;
`;

const Footer = styled.footer`
  background-color: #1f2937;
  color: white;
  padding: 1rem;
  text-align: center;
`;

const App = () => {
  const [notification, setNotification] = useState({ message: '', type: '' });

  const showNotification = (message, type) => {
    setNotification({ message, type });
  };

  const closeNotification = () => {
    setNotification({ message: '', type: '' });
  };

  return (
    <AppContainer>
      <Navbar showNotification={showNotification} />
      <Content>
        <Routes>
          <Route path="/" element={<StudentForm showNotification={showNotification} />} />
          <Route path="/admin/login" element={<AdminLogin showNotification={showNotification} />} />
          <Route
            path="/admin/dashboard"
            element={
              <ProtectedRoute>
                <AdminDashboard showNotification={showNotification} />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/feedback"
            element={
              <ProtectedRoute>
                <FeedbackList showNotification={showNotification} />
              </ProtectedRoute>
            }
          />
          <Route path="/feedback" element={<FeedbackForm showNotification={showNotification} />} />
        </Routes>
        {notification.message && (
          <Notification
            message={notification.message}
            type={notification.type}
            onClose={closeNotification}
          />
        )}
      </Content>
      <Footer>
        <p>© 2025 Book Issue System. All rights reserved.</p>
      </Footer>
    </AppContainer>
  );
};

export default App;