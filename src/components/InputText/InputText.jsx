import React from 'react';
import PropTypes from 'prop-types';
import styles from './InputText.module.css';

import Search from '../../../public/images/Search.svg';
import Helper from '../../../public/images/Helper.svg';
import SearchError from '../../../public/images/SearchError.svg';
import HelperError from '../../../public/images/HelperError.svg';

const InputText = ({ ...props }) => {
  const classNameSize = `${styles.input} ${styles[`size-${props.inputSize}`]}`;
  const classNameVariant = `${styles[`input-${props.variant.toLowerCase()}`]}`;
  const classNameQuiet = props.quiet && styles.quiet;
  const classNameIconBefore = props.iconBefore
    ? styles.inputWithIconBefore
    : '';
  const classNameIconAfter = props.iconAfter ? styles.inputWithIconAfter : '';
  const classNameError = props.error ? styles.error : '';
  const classNameAlignment =
    props.alignment === 'right' ? styles.alignmentRight : '';
  return (
    <div className={styles.inputContainer}>
      {props.iconBefore && (
        <span className={styles.iconBefore}>
          <img
            src={props.disabled ? Search : props.error ? SearchError : Search}
            alt='Search icon'
          />
        </span>
      )}
      <input
        className={`${classNameSize} ${classNameVariant} 
        ${classNameQuiet} 
        ${classNameIconBefore} 
        ${classNameIconAfter}
        ${props.disabled ? '' : classNameError}
        ${classNameAlignment}`}
        disabled={props.disabled}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
        {...props}
      />
      {props.iconAfter && (
        <span className={styles.iconAfter}>
          <img
            src={props.disabled ? Helper : props.error ? HelperError : Helper}
            alt='Helper icon'
          />
        </span>
      )}
    </div>
  );
};

InputText.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  inputSize: PropTypes.oneOf(['24', '32', '36', '40', '44', '48']),
  variant: PropTypes.oneOf(['Fill', 'Outline']),
  quiet: PropTypes.bool,
  error: PropTypes.bool,
  disabled: PropTypes.bool,
  iconBefore: PropTypes.bool,
  iconAfter: PropTypes.bool,
  alignment: PropTypes.oneOf(['left', 'right']),
  placeholder: PropTypes.string,
};

InputText.defaultProps = {
  value: '',
  inputSize: '36',
  variant: 'Fill',
  quiet: false,
  error: false,
  disabled: false,
  iconBefore: false,
  iconAfter: false,
  alignment: 'left',
  placeholder: 'Input...',
};

export default InputText;
