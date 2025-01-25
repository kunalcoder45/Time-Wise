import { FaArrowUp } from "react-icons/fa6";
const home = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div>
      <button 
        onClick={scrollToTop} 
        style={{ 
          position: 'fixed', 
          bottom: '20px', 
          right: '20px', 
          backgroundColor: '#3B82FC',
          borderRadius: '50%', 
          border: 'none',
          padding: '15px', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center' 
        }}
      >
        <span style={{ color: 'white', fontSize: '14px' }}><FaArrowUp /></span>
      </button>
    </div>
  )
}

export default home