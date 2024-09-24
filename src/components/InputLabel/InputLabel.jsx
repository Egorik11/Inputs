import InfoIcon from '../../../public/images/InfoIcon.svg';
import PropTypes from 'prop-types';
import styles from './InputLabel.module.css';

const InputLabel = ({ ...props }) => {
  return (
    <label
      htmlFor={props.htmlFor}
      className={`${styles.label} ${styles[props.labelSize]} ${
        props.disabled && styles.disabled
      } ${styles.labelPosition}`}
    >
      {props.text}
      {props.required && (
        <span title='required' className={styles.required}>
          *
        </span>
      )}
      {props.showInfoIcon && props.infoText && (
        <span className={styles.infoIcon}>
          <img src={InfoIcon} alt='Info icon' />
          <span className={styles.tooltip}>{props.infoText}</span>
        </span>
      )}
    </label>
  );
};

InputLabel.propTypes = {
  text: PropTypes.string.isRequired,
  htmlFor: PropTypes.string.isRequired,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  labelSize: PropTypes.oneOf(['xxs', 'sm']),
  labelPosition: PropTypes.oneOf(['top', 'left']),
  infoText: PropTypes.string,
  showInfoIcon: PropTypes.bool,
};

InputLabel.defaultProps = {
  text: 'Email',
  required: false,
  labelSize: 'xxs',
  disabled: false,
  labelPosition: 'top',
  infoText: '',
  showInfoIcon: true,
};

export default InputLabel;
