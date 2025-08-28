import React from 'react';

const CartProps = ({title, price, image, DeletePro, AddMore}) => {
    return (
        <div className="cardAdd mb-3">
            <div className='image_con'>
                <img src={image} alt={title} width="100" />
            </div>
            <div>
                <label>Title: {title}</label><br />
                <label>Price: ${price}</label>
            </div>
            <div>
                <button className='btn btn-danger w-100 mb-2' onClick={DeletePro}>Delete</button>
                <button className='btn btn-primary w-100' onClick={AddMore}>Add</button>
            </div>
            <hr />
        </div>
    );
};

export default CartProps;
