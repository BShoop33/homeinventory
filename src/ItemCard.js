import React, { useContext } from "react"
import "./ItemCard.css"
// import { useHistory } from "react-router-dom"
// import { ItemContext } from "./AppDataProvider"

export const ItemCard = ({ item }) =>
// {
//     const { deleteItem } = useContext(ItemContext)
//     const history = useHistory();
(
    <>
        <div className="ItemCard">
            <div className="ItemCardContainer">
                <div className="ItemCardName">{item.itemName}</div>
                <div className="ItemCardRoom">{item.itemRoom}</div>
                <div className="ItemCardDescription">{item.itemDescription}</div>
                <div className="ItemCardSerial">{item.itemSerialNumber}</div>
                <div className="ItemCardNotes">{item.itemNotes}</div>
                {/* <button className="ItemDeleteButton"
                        onClick={() => {
                            deleteItem(item.id)
                            history.push(`/`)
                        }}
                        type="button">Delete
            </button> */}
            </div>
        </div>
    </>
)
// }