# React Mapper
build a react component which render different components by props

## Installation
`npm install react-mapper --save`

## Usage
    
    import mapper from 'react-mapper'

    const CompA = (props) => {...};
    const CompB = (props) => {...};
    
    // inside CompC, it will render CompA only if props.useA === true
    const CompC = mapper(props=>props.useA ? CompA : CompB)