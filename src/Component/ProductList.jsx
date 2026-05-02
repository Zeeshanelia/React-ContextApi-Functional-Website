
export const ProductList = () => {

    return ( <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">


                <div key={p.id} className="bg-white shadow-md rounded-2xl p-4 text-center hover:shadow-xl transition">
                    <ProductCart product={p} />
                </div>
            </div>
        </>)
}