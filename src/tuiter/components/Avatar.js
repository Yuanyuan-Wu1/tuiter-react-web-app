import React from 'react';

const Avatar = ({ src, size = 80, className = "" }) => {
    return (
        <img 
            src={src ? `/images/${src}` : '/images/avatar.png'}
            width={size}
            height={size}
            alt="avatar"
            className={`rounded-circle ${className}`}
            onError={(e) => {
                e.target.src = '/images/avatar.png';
            }}
        />
    );
};

export default Avatar; 