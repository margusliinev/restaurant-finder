const AddRestaurant = () => {
    return (
        <div className='container'>
            <form action=''>
                <div className='row align-items-center justify-content-center p-3'>
                    <div className='col-md-3'>
                        <input type='text' className='form-control' placeholder='name' />
                    </div>
                    <div className='col-md-3'>
                        <input type='text' className='form-control' placeholder='location' />
                    </div>
                    <div className='col-md-3'>
                        <select className='form-select my-1 mr-sm-2'>
                            <option disabled>Price Range</option>
                            <option value='1'>$</option>
                            <option value='2'>$$</option>
                            <option value='3'>$$$</option>
                            <option value='4'>$$$$</option>
                            <option value='5'>$$$$$</option>
                        </select>
                    </div>
                    <button className='col-md-1 btn btn-primary'>Add</button>
                </div>
            </form>
        </div>
    );
};
export default AddRestaurant;
