// import { useNavigate } from 'react-router-dom';
// import { useEffect, useState } from 'react';
// import styled from 'styled-components';
// import { clearToken, isLoggedIn, validateToken } from '../api';

// // Styled Components
// const NavContainer = styled.nav`
//   background: linear-gradient(to right, #4f46e5, #3b82f6);
//   box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
//   position: sticky;
//   top: 0;
//   z-index: 100;
//   transition: all 0.3s ease;
// `;

// const NavContent = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   padding: 1rem 2rem;
//   max-width: 1200px;
//   margin: 0 auto;

//   @media (max-width: 768px) {
//     flex-direction: column;
//     padding: 1rem;
//   }
// `;

// const Logo = styled.div`
//   display: flex;
//   align-items: center;
//   gap: 0.75rem;
//   font-weight: 700;
//   cursor: pointer;
//   transition: transform 0.2s ease;

//   &:hover {
//     transform: translateY(-2px);
//   }

//   @media (max-width: 768px) {
//     margin-bottom: 1rem;
//   }
// `;

// const LogoIcon = styled.i`
//   font-size: 1.5rem;
//   color: #f0f9ff;
// `;

// const LogoText = styled.h1`
//   font-size: 1.5rem;
//   color: white;
//   letter-spacing: 0.5px;

//   @media (max-width: 640px) {
//     font-size: 1.25rem;
//   }
// `;

// const NavLinks = styled.div`
//   display: flex;
//   gap: 0.5rem;
//   align-items: center;

//   @media (max-width: 640px) {
//     flex-wrap: wrap;
//     justify-content: center;
//     gap: 0.5rem;
//   }
// `;

// const NavButton = styled.button`
//   background: ${props => props.$active ? 'rgba(255, 255, 255, 0.2)' : 'transparent'};
//   color: white;
//   padding: 0.5rem 1rem;
//   border-radius: 0.375rem;
//   font-weight: 500;
//   display: flex;
//   align-items: center;
//   gap: 0.5rem;
//   border: none;
//   cursor: pointer;
//   transition: all 0.2s ease;
//   box-shadow: ${props => props.$active ? '0 2px 4px rgba(0, 0, 0, 0.1)' : 'none'};

//   &:hover {
//     background: rgba(255, 255, 255, 0.15);
//     transform: translateY(-2px);
//   }

//   @media (max-width: 640px) {
//     font-size: 0.875rem;
//     padding: 0.5rem 0.75rem;
//   }
// `;

// const LogoutButton = styled(NavButton)`
//   background: #ef4444;
  
//   &:hover {
//     background: #dc2626;
//   }
// `;

// const NavIcon = styled.i`
//   font-size: 1rem;
// `;

// const Navbar = ({ showNotification }) => {
//   const navigate = useNavigate();
//   const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(isLoggedIn());
//   const [currentPath, setCurrentPath] = useState('');

//   useEffect(() => {
//     const updateNav = async () => {
//       const valid = await validateToken();
//       setIsAdminLoggedIn(valid);
//     };
//     updateNav();
    
//     // Set current path for active styling
//     setCurrentPath(window.location.pathname);
//   }, []);

//   const handleLogout = () => {
//     clearToken();
//     setIsAdminLoggedIn(false);
//     showNotification('Logged out successfully', 'success');
//     navigate('/');
//   };

//   const handleLogoClick = () => {
//     navigate('/');
//   };

//   const isActive = (path) => {
//     if (path === '/') return currentPath === path;
//     return currentPath.includes(path);
//   };

//   return (
//     <NavContainer>
//       <NavContent>
//         <Logo onClick={handleLogoClick}>
//           <LogoIcon className="fas fa-book-open" />
//           <LogoText>Book Issue System</LogoText>
//         </Logo>
        
//         <NavLinks>
//           <NavButton 
//             onClick={() => navigate('/')} 
//             $active={isActive('/')}
//           >
//             <NavIcon className="fas fa-home" />
//             Home
//           </NavButton>
          
//           <NavButton 
//             onClick={() => navigate(isAdminLoggedIn ? '/admin/dashboard' : '/admin/login')}
//             $active={isActive('/admin')}
//           >
//             <NavIcon className={`fas fa-${isAdminLoggedIn ? 'tachometer-alt' : 'user-shield'}`} />
//             {isAdminLoggedIn ? 'Dashboard' : 'Admin'}
//           </NavButton>
          
