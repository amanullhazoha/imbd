import { Fragment } from "react";

const TableHeader = props => {
    return (
        <thead>
            <tr>
                {props.header.map(item => {
                    return (
                        <Fragment key={item.label}>
                            <th scope="col">{item.label}</th>
                        </Fragment>
                    );
                })}
            </tr>
        </thead>
    );
};

export default TableHeader;
