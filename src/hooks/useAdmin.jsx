import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSceure from "./useAxiosSceure";

const useAdmin = () => {
    const { user, loading } = useAuth();
    const axiosSceure = useAxiosSceure();

    const { data: isAdmin, isPending: isAdminLoading } = useQuery({
        enabled: !loading,
        queryKey: [user?.email, 'isAdmin'],
        queryFn: async () => {
            const res = await axiosSceure(`/users/admin/${user?.email}`)
            console.log(res.data)
            return res.data?.admin
        }
    })
    return [isAdmin, isAdminLoading]
};

export default useAdmin;