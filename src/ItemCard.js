import React, { useContext } from "react"
import "./ItemCard.css"
// import { DeleteButton } from "./DeleteItem"
import { useHistory } from "react-router-dom"
import { ItemContext } from "./AppDataProvider"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import Button from "react-bootstrap/Button"

export const ItemCard = ({ item }) => {
    const { deleteItem } = useContext(ItemContext)
    const history = useHistory();
    return (
        <>
            <Row style={{ marginTop: 3, marginBottom: 3 }} className="justify-content-md-left">
                <Col md={2} className="overflow-auto">{item.itemName}</Col>
                <Col md={2} className="overflow-auto">{item.itemLocation}</Col>
                <Col md={3} className="overflow-auto">{item.itemDescription}</Col>
                <Col md={1} className="overflow-auto">{item.itemSerialNumber}</Col>
                <Col md={3} className="overflow-auto">{item.itemNotes}</Col>

                <Button
                    style={{ width: 70, fontSize: 14, height: 50 }}
                    variant="outline-dark"
                    onClick={() => {
                        history.push(`/edititem/${item.id}`)
                    }
                    }
                    type="button">Edit
                </Button>
                <Button
                    style={{ width: 70, fontSize: 14, height: 50 }}
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