import React, { useContext, useEffect } from "react"
import './App.css';
import { useHistory } from "react-router-dom"
import { ItemCard } from "./ItemCard"
import { ItemContext } from "./AppDataProvider"

export function HomePage() {
  const { item, getItems, getItemById, editItems, addItems, deleteItem } = useContext(ItemContext)
  const history = useHistory();

  useEffect(() => {
    getItems()
  }, [])

  return (
    <>
      <header className="PageHeaderContainer">
        <button className="AddItemButton"

          onClick={() => {
            history.push(`/additem`)
          }}
          type="button">Add New Item
        </button>
        <h1 className="HomeInventoryTitle">Home Inventory</h1>
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
            <input type="text" className="Search" placeholder="Search for an item" />
          </div>
        </div>

        <div className="InventoryContainer">

          <div className="InventoryHeader">
            <div className="InventoryNameHeader">Item Name</div>
            <div className="InventoryRoomHeader">Room</div>
            <div className="InventoryDescriptionHeader">Description</div>
            <div className="InventorySerialHeader">Serial Number</div>
            <div className="InventoryNotesHeader">Notes</div>
          </div>
          <div className="ItemCardReturn">
            {
              item.map(item => {
                return <ItemCard key={item.id} item={item} />
              })
            }
          </div>
        </div>
      </div>
    </>
  );
}