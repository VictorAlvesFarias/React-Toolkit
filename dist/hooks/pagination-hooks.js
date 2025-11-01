import { useEffect, useState } from "react";
function usePagination(props) {
    var _a, _b, _c;
    const [page, setPage] = useState((_a = props === null || props === void 0 ? void 0 : props.page) !== null && _a !== void 0 ? _a : 1);
    const [totalPages, setTotalPages] = useState((_b = props === null || props === void 0 ? void 0 : props.totalPages) !== null && _b !== void 0 ? _b : 0);
    const [counter, setCounter] = useState((_c = props === null || props === void 0 ? void 0 : props.counter) !== null && _c !== void 0 ? _c : 2);
    function handleSetCallback(newCallback) {
        useEffect(() => {
            if (newCallback) {
                newCallback();
            }
        }, [page]);
    }
    function handleSetPage(value) {
        if (value != page) {
            setPage(value);
        }
    }
    function pagesCounter(page, totalPages, counter) {
        const pages = [];
        for (let index = 1; index < counter; index++) {
            if (page - index > 0) {
                pages.push({
                    page: page - index,
                    current: false
                });
            }
        }
        pages.push({
            page: page,
            current: true
        });
        for (let index = 1; index < counter; index++) {
            if (page + index <= totalPages) {
                pages.push({
                    page: page + index,
                    current: false
                });
            }
        }
        return pages;
    }
    return {
        pages: pagesCounter(page, totalPages, counter),
        filters: { page },
        totalPages,
        counter,
        setCounter,
        setTotalPages,
        setPage: handleSetPage,
        setCallback: handleSetCallback
    };
}
export { usePagination };