//           <NavButton 
//             onClick={() => navigate('/feedback')}
//             $active={isActive('/feedback')}
//           >
//             <NavIcon className="fas fa-comment" />
//             Feedback
//           </NavButton>
          
//           {isAdminLoggedIn && (
//             <LogoutButton onClick={handleLogout}>
//               <NavIcon className="fas fa-sign-out-alt" />
//               Logout
//             </LogoutButton>
//           )}
//         </NavLinks>
//       </NavContent>
//     </NavContainer>
//   );
// };

// export default Navbar;


// import { useNavigate } from 'react-router-dom';
// import { useEffect, useState } from 'react';
// import styled from 'styled-components';
// import { clearToken, isLoggedIn, validateToken } from '../api';

// // Styled Components
// const NavContainer = styled.nav`
//   background: linear-gradient(to right, #4f46e5, #3b82f6);
//   box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
//   position: sticky;
//   top: 0;
//   z-index: 100;
//   transition: all 0.3s ease;
// `;

// const NavContent = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   padding: 1rem 2rem;
//   max-width: 1200px;
//   margin: 0 auto;

//   @media (max-width: 768px) {
//     padding: 1rem;
//   }
// `;

// const Logo = styled.div`
//   display: flex;
//   align-items: center;
//   gap: 0.75rem;
//   font-weight: 700;
//   cursor: pointer;
//   transition: transform 0.2s ease;

//   &:hover {
//     transform: translateY(-2px);
//   }
// `;

// const LogoIcon = styled.i`
//   font-size: 1.5rem;
//   color: #f0f9ff;
// `;

// const LogoText = styled.h1`
//   font-size: 1.5rem;
//   color: white;
//   letter-spacing: 0.5px;

//   @media (max-width: 640px) {
//     font-size: 1.25rem;
//   }
// `;

// // Hamburger menu button
// const Hamburger = styled.button`
//   display: none;
//   background: none;
//   border: none;
//   cursor: pointer;
//   z-index: 120;
//   padding: 0.5rem;

//   @media (max-width: 768px) {
//     display: block;
//   }
// `;

// const HamburgerBar = styled.span`
//   display: block;
//   width: 26px;
//   height: 3px;
//   margin: 5px 0;
//   background: #fff;
//   border-radius: 2px;
//   transition: 0.3s;
//   position: relative;

//   ${({ open, index }) =>
//     open &&
//     (index === 0
//       ? `transform: rotate(45deg) translate(5px, 6px);`
//       : index === 1
//       ? `opacity: 0;`
//       : `transform: rotate(-45deg) translate(7px, -7px);`)}
// `;

// // Responsive NavLinks
// const NavLinks = styled.div`
//   display: flex;
//   gap: 0.5rem;
//   align-items: center;

//   @media (max-width: 768px) {
//     position: fixed;
//     left: 0;
//     top: 0;
//     height: 100vh;
//     width: 70vw;
//     min-width: 220px;
//     max-width: 320px;
//     background: linear-gradient(to bottom right, #4f46e5 80%, #3b82f6 100%);
//     flex-direction: column;
//     justify-content: flex-start;
//     align-items: flex-start;
//     padding: 2.5rem 1.5rem 1.5rem 1.5rem;
//     gap: 1rem;
//     box-shadow: 2px 0 16px rgba(0,0,0,0.18);
//     transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-120%)')};
//     transition: transform 0.35s cubic-bezier(0.4,0,0.2,1);
//     z-index: 110;
//   }
// `;

// const NavButton = styled.button`
//   background: ${props => props.$active ? 'rgba(255, 255, 255, 0.2)' : 'transparent'};
//   color: white;
//   padding: 0.5rem 1rem;
//   border-radius: 0.375rem;
//   font-weight: 500;
//   display: flex;
//   align-items: center;
//   gap: 0.5rem;
//   border: none;
//   cursor: pointer;
//   transition: all 0.2s ease;
//   box-shadow: ${props => props.$active ? '0 2px 4px rgba(0, 0, 0, 0.1)' : 'none'};
//   font-size: 1rem;

//   &:hover {
//     background: rgba(255, 255, 255, 0.15);
//     transform: translateY(-2px);
//   }

//   @media (max-width: 768px) {
//     width: 100%;
//     justify-content: flex-start;
//     font-size: 1.05rem;
//     padding: 0.7rem 1rem;
//     border-radius: 0.5rem;
//   }
// `;

