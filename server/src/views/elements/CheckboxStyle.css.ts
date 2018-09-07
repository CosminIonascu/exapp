import { style } from 'typestyle';

export const checkboxContainerStyle = style({
    position: 'relative',
});

export const labelStyle = style({
    cursor: 'pointer',
});

export const inputStyle = style({
    opacity: 0,
    position: 'absolute',
    margin: 0,
    zIndex: -1,
    width: 0,
    height: 0,
    overflow: 'hidden',
    pointerEvents: 'none',
});

export const squareStyle = style({
    color: '#888da8',
    fontSize: '24px',
    position: 'absolute',
    left: '0',
    top: '0',
});

export const checkStyle = style({
    color: '#ff5e3a',
    fontSize: '14px',
    position: 'absolute',
    left: '3px',
    top: '5px',
    zIndex: 100,
});

export const checkDisabledStyle = style({
    color: '#888da8',
});

export const textStyle = style({
    color: '#888da8',
    paddingLeft: '25px',
});
