import { DataGrid } from '@mui/x-data-grid';

const DataGridList = (props) => {
  const itemData = props.data;
  const columns = [
    {
      field: 'songName',
      headerName: '곡명',
      width: 110,
      editable: true,
    },
    {
      field: 'artistName',
      headerName: '아티스트명',
      width: 150,
      editable: true,
    },
    {
      field: 'album',
      headerName: '엘범명',
      width: 150,
      editable: true,
    },
    {
      field: 'playTime',
      headerName: 'Play Time',
      width: 150,
      editable: true,
    },
  ];
  return (
    <DataGrid
      rows={itemData}
      columns={columns}
      pageSize={10}
      rowsPerPageOptions={[4]}
      checkboxSelection
      disableSelectionOnClick
    />
  );
};
export default DataGridList;
