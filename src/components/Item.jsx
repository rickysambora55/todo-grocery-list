export default function Item({ item, handleRemove, handleCheckbox }) {
    return (
        <li key={item.id}>
            <input
                type="checkbox"
                checked={item.checked}
                onChange={() => handleCheckbox(item.id)}
            />
            <span
                style={item.checked ? { textDecoration: "line-through" } : {}}
            >
                {item.quantity === 1 ? "" : `${item.quantity} `}
                {item.name}
            </span>
            <button onClick={() => handleRemove(item.id)}>&times;</button>
        </li>
    );
}
