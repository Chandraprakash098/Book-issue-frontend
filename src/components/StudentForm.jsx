// import { useState, useEffect } from 'react';
// import styled from 'styled-components';
// import { submitStudentForm } from '../api';

// // Styled Components
// // const FormContainer = styled.div`
// //   max-width: 900px;
// //   margin: 2rem auto;
// //   padding: 0 1rem;
// // `;

// const FormContainer = styled.div`
//   max-width: 1400px; /* Increased width */
//   margin: 2rem auto;
//   padding: 0 1rem;
// `;


// const FormCard = styled.div`
//   background-color: white;
//   border-radius: 1rem;
//   box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
//   overflow: hidden;
//   border: 1px solid rgba(0, 0, 0, 0.05);
//   transition: transform 0.3s ease;
  
//   &:hover {
//     transform: translateY(-5px);
//   }
// `;

// const FormHeader = styled.div`
//   background: linear-gradient(to right, #f3f4f6, #e5e7eb);
//   padding: 2rem 1.5rem;
//   border-bottom: 1px solid rgba(0, 0, 0, 0.05);
// `;

// const FormTitle = styled.h2`
//   font-size: 1.75rem;
//   color: #1e40af;
//   text-align: center;
//   font-weight: 700;
//   margin: 0;
// `;

// const FormSubtitle = styled.p`
//   color: #6b7280;
//   text-align: center;
//   margin-top: 0.75rem;
//   font-size: 1rem;
// `;

// const FormBody = styled.div`
//   padding: 2rem;
  
//   @media (max-width: 640px) {
//     padding: 1.5rem 1rem;
//   }
// `;

// // const FormGrid = styled.div`
// //   display: grid;
// //   grid-template-columns: repeat(2, 1fr);
// //   gap: 1.5rem;
  
// //   @media (max-width: 768px) {
// //     grid-template-columns: 1fr;
// //     gap: 1.25rem;
// //   }
// // `;

// const FormGrid = styled.div`
//   display: grid;
//   grid-template-columns: repeat(5, 1fr);
//   gap: 1.9rem; /* Increases spacing between rows */

//   @media (max-width: 1200px) {
//     grid-template-columns: repeat(4, 1fr);
//   }

//   @media (max-width: 992px) {
//     grid-template-columns: repeat(3, 1fr);
//   }

//   @media (max-width: 768px) {
//     grid-template-columns: repeat(2, 1fr);
//   }

//   @media (max-width: 640px) {
//     grid-template-columns: 1fr;
//   }
// `;




// // const FormField = styled.div`
// //   grid-column: ${props => props.$colSpan ? 'span 2' : 'span 1'};
  
// //   @media (max-width: 768px) {
// //     grid-column: span 1;
// //   }
// // `;

// const FormField = styled.div`
//   grid-column: ${props => props.$colSpan ? 'span 5' : 'span 1'};
//   padding: 0.5rem; /* Adds spacing around fields */
  
//   @media (max-width: 1200px) {
//     grid-column: ${props => props.$colSpan ? 'span 4' : 'span 1'};
//   }

//   @media (max-width: 992px) {
//     grid-column: ${props => props.$colSpan ? 'span 3' : 'span 1'};
//   }

//   @media (max-width: 768px) {
//     grid-column: ${props => props.$colSpan ? 'span 2' : 'span 1'};
//   }
// `;





// const Label = styled.label`
//   display: block;
//   font-size: 0.9rem;
//   font-weight: 600;
//   color: #374151;
//   margin-bottom: 0.5rem;
// `;

// // const Input = styled.input`
// //   width: 100%;
// //   padding: 0.75rem 1rem;
// //   border: 1px solid #d1d5db;
// //   border-radius: 0.5rem;
// //   font-size: 1rem;
// //   transition: all 0.2s ease;
// //   background-color: #f9fafb;
  
// //   &:focus {
// //     outline: none;
// //     border-color: #3b82f6;
// //     box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.2);
// //     background-color: white;
// //   }
  
// //   &:hover:not(:focus) {
// //     border-color: #9ca3af;
// //   }
  
// //   &::placeholder {
// //     color: #9ca3af;
// //   }
  
// //   &:disabled {
// //     background-color: #f3f4f6;
// //     cursor: not-allowed;
// //   }
// // `;

// const Input = styled.input`
//   width: 100%;
//   padding: 0.9rem 1.2rem; /* More padding for better spacing */
//   border: 2px solid #d1d5db;
//   border-radius: 0.6rem;
//   font-size: 1rem;
//   transition: all 0.3s ease;
//   background-color: #ffffff;
  
//   &:focus {
//     outline: none;
//     border-color: #2563eb;
//     box-shadow: 0 0 0 4px rgba(37, 99, 235, 0.25);
//   }
  
//   &:hover:not(:focus) {
//     border-color: #94a3b8;
//   }
// `;




// const FileUploadContainer = styled.div`
//   border: 2px dashed #d1d5db;
//   border-radius: 0.5rem;
//   padding: 1.5rem;
//   background-color: #f9fafb;
//   transition: all 0.2s ease;
//   position: relative;
  
