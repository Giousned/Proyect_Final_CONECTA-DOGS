import React from 'react';

const NavTabButton = ({ id, label, isActive, onClick }) => {
    return (
        <li className="nav-tabs justify-content-center" role="presentation">
            <button
                className={`nav-link ${isActive ? 'show active' : ''}`}
                id={id}
                data-bs-toggle="tab"
                data-bs-target={`#${id}-pane`}
                type="button"
                role="tab"
                aria-controls={`${id}-pane`}
                aria-selected={isActive}
                onClick={onClick}
            >
                <b>{label}</b>
            </button>
        </li>
    );
};

export default NavTabButton;
