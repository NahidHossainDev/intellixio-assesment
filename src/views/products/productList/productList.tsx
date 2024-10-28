"use client";
import { Product } from "@/types";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

interface ProductListProps {
	products: Product[];
}

export const ProductList: React.FC<ProductListProps> = ({ products }) => {
	const router = useRouter();
	const pathname = usePathname();
	return (
		<div>
			{products.map((product) => (
				<div key={product.id} className='flex border p-2 justify-between'>
					<div className='flex'>
						<div>{product.id}</div>. {product.name}
					</div>

					<button onClick={() => router.push(`${pathname}?pID=${product.id}`)}>Details</button>
				</div>
			))}
		</div>
	);
};