//   &:hover {
//     border-color: #3b82f6;
//     background-color: rgba(59, 130, 246, 0.05);
//   }
// `;

// const FileInput = styled.input`
//   width: 100%;
//   cursor: pointer;
//   font-size: 0.9rem;
// `;

// const FileDescription = styled.p`
//   font-size: 0.8rem;
//   color: #6b7280;
//   margin-top: 0.75rem;
// `;

// const FormFooter = styled.div`
//   padding: 1.5rem 2rem;
//   background-color: #f9fafb;
//   border-top: 1px solid #e5e7eb;
  
//   @media (max-width: 640px) {
//     padding: 1.5rem 1rem;
//   }
// `;

// // const SubmitButton = styled.button`
// //   width: 100%;
// //   background: linear-gradient(to right, #3b82f6, #2563eb);
// //   color: white;
// //   font-weight: 600;
// //   padding: 0.875rem;
// //   border-radius: 0.5rem;
// //   font-size: 1rem;
// //   border: none;
// //   cursor: pointer;
// //   display: flex;
// //   align-items: center;
// //   justify-content: center;
// //   transition: all 0.3s ease;
// //   box-shadow: 0 4px 6px rgba(37, 99, 235, 0.25);
  
// //   &:hover:not(:disabled) {
// //     background: linear-gradient(to right, #2563eb, #1d4ed8);
// //     transform: translateY(-2px);
// //     box-shadow: 0 6px 8px rgba(37, 99, 235, 0.3);
// //   }
  
// //   &:active:not(:disabled) {
// //     transform: translateY(0);
// //     box-shadow: 0 2px 4px rgba(37, 99, 235, 0.25);
// //   }
  
// //   &:disabled {
// //     background: linear-gradient(to right, #9ca3af, #6b7280);
// //     cursor: not-allowed;
// //     opacity: 0.7;
// //     box-shadow: none;
// //   }
// // `;

// const SubmitButton = styled.button`
//   width: 100%;
//   background: linear-gradient(to right, #2563eb, #1d4ed8);
//   color: white;
//   font-weight: 600;
//   padding: 1rem;
//   border-radius: 0.6rem;
//   font-size: 1.2rem;
//   border: none;
//   cursor: pointer;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   transition: all 0.3s ease;
//   box-shadow: 0 5px 10px rgba(37, 99, 235, 0.3);
  
//   &:hover:not(:disabled) {
//     background: linear-gradient(to right, #1d4ed8, #172554);
//     transform: translateY(-3px);
//     box-shadow: 0 7px 12px rgba(37, 99, 235, 0.4);
//   }
  
//   &:active:not(:disabled) {
//     transform: translateY(0);
//     box-shadow: 0 3px 6px rgba(37, 99, 235, 0.3);
//   }
  
//   &:disabled {
//     background: linear-gradient(to right, #9ca3af, #6b7280);
//     cursor: not-allowed;
//     opacity: 0.7;
//     box-shadow: none;
//   }
// `;


// const ButtonIcon = styled.i`
//   margin-right: 0.5rem;
//   font-size: 1rem;
// `;

// const RequiredMark = styled.span`
//   color: #ef4444;
//   margin-left: 2px;
// `;

// const StudentForm = ({ showNotification }) => {
//   const [formData, setFormData] = useState({});
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [isFormValid, setIsFormValid] = useState(false);
//   const [fieldsWithErrors, setFieldsWithErrors] = useState({});

//   const fields = [
//     { name: 'fullName', label: 'Full Name', type: 'text', required: true },
//     { name: 'fatherName', label: "Father's Name", type: 'text', required: true },
//     { name: 'mobileNo', label: 'Mobile Number', type: 'tel', required: true, pattern: '[0-9]{10}', title: 'Enter a 10-digit mobile number' },
//     { name: 'email', label: 'Email', type: 'email', required: true },
//     { name: 'address', label: 'Address', type: 'text', required: true, colSpan: true },
//     { name: 'landmark', label: 'Landmark', type: 'text', required: true },
//     { name: 'city', label: 'City', type: 'text', required: true },
//     { name: 'state', label: 'State', type: 'text', required: true },
//     { name: 'country', label: 'Country', type: 'text', required: true, defaultValue: 'India' },
//     { name: 'pincode', label: 'Pincode', type: 'text', required: true, pattern: '[0-9]{6}', title: 'Enter a 6-digit pincode' },
//     { name: 'dob', label: 'Date of Birth', type: 'date', required: true },
//     { name: 'runningStandard', label: 'Current Standard', type: 'text', required: true },
//     { name: 'previousStandard', label: 'Previous Standard', type: 'text', required: true },
//     { name: 'schoolName', label: 'School Name', type: 'text', required: true },
//     { name: 'booksRequested', label: 'Books Requested', type: 'number', required: true, min: '1' },
//     { name: 'result', label: 'Result (PDF/JPG/PNG, max 5MB)', type: 'file', accept: '.pdf,.jpg,.jpeg,.png', required: true, colSpan: true },
//   ];

