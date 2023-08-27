// src/components/MoviesList.js
import React from 'react';
import TicketCard from './TicketCard';
import TicketData from './TicketData';
const TicketList = () => {
  return (
    <div className="ticket-list">
      {TicketData.map((ticket) => (
        <TicketCard key={ticket.id} ticket={ticket} />
      ))}
    </div>
  );
};
export default TicketList;