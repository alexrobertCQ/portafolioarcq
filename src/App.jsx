import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [showLightBeam, setShowLightBeam] = useState(false);

  useEffect(() => {
    const handleMove = (e) => {
      const isButtonWithAnimation = e.target.closest('.animate-button');
      if (!isButtonWithAnimation) {
        const clientX = e.type === 'mousemove' ? e.clientX : e.touches[0].clientX;
        const clientY = e.type === 'mousemove' ? e.clientY : e.touches[0].clientY;

        const streak = document.createElement('div');
        streak.classList.add('streak');
        streak.style.left = clientX + 'px';
        streak.style.top = clientY + 'px';

        document.body.appendChild(streak);

        setShowLightBeam(true);

        setTimeout(() => {
          document.body.removeChild(streak);
          setShowLightBeam(false);
        }, 1000);
      }
    };

    document.addEventListener('mousemove', handleMove);
    document.addEventListener('touchmove', handleMove);

    return () => {
      document.removeEventListener('mousemove', handleMove);
      document.removeEventListener('touchmove', handleMove);
    };
  }, []);

  return (
    <>
      <div>
        <h1 className="animated-heading">Alex Robert Calapuja Quispe</h1>
      </div>
      <h2>Desarrollador web Full Stack Developer</h2>
      <p className="container-Descript">
        Hola! Soy un desarrolador Full Stack Developer con experiencia en JavaScript, React Js, Node Js, Express, SQL y otras tecnologías relacionadas. Me especializo en el desarrollo de aplicaciones web y disfruto creando soluciones eficientes y de alto rendimiento.
      </p>
      <div className="enlaces">
        <a
          className="button-contact animate-button" // Añade la clase animate-button
          href="https://www.linkedin.com/in/alex-robert-calapuja-quispe/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Contacto
        </a>
        {showLightBeam && <div className="light-beam"></div>}
        <a 
        className="button-projects animate-button" 
        href='https://pf-arts-client.vercel.app/'
        target='_blank'
        rel="noopener noreferrer"> 
          Proyectos
        </a>
      </div>
      <div className="card animate-button">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  );
}

export default App;
