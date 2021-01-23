import React, { useContext, useEffect, useState } from "react"
import { ItemContext } from "./AppDataProvider.js"
import { useHistory, useParams } from "react-router-dom"
import { Route, withRouter } from 'react-router-dom';
import './AddItem.css';
import Row from "react-bootstrap/Row"
import Button from "react-bootstrap/Button"

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
            <h1 className="AddItemHeader">Inventory</h1>
            <hr className="hr-AddItem" />
            <Row className="justify-content-md-left">
                <label style={{ width: 200, height: 5 }} className="LocationTitle">Location</label>
                <select style={{ width: 400, height: 35 }}
                    className="RoomInput"
                    name="itemRoom"
                    onChange={handleControlledInputChange}
                // defaultValue={itemId ? item.itemRoom : ""}
                >
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
            </Row>
            <Row style={{ marginTop: 20 }} className="justify-content-md-left">
                <form action="/action_page.php">
                    <label style={{ width: 200, height: 5 }} className="ItemNameTitle">Item Name:  </label>
                    <input style={{ width: 400, height: 35 }} type="text" className="ItemNameInput" name="itemName" onChange={handleControlledInputChange} placeholder={itemId ? item.itemName : ""} />
                </form>
            </Row>

            <Row style={{ marginTop: 20 }} className="justify-content-md-left">
                <label style={{ width: 200, height: 5 }} className="DescriptionTitle">Item Description:  </label>
                <textarea style={{ width: 400, height: 100 }} type="textarea" className="DescriptionInput" name="itemDescription" onChange={handleControlledInputChange} placeholder={itemId ? item.itemDescription : ""} />
            </Row>

            <Row style={{ marginTop: 20 }} className="justify-content-md-left">
                <label style={{ width: 197, height: 5 }} className="ItemSerialTitle">Item Serial Number:  </label>
                <input style={{ width: 400, height: 35 }} type="text" className="ItemSerialInput" name="itemSerialNumber" onChange={handleControlledInputChange} placeholder={itemId ? item.itemSerialNumber : ""} />
            </Row>

            <Row style={{ marginTop: 20 }} className="justify-content-md-left">
                <label style={{ width: 197, height: 5 }} className="ItemNotesTitle">Item Notes:  </label>
                <textarea style={{ width: 400, height: 100 }} type="textarea" className="ItemNotesInput" name="itemNotes" onChange={handleControlledInputChange} placeholder={itemId ? item.itemNotes : ""} />
            </Row>

            <Row style={{ marginTop: 20 }} className="justify-content-md-left">
                <Button
                    style={{ width: 150, marginLeft: 30 }}
                    variant="success"
                    onClick={item => {
                        item.preventDefault()
                        constructItemObject()
                        history.push(`/`)
                    }}
                    type="button">Save Item
                </Button>

                <Button
                    style={{ width: 150, marginLeft: 30 }}
                    variant="danger"
                    className="CancelAddItem"
                    onClick={() => {
                        history.push(`/`)
                    }}
                    type="submit">Cancel
                </Button>
            </Row>
        </>
    );
}