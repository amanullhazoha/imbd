const Filter = ({ filterItems, selectFilter, onClickFilter }) => {
    return (
        <div className="col-md-2">
            <ul className="list-group">
                {filterItems.map(item => (
                    <li className={selectFilter === item ? "list-group-item active" : "list-group-item"} key={item} onClick={() => onClickFilter(item)}>{item}</li>
                ))}
            </ul>
        </div>
    );
}
 
export default Filter;