import React from 'react';

export const Image = ({ src, alt, className }) => {
    return (
        <img
            src={src}
            alt={alt || ''}
            className={className}
            onError={(e) => {
                e.target.src = '/images/default.png'; // 设置默认图片
            }}
        />
    );
}; 