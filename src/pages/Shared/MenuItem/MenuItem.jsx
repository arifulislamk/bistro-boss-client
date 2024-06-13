const MenuItem = ({ item }) => {
    const { name, image, recipe, price } = item;
    return (
        <div className=" space-x-2 flex">
            <img style={{borderRadius: '0px 200px 200px 200px'}} className="w-[100px] " src={image} alt="" />
            <div>
                <h3 className=" uppercase">{name}--------------</h3>
                <p>{recipe}</p>
            </div>
            <p className=" text-yellow-500">${price}</p>
        </div>
    );
};

export default MenuItem;