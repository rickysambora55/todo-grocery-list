import { useState } from "react";
import Item from "./Item";

export default function Grocery({
    items,
    handleRemove,
    handleCheckbox,
    handlePurge,
}) {
    const [sortBy, setSortBy] = useState("input");
    let sortedItems;

    switch (sortBy) {
        case "name":
            sortedItems = items
                .slice()
                .sort((a, b) => a.name.localeCompare(b.name));
            break;
        case "checked":
            sortedItems = items.slice().sort((a, b) => a.checked - b.checked);
            break;
        case "input":
        default:
            sortedItems = items.slice();
            break;
    }

    return (
        <>
            <div className="list">
                <ul>
                    {sortedItems.map((item) => (
                        <Item
                            item={item}
                            key={item.id}
                            handleRemove={handleRemove}
                            handleCheckbox={handleCheckbox}
                        />
                    ))}
                </ul>
            </div>
            <div className="actions">
                <span>Sort by</span>
                <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                >
                    <option value="input">input</option>
                    <option value="name">name</option>
                    <option value="checked">progress</option>
                </select>
                <button onClick={handlePurge}>Clear List</button>
            </div>
        </>
    );
}
