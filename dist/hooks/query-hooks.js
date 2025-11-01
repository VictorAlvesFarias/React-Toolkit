import { useState } from "react";
function useQuery(value) {
    const [allRequestsResolved, setAllRequestsResolved] = useState(value);
    async function executeRequests(requests, noChangeState) {
        setAllRequestsResolved(false);
        if (Array.isArray(requests)) {
            await Promise.all(requests.map(request => request()
                .catch(error => {
                if (!noChangeState || noChangeState == null) {
                    setAllRequestsResolved(true);
                }
                throw error;
            })));
        }
        else {
            await requests()
                .catch(error => {
                if (!noChangeState || noChangeState == null) {
                    setAllRequestsResolved(true);
                }
                throw error;
            });
        }
        if (!noChangeState || noChangeState == null) {
            setAllRequestsResolved(true);
        }
    }
    return [allRequestsResolved, executeRequests, setAllRequestsResolved];
}
export { useQuery };
