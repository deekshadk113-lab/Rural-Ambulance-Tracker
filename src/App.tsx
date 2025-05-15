import React from 'react';
import Home from './pages/Home';
import Simulator from './pages/Simulator';

function App() {
  // Simple "routing" to switch between pages
  const [currentPage, setCurrentPage] = React.useState<'home' | 'simulator'>('home');

  // Listen for keyboard navigation
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === '1') setCurrentPage('home');
      if (e.key === '2') setCurrentPage('simulator');
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Add custom event listeners to header navigation
  React.useEffect(() => {
    const handleMenuClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const menuButton = target.closest('button');
      
      if (menuButton) {
        // Toggle a simple menu
        const existingMenu = document.getElementById('nav-menu');
        
        if (existingMenu) {
          existingMenu.remove();
        } else {
          const menu = document.createElement('div');
          menu.id = 'nav-menu';
          menu.className = 'absolute top-12 right-4 bg-white shadow-lg rounded-md overflow-hidden z-10';
          menu.innerHTML = `
            <ul class="divide-y divide-gray-100">
              <li class="hover:bg-gray-50">
                <button class="px-4 py-2 w-full text-left ${currentPage === 'home' ? 'font-medium text-red-600' : ''}">Dashboard</button>
              </li>
              <li class="hover:bg-gray-50">
                <button class="px-4 py-2 w-full text-left ${currentPage === 'simulator' ? 'font-medium text-red-600' : ''}">SMS Simulator</button>
              </li>
            </ul>
          `;
          
          const buttons = menu.querySelectorAll('button');
          buttons[0].addEventListener('click', () => {
            setCurrentPage('home');
            menu.remove();
          });
          buttons[1].addEventListener('click', () => {
            setCurrentPage('simulator');
            menu.remove();
          });
          
          document.body.appendChild(menu);
          
          // Close when clicking outside
          const handleOutsideClick = (e: MouseEvent) => {
            if (!menu.contains(e.target as Node) && e.target !== menuButton) {
              menu.remove();
              document.removeEventListener('click', handleOutsideClick);
            }
          };
          
          setTimeout(() => {
            document.addEventListener('click', handleOutsideClick);
          }, 0);
        }
      }
    };
    
    document.addEventListener('click', handleMenuClick);
    return () => document.removeEventListener('click', handleMenuClick);
  }, [currentPage]);

  return (
    <>
      {currentPage === 'home' && <Home />}
      {currentPage === 'simulator' && <Simulator />}
    </>
  );
}

export default App;