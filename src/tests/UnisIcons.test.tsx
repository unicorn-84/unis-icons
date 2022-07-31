import React from 'react';
import { render, screen } from '@testing-library/react';
import * as UnisIcons from '../components';

describe('UnisIcons', () => {
  describe('ArrowArcLeft', () => {
    test('should render correctly', async () => {
      render(<UnisIcons.ArrowArcLeft data-testid="test" />);

      expect(screen.getByTestId('test')).toBeVisible();
    });
  });

  describe('ArrowArcRight', () => {
    test('should render correctly', async () => {
      render(<UnisIcons.ArrowArcRight data-testid="test" />);

      expect(screen.getByTestId('test')).toBeVisible();
    });
  });

  describe('ArrowBendDoubleUpLeft', () => {
    test('should render correctly', async () => {
      render(<UnisIcons.ArrowBendDoubleUpLeft data-testid="test" />);

      expect(screen.getByTestId('test')).toBeVisible();
    });
  });

  describe('ArrowBendDoubleUpRight', () => {
    test('should render correctly', async () => {
      render(<UnisIcons.ArrowBendDoubleUpRight data-testid="test" />);

      expect(screen.getByTestId('test')).toBeVisible();
    });
  });

  describe('ArrowBendDownLeft', () => {
    test('should render correctly', async () => {
      render(<UnisIcons.ArrowBendDownLeft data-testid="test" />);

      expect(screen.getByTestId('test')).toBeVisible();
    });
  });

  describe('ArrowBendDownRight', () => {
    test('should render correctly', async () => {
      render(<UnisIcons.ArrowBendDownRight data-testid="test" />);

      expect(screen.getByTestId('test')).toBeVisible();
    });
  });

  describe('ArrowBendLeftDown', () => {
    test('should render correctly', async () => {
      render(<UnisIcons.ArrowBendLeftDown data-testid="test" />);

      expect(screen.getByTestId('test')).toBeVisible();
    });
  });

  describe('ArrowBendLeftUp', () => {
    test('should render correctly', async () => {
      render(<UnisIcons.ArrowBendLeftUp data-testid="test" />);

      expect(screen.getByTestId('test')).toBeVisible();
    });
  });
});
