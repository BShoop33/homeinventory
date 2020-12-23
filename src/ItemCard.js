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
                <div className="ItemCardContainer">
                    <div className="ItemCardName">{item.itemName}</div>
                    <div className="ItemCardRoom">{item.itemRoom}</div>
                    <div className="ItemCardDescription">{item.itemDescription}</div>
                    <div className="ItemCardSerial">{item.itemSerialNumber}</div>
                    <div className="ItemCardNotes">{item.itemNotes}</div>
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
            </div>
        </>
    )
}