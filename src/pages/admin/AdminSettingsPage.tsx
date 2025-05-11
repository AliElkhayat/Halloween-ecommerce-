
import { useState } from "react";
import AdminLayout from "@/components/admin/AdminLayout";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { useToast } from "@/hooks/use-toast";
import { Settings, Mail, CreditCard, BellRing } from "lucide-react";

const AdminSettingsPage = () => {
  const { toast } = useToast();
  const [formState, setFormState] = useState({
    storeName: "Spectral Store",
    storeEmail: "contact@spectralstore.com",
    storePhone: "+1 (555) 123-4567",
    storeAddress: "123 Halloween Street, Spooky City, 12345",
    currency: "USD",
    taxRate: "10",
    enableShipping: true,
    enableTaxes: true,
    orderEmailNotification: true,
    stockAlertNotification: true,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSwitchChange = (name: string, value: boolean) => {
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleSaveChanges = () => {
    toast({
      title: "Settings saved",
      description: "Your changes have been successfully saved",
    });
  };

  return (
    <AdminLayout>
      <div className="mb-8">
        <h1 className="text-2xl font-bold">Settings</h1>
        <p className="text-muted-foreground">Manage store preferences and configuration</p>
      </div>

      <Tabs defaultValue="general" className="mb-8">
        <TabsList className="grid grid-cols-4 mb-8 md:w-[400px]">
          <TabsTrigger value="general">
            <Settings className="h-4 w-4 mr-2" />
            General
          </TabsTrigger>
          <TabsTrigger value="payment">
            <CreditCard className="h-4 w-4 mr-2" />
            Payment
          </TabsTrigger>
          <TabsTrigger value="email">
            <Mail className="h-4 w-4 mr-2" />
            Email
          </TabsTrigger>
          <TabsTrigger value="notifications">
            <BellRing className="h-4 w-4 mr-2" />
            Notifications
          </TabsTrigger>
        </TabsList>

        <TabsContent value="general">
          <Card>
            <CardHeader>
              <CardTitle>General Settings</CardTitle>
              <CardDescription>Manage your store's general configuration</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="storeName">Store Name</Label>
                <Input
                  id="storeName"
                  name="storeName"
                  value={formState.storeName}
                  onChange={handleInputChange}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="storeEmail">Store Email</Label>
                <Input
                  id="storeEmail"
                  name="storeEmail"
                  type="email"
                  value={formState.storeEmail}
                  onChange={handleInputChange}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="storePhone">Store Phone</Label>
                <Input
                  id="storePhone"
                  name="storePhone"
                  type="tel"
                  value={formState.storePhone}
                  onChange={handleInputChange}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="storeAddress">Store Address</Label>
                <Textarea
                  id="storeAddress"
                  name="storeAddress"
                  value={formState.storeAddress}
                  onChange={handleInputChange}
                  rows={3}
                />
              </div>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button onClick={handleSaveChanges} className="bg-halloween-purple hover:bg-halloween-purple-dark">
                Save Changes
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="payment">
          <Card>
            <CardHeader>
              <CardTitle>Payment Settings</CardTitle>
              <CardDescription>Configure payment options and tax rates</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="currency">Currency</Label>
                <Select 
                  value={formState.currency} 
                  onValueChange={(value) => handleSelectChange("currency", value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select a currency" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="USD">USD - US Dollar</SelectItem>
                      <SelectItem value="EUR">EUR - Euro</SelectItem>
                      <SelectItem value="GBP">GBP - British Pound</SelectItem>
                      <SelectItem value="CAD">CAD - Canadian Dollar</SelectItem>
                      <SelectItem value="AUD">AUD - Australian Dollar</SelectItem>
                      <SelectItem value="JPY">JPY - Japanese Yen</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="taxRate">Default Tax Rate (%)</Label>
                <Input
                  id="taxRate"
                  name="taxRate"
                  type="number"
                  value={formState.taxRate}
                  onChange={handleInputChange}
                  min="0"
                  max="100"
                  step="0.01"
                />
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="enableTaxes">Enable Taxes</Label>
                  <Switch
                    id="enableTaxes"
                    checked={formState.enableTaxes}
                    onCheckedChange={(checked) => handleSwitchChange("enableTaxes", checked)}
                  />
                </div>
                <p className="text-sm text-muted-foreground">
                  Apply tax calculations to orders based on the rates configured
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="enableShipping">Enable Shipping</Label>
                  <Switch
                    id="enableShipping"
                    checked={formState.enableShipping}
                    onCheckedChange={(checked) => handleSwitchChange("enableShipping", checked)}
                  />
                </div>
                <p className="text-sm text-muted-foreground">
                  Calculate shipping rates for orders
                </p>
              </div>

              <div className="border-t pt-6 mt-6">
                <h4 className="text-sm font-medium mb-4">Connected Payment Providers</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="border rounded-md p-4 flex items-center justify-between">
                    <div className="flex items-center">
                      <img src="/placeholder.svg" alt="Stripe" className="h-8 w-8 mr-3" />
                      <div>
                        <p className="font-medium">Stripe</p>
                        <p className="text-sm text-muted-foreground">Connected</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">Configure</Button>
                  </div>
                  <div className="border rounded-md p-4 flex items-center justify-between">
                    <div className="flex items-center">
                      <img src="/placeholder.svg" alt="PayPal" className="h-8 w-8 mr-3" />
                      <div>
                        <p className="font-medium">PayPal</p>
                        <p className="text-sm text-muted-foreground">Not connected</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">Connect</Button>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button onClick={handleSaveChanges} className="bg-halloween-purple hover:bg-halloween-purple-dark">
                Save Changes
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="email">
          <Card>
            <CardHeader>
              <CardTitle>Email Settings</CardTitle>
              <CardDescription>Configure email notifications and templates</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="emailSender">From Name</Label>
                <Input
                  id="emailSender"
                  placeholder="Spectral Store"
                  defaultValue="Spectral Store"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="replyToEmail">Reply-to Email</Label>
                <Input
                  id="replyToEmail"
                  type="email"
                  placeholder="support@spectralstore.com"
                  defaultValue={formState.storeEmail}
                />
              </div>

              <div className="border-t pt-6 mt-6">
                <h4 className="text-sm font-medium mb-4">Email Templates</h4>
                <div className="space-y-4">
                  <div className="border rounded-md p-4">
                    <div className="flex justify-between mb-2">
                      <p className="font-medium">Order Confirmation</p>
                      <Button variant="ghost" size="sm">Edit</Button>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Sent to customers when they complete an order
                    </p>
                  </div>
                  <div className="border rounded-md p-4">
                    <div className="flex justify-between mb-2">
                      <p className="font-medium">Shipping Confirmation</p>
                      <Button variant="ghost" size="sm">Edit</Button>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Sent to customers when their order ships
                    </p>
                  </div>
                  <div className="border rounded-md p-4">
                    <div className="flex justify-between mb-2">
                      <p className="font-medium">Abandoned Cart</p>
                      <Button variant="ghost" size="sm">Edit</Button>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Sent to customers who leave items in their cart
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button onClick={handleSaveChanges} className="bg-halloween-purple hover:bg-halloween-purple-dark">
                Save Changes
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="notifications">
          <Card>
            <CardHeader>
              <CardTitle>Notification Settings</CardTitle>
              <CardDescription>Configure system and admin notifications</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-6">
                <h4 className="text-sm font-medium">Order Notifications</h4>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label>New Order Notifications</Label>
                      <p className="text-sm text-muted-foreground">
                        Receive notifications when new orders are placed
                      </p>
                    </div>
                    <Switch
                      checked={formState.orderEmailNotification}
                      onCheckedChange={(checked) => handleSwitchChange("orderEmailNotification", checked)}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <Label>Order Status Updates</Label>
                      <p className="text-sm text-muted-foreground">
                        Receive notifications when order status changes
                      </p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                </div>
              </div>

              <div className="border-t pt-6 mt-6 space-y-6">
                <h4 className="text-sm font-medium">Inventory Notifications</h4>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label>Low Stock Alerts</Label>
                      <p className="text-sm text-muted-foreground">
                        Receive notifications when products are low in stock
                      </p>
                    </div>
                    <Switch
                      checked={formState.stockAlertNotification}
                      onCheckedChange={(checked) => handleSwitchChange("stockAlertNotification", checked)}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <Label>Out of Stock Alerts</Label>
                      <p className="text-sm text-muted-foreground">
                        Receive notifications when products are out of stock
                      </p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                </div>
              </div>

              <div className="border-t pt-6 mt-6 space-y-6">
                <h4 className="text-sm font-medium">Customer Notifications</h4>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label>New Account Registrations</Label>
                      <p className="text-sm text-muted-foreground">
                        Receive notifications when new customers register
                      </p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <Label>Customer Reviews</Label>
                      <p className="text-sm text-muted-foreground">
                        Receive notifications when new reviews are submitted
                      </p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button onClick={handleSaveChanges} className="bg-halloween-purple hover:bg-halloween-purple-dark">
                Save Changes
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </AdminLayout>
  );
};

export default AdminSettingsPage;
