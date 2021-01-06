import React, { useContext, useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import { ItemCard } from "./ItemCard"
import { ItemContext } from "./AppDataProvider"
import { ItemSearch } from "./SearchTerms"
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';

export function TestPage() {
    const { item, getItems, searchTerms, roomFilter } = useContext(ItemContext)
    const history = useHistory();
    const [filteredItems, setFiltered] = useState([])
    const [value, setValue] = useState('');

    const handleSelect = (e) => {
        setValue(e)
    }

    useEffect(() => {
        getItems()
    }, [])

    useEffect(() => {
        if (searchTerms !== "") {
            const subset = item.filter(item => item.itemName.toLowerCase().includes(searchTerms.toLowerCase().trim()))
            setFiltered(subset)
        } else if (value !== "") {
            const subset2 = item.filter(item => item.itemLocation.includes(value))
            setFiltered(subset2)
        } else {
            setFiltered(item)
        }
    }, [searchTerms, value, item])

    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">Inventory</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                </Nav>
                <Form inline>
                    <DropdownButton
                        alignRight
                        style={{ marginRight: 20 }}
                        title="Filter By Location"
                        id="dropdown-menu-align-right"
                        onSelect={handleSelect}
                    >
                        <Dropdown.Item eventKey="AmSurg PAR 1">AmSurg PAR 1</Dropdown.Item>
                        <Dropdown.Item eventKey="AmSurg PAR 2">AmSurg PAR 2</Dropdown.Item>
                        <Dropdown.Item eventKey="AmSurg PAR 3">AmSurg PAR 3</Dropdown.Item>
                        <Dropdown.Item eventKey="Emergency Room PAR 1">Emergency Room PAR 1</Dropdown.Item>
                        <Dropdown.Item eventKey="Emergency Room PAR 2">Emergency Room PAR 2</Dropdown.Item>
                        <Dropdown.Item eventKey="ICU PAR 1">ICU PAR 1</Dropdown.Item>
                        <Dropdown.Item eventKey="ICU PAR 2">ICU PAR 2</Dropdown.Item>
                        <Dropdown.Item eventKey="Gastroenterology PAR 1">Gastroenterology PAR 1</Dropdown.Item>
                        <Dropdown.Item eventKey="Hematology PAR 1">Hematology PAR 1</Dropdown.Item>
                        <Dropdown.Item eventKey="Hematology PAR 2">Hematology PAR 2</Dropdown.Item>
                        <Dropdown.Item eventKey="Materials Management">Materials Management</Dropdown.Item>
                        <Dropdown.Item eventKey="Neurology PAR 1">Neurology PAR 1</Dropdown.Item>
                        <Dropdown.Item eventKey="Pharmacy">Pharmacy</Dropdown.Item>
                        <Dropdown.Item eventKey="Store Room 1">Store Room 1</Dropdown.Item>
                        <Dropdown.Item eventKey="Store Room 2">Store Room 2</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item eventKey="">Clear Location Filter</Dropdown.Item>
                    </DropdownButton>



                    {/* <RoomFilter key={item.id} item={item} /> */}
                    <ItemSearch type="text" className="mr-sm-2" key={item.id} item={item} />
                </Form>
            </Navbar>
            <br />
            <header className="PageHeaderContainer">
                <button className="AddItemButton"
                    onClick={() => {
                        history.push(`/additem`)
                    }}
                    type="button">Add New Item
                 </button>
            </header>
            <row>
                <col-1 md="auto">Item Name</col-1>
                <col-2 md="auto">Location</col-2>
                <col-3 md="auto">Description</col-3>
                <col-4 md="auto">Serial Number</col-4>
                <col-5 md="auto">Notes</col-5>
            </row>
            <row>
                {
                    filteredItems.map(item => {
                        return <ItemCard key={item.id} item={item} />
                    })
                }
            </row>
        </>
    );
}