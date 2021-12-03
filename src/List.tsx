import * as React from 'react';
import { ReactElement } from 'react';
import Item from './Item';

export default function List({todosVal}: any): ReactElement {
    console.log("anda list22232", todosVal)
    return (
        <section>
            { todosVal.map( 
                (val: any)=> {
                    return (
                        <>
                        <h5>es un h5 </h5>
                        <Item todo={val} ></Item>
                        </>
                        )
                }
                
            )}
        </section>
        
        
    )
}