//   useEffect(() => {
//     const checkFormValidity = () => {
//       const errors = {};
//       let allValid = true;
      
//       fields.forEach(field => {
//         if (!field.required) return;
        
//         const value = formData[field.name];
//         let isValid = true;
        
//         if (!value) {
//           isValid = false;
//         } else if (field.type === 'file') {
//           isValid = value.length > 0;
//         } else if (field.pattern) {
//           const regex = new RegExp(field.pattern);
//           isValid = regex.test(value);
//         }
        
//         if (!isValid) {
//           errors[field.name] = true;
//           allValid = false;
//         }
//       });
      
//       setFieldsWithErrors(errors);
//       setIsFormValid(allValid);
//     };
    
//     checkFormValidity();
//   }, [formData, fields]);

//   const handleInputChange = (e) => {
//     const { name, value, files, type } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: type === 'file' ? files : value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);
    
//     const data = new FormData();
    
//     Object.entries(formData).forEach(([key, value]) => {
//       if (value instanceof FileList) {
//         if (value.length > 0) {
//           data.append(key, value[0]);
//         }
//       } else {
//         data.append(key, value);
//       }
//     });

//     try {
//       const response = await submitStudentForm(data);
//       showNotification(`Form submitted successfully! Your student ID is: ${response.studentId}`, 'success');
//       setFormData({});
//       e.target.reset();
//     } catch (error) {
//       showNotification(error.response?.data?.msg || 'Submission failed', 'error');
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <FormContainer>
//       <FormCard>
//         <FormHeader>
//           <FormTitle>Student Book Request Form</FormTitle>
//           <FormSubtitle>Fill out this form to request books for your academic needs</FormSubtitle>
//         </FormHeader>
        
//         <form onSubmit={handleSubmit} encType="multipart/form-data">
//           <FormBody>
//             <FormGrid>
//               {fields.map(field => (
//                 <FormField key={field.name} $colSpan={field.colSpan}>
//                   <Label htmlFor={field.name}>
//                     {field.label}
//                     {field.required && <RequiredMark>*</RequiredMark>}
//                   </Label>
                  
//                   {field.type === 'file' ? (
//                     <FileUploadContainer>
//                       <FileInput
//                         id={field.name}
//                         type="file"
//                         name={field.name}
//                         accept={field.accept}
//                         required={field.required}
//                         onChange={handleInputChange}
//                       />
//                       <FileDescription>
//                         Please upload your latest academic result document (Maximum file size: 5MB)
//                       </FileDescription>
//                     </FileUploadContainer>
//                   ) : (
//                     <Input
//                       id={field.name}
//                       type={field.type}
//                       name={field.name}
//                       required={field.required}
//                       pattern={field.pattern}
//                       title={field.title}
//                       min={field.min}
//                       onChange={handleInputChange}
//                       value={formData[field.name] || ''}
//                       defaultValue={field.defaultValue}
//                       placeholder={`Enter ${field.label.toLowerCase()}`}
//                     />
//                   )}
//                 </FormField>
//               ))}
//             </FormGrid>
//           </FormBody>
          
//           <FormFooter>
//             <SubmitButton
//               type="submit"
//               disabled={isSubmitting || !isFormValid}
//             >
//               {isSubmitting ? (
//                 <>
//                   <ButtonIcon className="fas fa-spinner fa-spin" /> Processing...
//                 </>
//               ) : (
//                 <>
//                   <ButtonIcon className="fas fa-paper-plane" /> Submit Request
//                 </>
//               )}
//             </SubmitButton>
//           </FormFooter>
//         </form>
//       </FormCard>
//     </FormContainer>
//   );
// };

// export default StudentForm;



// import { useState, useEffect } from 'react';
// import styled, { keyframes } from 'styled-components';
// import { submitStudentForm } from '../api';

// // Glassmorphism background
// const GlassBackground = styled.div`
//   min-height: 100vh;
//   background: linear-gradient(135deg, #e0e7ff 0%, #f0fdfa 100%);
//   display: flex;
//   align-items: flex-start;
//   justify-content: center;
//   padding: 2rem 0;
// `;


// // Card with glass effect
// const FormCard = styled.div`
//   background: rgba(255,255,255,0.85);
//   border-radius: 2rem;
//   box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.18);
//   backdrop-filter: blur(10px);
//   border: 1.5px solid rgba(255,255,255,0.22);
//   overflow: hidden;
//   width: 100vw;           /* Full viewport width */
//   max-width: none;        /* Remove max width */
//   margin: 0;
//   padding: 0;
//   box-sizing: border-box;
// `;


// const FormHeader = styled.div`
//   background: linear-gradient(90deg, #6366f1 0%, #06b6d4 100%);
//   padding: 2.5rem 2rem 2rem 2rem;
//   border-bottom: 1px solid rgba(0,0,0,0.04);
//   text-align: center;
// `;

// const FormTitle = styled.h2`
//   font-size: 2.2rem;
//   color: #fff;
//   font-weight: 800;
//   margin: 0;
//   letter-spacing: 1px;
//   text-shadow: 0 2px 8px rgba(0,0,0,0.08);
// `;

