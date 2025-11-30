const QRCodeDisplay = ({ data, label }) => {
  const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(data)}`;
  
  return (
    <div className="qr-card">
      <img 
        src={qrUrl} 
        alt={`QR Code for ${label}`}
        className="qr-image"
      />
      <p className="qr-label">{label}</p>
    </div>
  );
};

export default QRCodeDisplay;