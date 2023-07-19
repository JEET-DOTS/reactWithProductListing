import React from "react";
import { createRoot } from 'react-dom/client';
import { Header } from "./header";
import { Sidebar } from "./sidebar";
import { Footer } from "./footer";
import { Product } from "./product";

const App = () => {
    return (
    <>
        <div className="row">
            <div className="col-12">
                <Header />
            </div>
            <div className="col-12">
                <div className="row">
                    <div className="col-3"><Sidebar /></div>
                    <div className="col-9"><Product/></div>
                </div>
            </div>
            <div className="col-12"><Footer /></div>
        </div>
    </>
    )

}
const root = createRoot(document.getElementById('root'));
root.render(<App />);