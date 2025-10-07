import React, { useState } from "react";

export default function ExpandableCard({ title, content, children, teaser, width = "100%", icon }) {
    const [expanded, setExpanded] = useState(false);
    const [hover, setHover] = useState(false);

    const cardStyle = {
        display: 'flex',
        flexDirection: 'column',
        flexWrap: "wrap",
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'justify',
        minHeight: "130px",
        maxWidth: "800px",
        margin: "16px auto",
        marginLeft: window.innerWidth < 600 ? '205px' : '0px',
        padding: "16px",
        background: hover ? 'linear-gradient(135deg, #be31ffff, #8400ffff)' : '#42128fff',
        border: hover || expanded ? "1px solid rgba(255, 255, 255, 0.75)" : "",
        borderRadius: "16px",
        boxShadow: hover
            ? '0 10px 25px rgba(0,0,0,0.3)'
            : '0 4px 10px rgba(0,0,0,0.2)',
        cursor: "pointer",
        transition: "all 0.3s ease",
        overflow: "hidden",
        color: 'white',
    };

    const titleStyle = {
        textAlign: 'center',
        fontSize: "1.5rem",
        fontWeight: "bold",
        marginBottom: "8px",
    };

    const contentStyle = {
        margin: '16px auto',
        fontSize: '1rem',
        lineHeight: '1.4',
    };

    return (
        <div className='hover:scale-105'
            style={cardStyle}
            width={width}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            onClick={() => setExpanded(!expanded)}>
            <h1 style={titleStyle}>{icon} {title}</h1>
            <div>
                {expanded ? (
                    <>
                        {children ? children : <p style={contentStyle}>{content}</p>}
                    </>
                ) : (
                    <p>{teaser}</p>
                )}
            </div>
        </div>
    );
}
