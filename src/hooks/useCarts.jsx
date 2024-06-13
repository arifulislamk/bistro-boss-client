import { useQuery } from "@tanstack/react-query";
import useAxiosSceure from "./useAxiosSceure";
import useAuth from "./useAuth";

const useCarts = () => {
    const axiosSceure = useAxiosSceure();
    const { user } = useAuth();
    // console.log(user?.email)
    const { refetch , data: cart = [] } = useQuery({
        queryKey: ['cart', user?.email],
        queryFn: async () => {
            const res = await axiosSceure(`/carts?email=${user?.email}`)
            return res.data
        }
    })
    return [cart,refetch]
};

export default useCarts;