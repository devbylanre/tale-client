import { tuple } from 'yup';
import Variants from '../types/variants';

const justification = {
  justifyContent: {
    class: 'justify-content',
    responsive: true,
    values: [
      'end',
      'start',
      'normal',
      'center',
      'evenly',
      'around',
      'between',
      'stretch',
    ] as const,
  },

  justifyItems: {
    class: 'justify-items',
    responsive: true,
    values: ['end', 'start', 'center', 'stretch'] as const,
  },

  justifySelf: {
    class: 'justify-self',
    responsive: true,
    values: ['auto', 'start', 'end', 'center', 'stretch'] as const,
  },

  alignContent: {
    class: 'content',
    responsive: true,
    values: [
      'end',
      'start',
      'center',
      'evenly',
      'normal',
      'around',
      'stretch',
      'between',
      'baseline',
    ] as const,
  },

  alignItems: {
    class: 'items',
    responsive: true,
    values: ['end', 'start', 'center', 'stretch', 'baseline'] as const,
  },

  alignSelf: {
    class: 'self',
    responsive: true,
    values: ['auto', 'start', 'end', 'center', 'stretch', 'baseline'] as const,
  },

  placeContent: {
    class: 'place',
    responsive: true,
    values: [
      'center',
      'start',
      'end',
      'left',
      'right',
      'top',
      'bottom',
      'stretch',
      'auto',
    ] as const,
  },

  placeItems: {
    class: 'items',
    responsive: true,
    values: ['end', 'start', 'center', 'stretch', 'baseline'] as const,
  },

  placeSelf: {
    class: 'self',
    responsive: true,
    values: ['auto', 'start', 'end', 'center', 'stretch', 'baseline'] as const,
  },
} satisfies Variants.Map;

export default justification;
