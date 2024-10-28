"use client";

import { BackToHome } from "@/components/backToHome/backToHome";
import { PRODUCTS_DATA } from "@/data/productsData";
import { usePagination } from "@/hooks/usePagination";
import { Product } from "@/types";
import { PaginationControls } from "@/views/products/paginationControls/paginationControls";
import { ProductList } from "@/views/products/productList/productList";
import { ProductModal } from "@/views/products/productModal/productModal";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useCallback, useEffect, useState } from "react";

export const Products: React.FC = () => {
	const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
	const {
		currentPage,
		totalPages,
		paginatedItems: paginatedProducts,
		handlePageChange,
	} = usePagination({ items: PRODUCTS_DATA, itemsPerPage: 5 });

	const searchParams = useSearchParams();
	const selectedProductId = searchParams.get("pID");
	const router = useRouter();

	const handleCloseModal = useCallback(() => {
		router.push("/products");
		setSelectedProduct(null);
	}, [router]);

	useEffect(() => {
		selectedProductId &&
			setSelectedProduct(PRODUCTS_DATA.find((product) => product.id === selectedProductId) ?? null);
	}, [selectedProductId]);

	return (
		<div>
			<BackToHome />
			<ProductList products={paginatedProducts} />
			<div className='h-4' />
			<PaginationControls currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
			{selectedProduct && <ProductModal product={selectedProduct} onClose={handleCloseModal} />}
		</div>
	);
};