// const FormSubtitle = styled.p`
//   color: #e0e7ff;
//   margin-top: 0.7rem;
//   font-size: 1.1rem;
//   font-weight: 500;
// `;

// const FormBody = styled.div`
//   padding: 2.5rem 2rem 1.5rem 2rem;
//   @media (max-width: 900px) {
//     padding: 2rem 1rem 1rem 1rem;
//   }
//   @media (max-width: 640px) {
//     padding: 1.5rem 0.7rem;
//   }
// `;

// const FormGrid = styled.div`
//   display: grid;
//   grid-template-columns: repeat(5, 1fr);
//   gap: 1.5rem;

//   @media (max-width: 1400px) {
//     grid-template-columns: repeat(4, 1fr);
//   }
//   @media (max-width: 1100px) {
//     grid-template-columns: repeat(3, 1fr);
//   }
//   @media (max-width: 900px) {
//     grid-template-columns: repeat(2, 1fr);
//   }
//   @media (max-width: 600px) {
//     grid-template-columns: 1fr;
//   }
// `;

// const FormField = styled.div`
//   grid-column: ${props => props.$colSpan ? 'span 5' : 'span 1'};
//   box-sizing: border-box;
//   padding: 0.5rem 0.5rem 1.2rem 0.5rem;
//   background: transparent;

//   @media (max-width: 1400px) {
//     grid-column: ${props => props.$colSpan ? 'span 4' : 'span 1'};
//   }
//   @media (max-width: 1100px) {
//     grid-column: ${props => props.$colSpan ? 'span 3' : 'span 1'};
//   }
//   @media (max-width: 900px) {
//     grid-column: ${props => props.$colSpan ? 'span 2' : 'span 1'};
//   }
//   @media (max-width: 600px) {
//     grid-column: span 1;
//   }
// `;


// const Label = styled.label`
//   display: block;
//   font-size: 1rem;
//   font-weight: 700;
//   color: #334155;
//   margin-bottom: 0.5rem;
//   padding: 0.4rem 0.8rem;
//   border: 2px solid #e0e7ff;
//   border-radius: 0.5rem;
//   background: #f9fafb;
//   box-sizing: border-box;
// `;

// const InputWrapper = styled.div`
//   position: relative;
// `;

// const InputIcon = styled.i`
//   position: absolute;
//   left: 1rem;
//   top: 50%;
//   transform: translateY(-50%);
//   color: #6366f1;
//   font-size: 1.1rem;
//   opacity: 0.7;
// `;

// const Input = styled.input`
//   width: 100%;
//   padding: 0.9rem 1.2rem;
//   border: 2px solid #d1d5db;
//   border-radius: 0.6rem;
//   font-size: 1rem;
//   transition: all 0.3s ease;
//   background-color: #ffffff;
//   margin-top: 0.2rem;
//   box-sizing: border-box;

//   &:focus {
//     outline: none;
//     border-color: #2563eb;
//     box-shadow: 0 0 0 4px rgba(37, 99, 235, 0.25);
//   }
//   &:hover:not(:focus) {
//     border-color: #94a3b8;
//   }
// `;

// const FileUploadContainer = styled.div`
//   border: 2px dashed #a5b4fc;
//   border-radius: 0.7rem;
//   padding: 1.2rem;
//   background: rgba(236, 253, 245, 0.5);
//   text-align: center;
//   margin-bottom: 0.5rem;
//   transition: border 0.2s, background 0.2s;
//   &:hover {
//     border-color: #06b6d4;
//     background: rgba(6,182,212,0.07);
//   }
// `;

// const FileInput = styled.input`
//   width: 100%;
//   cursor: pointer;
//   font-size: 1rem;
//   color: #334155;
// `;

// const FileDescription = styled.p`
//   font-size: 0.92rem;
//   color: #64748b;
//   margin-top: 0.75rem;
// `;

// const ErrorText = styled.div`
//   color: #ef4444;
//   font-size: 0.93rem;
//   margin-top: 0.2rem;
//   font-weight: 500;
// `;

// const FormFooter = styled.div`
//   padding: 1.5rem 2rem;
//   background: rgba(236, 253, 245, 0.7);
//   border-top: 1px solid #e0e7ff;
//   @media (max-width: 640px) {
//     padding: 1.3rem 0.7rem;
//   }
// `;

// const gradientAnimation = keyframes`
//   0% { background-position: 0% 50%;}
//   100% { background-position: 100% 50%;}
// `;

// const SubmitButton = styled.button`
//   width: 100%;
//   background: linear-gradient(90deg, #6366f1 0%, #06b6d4 100%);
//   background-size: 200% 200%;
//   animation: ${gradientAnimation} 2.5s linear infinite alternate;
//   color: #fff;
//   font-weight: 700;
//   padding: 1.15rem;
//   border-radius: 0.7rem;
//   font-size: 1.25rem;
//   border: none;
//   cursor: pointer;
//   box-shadow: 0 6px 18px rgba(99,102,241,0.18);
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   gap: 0.7rem;
//   letter-spacing: 0.03em;
//   transition: background 0.3s, transform 0.2s, box-shadow 0.2s;
//   &:hover:not(:disabled) {
//     background: linear-gradient(90deg, #06b6d4 0%, #6366f1 100%);
//     transform: translateY(-2px) scale(1.01);
//     box-shadow: 0 10px 24px rgba(99,102,241,0.24);
//   }
//   &:disabled {
//     background: linear-gradient(90deg, #a5b4fc 0%, #bae6fd 100%);
//     cursor: not-allowed;
//     opacity: 0.7;
//     box-shadow: none;
//   }
// `;

