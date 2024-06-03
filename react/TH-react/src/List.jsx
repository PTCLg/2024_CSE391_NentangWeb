function List(props) {

    const category = props.category;
    const itemList = props.item;

    itemList.sort((a, b) => a.caloriess - b.caloriess);
    const lowCalFruits = itemList.filter(i => i.caloriess < 70);

    // fruits.sort((a, b) => a.name.localeCompare(b.name));
    // const lowCalFruits = fruits.filter(i => i.name.length < 7);

    const listItem = lowCalFruits.map(i => <li key={i.id}>{i.name} : &nbsp;
        {i.caloriess}</li>);

    return (<>
        <h2>{category}</h2>
        <ul>{listItem}</ul>
    </>);
}

export default List