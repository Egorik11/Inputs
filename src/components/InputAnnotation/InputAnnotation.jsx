import PropTypes from 'prop-types';
import styles from './InputAnnotation.module.css';

const InputAnnotation = ({ ...props }) => {
  return (
    <span
      className={`
        ${styles.annotation} 
        ${props.isError && styles.error} 
        ${props.disabled && styles.disabled}`}
    >
      {props.text}
    </span>
  );
};

InputAnnotation.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['info', 'error']),
  isError: PropTypes.bool,
};

InputAnnotation.defaultProps = {
  text: 'This is a hint text to help user.',
  type: 'info',
  isError: false,
};

export default InputAnnotation;