// const LogoutButton = styled(NavButton)`
//   background: #ef4444;
//   &:hover {
//     background: #dc2626;
//   }
// `;

// const NavIcon = styled.i`
//   font-size: 1rem;
// `;

// const Backdrop = styled.div`
//   display: none;
//   @media (max-width: 768px) {
//     display: ${({ open }) => (open ? 'block' : 'none')};
//     position: fixed;
//     left: 0; top: 0; right: 0; bottom: 0;
//     background: rgba(0,0,0,0.3);
//     z-index: 105;
//   }
// `;

// const Navbar = ({ showNotification }) => {
//   const navigate = useNavigate();
//   const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(isLoggedIn());
//   const [currentPath, setCurrentPath] = useState('');
//   const [menuOpen, setMenuOpen] = useState(false);

//   useEffect(() => {
//     const updateNav = async () => {
//       const valid = await validateToken();
//       setIsAdminLoggedIn(valid);
//     };
//     updateNav();
//     setCurrentPath(window.location.pathname);

//     // Close menu on route change
//     const handleRouteChange = () => setMenuOpen(false);
//     window.addEventListener('popstate', handleRouteChange);
//     return () => window.removeEventListener('popstate', handleRouteChange);
//   }, []);

//   const handleLogout = () => {
//     clearToken();
//     setIsAdminLoggedIn(false);
//     showNotification('Logged out successfully', 'success');
//     setMenuOpen(false);
//     navigate('/');
//   };

//   const handleLogoClick = () => {
//     navigate('/');
//     setMenuOpen(false);
//   };

//   const isActive = (path) => {
//     if (path === '/') return currentPath === path;
//     return currentPath.includes(path);
//   };

//   // Close menu when clicking backdrop
//   const handleBackdropClick = () => setMenuOpen(false);

//   return (
//     <NavContainer>
//       <NavContent>
//         <Logo onClick={handleLogoClick}>
//           <LogoIcon className="fas fa-book-open" />
//           <LogoText>Book Issue System</LogoText>
//         </Logo>

//         <Hamburger
//           aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
//           aria-expanded={menuOpen}
//           aria-controls="main-navigation"
//           onClick={() => setMenuOpen(v => !v)}
//         >
//           {[0,1,2].map(i => (
//             <HamburgerBar key={i} open={menuOpen} index={i} />
//           ))}
//         </Hamburger>

//         <NavLinks open={menuOpen} id="main-navigation">
//           <NavButton 
//             onClick={() => {navigate('/'); setMenuOpen(false);}}
//             $active={isActive('/')}
//           >
//             <NavIcon className="fas fa-home" />
//             Home
//           </NavButton>
          
//           {/* <NavButton 
//             onClick={() => {navigate(isAdminLoggedIn ? '/admin/dashboard' : '/admin/login'); setMenuOpen(false);}}
//             $active={isActive('/admin')}
//           >
//             <NavIcon className={`fas fa-${isAdminLoggedIn ? 'tachometer-alt' : 'user-shield'}`} />
//             {isAdminLoggedIn ? 'Dashboard' : 'Admin'}
//           </NavButton> */}
          
//           <NavButton 
//             onClick={() => {navigate('/feedback'); setMenuOpen(false);}}
//             $active={isActive('/feedback')}
//           >
//             <NavIcon className="fas fa-comment" />
//             Feedback
//           </NavButton>
          
//           {isAdminLoggedIn && (
//             <LogoutButton onClick={handleLogout}>
//               <NavIcon className="fas fa-sign-out-alt" />
//               Logout
//             </LogoutButton>
//           )}
//         </NavLinks>
//       </NavContent>
//       <Backdrop open={menuOpen} onClick={handleBackdropClick} />
//     </NavContainer>
//   );
// };

// export default Navbar;




// import { useNavigate } from 'react-router-dom';
// import { useEffect, useState } from 'react';
// import styled from 'styled-components';
// import { clearToken, isLoggedIn, validateToken } from '../api';

// // Styled Components
// const NavContainer = styled.nav`
//   background: linear-gradient(to right, #4f46e5, #3b82f6);
//   box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
//   position: sticky;
//   top: 0;
//   z-index: 100;
//   transition: all 0.3s ease;
// `;

