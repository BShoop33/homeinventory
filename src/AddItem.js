import React, { useContext, useEffect, useState } from "react"
import { ItemContext } from "./AppDataProvider.js"
import { useHistory, useParams } from "react-router-dom"
import './AddItem.css';

export function AddItem() {
    const [item, setNewItem] = useState({})
    const history = useHistory();
    const { getItems, getItemById, editItems, addItems } = useContext(ItemContext)
    const { itemId } = useParams()
    const [isLoading, setIsLoading] = useState(true)

    const handleControlledInputChange = (event) => {
        const addedItem = { ...item }
        addedItem[event.target.name] = event.target.value
        setNewItem(addedItem)
    }

    // useEffect(() => {
    //     getItems().then(() => {
    //         if (itemId) {
    //             getItemById(itemId)
    //                 .then(item => {
    //                     setNewItem(item)
    //                     // setIsLoading(false)
    //                 })
    //         } else {
    //             setIsLoading(false)
    //         }
    //     })
    // }, [])

    const constructItemObject = () => {
        // setIsLoading(true)
        // if (itemId) {
        //     editItems({
        //         id: item.id,
        //         itemNumber: item.id,
        //         itemName: item.ItemNameInput,
        //         itemRoom: item.RoomInput,
        //         itemDescription: item.itemDescription,
        //         itemSerialNumber: item.itemSerialNumber,
        //         itemNotes: item.itemNotes
        //     })
        //         .then(() => history.push("/"))
        // } else {
        addItems({

            itemName: item.ItemNameInput,
            itemRoom: item.RoomInput,
            itemDescription: item.itemDescription,
            itemSerialNumber: item.itemSerialNumber,
            itemNotes: item.itemNotes
        })
            .then(() => history.push("/"))
        // }
    }

    return (
        <>
            <header className="PageHeaderContainer-AddItem">
                <h1 className="HomeInventoryTitle-AddItem">Home Inventory</h1>
            </header>

            <div className="BodyContainer">
                <div className="InputsContainer">
                    <div className="RoomInputContainer">
                        <label className="RoomInputTitle">Room</label>
                        <select className="RoomInput" name="RoomInput" onChange={handleControlledInputChange}>
                            <option selected="selected"></option>
                            <option>Attic</option>
                            <option>Back Yard</option>
                            <option>Bed Room 1</option>
                            <option>Bed Room 1 Closet</option>
                            <option>Bed Room 2</option>
                            <option>Bed Room 2 Closet</option>
                            <option>Bed Room 3</option>
                            <option>Bed Room 3 Closet</option>
                            <option>Bonus Room</option>
                            <option>Dining Room</option>
                            <option>Downstairs Bathroom</option>
                            <option>Downstairs Closet</option>
                            <option>Foyer</option>
                            <option>Front Porch</option>
                            <option>Front Yard</option>
                            <option>Garage</option>
                            <option>Guest Bathroom</option>
                            <option>Kitchen</option>
                            <option>Laundry Room</option>
                            <option>Living Room</option>
                            <option>Main Bathroom</option>
                            <option>Mud Room</option>
                            <option>Patio</option>
                            <option>Stairwell</option>
                        </select>
                    </div>

                    <div className="ItemNameContainer">
                        <label className="ItemNameTitle">Item Name:  </label>
                        <input type="text" className="ItemNameInput" name="ItemNameInput" onChange={handleControlledInputChange} />
                    </div>
                    <label className="DescriptionTitle">Item Description:  </label>
                    <div className="DescriptionContainer">
                        <textarea type="textarea" className="DescriptionInput" name="itemDescription" onChange={handleControlledInputChange} />
                    </div>

                    <div className="ItemSerialContainer">
                        <label className="ItemSerialTitle">Item Serial Number:  </label>
                        <input type="text" className="ItemSerialInput" name="itemSerialNumber" onChange={handleControlledInputChange} />
                    </div>

                    <label className="ItemNotesTitle">Item Notes:  </label>
                    <div className="ItemNotesContainer">
                        <textarea type="textarea" className="ItemNotesInput" name="itemNotes" onChange={handleControlledInputChange} />
                    </div>
                </div>

                <div className="AddItemButtonsContainer">
                    <button className="SaveAddItem"
                        onClick={item => {
                            item.preventDefault()
                            constructItemObject()
                            history.push(`/`)
                        }}
                        type="button">Save New Item
                    </button>

                    <button className="CancelAddItem"
                        onClick={() => {
                            history.push(`/`)
                        }}
                        type="button">Cancel
                    </button>
                </div>
            </div>
        </>
    );
}