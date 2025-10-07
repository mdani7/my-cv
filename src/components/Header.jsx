import { useEffect, useState } from "react";

export default function Header() {
  const [small, setSmall] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let ticking = false;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Determine if user scrolled down or up
      const isScrollingDown = currentScrollY > lastScrollY + 10;
      const isScrollingUp = currentScrollY < lastScrollY - 10;

      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (currentScrollY > 50 && isScrollingDown) {
            // Scrolled down past 50px → shrink header
            setSmall(true);
          } else if (isScrollingUp) {
            // Scrolled up → grow header again
            setSmall(false);
          }
          lastScrollY = currentScrollY;
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  const headerStyle = {
    top: 0,
    left: 0,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    background: '#42128fff',
    width: '100%',
    padding: '8px',
    position: 'fixed',
    zIndex: '1000',
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.35)",
    height: '280px',
    transition: "all 0.5s ease",
  };

  const smallHeader = {
    top: 0,
    left: 0,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    background: '#9a31fdff',
    width: '100%',
    height: '10%',
    padding: '8px',
    position: 'fixed',
    zIndex: '1000',
    padding: '8px',
    fontSize: '0.5rem',
    transition: "all 0.5s ease",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.35)"
  };

  const smallPic = {
    transform: 'scale(0.8)',
    borderRadius: '80px',
  };

  const PicStyle = {
    transform: 'scale(1)',
    borderRadius: '16px',
  };

  const headerContent = {
    justifyContent: 'center',
    padding: '8px',
    margin: '8px',
  };

  return (
    <div style={small ? smallHeader : headerStyle}>
      <img src="src/assets/smallMD.png" alt="profilePic" style={small ? smallPic : PicStyle} />
      <div style={headerContent}>
        <h1>Maria Daniluk</h1>
        <p style={{ fontSize: "18px" }}>Adaptable Web Developer | Fast Learner | Storyteller</p>
      </div>
    </div>
  );
}