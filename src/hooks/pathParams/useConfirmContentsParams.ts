import {useNavigate, useSearchParams} from "react-router-dom";

const ConfirmContentsTypeQueryKey = "t";

export type ConfirmContentsType = "waiting" | "denied" | "approved";

export default function useConfirmContentsParams() {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();

    const updateNavigate = () => {
        navigate({
            search: searchParams.toString(),
        });
    };

    // type
    const type = searchParams.get(ConfirmContentsTypeQueryKey) as ConfirmContentsType ?? "waiting";
    const setType = (t: ConfirmContentsType) => {
        searchParams.set(ConfirmContentsTypeQueryKey, t);
        updateNavigate();
    };

    //todo pagination
    // const page or limit
    // const setPage or setLimit
    return {
        type,
        setType,
        updateNavigate,
    }
}