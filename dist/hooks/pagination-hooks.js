import { useEffect, useState } from "react";
function usePagination(props) {
    const [page, setPage] = useState(props?.page ?? 1);
    const [totalPages, setTotalPages] = useState(props?.totalPages ?? 0);
    const [counter, setCounter] = useState(props?.counter ?? 2);
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
