// src/components/ticketCard.js
import React, { useState } from 'react';
import Modal from './Modal';
const TicketCard = ({ ticket }) => {
  var priceVND = 1000;
  priceVND = ticket.price.toLocaleString('it-IT', {style : 'currency', currency : 'VND'});
  const [showModal, setShowModal] = useState(false);

  const handleBuyClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  return (
    <div className="ticket-card">
      <img src={ticket.thumbnail} alt={ticket.title} />
      <h3>{ticket.title}</h3>
      <p>Price: {priceVND}</p>
      <button onClick={handleBuyClick}>Buy Ticket</button>
      {showModal && (
        <Modal isOpen={showModal} onClose={handleCloseModal} movieTitle={ticket.title} />
      )}
    </div>
  );
};

export default TicketCard;
