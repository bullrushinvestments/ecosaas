import React, { useState, useEffect } from 'react';
import axios from 'axios';
import clsx from 'clsx';
import { Spinner } from '@chakra-ui/react';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}

const BusinessSpecification: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get<{ products: Product[] }>('https://api.example.com/products');
        setProducts(response.data.products);
        setLoading(false);
      } catch (err) {
        setError('Failed to load products. Please try again later.');
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <Spinner className="m-auto" />;
  if (error) return <div role="alert" aria-live="assertive">{error}</div>;

  return (
    <section className={clsx('bg-white', 'p-4')}>
      <h1 className="text-xl font-bold mb-2">Business Specification</h1>
      <ul className="list-disc pl-5">
        {products.map(product => (
          <li key={product.id} role="option" tabIndex={0}>
            <div className="flex items-center justify-between">
              <span>{product.name}</span>
              <span>${product.price.toFixed(2)}</span>
            </div>
            <p className="text-sm text-gray-500">{product.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default BusinessSpecification;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import clsx from 'clsx';
import { Spinner } from '@chakra-ui/react';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}

const BusinessSpecification: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get<{ products: Product[] }>('https://api.example.com/products');
        setProducts(response.data.products);
        setLoading(false);
      } catch (err) {
        setError('Failed to load products. Please try again later.');
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <Spinner className="m-auto" />;
  if (error) return <div role="alert" aria-live="assertive">{error}</div>;

  return (
    <section className={clsx('bg-white', 'p-4')}>
      <h1 className="text-xl font-bold mb-2">Business Specification</h1>
      <ul className="list-disc pl-5">
        {products.map(product => (
          <li key={product.id} role="option" tabIndex={0}>
            <div className="flex items-center justify-between">
              <span>{product.name}</span>
              <span>${product.price.toFixed(2)}</span>
            </div>
            <p className="text-sm text-gray-500">{product.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default BusinessSpecification;