import * as m from '@mui/material';
const MyBtn = ({ type, onClick }) => {
  const btnType = ['login', 'signup', 'HOME'].includes(type)
    ? type
    : 'default';

  return (
    <m.Button
      className={['MyBtn', `MyBtn_${btnType}`].join(' ')}
      onClick={onClick}
    >
      {type}
    </m.Button>
  );
};
MyBtn.defaultProps = {
  type: 'HOME',
};
export default MyBtn;
