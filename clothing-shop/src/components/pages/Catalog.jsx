import { useState, useEffect } from 'react';
import axios from 'axios';
import Card from '../Card/Card';

function Catalog() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/products');
                setProducts(response.data);
            } catch (error) {
                console.error('Помилка при отриманні товарів:', error);
            }
        };

        fetchProducts();
    }, []);

    return (
        <div className="catalog">
            <h1>Каталог</h1>
            <div className="product-list">
                {products.map(product => (
                    <Card key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
}

export default Catalog;
