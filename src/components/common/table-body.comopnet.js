import { Fragment } from "react";

const TableBody = ({ data: rows, columns }) => {
    let key = 0;

    return (
        <tbody>
            {rows.map( row => {
                return (
                    <tr key={row.id}>
                        {columns.map( column => {
                            return (
                                <Fragment key={key} {...key++}>
                                    {column.content(row, column.path)}
                                </Fragment>
                            );
                        })}
                    </tr>
                );
            })}
        </tbody>
    );
};

export default TableBody;
