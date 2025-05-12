
import { Truck, RotateCw } from "lucide-react";

const ShippingReturnsPage = () => {
  return (
    <div className="container mx-auto px-4 py-10">
      <div className="text-center mb-10">
        <h1 className="font-creepster text-4xl md:text-5xl mb-2">Shipping & Returns</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Everything you need to know about our shipping process and return policy.
        </p>
      </div>
      
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="bg-card rounded-lg p-6 border border-halloween-purple/20 shadow-sm">
          <div className="flex items-center mb-4">
            <Truck className="h-8 w-8 text-halloween-purple mr-3" />
            <h2 className="font-creepster text-2xl">Shipping Policy</h2>
          </div>
          
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-lg mb-2">Processing Time</h3>
              <p className="text-muted-foreground">Orders are processed within 1-2 business days after they are placed. During peak seasons (September-October), processing may take up to 3 business days.</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg mb-2">Shipping Methods & Times</h3>
              <ul className="list-disc pl-5 text-muted-foreground space-y-2">
                <li><span className="font-medium">Standard Shipping:</span> 3-5 business days (Free for orders over $50)</li>
                <li><span className="font-medium">Expedited Shipping:</span> 2 business days ($10.99)</li>
                <li><span className="font-medium">Express Shipping:</span> Next business day ($19.99)</li>
                <li><span className="font-medium">International Shipping:</span> 7-14 business days (Rates vary by location)</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg mb-2">Tracking Information</h3>
              <p className="text-muted-foreground">Once your order ships, you'll receive a tracking number via email. You can also track your order by logging into your account or contacting customer service.</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg mb-2">International Orders</h3>
              <p className="text-muted-foreground">International customers are responsible for all duties, import taxes, and customs fees. These are not included in the purchase price and will be collected upon delivery.</p>
            </div>
          </div>
        </div>
        
        <div className="bg-card rounded-lg p-6 border border-halloween-purple/20 shadow-sm">
          <div className="flex items-center mb-4">
            <RotateCw className="h-8 w-8 text-halloween-purple mr-3" />
            <h2 className="font-creepster text-2xl">Return Policy</h2>
          </div>
          
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-lg mb-2">Return Window</h3>
              <p className="text-muted-foreground">We accept returns within 30 days of delivery. Items must be unused, unworn, and in their original packaging with all tags attached.</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg mb-2">Non-Returnable Items</h3>
              <ul className="list-disc pl-5 text-muted-foreground space-y-2">
                <li>Custom or personalized items</li>
                <li>Makeup and cosmetics (for hygiene reasons)</li>
                <li>Clearance or final sale items</li>
                <li>Items marked as non-returnable</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg mb-2">Return Process</h3>
              <ol className="list-decimal pl-5 text-muted-foreground space-y-2">
                <li>Contact customer service to initiate a return</li>
                <li>Receive a return authorization number and shipping instructions</li>
                <li>Package your items securely with all original packaging</li>
                <li>Ship your return with a trackable method</li>
                <li>Refunds are processed within 5-7 business days of receiving the returned items</li>
              </ol>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg mb-2">Exchanges</h3>
              <p className="text-muted-foreground">If you'd like to exchange an item for a different size or color, please return the original item for a refund and place a new order for the desired item.</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg mb-2">Damage or Defect</h3>
              <p className="text-muted-foreground">If you receive a damaged or defective item, please contact us within 48 hours of delivery with photos of the damage. We'll arrange a replacement or refund at no cost to you.</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-10 max-w-4xl mx-auto p-6 bg-card rounded-lg border border-halloween-purple/20">
        <h2 className="font-creepster text-2xl mb-4 text-center">Have Questions?</h2>
        <p className="text-center text-muted-foreground mb-6">
          If you have any questions about our shipping or return policies, our customer service team is here to help!
        </p>
        <div className="flex justify-center">
          <a href="/contact" className="ghost-button">
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default ShippingReturnsPage;
