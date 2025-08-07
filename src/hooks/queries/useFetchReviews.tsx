import { getReviews } from "@/services/api.service"
import { useQuery } from "@tanstack/react-query"

const useFetchReviews = () => {
    return useQuery({
        queryKey: [],
        queryFn: async () => {
            const res = await getReviews();
            return res?.data;
        },
        refetchOnWindowFocus: false
    })
}

export default useFetchReviews;