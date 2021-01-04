import React, { useContext, useEffect } from "react"
import { ItemContext } from "./AppDataProvider"
import "./App.css"

export const RoomFilter = () => {
    const { setRoomFilter } = useContext(ItemContext)

    useEffect(() => {
        setRoomFilter("")
    }, [setRoomFilter])

    return (
        <>
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
            </select>
        </>
    )
}