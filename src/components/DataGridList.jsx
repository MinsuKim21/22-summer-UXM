import { DataGrid } from '@mui/x-data-grid';

const DataGridList = (props) => {
  const itemData = props.data;
  const columnData = props.columnData;
  return (
    <DataGrid
      rows={itemData}
      columns={columnData}
      pageSize={10}
      rowsPerPageOptions={[4]}
      checkboxSelection
      disableSelectionOnClick
    />
  );
};
export default DataGridList;
