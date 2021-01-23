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
    //assigns item variable the state of setNewItem
    const [item, setNewItem] = useState({});

    const itemLocation = useRef();
    const itemName = useRef();
    const itemDescription = useRef();
    const itemSerialNumber = useRef();
    const itemNotes = useRef();

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


    const showToast1 = () => {
        toast.error("Item Location is a required field")
    };

    const showToast2 = () => {
        toast.error("Item Name is a required field")
    };

    const showToast3 = () => {
        toast.error("Item Description is a required field")
    };

    const showToast4 = () => {
        toast.error("Item Serial Number is a required field")
    };

    const showToast5 = () => {
        toast.error("Item Notes is a required field")
    };


    const constructItemObject = () => {
        // setIsLoading(true)
        if (itemLocation.current.value === "") {
            showToast1();
        }
        else if (itemName.current.value === "") {
            showToast2();
        }
        else if (itemDescription.current.value === "") {
            showToast3();
        }
        else if (itemSerialNumber.current.value === "") {
            showToast4();
        }
        else if (itemNotes.current.value === "") {
            showToast5();
        }
        else {
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
    }

    return (
        <>
            <h1 className="AddItemHeader">Inventory</h1>
            <hr className="hr-AddItem" />
            <p className="requiredField"><i>* Required</i></p>
            <Row style={{ marginTop: -15 }} className="justify-content-md-left">
                <label style={{ width: 200, height: 5 }} className="LocationTitle">Item Location</label>
                <select style={{ width: 400, height: 35 }}
                    className="RoomInput"
                    name="itemRoom"
                    onChange={handleControlledInputChange}
                    ref={itemLocation}
                // defaultValue={itemId ? item.itemLocation : ""}
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
            <p className="requiredField"><i>* Required</i></p>
            <Row style={{ marginTop: -15 }} className="justify-content-md-left">
                <form action="/action_page.php">
                    <label style={{ width: 200, height: 5 }} className="ItemNameTitle">Item Name:  </label>
                    <input style={{ width: 400, height: 35 }} type="text" ref={itemName} className="ItemNameInput" name="itemName" onChange={handleControlledInputChange} placeholder={itemId ? item.itemName : ""} />
                </form>
            </Row>
            <p className="requiredField"><i>* Required</i></p>
            <Row style={{ marginTop: -15 }} className="justify-content-md-left">
                <label style={{ width: 200, height: 5 }} className="DescriptionTitle">Item Description:  </label>
                <textarea style={{ width: 400, height: 100 }} type="textarea" ref={itemDescription} className="DescriptionInput" name="itemDescription" onChange={handleControlledInputChange} placeholder={itemId ? item.itemDescription : ""} />
            </Row>
            <p className="requiredField"><i>* Required</i></p>
            <Row style={{ marginTop: -15 }} className="justify-content-md-left">
                <label style={{ width: 197, height: 5 }} className="ItemSerialTitle">Item Serial Number:  </label>
                <input style={{ width: 400, height: 35 }} type="text" ref={itemSerialNumber} className="ItemSerialInput" name="itemSerialNumber" onChange={handleControlledInputChange} placeholder={itemId ? item.itemSerialNumber : ""} />
            </Row>
            <p className="requiredField"><i>* Required</i></p>
            <Row style={{ marginTop: -15 }} className="justify-content-md-left">
                <label style={{ width: 197, height: 5 }} className="ItemNotesTitle">Item Notes:  </label>
                <textarea style={{ width: 400, height: 100 }} type="textarea" ref={itemNotes} className="ItemNotesInput" name="itemNotes" onChange={handleControlledInputChange} placeholder={itemId ? item.itemNotes : ""} />
            </Row>

            <Row style={{ marginTop: 20 }} className="justify-content-md-left">
                <Button
                    style={{ width: 150, marginLeft: 30 }}
                    variant="success"
                    onClick={item => {
                        item.preventDefault()
                        constructItemObject()
                        // history.push(`/`)
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

                {/* <Button
                    style={{ width: 150, marginLeft: 30 }}
                    variant="danger"
                    className="CancelAddItem"
                    onClick={showToast}
                    type="submit">Toast
                </Button>
                 */}
                <ToastContainer
                    position="top-center"
                    autoClose={2000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover

                />

            </Row>
        </>
    );
}