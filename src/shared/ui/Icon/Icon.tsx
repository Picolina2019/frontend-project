import { classNames } from 'shared/lib/classNames/classNames';
import React, { memo } from 'react';
import styles from './Icon.module.scss';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
  Svg: React.VFC<React.SVGProps<SVGSVGElement>>;
  inverted?: boolean;
}

export const Icon = memo((props: IconProps) => {
  const { className, Svg, inverted, ...rest } = props;

  return (
    <Svg
      className={classNames(inverted ? styles.inverted : styles.Icon, {}, [
        className,
      ])}
      {...rest}
    />
  );
});
