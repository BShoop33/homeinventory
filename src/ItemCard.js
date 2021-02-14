import React, { useContext } from "react"
import { useHistory } from "react-router-dom"
import { ItemContext } from "./AppDataProvider"
import "./ItemCard.css"

export const ItemCard = ({ item }) => {
    const { deleteItem } = useContext(ItemContext)
    const history = useHistory();
    return (
        <>
            <Row className="justify-content-md-left">
                <Col md={2} id="border" className="overflow-auto">{item.itemName}</Col>
                <Col md={2} id="border" className="overflow-auto">{item.itemLocation}</Col>
                <Col md={3} id="border" className="overflow-auto">{item.itemDescription}</Col>
                <Col md={1} id="border" className="overflow-auto">{item.itemSerialNumber}</Col>
                <Col md={3} id="border" className="overflow-auto">{item.itemNotes}</Col>
                <Button
                    style={{ width: 70, fontSize: 14, height: 50, marginLeft: 2, marginRight: 2, marginTop: 1 }}
                    variant="outline-dark"
                    onClick={() => {
                        history.push(`/edititem/${item.id}`)
                    }
                    }
                    type="button">Edit
                </Button>
                <Button
                    style={{ width: 70, fontSize: 14, height: 50, marginTop: 1 }}
                    variant="outline-danger"
                    onClick={() => {
                        deleteItem(item.id)
                            .then(() => {
                                history.push(`/`)
                            })
                    }}
                    type="button">Delete
                </Button>
            </Row>
        </>
    )
}