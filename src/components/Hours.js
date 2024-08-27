// Placeholder to host a component
import React from "react";

function Hours() {
  const today = new Date();
  const dayOfWeek = today.getDay();
  const days = ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"];
  const isWeekend = dayOfWeek === 0 || dayOfWeek === 6; // 0 es domingo y 6 es sábado

  return (
    <div className="card-container">
      <div className="card">
        <p className="schedule">
          Hoy {days[dayOfWeek]}. <br/> 
          El refugio está abierto de {isWeekend ? "9am a 8pm" : "10am a 4pm"}.
        </p>
      </div>
    </div>
  );
}

export default Hours;