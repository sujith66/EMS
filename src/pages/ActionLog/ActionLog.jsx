import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useAction } from "../../context/ActionContext";

const columns = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "Action",
    headerName: "Action",
    width: 150,
    editable: true,
  },
  {
    field: "deviceName",
    headerName: "Device Name",
    width: 110,
    editable: true,
  },
  {
    field: "os",
    headerName: "OS",
    sortable: false,
    width: 160,
  },
  {
    field: "time",
    headerName: "Time",
    sortable: false,
    width: 160,
  },
];

const ActionLog = () => {
  const {
    state: { actions },
  } = useAction();

  return (
    <div style={{ height: 400, width: "100%", margin: "5rem auto" }}>
      <DataGrid
        rows={actions}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        disableSelectionOnClick
      />
    </div>
  );
};

export default ActionLog;
