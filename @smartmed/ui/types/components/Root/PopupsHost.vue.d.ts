export declare type PopupsHostService = {
    registerPopup: (id: symbol) => void;
    setOpen: (id: symbol, value: boolean) => void;
    remove: (id: symbol) => void;
};
declare const _default: import("vue").DefineComponent<{}, {
    isShown: import("vue").Ref<boolean>;
    animation: import("vue").Ref<boolean>;
    registerPopup: (id: symbol) => void;
    setOpen: (id: symbol, value: boolean) => void;
    remove: (id: symbol) => void;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}, {}>;
export default _default;
//# sourceMappingURL=PopupsHost.vue.d.ts.map