// const NavContent = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   padding: 1rem 2rem;
//   max-width: 1200px;
//   margin: 0 auto;

//   @media (max-width: 768px) {
//     padding: 1rem;
//   }
// `;

// const Logo = styled.div`
//   display: flex;
//   align-items: center;
//   gap: 0.75rem;
//   font-weight: 700;
//   cursor: pointer;
//   transition: transform 0.2s ease;

//   &:hover {
//     transform: translateY(-2px);
//   }
// `;

// const LogoIcon = styled.i`
//   font-size: 1.5rem;
//   color: #f0f9ff;
// `;

// const LogoText = styled.h1`
//   font-size: 1.5rem;
//   color: white;
//   letter-spacing: 0.5px;

//   @media (max-width: 640px) {
//     font-size: 1.25rem;
//   }
// `;

// // Hamburger menu button
// const Hamburger = styled.button`
//   display: none;
//   background: none;
//   border: none;
//   cursor: pointer;
//   z-index: 120;
//   padding: 0.5rem;

//   @media (max-width: 768px) {
//     display: block;
//   }
// `;

// const HamburgerBar = styled.span`
//   display: block;
//   width: 26px;
//   height: 3px;
//   margin: 5px 0;
//   background: #fff;
//   border-radius: 2px;
//   transition: 0.3s;
//   position: relative;

//   ${({ open, index }) =>
//     open &&
//     (index === 0
//       ? `transform: rotate(45deg) translate(5px, 6px);`
//       : index === 1
//       ? `opacity: 0;`
//       : `transform: rotate(-45deg) translate(7px, -7px);`)}
// `;

// // Responsive NavLinks
// const NavLinks = styled.div`
//   display: flex;
//   gap: 0.5rem;
//   align-items: center;

//   @media (max-width: 768px) {
//     position: fixed;
//     left: 0;
//     top: 0;
//     height: 100vh;
//     width: 70vw;
//     min-width: 220px;
//     max-width: 320px;
//     background: linear-gradient(to bottom right, #4f46e5 80%, #3b82f6 100%);
//     flex-direction: column;
//     justify-content: flex-start;
//     align-items: flex-start;
//     padding: 2.5rem 1.5rem 1.5rem 1.5rem;
//     gap: 1rem;
//     box-shadow: 2px 0 16px rgba(0, 0, 0, 0.18);
//     transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-120%)')};
//     transition: transform 0.35s cubic-bezier(0.4, 0, 0.2, 1);
//     z-index: 110;
//   }
// `;

// const NavButton = styled.button`
//   background: ${props => (props.$active ? 'rgba(255, 255, 255, 0.2)' : 'transparent')};
//   color: white;
//   padding: 0.5rem 1rem;
//   border-radius: 0.375rem;
//   font-weight: 500;
//   display: flex;
//   align-items: center;
//   gap: 0.5rem;
//   border: none;
//   cursor: pointer;
//   transition: all 0.2s ease;
//   box-shadow: ${props => (props.$active ? '0 2px 4px rgba(0, 0, 0, 0.1)' : 'none')};
//   font-size: 1rem;

//   &:hover {
//     background: rgba(255, 255, 255, 0.15);
//     transform: translateY(-2px);
//   }

//   @media (max-width: 768px) {
//     width: 100%;
//     justify-content: flex-start;
//     font-size: 1.05rem;
//     padding: 0.7rem 1rem;
//     border-radius: 0.5rem;
//   }
// `;

// const LogoutButton = styled(NavButton)`
//   background: #ef4444;
//   &:hover {
//     background: #dc2626;
//   }
// `;

// const NavIcon = styled.i`
//   font-size: 1rem;
// `;

// const Backdrop = styled.div`
//   display: none;
//   @media (max-width: 768px) {
//     display: ${({ open }) => (open ? 'block' : 'none')};
//     position: fixed;
//     left: 0;
//     top: 0;
//     right: 0;
//     bottom: 0;
//     background: rgba(0, 0, 0, 0.3);
//     z-index: 105;
//   }
// `;

// const Navbar = ({ showNotification }) => {
//   const navigate = useNavigate();
//   const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(isLoggedIn());
//   const [currentPath, setCurrentPath] = useState('');
//   const [menuOpen, setMenuOpen] = useState(false);

//   useEffect(() => {
//     const updateNav = async () => {
//       const valid = await validateToken();
//       setIsAdminLoggedIn(valid);
//     };
//     updateNav();
//     setCurrentPath(window.location.pathname);

