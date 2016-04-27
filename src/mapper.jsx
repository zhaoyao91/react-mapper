import React from 'react';

/**
 * build a react component, which render different component by props
 * @param mapper - func(props): component
 * @return component
 */
export default function (mapper) {
    return (props)=> {
        const Component = mapper(props);
        return <Component {...props}/>
    }
}