import React from 'react';
import { render, screen } from '@testing-library/react';
import { ArrowBendDoubleUpRight } from '../componets';

describe('ArrowBendDoubleUpRight', () => {
  describe('props: size = xs', () => {
    test('should render correctly', async () => {
      render(<ArrowBendDoubleUpRight data-testid="test" size="xs" />);

      expect(screen.getByTestId('test')).toBeVisible();
    });

    test('should forward classes', () => {
      render(
        <ArrowBendDoubleUpRight
          data-testid="test"
          className="class"
          size="xs"
        />
      );
      expect(screen.getByTestId('test')).toHaveClass('class');
    });

    test('should have the appropriate attributes', () => {
      render(<ArrowBendDoubleUpRight data-testid="test" size="xs" />);

      expect(screen.getByTestId('test')).toHaveAttribute('width', '16');
      expect(screen.getByTestId('test')).toHaveAttribute('height', '16');
      expect(screen.getByTestId('test')).toHaveAttribute(
        'viewBox',
        '0 0 16 16'
      );
    });

    describe('props: stroke', () => {
      test('should render correctly', () => {
        render(
          <ArrowBendDoubleUpRight data-testid="test" stroke="red" size="xs" />
        );

        expect(screen.getByTestId('test')).toBeVisible();
      });

      test('should have the appropriate attributes', () => {
        render(
          <ArrowBendDoubleUpRight data-testid="test" stroke="red" size="xs" />
        );
        expect(screen.getByTestId('test')).toHaveAttribute('stroke', 'red');
      });
    });
  });

  describe('props: size = sm', () => {
    test('should render correctly', async () => {
      render(<ArrowBendDoubleUpRight data-testid="test" size="sm" />);

      expect(screen.getByTestId('test')).toBeVisible();
    });

    test('should forward classes', () => {
      render(
        <ArrowBendDoubleUpRight
          data-testid="test"
          className="class"
          size="sm"
        />
      );
      expect(screen.getByTestId('test')).toHaveClass('class');
    });

    test('should have the appropriate attributes', () => {
      render(<ArrowBendDoubleUpRight data-testid="test" size="sm" />);

      expect(screen.getByTestId('test')).toHaveAttribute('width', '24');
      expect(screen.getByTestId('test')).toHaveAttribute('height', '24');
      expect(screen.getByTestId('test')).toHaveAttribute(
        'viewBox',
        '0 0 24 24'
      );
    });

    describe('props: stroke', () => {
      test('should render correctly', () => {
        render(
          <ArrowBendDoubleUpRight data-testid="test" stroke="red" size="sm" />
        );

        expect(screen.getByTestId('test')).toBeVisible();
      });

      test('should have the appropriate attributes', () => {
        render(
          <ArrowBendDoubleUpRight data-testid="test" stroke="red" size="sm" />
        );
        expect(screen.getByTestId('test')).toHaveAttribute('stroke', 'red');
      });
    });
  });

  describe('props: size = md', () => {
    test('should render correctly', async () => {
      render(<ArrowBendDoubleUpRight data-testid="test" size="md" />);

      expect(screen.getByTestId('test')).toBeVisible();
    });

    test('should forward classes', () => {
      render(
        <ArrowBendDoubleUpRight
          data-testid="test"
          className="class"
          size="md"
        />
      );
      expect(screen.getByTestId('test')).toHaveClass('class');
    });

    test('should have the appropriate attributes', () => {
      render(<ArrowBendDoubleUpRight data-testid="test" size="md" />);

      expect(screen.getByTestId('test')).toHaveAttribute('width', '32');
      expect(screen.getByTestId('test')).toHaveAttribute('height', '32');
      expect(screen.getByTestId('test')).toHaveAttribute(
        'viewBox',
        '0 0 32 32'
      );
    });

    describe('props: stroke', () => {
      test('should render correctly', () => {
        render(
          <ArrowBendDoubleUpRight data-testid="test" stroke="red" size="md" />
        );

        expect(screen.getByTestId('test')).toBeVisible();
      });

      test('should have the appropriate attributes', () => {
        render(
          <ArrowBendDoubleUpRight data-testid="test" stroke="red" size="md" />
        );
        expect(screen.getByTestId('test')).toHaveAttribute('stroke', 'red');
      });
    });
  });
});
