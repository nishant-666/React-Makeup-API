import React from 'react'
import Divider from '@mui/material/Divider';
export default function Card({ data }) {
    return (
        <div>
            <div className="card-main">
                {data.map((item) => {
                    return (
                        <div>
                            <img
                                className="product-img"
                                src={item.api_featured_image}
                                alt="item-img"
                            />
                            <h3 className="product-name">Product Name: {item.name}</h3>
                            <p className="product-category">Product Category: {item.category}</p>
                            <p>{item.description}</p>
                            <a href={item.product_link}>Buy it here - {item.product_link}</a>

                            {item.product_colors.map((colors) => {
                                return (
                                    <div className="colors-category">
                                        <p
                                            style={{
                                                backgroundColor: colors.hex_value,
                                                width: 20,
                                                height: 20,
                                                borderRadius: '50%'
                                            }}>
                                        </p>
                                        <p className="color-name">{colors.colour_name}</p>
                                    </div>
                                )
                            })}
                            <Divider />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
