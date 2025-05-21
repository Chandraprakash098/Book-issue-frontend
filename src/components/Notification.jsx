import { useEffect } from 'react';
import styled from 'styled-components';

const NotificationContainer = styled.div`
  position: fixed;
  top: 1rem;
  right: 1rem;
  z-index: 50;
  transition: all 0.5s ease;
  transform: translateY(${({ show }) => (show ? '0' : '0.5rem')});
  opacity: ${({ show }) => (show ? '1' : '0')};
`;

const Notification = ({ message, type, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <NotificationContainer show={!!message} className={`p-4 rounded shadow-lg ${type === 'success' ? 'bg-green-500' : 'bg-red-500'} text-white max-w-sm`}>
      <div className="flex items-center">
        <i className={`fas fa-${type === 'success' ? 'check-circle' : 'exclamation-circle'} mr-2`}></i>
        <span>{message}</span>
      </div>
    </NotificationContainer>
  );
};

export default Notification;