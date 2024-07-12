import React from 'react'
import SearchBar from './SearchBar'
import ProductTable from './ProductTable'
import { useState } from 'react'

export default function FilterProductTable({products}){
    const [filterText,setFilterText]=useState("")
    const [instockOnly,setInstockOnly]=useState(false)
    return(
        <>
        <SearchBar filterText = {filterText} instockOnly = {instockOnly} setFilterText = {setFilterText} setInstockOnly={setInstockOnly}/>
        
        <ProductTable products ={products} filterText = {filterText} instockOnly={instockOnly} />
        </>
    )
}