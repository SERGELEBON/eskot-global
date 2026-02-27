import React, { useState, useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Search, Grid, List, ShoppingCart, Heart, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import ProductModal from '@/components/ProductModal';
import { productsData, getAllCategories, getProductsByService, incrementProductViews } from '@/data/products';
import { navServices } from '@/data/services';
import { useCart } from '@/hooks/useCart';
import type { Product, GalleryFilter } from '@/types';

const Shop: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState('');
  const [isGridView, setIsGridView] = useState(true);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filter, setFilter] = useState<GalleryFilter>({
    category: searchParams.get('category') || 'all',
    serviceId: searchParams.get('service') || undefined,
  });

  const { addItem, isInCart, totalItems } = useCart();
  const categories = getAllCategories();

  const products = useMemo(() => {
    let filteredProducts = productsData;

    // Filter by service
    if (filter.serviceId && filter.serviceId !== 'all') {
      filteredProducts = getProductsByService(filter.serviceId);
    }

    // Filter by category
    if (filter.category !== 'all') {
      filteredProducts = filteredProducts.filter(product => product.category === filter.category);
    }

    // Filter by search query
    if (searchQuery) {
      filteredProducts = filteredProducts.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Filter by stock status
    if (filter.inStock) {
      filteredProducts = filteredProducts.filter(product => product.inStock);
    }

    return filteredProducts;
  }, [filter, searchQuery]);

  const handleServiceChange = (serviceId: string) => {
    setFilter(prev => ({ ...prev, serviceId: serviceId === 'all' ? undefined : serviceId }));
    if (serviceId === 'all') {
      searchParams.delete('service');
    } else {
      searchParams.set('service', serviceId);
    }
    setSearchParams(searchParams);
  };

  const handleCategoryChange = (category: string) => {
    setFilter(prev => ({ ...prev, category }));
    if (category === 'all') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', category);
    }
    setSearchParams(searchParams);
  };

  const handleAddToCart = (product: Product) => {
    addItem(product, 1);
    incrementProductViews(product.id);
  };

  const handleProductClick = (product: Product) => {
    incrementProductViews(product.id);
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            <div className="flex-1 max-w-md">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-9"
                />
              </div>
            </div>

            <div className="flex gap-2 items-center">
              <Select value={filter.serviceId || 'all'} onValueChange={handleServiceChange}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="All services" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All services</SelectItem>
                  {navServices.map(service => (
                    <SelectItem key={service.id} value={service.id}>
                      {service.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={filter.category} onValueChange={handleCategoryChange}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="All categories" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All categories</SelectItem>
                  {categories.map(category => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <div className="flex border rounded-md">
                <Button
                  variant={isGridView ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setIsGridView(true)}
                  className="rounded-r-none"
                >
                  <Grid className="h-4 w-4" />
                </Button>
                <Button
                  variant={!isGridView ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setIsGridView(false)}
                  className="rounded-l-none"
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>

              <Link to="/cart">
                <Button variant="outline" className="relative">
                  <ShoppingCart className="h-4 w-4" />
                  {totalItems > 0 && (
                    <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs">
                      {totalItems}
                    </Badge>
                  )}
                </Button>
              </Link>
            </div>
          </div>

          {/* Filters Summary */}
          <div className="mt-4 flex items-center gap-2 flex-wrap">
            {filter.serviceId && (
              <Badge variant="secondary" className="text-xs">
                Service: {navServices.find(s => s.id === filter.serviceId)?.name}
              </Badge>
            )}
            {filter.category !== 'all' && (
              <Badge variant="secondary" className="text-xs">
Category: {filter.category}
              </Badge>
            )}
            <span className="text-sm text-gray-500 ml-auto">
{products.length} product{products.length !== 1 ? 's' : ''} found
            </span>
          </div>
        </div>
      </div>

      {/* Products Grid/List */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {products.length === 0 ? (
          <div className="text-center py-16">
            <div className="text-gray-400 mb-4">
              <Search className="h-16 w-16 mx-auto" />
            </div>
<h3 className="text-xl font-semibold text-gray-900 mb-2">No products found</h3>
            <p className="text-gray-500">
Try adjusting your filters or search terms
            </p>
          </div>
        ) : (
          <div className={`grid gap-6 ${
            isGridView
              ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
              : 'grid-cols-1'
          }`}>
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                isGridView={isGridView}
                onAddToCart={handleAddToCart}
                onClick={handleProductClick}
                isInCart={isInCart(product.id)}
              />
            ))}
          </div>
        )}
      </div>

      {/* Product Modal */}
      <ProductModal
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

interface ProductCardProps {
  product: Product;
  isGridView: boolean;
  onAddToCart: (product: Product) => void;
  onClick: (product: Product) => void;
  isInCart: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({
  product,
  isGridView,
  onAddToCart,
  onClick,
  isInCart
}) => {
  const formatPrice = (price: number) => {
return new Intl.NumberFormat('en-GH', {
      style: 'currency',
      currency: 'GHS',
      minimumFractionDigits: 2,
    }).format(price);
  };

  if (!isGridView) {
    return (
      <Card className="flex flex-row overflow-hidden hover:shadow-md transition-shadow">
        <div
          className="w-48 h-32 bg-cover bg-center cursor-pointer"
          style={{ backgroundImage: `url(${product.image})` }}
          onClick={() => onClick(product)}
        />
        <div className="flex-1 flex flex-col">
          <CardHeader className="pb-2">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-semibold text-lg cursor-pointer hover:text-blue-600"
                    onClick={() => onClick(product)}>
                  {product.name}
                </h3>
                <p className="text-sm text-gray-600 mt-1">{product.description}</p>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-[#08085E]">
                  {formatPrice(product.price)}
                </div>
                {!product.inStock && (
                  <Badge variant="destructive" className="mt-1">Out of Stock</Badge>
                )}
              </div>
            </div>
          </CardHeader>
          <CardContent className="flex-1 pb-2">
            <div className="flex items-center gap-4 text-sm text-gray-500">
              <span className="flex items-center gap-1">
                <Heart className="h-4 w-4" />
                {product.likes}
              </span>
              <span className="flex items-center gap-1">
                <Eye className="h-4 w-4" />
                {product.views}
              </span>
              <Badge variant="outline" className="text-xs">
                {product.category}
              </Badge>
            </div>
          </CardContent>
          <CardFooter className="pt-0">
            <Button
              onClick={() => onAddToCart(product)}
              disabled={!product.inStock}
              className="w-full bg-[#08085E] hover:bg-[#000066]"
            >
              <ShoppingCart className="h-4 w-4 mr-2" />
{isInCart ? 'Already in cart' : 'Add to cart'}
            </Button>
          </CardFooter>
        </div>
      </Card>
    );
  }

  return (
    <Card className="overflow-hidden hover:shadow-md transition-shadow group">
      <div
        className="relative h-48 bg-cover bg-center cursor-pointer"
        style={{ backgroundImage: `url(${product.image})` }}
        onClick={() => onClick(product)}
      >
        {!product.inStock && (
          <div className="absolute top-2 left-2">
<Badge variant="destructive">Out of Stock</Badge>
          </div>
        )}
        <div className="absolute top-2 right-2 bg-white/90 rounded-lg px-2 py-1 text-xs flex items-center gap-2">
          <span className="flex items-center gap-1">
            <Heart className="h-3 w-3" />
            {product.likes}
          </span>
          <span className="flex items-center gap-1">
            <Eye className="h-3 w-3" />
            {product.views}
          </span>
        </div>
      </div>

      <CardHeader className="pb-2">
        <h3 className="font-semibold cursor-pointer hover:text-blue-600 transition-colors"
            onClick={() => onClick(product)}>
          {product.name}
        </h3>
        <p className="text-sm text-gray-600 line-clamp-2">{product.description}</p>
      </CardHeader>

      <CardContent className="pb-2">
        <div className="flex justify-between items-center">
          <div className="text-xl font-bold text-[#08085E]">
            {formatPrice(product.price)}
          </div>
          <Badge variant="outline" className="text-xs">
            {product.category}
          </Badge>
        </div>
      </CardContent>

      <CardFooter>
        <Button
          onClick={() => onAddToCart(product)}
          disabled={!product.inStock}
          className="w-full bg-[#08085E] hover:bg-[#000066]"
        >
          <ShoppingCart className="h-4 w-4 mr-2" />
{isInCart ? 'In cart' : 'Add'}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default Shop;