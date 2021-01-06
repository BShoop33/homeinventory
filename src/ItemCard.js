import React, { useContext } from "react"
import "./ItemCard.css"
// import { DeleteButton } from "./DeleteItem"
import { useHistory } from "react-router-dom"
import { ItemContext } from "./AppDataProvider"

export const ItemCard = ({ item }) => {
    const { deleteItem } = useContext(ItemContext)
    const history = useHistory();
    return (
        <>
            <div className="ItemCard">
                <col-1 style={{ marginRight: 20, marginLeft: 20 }}>{item.itemName}</col-1>
                <col-2 style={{ marginRight: 20, marginLeft: 20 }}>{item.itemLocation}</col-2>
                <col-3 style={{ marginRight: 20, marginLeft: 20 }}>{item.itemDescription}</col-3>
                <col-4 style={{ marginRight: 20, marginLeft: 20 }}>{item.itemSerialNumber}</col-4>
                <col-5 style={{ marginRight: 20, marginLeft: 20 }}>{item.itemNotes}</col-5>

                <button className="ItemEditButton"
                    onClick={() => {
                        history.push(`/edititem/${item.id}`)
                    }
                    }
                    type="button">Edit
                </button>
                <button className="ItemDeleteButton"
                    onClick={() => {
                        deleteItem(item.id)
                            .then(() => {
                                history.push(`/`)
                            })
                    }}
                    type="button">Delete
                    </button>
            </div>
        </>
    )
}