//     // Close menu on route change
//     const handleRouteChange = () => {
//       setCurrentPath(window.location.pathname);
//       setMenuOpen(false);
//     };
//     window.addEventListener('popstate', handleRouteChange);
//     return () => window.removeEventListener('popstate', handleRouteChange);
//   }, []);

//   const handleLogout = () => {
//     clearToken();
//     setIsAdminLoggedIn(false);
//     showNotification('Logged out successfully', 'success');
//     setMenuOpen(false);
//     navigate('/');
//   };

//   const handleLogoClick = () => {
//     navigate('/');
//     setMenuOpen(false);
//   };

//   const isActive = (path) => {
//     if (path === '/') return currentPath === path;
//     return currentPath.includes(path);
//   };

//   // Close menu when clicking backdrop
//   const handleBackdropClick = () => setMenuOpen(false);

//   return (
//     <NavContainer>
//       <NavContent>
//         <Logo onClick={handleLogoClick}>
//           <LogoIcon className="fas fa-book-open" />
//           <LogoText>Book Issue System</LogoText>
//         </Logo>

//         <Hamburger
//           aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
//           aria-expanded={menuOpen}
//           aria-controls="main-navigation"
//           onClick={() => setMenuOpen(v => !v)}
//         >
//           {[0, 1, 2].map(i => (
//             <HamburgerBar key={i} open={menuOpen} index={i} />
//           ))}
//         </Hamburger>

//         <NavLinks open={menuOpen} id="main-navigation">
//           <NavButton
//             onClick={() => {
//               navigate('/');
//               setMenuOpen(false);
//             }}
//             $active={isActive('/')}
//           >
//             <NavIcon className="fas fa-home" />
//             Home
//           </NavButton>

//           <NavButton
//             onClick={() => {
//               navigate('/feedback');
//               setMenuOpen(false);
//             }}
//             $active={isActive('/feedback')}
//           >
//             <NavIcon className="fas fa-comment" />
//             Feedback
//           </NavButton>

//           {isAdminLoggedIn && (
//             <>
//               <NavButton
//                 onClick={() => {
//                   navigate('/admin/dashboard');
//                   setMenuOpen(false);
//                 }}
//                 $active={isActive('/admin/dashboard')}
//               >
//                 <NavIcon className="fas fa-tachometer-alt" />
//                 Dashboard
//               </NavButton>
//               <LogoutButton onClick={handleLogout}>
//                 <NavIcon className="fas fa-sign-out-alt" />
//                 Logout
//               </LogoutButton>
//             </>
//           )}
//         </NavLinks>
//       </NavContent>
//       <Backdrop open={menuOpen} onClick={handleBackdropClick} />
//     </NavContainer>
//   );
// };

// export default Navbar;



import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { clearToken, isLoggedIn, validateToken } from '../api';

// Styled Components
const NavContainer = styled.nav`
  background: linear-gradient(to right, #4f46e5, #3b82f6);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  position: sticky;
  top: 0;
  z-index: 100;
  transition: all 0.3s ease;
`;

const NavContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-weight: 700;
  cursor: pointer;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-2px);
  }
`;

const LogoIcon = styled.i`
  font-size: 1.5rem;
  color: #f0f9ff;
`;

const LogoText = styled.h1`
  font-size: 1.5rem;
  color: white;
  letter-spacing: 0.5px;

  @media (max-width: 640px) {
    font-size: 1.25rem;
  }
`;

// Hamburger menu button
const Hamburger = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  z-index: 120;
  padding: 0.5rem;

  @media (max-width: 768px) {
    display: block;
  }
`;

const HamburgerBar = styled.span`
  display: block;
  width: 26px;
  height: 3px;
  margin: 5px 0;
  background: #fff;
  border-radius: 2px;
  transition: 0.3s;
  position: relative;

  ${({ open, index }) =>
    open &&
    (index === 0
      ? `transform: rotate(45deg) translate(5px, 6px);`
      : index === 1
      ? `opacity: 0;`
      : `transform: rotate(-45deg) translate(7px, -7px);`)}
`;

