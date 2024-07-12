import React from 'react'

export default function ProductCategoryRow({category}){
    return(
        <tr>
            <th colspan="2">
                {category}
            </th>
        </tr>
    )
}