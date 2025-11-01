interface IUsepaginaionProps {
    callback?: Function | null | undefined;
    page?: number;
    totalPages?: number;
    counter?: number;
}
declare function usePagination(props?: IUsepaginaionProps): {
    pages: any[];
    filters: {
        page: number;
    };
    totalPages: number;
    counter: number;
    setCounter: import("react").Dispatch<import("react").SetStateAction<number>>;
    setTotalPages: import("react").Dispatch<import("react").SetStateAction<number>>;
    setPage: (value: number) => void;
    setCallback: (newCallback: Function) => void;
};
export { usePagination, IUsepaginaionProps };
