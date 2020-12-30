import React, { useState, createContext } from "react"

export const ItemContext = createContext()

export const ItemProvider = (props) => {
    const [item, setItems] = useState([])
    const [searchTerms, setSearchTerms] = useState()

    const addItems = (item) => {
        return fetch("http://localhost:8088/Items", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(item)
        })
            .then(getItems)
    }

    const deleteItem = (itemId) => {
        return fetch(`http://localhost:8088/Items/${itemId}`, {
            method: "DELETE"
        })
            .then(getItems)
    }

    const editItems = item => {
        return fetch(`http://localhost:8088/Items/${item.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(item)
        })
            .then(getItems)
    }

    const getItems = () => {
        return fetch(`http://localhost:8088/Items`)
            .then(res => res.json())
            .then(setItems)
    }

    const getItemById = (id) => {
        return fetch(`http://localhost:8088/Items/${id}`)
            .then(res => res.json())
    }

    return (
        <ItemContext.Provider value={{
            item, addItems, deleteItem, editItems, getItems, getItemById, searchTerms, setSearchTerms
        }}>
            {props.children}
        </ItemContext.Provider>
    )
}