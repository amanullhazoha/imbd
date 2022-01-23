import { Fragment } from "react";

const TableHeader = ({ header, sorting, onSort }) => {
    const handleSort = ({ path, sort }) => {
        if (!sort) return true;
        if (sorting.path === path) {
            if (sorting.order === "asc") {
                onSort({ path, order: "desc" });
            } else {
                onSort({ path, order: "asc" });
            }
        } else {
            onSort({ path, order: "asc" });
        }
    };

    return (
        <thead>
            <tr>
                {header.map((item) => {
                    return (
                        <Fragment key={item.label}>
                            <th onClick={() => handleSort(item)}>
                                {item.label}
                                {sorting.path === item.path ? (
                                    sorting.order === "asc" ? (
                                        <i className="bi bi-sort-down" />
                                    ) : (
                                        <i className="bi bi-sort-up-alt" />
                                    )
                                ) : null}
                            </th>
                        </Fragment>
                    );
                })}
            </tr>
        </thead>
    );
};

export default TableHeader;
