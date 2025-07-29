function parseInventory(csv) {
    const rows = csv.trim().split('\n'); // Split by new lines
    const [headerRow, ...dataRows] = rows;

    const [itemKey, categoryKey, qtyKey] = headerRow.split(',');

    const result = [];
    let totalQty = 0;

    for (const row of dataRows) {
        const [item, category, qtyStr] = row.split(',');
        const qty = Number(qtyStr);
        totalQty += qty;

        result.push({
            item,
            category,
            qty,
        });
    }

    return [result, totalQty];
}


const input = "Item,Category,Qty\nKeyboard,Electronics,12\nPen,Stationery,30";
console.log(parseInventory(input));
