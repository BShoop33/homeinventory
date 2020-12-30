import React, { useContext, useEffect } from "react"
import { ItemContext } from "./AppDataProvider"
import "./App.css"

export const ItemSearch = () => {
    const { setSearchTerms } = useContext(ItemContext)

    useEffect(() => {
        setSearchTerms("")
    }, [setSearchTerms])

    return (
        <>
            <input type="text"
                className="SearchBar"
                onKeyUp={
                    (keyEvent) => setSearchTerms(keyEvent.target.value)
                }
                placeholder="Search for an item " />
        </>
    )
}