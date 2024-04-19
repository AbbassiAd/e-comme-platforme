import { useGetAllProductsQuery } from "../redux/api/productApiSlice";
import { NewArrival } from "./product/NewArrival";

export default function NewArrivals() {
    const { data: arrivals } = useGetAllProductsQuery();

    return (
        <section className="relative shop_section layout_padding mt-16 mb-25 p-10 w-3/4 mx-auto">
            
            <div className="container">
                <div className="text-center mb-6">
                    <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
                        Discover Our Latest Products
                    </h1>
                    <p className="text-lg text-gray-700 mt-2">
                        Explore our newest arrivals and find your next favorite item.
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {arrivals?.map(arrival => (
                        
                        <NewArrival key={arrival._id} product={arrival} />
                    ))}
                </div>
            </div>
        </section>
    );
}