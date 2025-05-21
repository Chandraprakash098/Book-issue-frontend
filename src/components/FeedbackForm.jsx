// import { useState, useEffect } from 'react';
// import { useSearchParams } from 'react-router-dom';
// import styled from 'styled-components';
// import { submitFeedback } from '../api';

// const FormContainer = styled.div`
//   max-width: 384px;
//   margin: 0 auto;
// `;

// const FeedbackForm = ({ showNotification }) => {
//   const [searchParams] = useSearchParams();
//   const studentId = searchParams.get('studentId') || '';
//   const [formData, setFormData] = useState({ studentId, feedback: '' });
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [isFormValid, setIsFormValid] = useState(false);

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
//       const data = await submitFeedback(formData);
//       showNotification(data.msg, 'success');
//       setFormData({ studentId: '', feedback: '' });
//     } catch (error) {
//       showNotification(error.response?.data?.msg || 'Submission failed', 'error');
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <FormContainer>
//       <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
//         <div className="text-center mb-6">
//           <i className="fas fa-comment-alt text-4xl text-blue-600"></i>
//           <h2 className="text-2xl font-bold mt-2">Submit Feedback</h2>
//           <p className="text-gray-600 mt-1">We value your thoughts and suggestions</p>
//         </div>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">Student ID</label>
//             <div className="relative">
//               <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
//                 <i className="fas fa-id-card"></i>
//               </span>
//               <input
//                 type="text"
//                 name="studentId"
//                 value={formData.studentId}
//                 onChange={handleInputChange}
//                 required
//                 className="w-full pl-10 p-3 border rounded form-input focus:outline-none"
//                 placeholder="Enter your student ID"
//               />
//             </div>
//             <p className="text-xs text-gray-500 mt-1">Enter the ID you received after submitting the request form</p>
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">Feedback</label>
//             <textarea
//               name="feedback"
//               value={formData.feedback}
//               onChange={handleInputChange}
//               required
//               className="w-full p-3 border rounded form-input focus:outline-none"
//               rows="4"
//               placeholder="Please share your experience, suggestions or concerns"
//             />
//           </div>
//           <button
//             type="submit"
//             disabled={isSubmitting || !isFormValid}
//             className="w-full bg-blue-600 text-white p-3 rounded hover:bg-blue-700 disabled:bg-gray-400 transition-all flex items-center justify-center"
//           >
//             {isSubmitting ? (
//               <>
//                 <i className="fas fa-spinner fa-spin mr-2"></i> Submitting...
//               </>
//             ) : (
//               <>
//                 <i className="fas fa-paper-plane mr-2"></i> Submit Feedback
//               </>
//             )}
//           </button>
//         </form>
//       </div>
//     </FormContainer>
//   );
// };

// export default FeedbackForm;


import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import { submitFeedback } from '../api';

// --- Styled Components ---
const PageWrapper = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #f0f4ff 0%, #e6f7ff 100%);
  padding: 3rem 1rem;
  display: flex;
  align-items: flex-start;
  justify-content: center;
`;

const FormContainer = styled.div`
  width: 100%;
  max-width: 420px;
`;

const FormCard = styled.div`
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  transition: transform 0.2s ease;
  border: 1px solid #eaedf5;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.12);
  }
`;

const FormHeader = styled.div`
  text-align: center;
  margin-bottom: 2rem;
`;

const FormIcon = styled.div`
  font-size: 3rem;
  color: #4f6ef7;
  margin-bottom: 0.75rem;
`;

const FormTitle = styled.h2`
  font-size: 1.75rem;
  font-weight: 700;
  color: #2d3748;
  margin-bottom: 0.5rem;
`;

const FormSubtitle = styled.p`
  color: #718096;
  font-size: 1rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  font-size: 0.95rem;
  font-weight: 600;
  color: #4a5568;
  margin-bottom: 0.5rem;
`;

const InputWrapper = styled.div`
  position: relative;
`;

const InputIcon = styled.span`
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  color: #a0aec0;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.875rem 1rem 0.875rem 2.75rem;
  border: 2px solid #e2e8f0;
  border-radius: 10px;
  font-size: 1rem;
  transition: all 0.2s ease;
  
  &:focus {
    outline: none;
    border-color: #4f6ef7;
    box-shadow: 0 0 0 3px rgba(79, 110, 247, 0.15);
  }
  
  &::placeholder {
    color: #cbd5e0;
  }
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 0.875rem 1rem;
  border: 2px solid #e2e8f0;
  border-radius: 10px;
  font-size: 1rem;
  resize: vertical;
  min-height: 120px;
  transition: all 0.2s ease;
  
  &:focus {
    outline: none;
    border-color: #4f6ef7;
    box-shadow: 0 0 0 3px rgba(79, 110, 247, 0.15);
  }
  
  &::placeholder {
    color: #cbd5e0;
  }
`;

const HelpText = styled.p`
  font-size: 0.85rem;
  color: #718096;
  margin-top: 0.5rem;
`;

const Button = styled.button`
  background: linear-gradient(90deg, #4f6ef7 0%, #5a78ff 100%);
  color: white;
  border: none;
  border-radius: 10px;
  padding: 1rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  transition: all 0.2s ease;
  
  &:hover:not(:disabled) {
    background: linear-gradient(90deg, #4059db 0%, #4f6ef7 100%);
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(79, 110, 247, 0.3);
  }
  
  &:disabled {
    background: #a0aec0;
    cursor: not-allowed;
  }
`;

// --- Main Component ---
const FeedbackForm = ({ showNotification }) => {
  const [searchParams] = useSearchParams();
  const studentId = searchParams.get('studentId') || '';
  const [formData, setFormData] = useState({ studentId, feedback: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);

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
      const data = await submitFeedback(formData);
      showNotification(data.msg, 'success');
      setFormData({ studentId: '', feedback: '' });
    } catch (error) {
      showNotification(error.response?.data?.msg || 'Submission failed', 'error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <PageWrapper>
      <FormContainer>
        <FormCard>
          <FormHeader>
            <FormIcon>
              <i className="fas fa-comment-dots"></i>
            </FormIcon>
            <FormTitle>Submit Feedback</FormTitle>
            <FormSubtitle>We value your thoughts and suggestions</FormSubtitle>
          </FormHeader>
          
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label htmlFor="studentId">Student ID</Label>
              <InputWrapper>
                <InputIcon>
                  <i className="fas fa-id-card"></i>
                </InputIcon>
                <Input
                  id="studentId"
                  type="text"
                  name="studentId"
                  value={formData.studentId}
                  onChange={handleInputChange}
                  required
                  placeholder="Enter your student ID"
                />
              </InputWrapper>
              <HelpText>Enter the ID you received after submitting the request form</HelpText>
            </FormGroup>
            
            <FormGroup>
              <Label htmlFor="feedback">Feedback</Label>
              <Textarea
                id="feedback"
                name="feedback"
                value={formData.feedback}
                onChange={handleInputChange}
                required
                placeholder="Please share your experience, suggestions or concerns"
              />
            </FormGroup>
            
            <Button type="submit" disabled={isSubmitting || !isFormValid}>
              {isSubmitting ? (
                <>
                  <i className="fas fa-spinner fa-spin"></i> Submitting...
                </>
              ) : (
                <>
                  <i className="fas fa-paper-plane"></i> Submit Feedback
                </>
              )}
            </Button>
          </Form>
        </FormCard>
      </FormContainer>
    </PageWrapper>
  );
};

export default FeedbackForm;