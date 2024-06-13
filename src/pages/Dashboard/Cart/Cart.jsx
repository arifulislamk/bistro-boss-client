import { FaTrashAlt } from "react-icons/fa";
import useCarts from "../../../hooks/useCarts";
import Swal from "sweetalert2";
import useAxiosSceure from "../../../hooks/useAxiosSceure";
import { Link } from "react-router-dom";

const Cart = () => {
    const [cart, refetch] = useCarts();
    const totalPrice = cart.reduce((acc, item) => acc + item.price, 0);
    const axiosSceure = useAxiosSceure();

    const handleDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                axiosSceure.delete(`/carts/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch()
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }
    return (
        <div>
            <div className=" flex justify-evenly mb-8">
                <h2 className="text-4xl">My Cart {cart.length}</h2>
                <h2 className="text-4xl">Total Price : {totalPrice}</h2>
                {
                    cart.length ?
                        <Link to='/dashboard/payment'> <button className=" btn btn-primary">Pay</button></Link> :
                        <button disabled className=" btn btn-primary">Pay</button>
                }
            </div>

            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* head */}
                    <thead className=" bg-gray-400">
                        <tr className=" bg-">
                            <th>
                                No.
                            </th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Price Color</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cart.map((item, inx) => <tr key={item._id}>
                                <th>
                                    {inx + 1}
                                </th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {item.name}
                                </td>
                                <td>${item.price}</td>
                                <th>
                                    <button onClick={() => handleDelete(item._id)} className="btn btn-ghost btn-lg">
                                        <FaTrashAlt className=" text-red-600" />
                                    </button>
                                </th>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Cart;