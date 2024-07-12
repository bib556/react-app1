import React from 'react'

export default function SearchBar({filterText,instockOnly,setFilterText,setInstockOnly}){
    
    return(
    <div className="container1">
        <input type="text" value = {filterText}   onChange={(e) => setFilterText(e.target.value)} placeholder = "enter the text"/><br />
        <input type="checkbox" checked = {instockOnly} onChange={(e) => setInstockOnly(e.target.checked)} /> <p>only show products in stock</p>
    </div>
    )
}