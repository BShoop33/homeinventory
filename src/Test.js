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
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from "react-bootstrap/Container"
import Button from "react-bootstrap/Button"
import 'bootstrap/dist/css/bootstrap.min.css';
import './Test.css'

export function TestPage() {
    const { item, getItems, searchTerms, roomFilter } = useContext(ItemContext)
    const history = useHistory();
    const [filteredItems, setFiltered] = useState([])
    const [value, setValue] = useState('');

    const [ShowResults, setShowResults] = React.useState(false)
    const Results = () => {
        if (ShowResults == true && value != "") {
            return <Button
                className="ClearFilterButton"
                variant="warning"
                onClick={() => { setFiltered(item); setShowResults(false); setValue("") }}
                type="button">Remove Filter
                    </Button>;
        }
        else {
            return null;
        }
    }

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
            setShowResults(true)

        } else {
            setFiltered(item)
        }
    }, [searchTerms, value, item])

    return (
        <>
            <Container fluid>
                <Navbar bg="dark" variant="tabs">
                    <Navbar.Brand style={{ color: "#ffffff" }} href="#home">Inventory</Navbar.Brand>
                    <Nav fixed="top" className="mr-auto">
                        <Nav.Link style={{ color: "#ffffff" }} href="#home">Home</Nav.Link>
                        <Nav.Link style={{ color: "#ffffff" }} href="#features">Features</Nav.Link>
                        <Nav.Link style={{ color: "#ffffff" }} href="#pricing">Pricing</Nav.Link>
                    </Nav>
                    <Results />
                    <Form inline>
                        <DropdownButton
                            alignRight
                            style={{ marginRight: 40 }}
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
                        </DropdownButton>

                        {/* <RoomFilter key={item.id} item={item} /> */}
                        <ItemSearch type="text" className="mr-sm-2" key={item.id} item={item} />
                    </Form>
                </Navbar>
            </Container>

            <Row>
                <Button
                    variant="info"
                    className="AddItemButton"
                    onClick={() => {
                        history.push(`/additem`)
                    }}
                    type="button">Add New Item
                 </Button>
            </Row>
            <Row className="justify-content-md-left">
                <Col md="2">Item Name</Col>
                <Col md="2">Location</Col>
                <Col md="3">Description</Col>
                <Col md="1">Serial Number</Col>
                <Col md="3">Notes</Col>
            </Row>
            <hr className="hr-text" />
            {
                filteredItems.map(item => {
                    return <ItemCard key={item.id} item={item} />
                })
            }

        </>
    );
}