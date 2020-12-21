import React from "react"
import { useHistory } from "react-router-dom"
import './AddItem.css';

export function AddItem() {

    const history = useHistory();

    return (
        <>
            <header className="PageHeaderContainer-AddItem">
                <h1 className="HomeInventoryTitle-AddItem">Home Inventory</h1>
            </header>

            <div className="BodyContainer">
                <div className="InputsContainer">
                    <div className="RoomInputContainer">
                        <label className="RoomInputTitle">Room</label>
                        <select className="RoomInput">
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
                        <input type="text" className="ItemNameInput" />
                    </div>
                    <label className="DescriptionTitle">Item Description:  </label>
                    <div className="DescriptionContainer">

                        <textarea type="textarea" className="DescriptionInput" />
                    </div>

                    <div className="ItemSerialContainer">
                        <label className="ItemSerialTitle">Item Serial Number:  </label>
                        <input type="text" className="ItemSerialInput" />
                    </div>

                    <label className="ItemNotesTitle">Item Notes:  </label>
                    <div className="ItemNotesContainer">
                        <textarea type="textarea" className="ItemNotesInput" />
                    </div>
                </div>

                <div className="AddItemButtonsContainer">
                    <button className="SaveAddItem"
                        onClick={() => {
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