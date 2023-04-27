import React from 'react';

const TabButton = ({ id, label, isActive, onClick }) => {
    return (
        <li className="nav-item" role="presentation">
            <button
                className={`nav-link ${isActive ? 'active' : ''}`}
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

export default TabButton;
