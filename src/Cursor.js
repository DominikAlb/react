import React from 'react';
import ReactCursorPosition from 'react-cursor-position';
import PositionLabel from './PositionLabel';

export function cur () { 
    return (
    <ReactCursorPosition
        className="example__target"
        isActivatedOnTouch
    >
        
        <div className="example__instructions">
            Touch and Drag In This Area
        </div>
    </ReactCursorPosition>
);
}