import React, { useContext, useEffect, useState } from "react"
import { ItemContext } from "./AppDataProvider.js"
import { useHistory, useParams } from "react-router-dom"
import './AddItem.css';

export const AddItem = () => {
    //assigns item variable the state of setNewItem
    const [item, setNewItem] = useState({})

    //assigns history variable the useHistory hook
    const history = useHistory();

    //assigns getItemById, addItems, editItems, and getItems variables the values returned by ItemContext
    const { getItemById, addItems, editItems, getItems } = useContext(ItemContext)

    //assigns itemId variable the route parameter
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
        // setIsLoading(true)
        if (itemId) {
            editItems({
                id: item.id,
                itemName: item.itemName,
                itemLocation: item.itemRoom,
                itemDescription: item.itemDescription,
                itemSerialNumber: item.itemSerialNumber,
                itemNotes: item.itemNotes
            })
                .then(() => history.push("/"))
        } else {
            addItems({
                id: item.id,
                itemName: item.itemName,
                itemLocation: item.itemRoom,
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
                            {/* <option defaultValue={itemId ? item.itemRoom : ""}></option> */}
                            <option selected>{itemId ? item.itemLocation : ""}</option>
                            <option>AmSurg PAR 1</option>
                            <option>AmSurg PAR 2</option>
                            <option>AmSurg PAR 3</option>
                            <option>Emergency Room PAR 1</option>
                            <option>Emergency Room PAR 2</option>
                            <option>ICU PAR 1</option>
                            <option>ICU PAR 2</option>
                            <option>Gastroenterology PAR 1</option>
                            <option>Hematology PAR 1</option>
                            <option>Hematology PAR 2</option>
                            <option>Materials Management</option>
                            <option>Neurology PAR 1</option>
                            <option>Pharmacy</option>
                            <option>Store Room 1</option>
                            <option>Store Room 2</option>
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



