import React from "react";
type useQueryExecuteRequestProps = (() => Promise<any>)[] | (() => Promise<any>);
type useQueryReturn = [
    boolean,
    (requests: useQueryExecuteRequestProps, noChangeState?: boolean) => void,
    React.Dispatch<React.SetStateAction<boolean>>
];
declare function useQuery(value: any): useQueryReturn;
export { useQuery, useQueryReturn, useQueryExecuteRequestProps };
