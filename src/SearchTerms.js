import React, { useContext, useEffect } from "react"
import { ItemContext } from "./AppDataProvider"
//import "./App.css"
import FormControl from 'react-bootstrap/FormControl';

export const ItemSearch = () => {
    const { setSearchTerms } = useContext(ItemContext)

    useEffect(() => {
        setSearchTerms("")
    }, [setSearchTerms])

    return (
        <>
            <FormControl type="text"
                className="mr-sm-2"
                // className="SearchBar"
                onKeyUp={
                    (keyEvent) => setSearchTerms(keyEvent.target.value)
                }
                placeholder="Search for an item " />
        </>
    )
}