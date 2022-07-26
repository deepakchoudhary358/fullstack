import React, { useState } from 'react';

let ShoppingCart = () => {


    let [state, setState] = useState({
        products: [
            {
                sno: 'AA001',
                image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtusl8d_HLt7QkWT9678Dng6aaHw7gxCcyUw&usqp=CAU',
                name: 'MI Smart watch',
                price: 1999,
                qty: 2
            },
            {
                sno: 'AA002',
                image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_ria78q910I-uQ6I1hn92ufBpoMATle1baTpC6-kR5gRvMzo83SetQyWHQacfXOJP2ds&usqp=CAU',
                name: 'Realme watch',
                price: 1599,
                qty: 3
            },
            {
                sno: 'AA003',
                image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGtSgAfR36HHfBtuSHbegNWoBygDT6zJpMMDsXxBPeamJJtcAJOinVsQNnUoOEh3udy1c&usqp=CAU',
                name: 'Sumsung watch',
                price: 8999,
                qty: 1
            },
            {
                sno: 'AA004',
                image: 'https://ss7.vzw.com/is/image/VerizonWireless/apple-watch-se-space-gray-aluminum-nike-sport-band-40mm-aw-n-se-40-sg-ab-n-mkqu3ll-a?hei=400',
                name: 'Noise watch',
                price: 2399,
                qty: 1
            },
            {
                sno: 'AA005',
                image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGkshbV9d4LrdotUfFM4Pt-DOb5ZSmL7b9EQ&usqp=CAU',
                name: 'Apple watch',
                price: 11999,
                qty: 1
            }
        ]
    });

    let { products } = state;



    let incrQty = (productId) => {
        let items = products.map(product => {
            if (product.sno === productId)
                return {
                    ...product,
                    qty: product.qty + 1
                }
                return product
        });
        console.log(items);
        setState((state) => ({
            products: [...items]
        }));
    };

    let decrQty = (productId) => {
        let items = products.map(product => {
            if (product.sno === productId)
                return {
                    ...product,
                    qty: product.qty - 1 > 0 ? product.qty - 1 : 1
                }
                return product
        });
        setState((state) => ({
            products: [...items]
        }));
    };


    let grandTotal = () => {
        let total = 0;
        for(let product of products ) {
            total += product.price * product.qty
        }
        return total;
    }

    return (
        <React.Fragment>
            <div className="container mt-3">
                <div className="row">
                    <div className="col">
                        <p className="h3 text-success">Shopping Cart</p>
                        <p>Your manager will receive a notification that your request is ready to review after the ISTS review is successfully completed; the notification will include instructions for how to review your request. Once approved, you will be notified that you may register for the course. Please see the FAQs document for additional information on the appeals process.</p>
                    </div>
                </div>
            </div>
            <div className="container mt-3">
                <div className="row">
                    <div className="col">
                        <table className="table table-striped text-center table-hover">
                            <thead className="bg-dark text-white">
                                <tr>
                                    <th>SNo</th>
                                    <th>Image</th>
                                    <th>Name</th>
                                    <th>Price</th>
                                    <th>Qty</th>
                                    <th>Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    products.map((product) => {
                                        return (
                                            <tr key={product.sno}>
                                                <td>{product.sno}</td>
                                                <td>
                                                    <img src={product.image} alt="" width="50" height="50" />
                                                </td>
                                                <td>{product.name}</td>
                                                <td>&#8377;{product.price.toFixed(2)}</td>
                                                <td><i onClick={() => decrQty(product.sno)} className="fa fa-minus-square mx-1" /> {product.qty} <i onClick={() => incrQty(product.sno)} className="fa fa-plus-square mx-1" /> </td>
                                                <td>&#8377;{(product.qty * product.price).toFixed(2)}</td>
                                            </tr>
                                        )
                                    })
                                }
                                <tr>
                                    <td colSpan={4}></td>
                                    <td>Grand Total : </td>
                                    <td>&#8377;{grandTotal().toFixed(2)}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
};

export default ShoppingCart;