import { Omit } from '@reduxjs/toolkit/dist/tsHelpers';
import React, {
  InputHTMLAttributes,
  memo,
  useEffect,
  useRef,
  useState,
} from 'react';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import styles from './Input.module.scss';

type HTMLInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'value' | 'onChange' | 'readOnly'
>;
interface InputProps extends HTMLInputProps {
  className?: string;
  value?: string | number;
  onChange?: (value: string) => void;
  placeholder?: string;
  autoFocus?: boolean;
  readonly?: boolean;
}

export const Input = memo(
  ({
    className,
    onChange,
    value,
    type = 'text',
    placeholder,
    autoFocus,
    readonly,
    ...otherProps
  }: InputProps) => {
    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
      onChange?.(e.target.value);
    };
    const inputReference = useRef<HTMLInputElement>(null);
    const [isFocused, setIsFocused] = useState(false);

    const onBlur = () => {
      setIsFocused(false);
    };

    const onFocus = () => {
      setIsFocused(true);
    };
    useEffect(() => {
      if (autoFocus) {
        setIsFocused(true);
        inputReference.current?.focus();
      }
    }, [autoFocus]);

    const mods: Mods = {
      [styles.readonly]: readonly,
    };

    return (
      <div className={classNames(styles.wrapper, mods, [className])}>
        {placeholder && (
          <div className={styles.placeholder}>{`${placeholder}>`}</div>
        )}
        <input
            ref={inputReference}
            className={styles.input}
            type={type}
            value={value}
            onChange={onChangeHandler}
            onBlur={onBlur}
            onFocus={onFocus}
            readOnly={readonly}
          // eslint-disable-next-line jsx-a11y/no-autofocus
            autoFocus={isFocused}
            {...otherProps}
        />
      </div>
    );
  }
);
