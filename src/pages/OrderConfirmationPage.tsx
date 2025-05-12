import { Link } from "react-router-dom";
import { ShoppingBag, Printer, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const OrderConfirmationPage = () => {
  const orderNumber = `HW-${Math.floor(100000 + Math.random() * 900000)}`;
  
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-background rounded-lg p-8 border text-center mb-8">
          <div className="inline-flex mx-auto items-center justify-center h-24 w-24 rounded-full bg-purple-100 dark:bg-purple-900/20 mb-6">
            <ShoppingBag className="h-12 w-12 text-halloween-purple" />
          </div>
          <h1 className="font-creepster text-3xl md:text-4xl mb-4">Order Confirmed!</h1>
          <p className="text-muted-foreground mb-6">
            Thank you for your purchase. We've received your order and will begin processing it right away.
          </p>
          <div className="border-t border-b py-4 my-6">
            <h2 className="font-medium text-lg mb-2">Order #{orderNumber}</h2>
            <p className="text-muted-foreground text-sm">
              A confirmation email has been sent to your email address.
            </p>
          </div>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <Button variant="outline" className="flex items-center">
              <Printer className="h-4 w-4 mr-2" />
              Print Receipt
            </Button>
            <Link to="/products">
              <Button className="bg-halloween-purple hover:bg-halloween-purple-dark flex items-center">
                Continue Shopping
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
        
        <div className="bg-background rounded-lg p-6 border">
          <h2 className="text-xl font-semibold mb-4">Order Details</h2>
          <div className="mb-6">
            <div className="flex justify-between py-3 border-b">
              <span className="font-medium">Order Date</span>
              <span>{new Date().toLocaleDateString()}</span>
            </div>
            <div className="flex justify-between py-3 border-b">
              <span className="font-medium">Order Number</span>
              <span>{orderNumber}</span>
            </div>
            <div className="flex justify-between py-3 border-b">
              <span className="font-medium">Payment Method</span>
              <span>Credit Card (•••• 1234)</span>
            </div>
            <div className="flex justify-between py-3">
              <span className="font-medium">Shipping Method</span>
              <span>Standard Shipping (3-5 business days)</span>
            </div>
          </div>
          
          <div className="mb-6">
            <h3 className="font-medium mb-3">Shipping Address</h3>
            <address className="not-italic text-muted-foreground">
              John Doe<br />
              123 Spooky Lane<br />
              Halloweentown, CA 90210<br />
              United States
            </address>
          </div>
          
          <div>
            <h3 className="font-medium mb-3">Need Help?</h3>
            <p className="text-muted-foreground text-sm mb-4">
              If you have any questions about your order, please contact our customer support team.
            </p>
            <Link to="/contact">
              <Button variant="outline" size="sm">
                Contact Support
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmationPage;