"use client";

import React from "react";

export default function Navbar({ isChatboxOpen, toggleChatbox }: { isChatboxOpen: boolean; toggleChatbox: () => void }) {
    return (
        <nav
          className="navbar navbar-expand-lg"
          style={{ backgroundColor: '#001f3f', padding: '0.8rem 1.5rem' }}
        >
            <div className="container-fluid d-flex align-items-center">
                {/* Header and subtitle aligned left */}
                <div className="d-flex align-items-center">
                    <h1
                      className="navbar-brand m-0"
                      style={{ 
                        fontFamily: "'Playfair Display', serif",
                        fontWeight: '700',
                        fontSize: '2.2rem',
                        color: 'white',
                        userSelect: 'none',
                        letterSpacing: '0.1em',
                      }}
                    >
                        PenPal.ai
                    </h1>

                    <span
                      className="ms-3 d-none d-lg-block"
                      style={{
                        fontFamily: "'Playfair Display', serif",
                        fontStyle: 'italic',
                        color: '#c0c9d9',
                        fontSize: '1rem',
                        userSelect: 'none',
                        whiteSpace: 'nowrap',
                      }}
                    >
                        an essay assistant created for writers
                    </span>
                </div>

                {/* Spacer to push button right */}
                <div className="ms-auto">
                    <button
                        className="btn btn-outline-light"
                        onClick={toggleChatbox}
                        style={{
                          fontFamily: "'Playfair Display', serif",
                          fontWeight: '600',
                          fontSize: '1rem',
                          padding: '0.35rem 1rem',
                          borderRadius: '0.3rem',
                        }}
                    >
                        {isChatboxOpen ? "Close Chatbox" : "Open Chatbox"}
                    </button>
                </div>
            </div>
        </nav>
    );
}
