import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Plus, Minus, Trash2, ArrowLeft, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useCart } from '@/hooks/useCart';

interface ContactForm {
  name: string;
  phone: string;
  email: string;
  address: string;
  notes: string;
}

const Cart: React.FC = () => {
  const { items, totalItems, totalPrice, updateQuantity, removeItem, clearCart } = useCart();
  const [contactForm, setContactForm] = useState<ContactForm>({
    name: '',
    phone: '',
    email: '',
    address: '',
    notes: '',
  });

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-GH', {
      style: 'currency',
      currency: 'GHS',
      minimumFractionDigits: 2,
    }).format(price);
  };

  const handleQuantityChange = (productId: string, newQuantity: number) => {
    if (newQuantity <= 0) {
      removeItem(productId);
    } else {
      updateQuantity(productId, newQuantity);
    }
  };

  const handleContactFormChange = (field: keyof ContactForm, value: string) => {
    setContactForm(prev => ({ ...prev, [field]: value }));
  };

  const generateWhatsAppMessage = () => {
let message = `🛒 *NEW ORDER - ESKOT GLOBAL*\n\n`;
message += `👤 *Customer Information:*\n`;
message += `Name: ${contactForm.name}\n`;
message += `Phone: ${contactForm.phone}\n`;
    message += `Email: ${contactForm.email}\n`;
message += `Address: ${contactForm.address}\n\n`;

message += `📦 *Order Details:*\n`;
    items.forEach((item, index) => {
      message += `${index + 1}. *${item.product.name}*\n`;
message += `   Quantity: ${item.quantity}\n`;
message += `   Unit price: ${formatPrice(item.product.price)}\n`;
message += `   Subtotal: ${formatPrice(item.product.price * item.quantity)}\n\n`;
    });

message += `💰 *Summary:*\n`;
message += `Total items: ${totalItems}\n`;
    message += `*TOTAL: ${formatPrice(totalPrice)}*\n\n`;

    if (contactForm.notes) {
message += `📝 *Additional Notes:*\n${contactForm.notes}\n\n`;
    }

message += `Please confirm this order and provide delivery details.`;

    return encodeURIComponent(message);
  };

  const handleWhatsAppOrder = () => {
    if (!contactForm.name || !contactForm.phone) {
alert('Please fill in at least your name and phone number');
      return;
    }

    const message = generateWhatsAppMessage();
    const whatsappNumber = "+233123456789"; // Replace with actual WhatsApp number
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

    window.open(whatsappUrl, '_blank');
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center max-w-md mx-auto px-4">
          <div className="mb-6">
            <ShoppingCart className="h-24 w-24 text-gray-300 mx-auto mb-4" />
<h2 className="text-2xl font-bold text-gray-900 mb-2">Your cart is empty</h2>
            <p className="text-gray-600">
Discover our quality products and add them to your cart
            </p>
          </div>
          <div className="space-y-3">
            <Link to="/shop">
              <Button className="w-full bg-[#08085E] hover:bg-[#000066]">
                Browse the shop
              </Button>
            </Link>
            <Link to="/">
              <Button variant="outline" className="w-full">
                Back to home
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <Link to="/shop">
              <Button variant="outline" size="sm">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Continue shopping
              </Button>
            </Link>
            <div className="flex-1">
<h1 className="text-3xl font-bold text-gray-900">Cart</h1>
              <p className="text-gray-600 mt-1">
{totalItems} item{totalItems !== 1 ? 's' : ''} in your cart
              </p>
            </div>
            <Button
              variant="outline"
              onClick={clearCart}
              className="text-red-600 hover:bg-red-50"
            >
              <Trash2 className="h-4 w-4 mr-2" />
Clear cart
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <Card key={item.product.id} className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="flex flex-col sm:flex-row">
                    <div
                      className="w-full sm:w-32 h-32 bg-cover bg-center"
                      style={{ backgroundImage: `url(${item.product.image})` }}
                    />
                    <div className="flex-1 p-4">
                      <div className="flex flex-col sm:flex-row sm:items-start justify-between">
                        <div className="flex-1">
                          <h3 className="font-semibold text-lg">{item.product.name}</h3>
                          <p className="text-gray-600 text-sm mt-1 line-clamp-2">
                            {item.product.description}
                          </p>
                          <Badge variant="outline" className="mt-2">
                            {item.product.category}
                          </Badge>
                        </div>

                        <div className="mt-4 sm:mt-0 sm:ml-4 space-y-3">
                          <div className="text-right">
                            <div className="text-sm text-gray-500">Unit price</div>
                            <div className="font-semibold text-lg text-[#08085E]">
                              {formatPrice(item.product.price)}
                            </div>
                          </div>

                          <div className="flex items-center gap-2">
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => handleQuantityChange(item.product.id, item.quantity - 1)}
                            >
                              <Minus className="h-3 w-3" />
                            </Button>
                            <span className="w-8 text-center font-medium">{item.quantity}</span>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => handleQuantityChange(item.product.id, item.quantity + 1)}
                            >
                              <Plus className="h-3 w-3" />
                            </Button>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => removeItem(item.product.id)}
                              className="ml-2 text-red-600 hover:bg-red-50"
                            >
                              <Trash2 className="h-3 w-3" />
                            </Button>
                          </div>

                          <div className="text-right">
                            <div className="text-sm text-gray-500">Subtotal</div>
                            <div className="font-bold text-xl text-[#08085E]">
                              {formatPrice(item.product.price * item.quantity)}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Order Summary & Contact Form */}
          <div className="space-y-6">
            {/* Order Summary */}
            <Card>
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span>Items ({totalItems})</span>
                  <span>{formatPrice(totalPrice)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Delivery</span>
                  <span className="text-green-600">To be discussed</span>
                </div>
                <Separator />
                <div className="flex justify-between text-lg font-bold">
                  <span>Total</span>
                  <span className="text-[#08085E]">{formatPrice(totalPrice)}</span>
                </div>
              </CardContent>
            </Card>

            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle>Your Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    value={contactForm.name}
                    onChange={(e) => handleContactFormChange('name', e.target.value)}
                    placeholder="Your full name"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="phone">Phone *</Label>
                  <Input
                    id="phone"
                    value={contactForm.phone}
                    onChange={(e) => handleContactFormChange('phone', e.target.value)}
                    placeholder="+233 XX XXX XXXX"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={contactForm.email}
                    onChange={(e) => handleContactFormChange('email', e.target.value)}
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <Label htmlFor="address">Delivery Address</Label>
                  <Textarea
                    id="address"
                    value={contactForm.address}
                    onChange={(e) => handleContactFormChange('address', e.target.value)}
                    placeholder="Your complete address"
                    rows={3}
                  />
                </div>

                <div>
                  <Label htmlFor="notes">Additional Notes</Label>
                  <Textarea
                    id="notes"
                    value={contactForm.notes}
                    onChange={(e) => handleContactFormChange('notes', e.target.value)}
                    placeholder="Special instructions, delivery preferences, etc."
                    rows={3}
                  />
                </div>
              </CardContent>

              <CardFooter>
                <Button
                  onClick={handleWhatsAppOrder}
                  disabled={!contactForm.name || !contactForm.phone}
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-3"
                  size="lg"
                >
                  <MessageCircle className="h-5 w-5 mr-2" />
                  Order via WhatsApp
                </Button>
              </CardFooter>
            </Card>

            <Card className="bg-blue-50 border-blue-200">
              <CardContent className="p-4">
                <h4 className="font-medium text-blue-900 mb-2">💡 How it works?</h4>
                <ul className="text-sm text-blue-800 space-y-1">
                  <li>• Fill in your information</li>
                  <li>• Click "Order via WhatsApp"</li>
                  <li>• Confirm your order with us</li>
                  <li>• We arrange delivery</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;