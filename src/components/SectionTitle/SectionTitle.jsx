const SectionTitle = ({subheading, heading}) => {
    return (
        <div className=" mx-auto md:w-4/12 text-center my-8">
            <p className=" text-yellow-600 mb-2">--- {subheading} ---</p>
            <h3 className=" text-3xl border-y-4 py-4 uppercase">{heading}</h3>
        </div>
    );
};

export default SectionTitle;