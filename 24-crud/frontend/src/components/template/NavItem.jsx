import React from 'react'

export default function NavItem(props) {
    return (
        <a href={`#${props.path}`}>
            <i className={`fa fa-${props.icon}`}></i> {props.label}
        </a>
    )
}
