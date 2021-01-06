import React, { useContext, useEffect, useState } from "react"
import { ItemContext } from "./AppDataProvider"
//import "./App.css"
import NavDropdown from 'react-bootstrap/NavDropdown';

import DropdownButton from 'react-bootstrap/DropdownButton';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';


export const RoomFilter = () => {
    const { setRoomFilter } = useContext(ItemContext)
    const [value, setValue] = useState('');
    useEffect(() => {
        setRoomFilter("")
    }, [setRoomFilter])

    const handleSelect = (e) => {
        setValue(e)
    }

    return (
        <>
            {['Primary'].map(
                (variant) => (
                    <DropdownButton
                        as={ButtonGroup}
                        key={variant}
                        id={`dropdown-variants-${variant}`}
                        variant={variant.toLowerCase()}
                        title={variant}
                        onSelect={handleSelect}
                    >
                        <Dropdown.Item as="button">Attic</Dropdown.Item>
                        <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                        <Dropdown.Item eventKey="3" active>
                            Active Item
                    </Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                    </DropdownButton>
                ),
            )}


            {/* 
            <select className="RoomFilter" name="roomFilter" onChange={
                (changeEvent) => setRoomFilter(changeEvent.target.value)
            } >
                <option defaultValue=""></option>
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
            </select> */}
        </>
    )
}