// Responsive NavLinks
const NavLinks = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;

  @media (max-width: 768px) {
    position: fixed;
    left: 0;
    top: 0;
    height: 100vh;
    width: 70vw;
    min-width: 220px;
    max-width: 320px;
    background: linear-gradient(to bottom right, #4f46e5 80%, #3b82f6 100%);
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 2.5rem 1.5rem 1.5rem 1.5rem;
    gap: 1rem;
    box-shadow: 2px 0 16px rgba(0, 0, 0, 0.18);
    transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-120%)')};
    transition: transform 0.35s cubic-bezier(0.4, 0, 0.2, 1);
    z-index: 110;
  }
`;

const NavButton = styled.button`
  background: ${props => (props.$active ? 'rgba(255, 255, 255, 0.2)' : 'transparent')};
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: ${props => (props.$active ? '0 2px 4px rgba(0, 0, 0, 0.1)' : 'none')};
  font-size: 1rem;

  &:hover {
    background: rgba(255, 255, 255, 0.15);
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    width: 100%;
    justify-content: flex-start;
    font-size: 1.05rem;
    padding: 0.7rem 1rem;
    border-radius: 0.5rem;
  }
`;

const LogoutButton = styled(NavButton)`
  background: #ef4444;
  &:hover {
    background: #dc2626;
  }
`;

const NavIcon = styled.i`
  font-size: 1rem;
`;

const Backdrop = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: ${({ open }) => (open ? 'block' : 'none')};
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.3);
    z-index: 105;
  }
`;

const Navbar = ({ showNotification }) => {
  const navigate = useNavigate();
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(isLoggedIn());
  const [currentPath, setCurrentPath] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const updateAuthState = async () => {
      const valid = await validateToken();
      setIsAdminLoggedIn(valid);
    };

    // Initial auth check
    updateAuthState();

    // Listen for auth changes (login/logout)
    const handleAuthChange = () => {
      updateAuthState();
    };
    window.addEventListener('authChange', handleAuthChange);

    // Update current path
    setCurrentPath(window.location.pathname);

    // Close menu on route change
    const handleRouteChange = () => {
      setCurrentPath(window.location.pathname);
      setMenuOpen(false);
    };
    window.addEventListener('popstate', handleRouteChange);

    // Cleanup listeners
    return () => {
      window.removeEventListener('authChange', handleAuthChange);
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, []);

  const handleLogout = () => {
    clearToken();
    setIsAdminLoggedIn(false);
    showNotification('Logged out successfully', 'success');
    setMenuOpen(false);
    navigate('/');
  };

  const handleLogoClick = () => {
    navigate('/');
    setMenuOpen(false);
  };

  const isActive = (path) => {
    if (path === '/') return currentPath === path;
    return currentPath.includes(path);
  };

  // Close menu when clicking backdrop
  const handleBackdropClick = () => setMenuOpen(false);

  return (
    <NavContainer>
      <NavContent>
        <Logo onClick={handleLogoClick}>
          <LogoIcon className="fas fa-book-open" />
          <LogoText>Book Issue System</LogoText>
        </Logo>

        <Hamburger
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          aria-controls="main-navigation"
          onClick={() => setMenuOpen(v => !v)}
        >
          {[0, 1, 2].map(i => (
            <HamburgerBar key={i} open={menuOpen} index={i} />
          ))}
        </Hamburger>

        <NavLinks open={menuOpen} id="main-navigation">
          <NavButton
            onClick={() => {
              navigate('/');
              setMenuOpen(false);
            }}
            $active={isActive('/')}
          >
            <NavIcon className="fas fa-home" />
            Home
          </NavButton>

          <NavButton
            onClick={() => {
              navigate('/feedback');
              setMenuOpen(false);
            }}
            $active={isActive('/feedback')}
          >
            <NavIcon className="fas fa-comment" />
            Feedback
          </NavButton>

          {isAdminLoggedIn && (
            <>
              <NavButton
                onClick={() => {
                  navigate('/admin/dashboard');
                  setMenuOpen(false);
                }}
                $active={isActive('/admin/dashboard')}
              >
                <NavIcon className="fas fa-tachometer-alt" />
                Dashboard
              </NavButton>
              <LogoutButton onClick={handleLogout}>
                <NavIcon className="fas fa-sign-out-alt" />
                Logout
              </LogoutButton>
            </>
          )}
        </NavLinks>
      </NavContent>
      <Backdrop open={menuOpen} onClick={handleBackdropClick} />
    </NavContainer>
  );
};

export default Navbar;