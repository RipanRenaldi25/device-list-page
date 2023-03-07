import React, { useMemo } from "react";
import { useTable, usePagination, useRowSelect } from "react-table";
import { useSelector, useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import CheckBox from "./CheckBox";
import { openModal } from "../../redux";

function Table({ tipe, onTipeChange }) {
  const [, setSearchParams] = useSearchParams();
  const column = [
    {
      Header: "Device Name",
      accessor: "device_name",
    },
    {
      Header: "Alias",
      accessor: "alias",
    },
    {
      Header: "Type",
      accessor: "type",
    },
    {
      Header: "Port",
      accessor: "port",
    },
    {
      Header: "IP Address",
      accessor: "ip_address",
    },
    {
      Header: "Status",
      accessor: "status",
    },
    {
      Header: "Detail",
      accessor: "detail",
    },
  ];
  const dispatch = useDispatch();
  const dummyData = useSelector((state) => state.data);
  const data = useMemo(() => dummyData, []);
  const columns = useMemo(() => column, []);
  const tableInstances = useTable({ data, columns, initialState: { pageIndex: 0, pageSize: 20 } }, usePagination, useRowSelect, (hooks) => {
    hooks.visibleColumns.push((column) => {
      return [
        {
          id: "id",
          Header: ({ getToggleAllRowsSelectedProps }) => <CheckBox {...getToggleAllRowsSelectedProps()} />,
          Cell: ({ row }) => <CheckBox {...row.getToggleRowSelectedProps()} />,
        },
        ...column,
      ];
    });
  });
  const { getTableBodyProps, getTableProps, headerGroups, canNextPage, canPreviousPage, page, pageOptions, nextPage, previousPage, prepareRow, state, selectedFlatRows } = tableInstances;
  const { pageIndex, pageSize } = state;
  const lastPage = pageOptions.slice(-1)[0];

  function onDetailHandler(id) {
    dispatch(openModal());
    onTipeChange("detail");
    setSearchParams({ id });
  }
  return (
    <div className="p-4 text-center">
      <table {...getTableProps()} className="w-full text-center">
        <thead className="text-white bg-[#43B7F9]">
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderProps}>
              {headerGroup.headers.map((col) => (
                <th {...col.getHeaderProps()} className="bg-blue-header">
                  {col.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()} key={row.id}>
                {row.cells.map((cell) => {
                  if (cell.column.Header === "Status") {
                    return (
                      <td {...cell.getCellProps()} style={{ color: cell.value === "Online" ? "green" : "red" }} className="border">
                        {cell.render("Cell")}
                      </td>
                    );
                  } else if (cell.column.Header === "Detail") {
                    return (
                      <td {...cell.getCellProps()} className="text-blue-600 border">
                        <button onClick={() => onDetailHandler(cell.row.original.id)}>{cell.render("Cell")}</button>
                      </td>
                    );
                  } else {
                    return (
                      <td {...cell.getCellProps()} className="p-1 border">
                        {cell.render("Cell")}
                      </td>
                    );
                  }
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="flex justify-center items-center mt-7">
        <button className="mr-3 text-2xl" disabled={!canPreviousPage} onClick={() => previousPage()}>
          &lt;
        </button>
        <div className="flex items-center">
          {pageIndex === lastPage ? (
            <p>
              {pageIndex * pageSize + 1}-{(pageIndex + 1) * pageSize - (pageSize * pageOptions.length - data.length)} page {pageIndex + 1} of {pageOptions.length}
            </p>
          ) : (
            <p>
              {pageIndex * pageSize + 1}-{(pageIndex + 1) * pageSize} page {pageIndex + 1} of {pageOptions.length}
            </p>
          )}
        </div>
        <button className="ml-3 text-2xl" disabled={!canNextPage} onClick={() => nextPage()}>
          &gt;
        </button>
      </div>
    </div>
  );
}

export default Table;