// const ButtonIcon = styled.i`
//   font-size: 1.2rem;
// `;

// const RequiredMark = styled.span`
//   color: #ef4444;
//   margin-left: 2px;
// `;

// const ICONS = {
//   fullName: "fas fa-user",
//   fatherName: "fas fa-user-tie",
//   mobileNo: "fas fa-phone-alt",
//   email: "fas fa-envelope",
//   address: "fas fa-map-marker-alt",
//   landmark: "fas fa-map-pin",
//   city: "fas fa-city",
//   state: "fas fa-flag",
//   country: "fas fa-globe-asia",
//   pincode: "fas fa-mail-bulk",
//   dob: "fas fa-birthday-cake",
//   runningStandard: "fas fa-graduation-cap",
//   previousStandard: "fas fa-graduation-cap",
//   schoolName: "fas fa-school",
//   booksRequested: "fas fa-book",
//   result: "fas fa-file-upload",
// };

// const StudentForm = ({ showNotification }) => {
//   const [formData, setFormData] = useState({});
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [isFormValid, setIsFormValid] = useState(false);
//   const [fieldsWithErrors, setFieldsWithErrors] = useState({});

//   const fields = [
//     { name: 'fullName', label: 'Full Name', type: 'text', required: true },
//     { name: 'fatherName', label: "Father's Name", type: 'text', required: true },
//     { name: 'mobileNo', label: 'Mobile Number', type: 'tel', required: true, pattern: '[0-9]{10}', title: 'Enter a 10-digit mobile number' },
//     { name: 'email', label: 'Email', type: 'email', required: true },
//     { name: 'address', label: 'Address', type: 'text', required: true, colSpan: true },
//     { name: 'landmark', label: 'Landmark', type: 'text', required: true },
//     { name: 'city', label: 'City', type: 'text', required: true },
//     { name: 'state', label: 'State', type: 'text', required: true },
//     { name: 'country', label: 'Country', type: 'text', required: true, defaultValue: 'India' },
//     { name: 'pincode', label: 'Pincode', type: 'text', required: true, pattern: '[0-9]{6}', title: 'Enter a 6-digit pincode' },
//     { name: 'dob', label: 'Date of Birth', type: 'date', required: true },
//     { name: 'runningStandard', label: 'Current Standard', type: 'text', required: true },
//     { name: 'previousStandard', label: 'Previous Standard', type: 'text', required: true },
//     { name: 'schoolName', label: 'School Name', type: 'text', required: true },
//     { name: 'booksRequested', label: 'Books Requested', type: 'number', required: true, min: '1' },
//     { name: 'result', label: 'Result (PDF/JPG/PNG, max 5MB)', type: 'file', accept: '.pdf,.jpg,.jpeg,.png', required: true, colSpan: true },
//   ];

//   useEffect(() => {
//     const checkFormValidity = () => {
//       const errors = {};
//       let allValid = true;
//       fields.forEach(field => {
//         if (!field.required) return;
//         const value = formData[field.name];
//         let isValid = true;
//         if (!value) {
//           isValid = false;
//         } else if (field.type === 'file') {
//           isValid = value.length > 0;
//         } else if (field.pattern) {
//           const regex = new RegExp(field.pattern);
//           isValid = regex.test(value);
//         }
//         if (!isValid) {
//           errors[field.name] = true;
//           allValid = false;
//         }
//       });
//       setFieldsWithErrors(errors);
//       setIsFormValid(allValid);
//     };
//     checkFormValidity();
//   }, [formData, fields]);

