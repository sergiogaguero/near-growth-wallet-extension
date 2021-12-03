import React, { ReactElement } from 'react'

interface Props {
    todo: number
}

export default function Item({todo}: Props): ReactElement {
    return (
        <div>
            Item: {todo}
        </div>
    )
}
