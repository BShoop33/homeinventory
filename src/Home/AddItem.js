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
                <div className="FiltersContainer">
                    <div className="RoomContainer">
                        <label className="RoomFilterTitle">Room </label>
                        <select className="RoomFilter">Room
                            <option>1</option>
                            <option>2</option>
                        </select>
                    </div>

                    <div className="ItemNumberContainer">
                        <label className="ItemNumberTitle">Item Number</label>
                        <select className="ItemNumberFilter">Item Inventory
                            <option>1</option>
                            <option>2</option>
                        </select>
                    </div>

                    <div className="SearchContainer">
                        <label className="SearchTitle">Search</label>
                        <input type="text" className="Search" placeholder="Search  for an item" />
                    </div>
                </div>

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
        </>
    );
}