//   const handleInputChange = (e) => {
//     const { name, value, files, type } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: type === 'file' ? files : value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);
//     const data = new FormData();
//     Object.entries(formData).forEach(([key, value]) => {
//       if (value instanceof FileList) {
//         if (value.length > 0) {
//           data.append(key, value[0]);
//         }
//       } else {
//         data.append(key, value);
//       }
//     });
//     try {
//       const response = await submitStudentForm(data);
//       showNotification(`Form submitted successfully! Your student ID is: ${response.studentId}`, 'success');
//       setFormData({});
//       e.target.reset();
//     } catch (error) {
//       showNotification(error.response?.data?.msg || 'Submission failed', 'error');
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <GlassBackground>
//       <FormCard>
//         <FormHeader>
//           <FormTitle>
//             <i className="fas fa-book-reader" style={{marginRight:10}}></i>
//             Student Book Request Form
//           </FormTitle>
//           <FormSubtitle>
//             Fill out this form to request books for your academic needs
//           </FormSubtitle>
//         </FormHeader>
//         <form onSubmit={handleSubmit} encType="multipart/form-data" autoComplete="off">
//           <FormBody>
//             <FormGrid>
//               {fields.map(field => (
//                 <FormField key={field.name} $colSpan={field.colSpan}>
//                   <Label htmlFor={field.name}>
//                     {field.label}
//                     {field.required && <RequiredMark>*</RequiredMark>}
//                   </Label>
//                   {field.type === 'file' ? (
//                     <FileUploadContainer>
//                       <FileInput
//                         id={field.name}
//                         type="file"
//                         name={field.name}
//                         accept={field.accept}
//                         required={field.required}
//                         onChange={handleInputChange}
//                         className={fieldsWithErrors[field.name] ? 'error' : ''}
//                       />
//                       <FileDescription>
//                         Please upload your latest academic result document (Maximum file size: 5MB)
//                       </FileDescription>
//                       {fieldsWithErrors[field.name] && (
//                         <ErrorText>File is required</ErrorText>
//                       )}
//                     </FileUploadContainer>
//                   ) : (
//                     <InputWrapper>
//                       {/* <InputIcon className={ICONS[field.name]} /> */}
//                       <Input
//                         id={field.name}
//                         type={field.type}
//                         name={field.name}
//                         required={field.required}
//                         pattern={field.pattern}
//                         title={field.title}
//                         min={field.min}
//                         onChange={handleInputChange}
//                         value={formData[field.name] || ''}
//                         defaultValue={field.defaultValue}
//                         placeholder={`Enter ${field.label.toLowerCase()}`}
//                         className={fieldsWithErrors[field.name] ? 'error' : ''}
//                         autoComplete="off"
//                       />
//                       {fieldsWithErrors[field.name] && (
//                         <ErrorText>
//                           {field.title || `${field.label} is required`}
//                         </ErrorText>
//                       )}
//                     </InputWrapper>
//                   )}
//                 </FormField>
//               ))}
//             </FormGrid>
//           </FormBody>
//           <FormFooter>
//             <SubmitButton
//               type="submit"
//               disabled={isSubmitting || !isFormValid}
//             >
//               {isSubmitting ? (
//                 <>
//                   <ButtonIcon className="fas fa-spinner fa-spin" /> Processing...
//                 </>
//               ) : (
//                 <>
//                   <ButtonIcon className="fas fa-paper-plane" /> Submit Request
//                 </>
//               )}
//             </SubmitButton>
//           </FormFooter>
//         </form>
//       </FormCard>
//     </GlassBackground>
//   );
// };

// export default StudentForm;



import { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { submitStudentForm } from '../api';

// Glassmorphism background
const GlassBackground = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #e0e7ff 0%, #f0fdfa 100%);
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 2rem 0;
`;

// Card with glass effect
const FormCard = styled.div`
  background: rgba(255, 255, 255, 0.85);
  border-radius: 2rem;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.18);
  backdrop-filter: blur(10px);
  border: 1.5px solid rgba(255, 255, 255, 0.22);
  overflow: hidden;
  width: 100vw;
  max-width: none;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
`;

const FormHeader = styled.div`
  background: linear-gradient(90deg, #6366f1 0%, #06b6d4 100%);
  padding: 2.5rem 2rem 2rem 2rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.04);
  text-align: center;
`;

const FormTitle = styled.h2`
  font-size: 2.2rem;
  color: #fff;
  font-weight: 800;
  margin: 0;
  letter-spacing: 1px;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
`;

const FormSubtitle = styled.p`
  color: #e0e7ff;
  margin-top: 0.7rem;
  font-size: 1.1rem;
  font-weight: 500;
`;

const FormBody = styled.div`
  padding: 2.5rem 2rem 1.5rem 2rem;
  @media (max-width: 900px) {
    padding: 2rem 1rem 1rem 1rem;
  }
  @media (max-width: 640px) {
    padding: 1.5rem 0.7rem;
  }
`;

const FormGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1.5rem;

  @media (max-width: 1400px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media (max-width: 1100px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const FormField = styled.div`
  grid-column: ${props => (props.$colSpan ? 'span 5' : 'span 1')};
  box-sizing: border-box;
  padding: 0.5rem 0.5rem 1.2rem 0.5rem;
  background: transparent;

  @media (max-width: 1400px) {
    grid-column: ${props => (props.$colSpan ? 'span 4' : 'span 1')};
  }
  @media (max-width: 1100px) {
    grid-column: ${props => (props.$colSpan ? 'span 3' : 'span 1')};
  }
  @media (max-width: 900px) {
    grid-column: ${props => (props.$colSpan ? 'span 2' : 'span 1')};
  }
  @media (max-width: 600px) {
    grid-column: span 1;
  }
`;

const Label = styled.label`
  display: block;
  font-size: 1rem;
  font-weight: 700;
  color: #334155;
  margin-bottom: 0.5rem;
  padding: 0.4rem 0.8rem;
  border: 2px solid #e0e7ff;
  border-radius: 0.5rem;
  background: #f9fafb;
  box-sizing: border-box;
`;

const InputWrapper = styled.div`
  position: relative;
