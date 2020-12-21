import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
      <header className="PageHeaderContainer">
        <button className="AddItemButton"
          // onClick={() => {
          //   history.push(`/lend/borrow`)
          // }}
          type="button">Add New Item
        </button>
        <h1 className="HomeInventoryTitle">Home Inventory</h1>

      </header>

      <body className="BodyContainer">
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
      </body>
    </>
  );
}

export default App;