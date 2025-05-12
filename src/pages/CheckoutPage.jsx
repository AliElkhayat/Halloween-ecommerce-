import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "@/contexts/CartContext";
import { Button } from "@/components/ui/button";
import {
  CreditCard,
  ShieldCheck,
  ArrowLeft,
  Check,
  LockKeyhole,
} from "lucide-react";

const CheckoutPage = () => {
  const { cartItems, cartTotal, clearCart } = useCart();
  const navigate = useNavigate();

  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [formData, setFormData] = useState({
    cardNumber: "",
    cardName: "",
    expiryDate: "",
    cvv: "",
    address: "",
    city: "",
    zip: "",
    country: "USA",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.cardNumber.trim()) {
      newErrors.cardNumber = "Card number is required";
    } else if (!/^\d{16}$/.test(formData.cardNumber.replace(/\s/g, ""))) {
      newErrors.cardNumber = "Please enter a valid 16-digit card number";
    }

    if (!formData.cardName.trim()) {
      newErrors.cardName = "Cardholder name is required";
    }

    if (!formData.expiryDate.trim()) {
      newErrors.expiryDate = "Expiry date is required";
    } else if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(formData.expiryDate)) {
      newErrors.expiryDate = "Please use MM/YY format";
    }

    if (!formData.cvv.trim()) {
      newErrors.cvv = "CVV is required";
    } else if (!/^\d{3,4}$/.test(formData.cvv)) {
      newErrors.cvv = "CVV must be 3 or 4 digits";
    }

    if (!formData.address.trim()) {
      newErrors.address = "Billing address is required";
    }

    if (!formData.city.trim()) {
      newErrors.city = "City is required";
    }

    if (!formData.zip.trim()) {
      newErrors.zip = "ZIP code is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      setIsProcessing(true);

      setTimeout(() => {
        setIsProcessing(false);
        setPaymentSuccess(true);

        setTimeout(() => {
          clearCart();
          navigate("/order-confirmation");
        }, 2000);
      }, 2000);
    }
  };

  if (paymentSuccess) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="bg-background rounded-lg p-8 text-center border max-w-md mx-auto">
          <div className="inline-flex mx-auto items-center justify-center h-24 w-24 rounded-full bg-green-100 dark:bg-green-900/30 mb-6">
            <Check className="h-12 w-12 text-green-600 dark:text-green-400" />
          </div>
          <h2 className="font-creepster text-2xl mb-4">Payment Successful!</h2>
          <p className="text-muted-foreground mb-6">
            Your order has been placed and is being processed.
          </p>
          <p className="text-sm text-muted-foreground mb-6">
            Redirecting to order confirmation...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="font-creepster text-3xl md:text-4xl mb-2">Checkout</h1>
      <p className="text-muted-foreground mb-8">
        Complete your purchase by providing payment details
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="bg-background rounded-lg p-6 border">
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <h2 className="text-xl font-semibold mb-4 flex items-center">
                  <CreditCard className="h-5 w-5 mr-2" />
                  Payment Information
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="md:col-span-2">
                    <label
                      className="block text-sm font-medium mb-1 text-foreground"
                      htmlFor="cardNumber"
                    >
                      Card Number
                    </label>
                    <input
                      type="text"
                      id="cardNumber"
                      name="cardNumber"
                      placeholder="1234 5678 9012 3456"
                      value={formData.cardNumber}
                      onChange={handleChange}
                      className={`w-full rounded-md border ${
                        errors.cardNumber ? "border-red-500" : "border-gray-300 dark:border-gray-600"
                      } px-3 py-2 shadow-sm focus:border-halloween-purple focus:ring focus:ring-halloween-purple focus:ring-opacity-50 bg-background text-foreground placeholder-gray-400 dark:placeholder-gray-500`}
                    />
                    {errors.cardNumber && (
                      <p className="text-red-500 dark:text-red-400 text-xs mt-1">
                        {errors.cardNumber}
                      </p>
                    )}
                  </div>

                  <div className="md:col-span-2">
                    <label
                      className="block text-sm font-medium mb-1 text-foreground"
                      htmlFor="cardName"
                    >
                      Cardholder Name
                    </label>
                    <input
                      type="text"
                      id="cardName"
                      name="cardName"
                      placeholder="John Doe"
                      value={formData.cardName}
                      onChange={handleChange}
                      className={`w-full rounded-md border ${
                        errors.cardName ? "border-red-500" : "border-gray-300 dark:border-gray-600"
                      } px-3 py-2 shadow-sm focus:border-halloween-purple focus:ring focus:ring-halloween-purple focus:ring-opacity-50 bg-background text-foreground placeholder-gray-400 dark:placeholder-gray-500`}
                    />
                    {errors.cardName && (
                      <p className="text-red-500 dark:text-red-400 text-xs mt-1">
                        {errors.cardName}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      className="block text-sm font-medium mb-1 text-foreground"
                      htmlFor="expiryDate"
                    >
                      Expiry Date
                    </label>
                    <input
                      type="text"
                      id="expiryDate"
                      name="expiryDate"
                      placeholder="MM/YY"
                      value={formData.expiryDate}
                      onChange={handleChange}
                      className={`w-full rounded-md border ${
                        errors.expiryDate ? "border-red-500" : "border-gray-300 dark:border-gray-600"
                      } px-3 py-2 shadow-sm focus:border-halloween-purple focus:ring focus:ring-halloween-purple focus:ring-opacity-50 bg-background text-foreground placeholder-gray-400 dark:placeholder-gray-500`}
                    />
                    {errors.expiryDate && (
                      <p className="text-red-500 dark:text-red-400 text-xs mt-1">
                        {errors.expiryDate}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      className="block text-sm font-medium mb-1 text-foreground"
                      htmlFor="cvv"
                    >
                      CVV
                    </label>
                    <input
                      type="text"
                      id="cvv"
                      name="cvv"
                      placeholder="123"
                      value={formData.cvv}
                      onChange={handleChange}
                      className={`w-full rounded-md border ${
                        errors.cvv ? "border-red-500" : "border-gray-300 dark:border-gray-600"
                      } px-3 py-2 shadow-sm focus:border-halloween-purple focus:ring focus:ring-halloween-purple focus:ring-opacity-50 bg-background text-foreground placeholder-gray-400 dark:placeholder-gray-500`}
                    />
                    {errors.cvv && (
                      <p className="text-red-500 dark:text-red-400 text-xs mt-1">{errors.cvv}</p>
                    )}
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h2 className="text-xl font-semibold mb-4">Billing Address</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="md:col-span-2">
                    <label
                      className="block text-sm font-medium mb-1 text-foreground"
                      htmlFor="address"
                    >
                      Street Address
                    </label>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      placeholder="123 Spooky Lane"
                      value={formData.address}
                      onChange={handleChange}
                      className={`w-full rounded-md border ${
                        errors.address ? "border-red-500" : "border-gray-300 dark:border-gray-600"
                      } px-3 py-2 shadow-sm focus:border-halloween-purple focus:ring focus:ring-halloween-purple focus:ring-opacity-50 bg-background text-foreground placeholder-gray-400 dark:placeholder-gray-500`}
                    />
                    {errors.address && (
                      <p className="text-red-500 dark:text-red-400 text-xs mt-1">
                        {errors.address}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      className="block text-sm font-medium mb-1 text-foreground"
                      htmlFor="city"
                    >
                      City
                    </label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      placeholder="Halloweentown"
                      value={formData.city}
                      onChange={handleChange}
                      className={`w-full rounded-md border ${
                        errors.city ? "border-red-500" : "border-gray-300 dark:border-gray-600"
                      } px-3 py-2 shadow-sm focus:border-halloween-purple focus:ring focus:ring-halloween-purple focus:ring-opacity-50 bg-background text-foreground placeholder-gray-400 dark:placeholder-gray-500`}
                    />
                    {errors.city && (
                      <p className="text-red-500 dark:text-red-400 text-xs mt-1">{errors.city}</p>
                    )}
                  </div>

                  <div>
                    <label
                      className="block text-sm font-medium mb-1 text-foreground"
                      htmlFor="zip"
                    >
                      ZIP Code
                    </label>
                    <input
                      type="text"
                      id="zip"
                      name="zip"
                      placeholder="12345"
                      value={formData.zip}
                      onChange={handleChange}
                      className={`w-full rounded-md border ${
                        errors.zip ? "border-red-500" : "border-gray-300 dark:border-gray-600"
                      } px-3 py-2 shadow-sm focus:border-halloween-purple focus:ring focus:ring-halloween-purple focus:ring-opacity-50 bg-background text-foreground placeholder-gray-400 dark:placeholder-gray-500`}
                    />
                    {errors.zip && (
                      <p className="text-red-500 dark:text-red-400 text-xs mt-1">{errors.zip}</p>
                    )}
                  </div>

                  <div>
                    <label
                      className="block text-sm font-medium mb-1 text-foreground"
                      htmlFor="country"
                    >
                      Country
                    </label>
                    <select
                      id="country"
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      className="w-full rounded-md border border-gray-300 dark:border-gray-600 px-3 py-2 shadow-sm focus:border-halloween-purple focus:ring focus:ring-halloween-purple focus:ring-opacity-50 bg-background text-foreground"
                    >
                      <option value="USA">United States</option>
                      <option value="CAN">Canada</option>
                      <option value="UK">United Kingdom</option>
                      <option value="AUS">Australia</option>
                      <option value="GER">Germany</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="flex items-center mb-6 p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                <ShieldCheck className="h-8 w-8 text-halloween-purple dark:text-halloween-purple mr-4" />
                <div>
                  <h3 className="font-medium">Secure Payment</h3>
                  <p className="text-sm text-muted-foreground">
                    Your payment information is encrypted and secure.
                  </p>
                </div>
              </div>

              <div className="flex space-x-4">
                <Link to="/cart">
                  <Button variant="outline" type="button">
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    Back to Cart
                  </Button>
                </Link>

                <Button
                  className="bg-halloween-purple hover:bg-halloween-purple-dark flex-1"
                  type="submit"
                  disabled={isProcessing}
                >
                  {isProcessing ? "Processing Payment..." : "Complete Payment"}
                </Button>
              </div>
            </form>
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className="bg-background rounded-lg p-6 border sticky top-20">
            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>

            <div className="mb-4 max-h-64 overflow-auto">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between items-center py-2 border-b dark:border-gray-700"
                >
                  <div className="flex items-center">
                    <div className="h-10 w-10 rounded bg-gray-100 dark:bg-purple-900/20 flex items-center justify-center mr-3">
                      <span className="text-xs font-medium">
                        {item.quantity}x
                      </span>
                    </div>
                    <span className="text-sm font-medium">{item.name}</span>
                  </div>
                  <span className="text-sm font-medium">
                    ${(item.price * item.quantity).toFixed(2)}
                  </span>
                </div>
              ))}
            </div>

            <div className="space-y-3 mb-6">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Subtotal</span>
                <span>${cartTotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Shipping</span>
                <span>Free</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Tax</span>
                <span>${(cartTotal * 0.1).toFixed(2)}</span>
              </div>
              <div className="border-t dark:border-gray-700 pt-3 font-semibold flex justify-between">
                <span>Total</span>
                <span>${(cartTotal * 1.1).toFixed(2)}</span>
              </div>
            </div>

            <div className="p-3 bg-gray-50 dark:bg-gray-800/50 rounded-lg text-xs text-muted-foreground mb-4 flex items-start">
              <LockKeyhole className="h-4 w-4 mr-2 mt-0.5 text-halloween-purple" />
              <p>
                Your personal data will be used to process your order and
                support your experience throughout this website.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;