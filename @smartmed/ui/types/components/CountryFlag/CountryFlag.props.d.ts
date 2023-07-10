import { internationalCountries } from '@smartmed/utility/consts';
declare type Code = (typeof internationalCountries)[number]['id'];
export declare type CountryFlagProps = {
    code?: Code | null;
};
export declare const CountryFlagDefaultProps: {
    readonly code: null;
};
export {};
//# sourceMappingURL=CountryFlag.props.d.ts.map