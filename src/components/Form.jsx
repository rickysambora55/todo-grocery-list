import { useState } from "react";

export default function Form({ handleAdd }) {
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);

    function handleSubmit(e) {
        e.preventDefault();
        if (!name) return;

        const newItem = {
            id: Date.now(),
            name,
            quantity,
            checked: false,
        };

        handleAdd(newItem);
        setName("");
        setQuantity(1);
    }

    const quantityNum = [...Array(100)].map((_, i) => {
        return <option key={i + 1}>{i + 1}</option>;
    });

    return (
        <form className="add-form" onSubmit={handleSubmit}>
            <div>
                <select
                    value={quantity}
                    onChange={(e) => setQuantity(Number(e.target.value))}
                >
                    {quantityNum}
                </select>
                <input
                    type="text"
                    placeholder="Name..."
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <button>Add</button>
            </div>
        </form>
    );
}
