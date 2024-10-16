export default function Footer({ items }) {
    const totalItems = items.length;

    if (!totalItems) {
        return <footer className="stats">List empty</footer>;
    }

    const checkedItems = items.filter((item) => item.checked).length;
    const checkedPercentage = Math.round((checkedItems / totalItems) * 100);

    return (
        <footer className="stats">
            Progess done {checkedItems} out of {totalItems} total (
            {checkedPercentage}%)
        </footer>
    );
}
