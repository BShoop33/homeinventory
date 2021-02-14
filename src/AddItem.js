import React, { useContext, useEffect, useState, useRef } from "react"
import { ItemContext } from "./AppDataProvider.js"
import { useHistory, useParams } from "react-router-dom"
import { Route, withRouter } from 'react-router-dom';
import './AddItem.css';
import Row from "react-bootstrap/Row"
import Button from "react-bootstrap/Button"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const AddItem = () => {
    //assigns the state set by setNewItem to the item variable 
    const [item, setNewItem] = useState({});

    //assigns the useHistory hook to the history variable 
    const history = useHistory();

    //assigns to the getItemById, addItems, editItems, and getItems variables the values returned by ItemContext 
    const { getItemById, addItems, editItems, getItems } = useContext(ItemContext)

    //assigns itemId variable the route parameter value
    const { itemId } = useParams()

    /*assigns addedItem variable the value of an item object. Then returns the value associated with each of the form's named inputs. 
Finally stores those returned inputs as a new item object*/
    const handleControlledInputChange = (event) => {
        const addedItem = item
        addedItem[event.target.name] = event.target.value
        setNewItem(addedItem)
    }

    useEffect(() => {
        getItems()
    }, [])

    useEffect(() => {
        if (itemId) {
            getItemById(itemId)
                .then(item => {
                    setNewItem(item)
                })
        } else {
        }
    }, [getItemById, itemId])

    const constructItemObject = () => {
        if (itemId) {
            editItems({
                id: item.id,
                itemName: item.itemName,
                itemRoom: item.itemRoom,
                itemDescription: item.itemDescription,
                itemSerialNumber: item.itemSerialNumber,
                itemNotes: item.itemNotes
            })
                .then(() => history.push("/"))
        } else {
            addItems({
                id: item.id,
                itemName: item.itemName,
                itemRoom: item.itemRoom,
                itemDescription: item.itemDescription,
                itemSerialNumber: item.itemSerialNumber,
                itemNotes: item.itemNotes
            })
                .then(() => history.push("/"))
        }
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
                        <select className="RoomInput" name="itemRoom" onChange={handleControlledInputChange} >
                            <option selected>{itemId ? item.itemRoom : ""}</option>
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

                    <form action="/action_page.php">
                        <label className="ItemNameTitle">Item Name:  </label>
                        <input type="text" className="ItemNameInput" name="itemName" onChange={handleControlledInputChange} placeholder={itemId ? item.itemName : ""} />
                    </form>

                    <label className="DescriptionTitle">Item Description:  </label>
                    <div className="DescriptionContainer">
                        <textarea type="textarea" className="DescriptionInput" name="itemDescription" onChange={handleControlledInputChange} placeholder={itemId ? item.itemDescription : ""} />
                    </div>

                    <div className="ItemSerialContainer">
                        <label className="ItemSerialTitle">Item Serial Number:  </label>
                        <input type="text" className="ItemSerialInput" name="itemSerialNumber" onChange={handleControlledInputChange} placeholder={itemId ? item.itemSerialNumber : ""} />
                    </div>

                    <label className="ItemNotesTitle">Item Notes:  </label>
                    <div className="ItemNotesContainer">
                        <textarea type="textarea" className="ItemNotesInput" name="itemNotes" onChange={handleControlledInputChange} placeholder={itemId ? item.itemNotes : ""} />
                    </div>
                </div>

                <div className="AddItemButtonsContainer">
                    <button className="SaveAddItem"
                        onClick={item => {
                            item.preventDefault()
                            constructItemObject()
                            history.push(`/`)
                        }}
                        type="button">Save Item
                    </button>

                    <button className="CancelAddItem"
                        onClick={() => {
                            history.push(`/`)
                        }}
                        type="submit">Cancel
                    </button>
                </div>
            </div>
        </>
    );
}