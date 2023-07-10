import { internationalCountries } from '@smartmed/utility/consts';

type Code = (typeof internationalCountries)[number]['id'];

export type CountryFlagProps = {
  code?: Code | null;
};

export const CountryFlagDefaultProps = {
  code: null,
} as const;
