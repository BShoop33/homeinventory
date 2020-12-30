import React, { useContext, useEffect, useState } from "react"
import './App.css';
import { useHistory } from "react-router-dom"
import { ItemCard } from "./ItemCard"
import { ItemContext } from "./AppDataProvider"
import { ItemSearch } from "./SearchTerms"

export function HomePage() {
  const { item, getItems, searchTerms } = useContext(ItemContext)
  const history = useHistory();
  const [filteredItems, setFiltered] = useState([])

  useEffect(() => {
    getItems()
  }, [])

  useEffect(() => {
    if (searchTerms !== "") {
      const subset = item.filter(item => item.itemName.toLowerCase().includes(searchTerms.toLowerCase().trim()))
      setFiltered(subset)
    } else {
      setFiltered(item)
    }
  }, [searchTerms, item])

  return (
    <>
      <header className="PageHeaderContainer">
        <button className="AddItemButton"
          onClick={() => {
            history.push(`/additem`)
          }}
          type="button">Add New Item
        </button>
        <ItemSearch key={item.id} item={item} />
        <h1 className="HomeInventoryTitle">Home Inventory</h1>
      </header>
      <div className="BodyContainer">
        <div className="InventoryContainer">
          <div className="InventoryHeader">
            <div className="InventoryNameHeader">Item Name</div>
            <div className="InventoryRoomHeader">Room</div>
            <div className="InventoryDescriptionHeader">Description</div>
            <div className="InventorySerialHeader">Serial Number</div>
            <div className="InventoryNotesHeader">Notes</div>
            <div className="InventoryBlankHeader"></div>
          </div>
          <div className="ItemCardReturn">
            {
              filteredItems.map(item => {
                return <ItemCard key={item.id} item={item} />
              })
            }
          </div>
        </div>
      </div>
    </>
  );
}