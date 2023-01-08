import { render, screen } from '@testing-library/react';
import React from 'react';
import { Button, ButtonTheme } from './Button';

describe('Button ', () => {
  test('render with text', () => {
    // eslint-disable-next-line i18next/no-literal-string
    render(<Button>TEXT</Button>);
    expect(screen.getByText('TEXT')).toBeInTheDocument();
  });
  test('render Button with  class clear', () => {
    // eslint-disable-next-line i18next/no-literal-string
    render(<Button theme={ButtonTheme.CLEAR}>TEXT</Button>);
    expect(screen.getByText('TEXT')).toHaveClass('clear');
    screen.debug();
  });
});
