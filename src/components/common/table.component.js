import TableBody from "./table-body.comopnet";
import TableHeader from "./table-header.component";

const Table = ({ columns, data, sorting, onSort }) => {
    return (
        <table className="table">
            <TableHeader 
                header={columns} 
                sorting={sorting} 
                onSort={onSort} 
            />
            <TableBody data={data} columns={columns} />
        </table>
    );
}
 
export default Table;

