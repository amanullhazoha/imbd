import TableBody from "./table-body.comopnet";
import TableHeader from "./table-header.component";

const Table = ({ columns, data }) => {
    return (
        <table className="table">
            <TableHeader header={columns} />
            <TableBody data={data} columns={columns} />
        </table>
    );
}
 
export default Table;

