import React, { createContext } from 'react';

const Context = createContext({});
export const { Consumer, Provider } = Context;

export const withContext = Element =>
    React.forwardRef((props, ref) => {
        return (
            <Consumer>
                {/* eslint-disable-next-line react/jsx-props-no-spreading */}
                {context => <Element context={context} {...props} ref={ref} />}
            </Consumer>
        );
    });

export default Context;
