import React from 'react'

export default function Table(){
    const data=[
            ['JavaScript',100],
            ['React',200],
            ['React-Native',150]
    ]
    const onMuseOverRow = (ev) =>{
        ev.target.parentNode.style.backgroundColor='#FF6699'
    }
    const onMuseOutRow = (ev) =>{
        ev.target.parentNode.style.backgroundColor='#FFFFFF'
    }
    const onClickButtonOK =() =>{
        alert('OK')
    }
    return(
        <table border="1">
            <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Select</th>
            </tr>
    {       
        data.map(item =>{
            return (
            <tr onMouseOver={onMuseOverRow}
                onMouseOut={onMuseOutRow}>
                <td>{item[0]}</td>
                <td>{item[1]}</td>
                <button onClick={onClickButtonOK}>{item[0]}</button>
            </tr>
            )
})
    }
        </table>
    )
}