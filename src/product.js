import React,{useEffect} from "react";
import data from "./data";
import { Modal, Button } from 'react-bootstrap'
import { useState } from "react";
import Slider from 'slider-moon';
import 'slider-moon/dist/style.css'

const Product = () => {
    const [isShow, setInvokeModal] = useState("");
    const [searchText, setSearchText] = useState("");
    const [products, setProducts] = useState(data);
    const initModal = () => {
        return setInvokeModal("")
    }

    useEffect(()=>{
        if(searchText.trim() && searchText.length > 0){
            setProducts(data.filter(item => item.title.indexOf(searchText) > -1));
        }else{
            setProducts(data)
        }
    },[searchText])

    const ModalDialog = ({ data }) => {
        var { key, item } = data;
        return (<>
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
        </>)
    }

    const modelOpen = (key) => {
        return setInvokeModal(key);
    }
    const clearData = () => {
        setSearchText("");
        setProducts(data)
    }
    return (
        <>
            <div className="row" style={{"margin": "0 auto"}}>
                <div className="col-6"></div>
                <div className="col-5 text-right">
                    <input type="text" onKeyUp={(e) => setSearchText(e.target.value)}   placeholder="search by title" className="form-control"/>
                </div>
                <div className="col-1 text-right">
                    <input type="button" value="Clear" onClick={() => clearData()} className="btn btn-danger" />
                </div>

                {products.map((item, key) => (
                    <>
                        <div key={item.id} onClick={() => modelOpen(key)} className="col-2" style={{ "margin": "0 auto","border": "1px solid lightgray", "borderRadius": "5px", "padding": "5px", "margin": "5px", "textAlign": "center", "cursor": "pointer" }}>
                            <p>{item.brand}</p>
                            <h6>{item.title}</h6>
                            <img src={item.thumbnail} width={"100%"} height={150} />
                            <p style={{ "fontWeight": "bold" }}>Price : {item.price}</p>
                            <p style={{ "color": "red" }}>Discount : {item.discountPercentage} %</p>
                            <p style={{ "textAlign": "justify" }}>{item.description.substring(0, 50)}...</p>
                        </div>
                        <ModalDialog data={{ key: key, item: item }} />
                    </>
                ))}
            </div>
        </>
    )
}

export {
    Product
}