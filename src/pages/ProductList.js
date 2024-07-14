import { CartContext } from '../context/cartContext';
import React, { useContext, useState, useEffect } from 'react';
import { Card, Image, Text, Group, Container, Title, Badge, Button } from '@mantine/core';
import Loader from '../components/Loader';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const fetchProducts = async ({ organization_id, reverse_sort, page, size, Appid, Apikey }) => {
    const url = new URL('https://timbu-get-all-products.reavdev.workers.dev/');
    url.searchParams.append('organization_id', organization_id);
    url.searchParams.append('reverse_sort', reverse_sort);
    url.searchParams.append('page', page);
    url.searchParams.append('size', size);
    url.searchParams.append('Appid', Appid);
    url.searchParams.append('Apikey', Apikey);

    const response = await fetch(url.toString());

    if (!response.ok) {
        throw new Error('Network response was not ok');
    }

    return response.json();
};

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isEmpty, setIsEmpty] = useState(false);
    const [isError, setIsError] = useState(false);
    const [page, setPage] = useState(1);
    const { cartItems, addToCart } = useContext(CartContext)

    useEffect(() => {
        const params = {
            organization_id: '406671a1a9794d0cacd2c4301838acac',
            reverse_sort: 'false',
            page: page,
            size: 10,
            Appid: '4YTRPOKYZR0ZMM3',
            Apikey: 'ec8e01823c644d31ad08ebfc14d15c5c20240713022144062243'
        };

        const getProducts = async () => {
            setIsLoading(true);
            setIsError(false);
            try {
                const data = await fetchProducts(params);
                setProducts(data.items);
                setIsEmpty(data.total === 0);
            } catch (error) {
                setIsError(true);
            } finally {
                setIsLoading(false);
            }
        };

        getProducts();
    }, [page]);

    if (isLoading) return <div><Loader /></div>;
    if (isError) return <div>Error fetching products</div>;
    if (isEmpty) return <div>No products found</div>;

    const notify = () => {
        toast.success("Product added to cart", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
    };
    
    const handleMultipleActions = () => {
        addToCart(products);
        notify();
    };

    return (
        <Container>
            <Group>
                <section className="py-12 text-center overflow-hidden mb-10">
                    <h2 className="text-4xl md:text-5xl font-bold mb-8">
                    Products
                    </h2>
                    <div className="flex flex-wrap justify-center mb-10">
                        <div className="grid md:grid-cols-3 grid-cols-2 gap-10 p-6">
                            {products.map(product => (
                                <Card key={product.id} className='border p-4'>
                                    <Card.Section>
                                        <Image src={`https://api.timbu.cloud/images/${product?.photos[0]?.url}`} height={160} alt={product.name} />
                                    </Card.Section>
                                    <Group className='flex justify-between'>
                                        <Text className='text-l text-left md:text-base w-2/3'>{product.name}</Text>
                                        <Badge className='font-bold text-l md:text-xl text-gray-500'>
                                            #{product?.current_price[0]?.["NGN"]?.[0]}
                                        </Badge>
                                    </Group>
                                    <div className='flex justify-center'>
                                        <button onClick={() => addToCart(product)} className="mt-4 w-full bg-black text-white px-4 py-2  hover:bg-white hover:text-black transition duration-500 ease-in-out hover:border-2 hover:border-black ">Add To Cart</button>
                                    </div>
                                    
                                    {/* <Text size="sm">{product?.description}</Text> */}
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>    
            </Group>
            <Group position="center" mt="md">
                <Button onClick={() => setPage(page > 1 ? page - 1 : 1)}>Prev</Button>
                <Button onClick={() => setPage(page + 1)}>Next</Button>
            </Group>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </Container>
    );
};

export default ProductList;
