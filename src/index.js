import React from "react";
import { createRoot } from 'react-dom/client';
import { Header } from "./header";
import { Sidebar } from "./sidebar";
import { Footer } from "./footer";
import { Product } from "./product";
import {Game} from "./game"


const App = () => {
    return (
        <>
            <div className="row">
                <div className="col-12">
                    <Header />
                </div>
                <div className="col-12">
                    <Product />
                </div>
                <div className="col-12 text-center">
                    <Game/>
                </div>
                
            </div>
        </>
    )

}
const root = createRoot(document.getElementById('root'));
root.render(<App />);