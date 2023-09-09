import Alert from 'react-bootstrap/Alert';
import style from '../assets/style/Info.module.css';

const Wrong = () => (
  <div className={style.errorContainer}>
    <Alert variant="warning">
      <h1>UUUPPPSSSS! Page Not Found 😫😭🚀🚀🚀</h1>
      <p>Please Ensure to write a valid path...</p>
    </Alert>
  </div>
);

export default Wrong;
