export default function Footer() {
  const footerStyle = {
    bottom: '0',
    left: '0',
    padding: "-8px 8px",
    width: '100%',
    height: '100px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    background: '#9a31fdff',
    position: 'fixed',
    boxShadow: "0 -4px 10px 0 rgba(0, 0, 0, 0.35)",
  }

  return (
    <div style={footerStyle}>
      <h4>Contact Info</h4>
      <p style={{ marginTop: '0' }}>E-mail: m.daniluk@tutamail.com | Phone Number: +31682866613 | Linked-In: Linked-In: www.linkedin.com/in/maria-daniluk-71a6b5144 </p>
    </div>
  );
}