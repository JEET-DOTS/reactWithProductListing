import React from "react";
import products from "./data";
import { Modal, Button } from 'react-bootstrap'
import { useState } from "react";
import Slider from 'slider-moon';
import 'slider-moon/dist/style.css'

const Product = () => {
    const [isShow, setInvokeModal] = useState("")
    const initModal = () => {
        return setInvokeModal("")
    }

    const ModalDialog = (key) => {
        console.log(key);
        setInvokeModal(key)
    }
    return (
        <>
            <div className="row">
                {products.map((item, key) => (
                    <>
                        <div onClick={() => ModalDialog(key)} key={key} className="col-3 product" style={{ "border": "1px solid lightgray", "borderRadius": "5px", "padding": "5px", "margin": "5px", "textAlign": "center", "cursor": "pointer" }}>
                            <p>{item.brand}</p>
                            <h6>{item.title}</h6>
                            <img src={item.thumbnail} width={200} height={200} />
                            <p style={{ "fontWeight": "bold" }}>Price : {item.price}</p>
                            <p style={{ "color": "red" }}>Discount : {item.discountPercentage} %</p>
                            <p style={{ "textAlign": "justify" }}>{item.description.substring(0, 50)}...</p>

                        </div>
                        <Modal key={`model-${key}`} show={(key === isShow) ? true : false}>
                            <Modal.Header onClick={() => initModal()}>
                                <Modal.Title> {item.title} ( {item.brand} )</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <Slider
                                    style={{ "width": "200px" }}
                                    slideClass={'my-slider-grid'}
                                    infinite={true}
                                    bullets={true}
                                    arrowsNav={true}
                                    animation={'scale'}
                                    callback={() => {
                                        console.log('here');
                                    }}
                                >
                                    <div className='slider my-slider-grid'>
                                        <ul className='slider-wrapper'>
                                            {item.images.map((imgPath, imgKey) => (
                                                <li key={imgKey} style={{ "textAlign": "center" }}>
                                                    <img src={imgPath} width={200} height={200} />
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </Slider>
                                {/* <img src={item.thumbnail} width={200} height={200} /> */}
                                <p style={{ "fontWeight": "bold" }}>Price : {item.price}</p>
                                <p style={{ "color": "red" }}>Discount : {item.discountPercentage} %</p>
                                <p style={{ "textAlign": "justify" }}>{item.description}</p>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="danger" onClick={() => initModal()}>
                                    Close
                                </Button>
                            </Modal.Footer>
                        </Modal>

                    </>
                ))}
            </div>
        </>
    )
}

export {
    Product
}