`;

const InputIcon = styled.i`
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  color: #6366f1;
  font-size: 1.1rem;
  opacity: 0.7;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.9rem 1.2rem;
  border: 2px solid #d1d5db;
  border-radius: 0.6rem;
  font-size: 1rem;
  transition: all 0.3s ease;
  background-color: #ffffff;
  margin-top: 0.2rem;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-color: #2563eb;
    box-shadow: 0 0 0 4px rgba(37, 99, 235, 0.25);
  }
  &:hover:not(:focus) {
    border-color: #94a3b8;
  }
`;

const FileUploadContainer = styled.div`
  border: 2px dashed #a5b4fc;
  border-radius: 0.7rem;
  padding: 1.2rem;
  background: rgba(236, 253, 245, 0.5);
  text-align: center;
  margin-bottom: 0.5rem;
  transition: border 0.2s, background 0.2s;
  &:hover {
    border-color: #06b6d4;
    background: rgba(6, 182, 212, 0.07);
  }
`;

const FileInput = styled.input`
  width: 100%;
  cursor: pointer;
  font-size: 1rem;
  color: #334155;
`;

const FileDescription = styled.p`
  font-size: 0.92rem;
  color: #64748b;
  margin-top: 0.75rem;
`;

const ErrorText = styled.div`
  color: #ef4444;
  font-size: 0.93rem;
  margin基本的案納品目錄 margin-top: 0.2rem;
  font-weight: 500;
`;

const SuccessMessage = styled.div`
  background: rgba(187, 247, 208, 0.9);
  border: 2px solid #4ade80;
  border-radius: 0.7rem;
  padding: 1.5rem;
  margin: 1.5rem 2rem;
  text-align: center;
  color: #166534;
  font-size: 1rem;
  font-weight: 600;
`;

const FormFooter = styled.div`
  padding: 1.5rem 2rem;
  background: rgba(236, 253, 245, 0.7);
  border-top: 1px solid #e0e7ff;
  @media (max-width: 640px) {
    padding: 1.3rem 0.7rem;
  }
`;

const gradientAnimation = keyframes`
  0% { background-position: 0% 50%; }
  100% { background-position: 100% 50%; }
