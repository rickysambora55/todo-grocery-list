import { useState } from "react";
import Header from "./Header";
import Form from "./Form";
import Grocery from "./Grocery";
import Footer from "./Footer";

export default function App() {
    const [items, setItems] = useState([]);

    function handleAdd(item) {
        setItems([...items, item]);
    }

    function handleRemove(id) {
        setItems(items.filter((item) => item.id !== id));
    }

    function handleCheckbox(id) {
        setItems(
            items.map((item) => {
                if (item.id === id) item.checked = !item.checked;
                return item;
            })
        );
    }

    function handlePurge() {
        setItems([]);
    }

    return (
        <div className="app">
            <Header />
            <Form handleAdd={handleAdd} />
            <Grocery
                items={items}
                handleRemove={handleRemove}
                handleCheckbox={handleCheckbox}
                handlePurge={handlePurge}
            />
            <Footer items={items} />
        </div>
    );
}
