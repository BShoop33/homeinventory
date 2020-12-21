import './App.css';
import { useHistory } from "react-router-dom"
import { ItemCard } from "./ItemCard"

export function HomePage() {

  const history = useHistory();

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


          <div className="ItemCard">
            <div className="ItemCardContainer">
              <div className="ItemCardName">Christmas </div>
              <div className="ItemCardRoom">Living Roomffffffffffffffff</div>
              <div className="ItemCardDescription">Some ffffffffffffCool Description Here</div>
              <div className="ItemCardSerial">37286080890</div>
              <div className="ItemCardNotes">a;kjs;dlkfja;lsdkjf;asljfd</div>
            </div>
          </div>
          {/* <div className="LendReturnedToolsCards">
            {
              tool.map(tool => {
                return <ToolCard key={tool.id} tool={tool} />
              })
            }
          </div> */}
        </div>
      </div>
    </>
  );
}