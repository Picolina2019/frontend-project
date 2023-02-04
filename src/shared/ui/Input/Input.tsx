import { Omit } from '@reduxjs/toolkit/dist/tsHelpers';
import React, { InputHTMLAttributes, useEffect, useRef, useState } from 'react';
import { classNames } from 'shared/lib/classNames';
import styles from './Input.module.scss';

type HTMLInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'value' | 'onChange'
>;
interface InputProps extends HTMLInputProps {
  className?: string;
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  autoFocus?: boolean;
}

export const Input = ({
  className,
  onChange,
  value,
  type = 'text',
  placeholder,
  autoFocus,
  ...otherProps
}: InputProps) => {
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  };
  const inputReference = useRef<HTMLInputElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  useEffect(() => {
    inputReference.current?.focus();
  }, []);
  useEffect(() => {
    if (autoFocus) {
      setIsFocused(true);
      inputReference.current?.focus();
    }
  }, [autoFocus]);
  return (
    <div className={classNames(styles.wrapper, {}, [className])}>
      {placeholder && (
        <div className={styles.placeholder}>{`${placeholder}>`}</div>
      )}
      <input
        ref={inputReference}
        className={styles.input}
        type={type}
        value={value}
        onChange={onChangeHandler}
        autoFocus={isFocused}
        {...otherProps}
      />
    </div>
  );
};
