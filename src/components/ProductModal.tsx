import React, { useState } from 'react';
import { X, ShoppingCart, Heart, Eye, Plus, Minus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { useCart } from '@/hooks/useCart';
import type { Product } from '@/types';

interface ProductModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProductModal: React.FC<ProductModalProps> = ({ product, isOpen, onClose }) => {
  const [quantity, setQuantity] = useState(1);
  const [isLiked, setIsLiked] = useState(false);
  const { addItem, isInCart } = useCart();

  if (!product) return null;

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-GH', {
      style: 'currency',
      currency: 'GHS',
      minimumFractionDigits: 2,
    }).format(price);
  };

  const handleAddToCart = () => {
    addItem(product, quantity);
    onClose();
  };

  const handleQuantityChange = (delta: number) => {
    setQuantity(prev => Math.max(1, prev + delta));
  };

  const handleLikeToggle = () => {
    setIsLiked(!isLiked);
    // In a real app, you'd update this on the server
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto p-0">
        <div className="flex flex-col lg:flex-row">
          {/* Image Section */}
          <div className="lg:w-1/2 relative">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-64 lg:h-96 object-cover"
            />
            {!product.inStock && (
              <div className="absolute top-4 left-4">
                <Badge variant="destructive">Out of Stock</Badge>
              </div>
            )}
            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur rounded-lg px-3 py-2">
              <div className="flex items-center gap-4 text-sm">
                <button
                  onClick={handleLikeToggle}
                  className={`flex items-center gap-1 transition-colors ${
                    isLiked ? 'text-red-500' : 'text-gray-600 hover:text-red-500'
                  }`}
                >
                  <Heart className={`h-4 w-4 ${isLiked ? 'fill-current' : ''}`} />
                  {product.likes + (isLiked ? 1 : 0)}
                </button>
                <span className="flex items-center gap-1 text-gray-600">
                  <Eye className="h-4 w-4" />
                  {product.views}
                </span>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="lg:w-1/2 p-6">
            <DialogHeader className="space-y-4">
              <div className="flex justify-between items-start">
                <DialogTitle className="text-2xl font-bold text-gray-900 pr-8">
                  {product.name}
                </DialogTitle>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={onClose}
                  className="flex-shrink-0"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>

              <div className="flex items-center gap-2">
                <Badge variant="outline">{product.category}</Badge>
                {product.inStock ? (
                  <Badge variant="default" className="bg-green-500">In Stock</Badge>
                ) : (
                  <Badge variant="destructive">Out of Stock</Badge>
                )}
              </div>

              <div className="text-3xl font-bold text-[#08085E]">
                {formatPrice(product.price)}
              </div>
            </DialogHeader>

            <div className="mt-6 space-y-6">
              {/* Description */}
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Description</h3>
                <p className="text-gray-700 leading-relaxed">{product.description}</p>
              </div>

              {/* Specifications */}
              {product.specifications && product.specifications.length > 0 && (
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Specifications</h3>
                  <div className="space-y-2">
                    {product.specifications.map((spec, index) => (
                      <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100">
                        <span className="text-gray-600">{spec.label}</span>
                        <span className="font-medium text-gray-900">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Quantity and Add to Cart */}
              {product.inStock && (
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Quantity</h3>
                    <div className="flex items-center gap-3">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleQuantityChange(-1)}
                        disabled={quantity <= 1}
                      >
                        <Minus className="h-4 w-4" />
                      </Button>
                      <span className="w-12 text-center font-medium">{quantity}</span>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleQuantityChange(1)}
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between items-center text-lg">
                      <span className="font-medium">Total:</span>
                      <span className="font-bold text-[#08085E]">
                        {formatPrice(product.price * quantity)}
                      </span>
                    </div>

                    <Button
                      onClick={handleAddToCart}
                      className="w-full bg-[#08085E] hover:bg-[#000066] text-white py-3 text-lg"
                      size="lg"
                    >
                      <ShoppingCart className="h-5 w-5 mr-2" />
{isInCart(product.id) ? 'Add more to cart' : 'Add to cart'}
                    </Button>
                  </div>
                </div>
              )}

              {!product.inStock && (
                <div className="p-4 bg-red-50 rounded-lg border border-red-200">
                  <p className="text-red-700 font-medium">
This product is currently out of stock.
                  </p>
                  <p className="text-red-600 text-sm mt-1">
Contact us to be notified when back in stock.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProductModal;