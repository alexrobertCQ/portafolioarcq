import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const container = document.querySelector(".container");

    const handleMove = (e) => {
      const clientX = e.type === 'mousemove' ? e.clientX : e.touches[0].clientX;
      const clientY = e.type === 'mousemove' ? e.clientY : e.touches[0].clientY;

      const streak = document.createElement("div");
      streak.classList.add("streak");
      streak.style.left = clientX + "px";
      streak.style.top = clientY + "px";

      container.appendChild(streak);

      // Eliminar la estela después de cierto tiempo para evitar que se acumulen
      setTimeout(() => {
        container.removeChild(streak);
      }, 500);
    };

    document.addEventListener("mousemove", handleMove);
    document.addEventListener("touchmove", handleMove);

    return () => {
      document.removeEventListener("mousemove", handleMove);
      document.removeEventListener("touchmove", handleMove);
    };
  }, []);

  return (
    <>
      <div>
        <h1 className="animated-heading">Alex Robert Calapuja Quispe</h1>
      </div>
      <h2>Desarrollador web Full Stack Developer</h2>
      <p className='container-Descript'> Hola! Soy un desarrolador Full Stack Developer con experiencia en JavaScript, React Js, Node Js, Express, SQL y otras tecnologías relacionadas. Me especializo en el desarrollo de aplicaciones web y disfruto creando soluciones eficientes y de alto rendimiento.</p>
      <div className="enlaces">
        <a className="button-contact" href="https://www.linkedin.com/in/alex-robert-calapuja-quispe/" target="_blank" rel="noopener noreferrer">
          Contacto
        </a>
        <button className="button-projects">Proyectos</button>
      </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <div className="container">
        {/* Este div será el haz de luz que seguirá el movimiento del mouse */}
        <div className="light-beam" id="light"></div>
      </div>
    </>
  );
}

export default App;
