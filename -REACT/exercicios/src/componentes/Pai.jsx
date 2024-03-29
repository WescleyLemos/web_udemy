import React from 'react'


export default props =>
    <div>
        <h1>{props.nome}{props.sobrenome}</h1>
        <h2>Filhos</h2>
        <ul>
            {/* {props.children} */}
            {
                React.Children.map(props.children, filho => {
                     return React.cloneElement(filho, {
                         ...props, ...filho.props })
                })

            }
        </ul>
    </div>