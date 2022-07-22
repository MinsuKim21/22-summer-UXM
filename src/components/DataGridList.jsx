import { DataGrid } from '@mui/x-data-grid';

const DataGridList = (props) => {
  const itemData = props.data;
  const columns = [
    {
      field: 'songName',
      headerName: '곡명',
      width: 300,
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
      width: 100,
      editable: true,
    },
  ];
  return (
    <DataGrid
      rows={itemData}
      columns={columns}
      autoHeight
      // pageSize={10}
      checkboxSelection
    />
  );
};
export default DataGridList;
