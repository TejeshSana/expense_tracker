import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  radioGroup: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '-10px',
  },
  button: {
    position: 'relative',
    overflow: 'hidden',
    marginTop:'5rem',
    height: '3rem',
    padding: '0 2rem',
    borderRadius: '1.5rem',
    background: '#3d3a4e',
    backgroundSize: '400%',
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      transform: 'scaleX(0)',
      transformOrigin: '0 50%',
      width: '100%',
      height: 'inherit',
      borderRadius: 'inherit',
      background: 'linear-gradient(82.3deg, rgba(150, 93, 233, 1) 10.8%, rgba(99, 88, 238, 1) 94.3%)',
      transition: 'all 0.475s',
    },
    '&:hover::before': {
      transform: 'scaleX(1)',
    },
  },
  buttonContent: {
    position: 'relative',
    zIndex: 1,
  },

}));