`;

const SubmitButton = styled.button`
  width: 100%;
  background: linear-gradient(90deg, #6366f1 0%, #06b6d4 100%);
  background-size: 200% 200%;
  animation: ${gradientAnimation} 2.5s linear infinite alternate;
  color: #fff;
  font-weight: 700;
  padding: 1.15rem;
  border-radius: 0.7rem;
  font-size: 1.25rem;
  border: none;
  cursor: pointer;
  box-shadow: 0 6px 18px rgba(99, 102, 241, 0.18);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.7rem;
  letter-spacing: 0.03em;
  transition: background 0.3s, transform 0.2s, box-shadow 0.2s;
  &:hover:not(:disabled) {
    background: linear-gradient(90deg, #06b6d4 0%, #6366f1 100%);
    transform: translateY(-2px) scale(1.01);
    box-shadow: 0 10px 24px rgba(99, 102, 241, 0.24);
  }
  &:disabled {
    background: linear-gradient(90deg, #a5b4fc 0%, #bae6fd 100%);
    cursor: not-allowed;
    opacity: 0.7;
    box-shadow: none;
  }
`;

const ButtonIcon = styled.i`
  font-size: 1.2rem;
`;

const RequiredMark = styled.span`
  color: #ef4444;
  margin-left: 2px;
`;

const ICONS = {
  fullName: 'fas fa-user',
  fatherName: 'fas fa-user-tie',
  mobileNo: 'fas fa-phone-alt',
  email: 'fas fa-envelope',
  address: 'fas fa-map-marker-alt',
  landmark: 'fas fa-map-pin',
  city: 'fas fa-city',
  state: 'fas fa-flag',
  country: 'fas fa-globe-asia',
  pincode: 'fas fa-mail-bulk',
  dob: 'fas fa-birthday-cake',
  runningStandard: 'fas fa-graduation-cap',
  previousStandard: 'fas fa-graduation-cap',
  schoolName: 'fas fa-school',
  booksRequested: 'fas fa-book',
  result: 'fas fa-file-upload',
};

const StudentForm = ({ showNotification }) => {
  const [formData, setFormData] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);
  const [fieldsWithErrors, setFieldsWithErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');

  const fields = [
    { name: 'fullName', label: 'Full Name', type: 'text', required: true },
    { name: 'fatherName', label: "Father's Name", type: 'text', required: true },
    { name: 'mobileNo', label: 'Mobile Number', type: 'tel', required: true, pattern: '[0-9]{10}', title: 'Enter a 10-digit mobile number' },
    { name: 'email', label: 'Email', type: 'email', required: true },
    { name: 'address', label: 'Address', type: 'text', required: true, colSpan: true },
    { name: 'landmark', label: 'Landmark', type: 'text', required: true },
    { name: 'city', label: 'City', type: 'text', required: true },
    { name: 'state', label: 'State', type: 'text', required: true },
    { name: 'country', label: 'Country', type: 'text', required: true, defaultValue: 'India' },
    { name: 'pincode', label: 'Pincode', type: 'text', required: true, pattern: '[0-9]{6}', title: 'Enter a 6-digit pincode' },
    { name: 'dob', label: 'Date of Birth', type: 'date', required: true },
    { name: 'runningStandard', label: 'Current Standard', type: 'text', required: true },
    { name: 'previousStandard', label: 'Previous Standard', type: 'text', required: true },
    { name: 'schoolName', label: 'School Name', type: 'text', required: true },
    { name: 'booksRequested', label: 'Books Requested', type: 'number', required: true, min: '1' },
    { name: 'result', label: 'Result (PDF/JPG/PNG, max 5MB)', type: 'file', accept: '.pdf,.jpg,.jpeg,.png', required: true, colSpan: true },
  ];

  useEffect(() => {
    const checkFormValidity = () => {
      const errors = {};
      let allValid = true;
      fields.forEach(field => {
        if (!field.required) return;
        const value = formData[field.name];
        let isValid = true;
        if (!value) {
          isValid = false;
        } else if (field.type === 'file') {
          isValid = value.length > 0;
        } else if (field.pattern) {
          const regex = new RegExp(field.pattern);
          isValid = regex.test(value);
        }
        if (!isValid) {
          errors[field.name] = true;
          allValid = false;
        }
      });
      setFieldsWithErrors(errors);
      setIsFormValid(allValid);
    };
    checkFormValidity();
  }, [formData]);

  const handleInputChange = (e) => {
    const { name, value, files, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'file' ? files : value,
    }));
    setSuccessMessage(''); // Clear success message on input change
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSuccessMessage('');
    const data = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      if (value instanceof FileList) {
        if (value.length > 0) {
          data.append(key, value[0]);
        }
      } else {
        data.append(key, value);
      }
    });
    try {
      const response = await submitStudentForm(data);
      const message = `Form submitted successfully! Your student ID is: ${response.studentId}. Please save this ID for future reference.`;
      setSuccessMessage(message);
      showNotification(message, 'success');
      setFormData({});
      e.target.reset();
    } catch (error) {
      showNotification(error.response?.data?.msg || 'Submission failed', 'error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <GlassBackground>
      <FormCard>
        <FormHeader>
          <FormTitle>
            <i className="fas fa-book-reader" style={{ marginRight: 10 }}></i>
            Student Book Request Form
          </FormTitle>
          <FormSubtitle>
            Fill out this form to request books for your academic needs
          </FormSubtitle>
        </FormHeader>
        <form onSubmit={handleSubmit} encType="multipart/form-data" autoComplete="off">
          <FormBody>
            <FormGrid>
              {fields.map(field => (
                <FormField key={field.name} $colSpan={field.colSpan}>
                  <Label htmlFor={field.name}>
                    {field.label}
                    {field.required && <RequiredMark>*</RequiredMark>}
                  </Label>
                  {field.type === 'file' ? (
                    <FileUploadContainer>
                      <FileInput
                        id={field.name}
                        type="file"
                        name={field.name}
                        accept={field.accept}
                        required={field.required}
                        onChange={handleInputChange}
                        className={fieldsWithErrors[field.name] ? 'error' : ''}
                      />
                      <FileDescription>
                        Please upload your latest academic result document (Maximum file size: 5MB)
                      </FileDescription>
                      {fieldsWithErrors[field.name] && (
                        <ErrorText>File is required</ErrorText>
                      )}
                    </FileUploadContainer>
                  ) : (
                    <InputWrapper>
                      {/* <InputIcon className={ICONS[field.name]} /> */}
                      <Input
                        id={field.name}
                        type={field.type}
                        name={field.name}
                        required={field.required}
                        pattern={field.pattern}
                        title={field.title}
                        min={field.min}
                        onChange={handleInputChange}
                        value={formData[field.name] || ''}
                        defaultValue={field.defaultValue}
                        placeholder={`Enter ${field.label.toLowerCase()}`}
                        className={fieldsWithErrors[field.name] ? 'error' : ''}
                        autoComplete="off"
                      />
                      
                      {/* {fieldsWithErrors[field.name] && (
                        <ErrorText>
                          {field.title || `${field.label} is required`}
                        </ErrorText>
                      )} */}
                    </InputWrapper>
                  )}
                  
                </FormField>
                
              ))}
            </FormGrid>
          </FormBody>
          {successMessage && (
            <SuccessMessage>
              <i className="fas fa-check-circle mr-2"></i>
              {successMessage}
            </SuccessMessage>
          )}
          <FormFooter>
            <SubmitButton
              type="submit"
              disabled={isSubmitting || !isFormValid}
            >
              {isSubmitting ? (
                <>
                  <ButtonIcon className="fas fa-spinner fa-spin" /> Processing...
                </>
              ) : (
                <>
                  <ButtonIcon className="fas fa-paper-plane" /> Submit Request
                </>
              )}
            </SubmitButton>
          </FormFooter>
        </form>
      </FormCard>
    </GlassBackground>
  );
};

export default StudentForm;
