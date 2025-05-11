
import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Settings, User, ShoppingBag, Heart, MapPin, CreditCard, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

// Mock user data
const mockUser = {
  firstName: "John",
  lastName: "Doe",
  email: "john.doe@example.com",
  phone: "+1 (555) 123-4567",
  address: {
    street: "123 Haunted Hill",
    city: "Spookyville",
    state: "Transylvania",
    zipCode: "66666",
    country: "United States",
  },
  orders: [
    { id: "ORD-12345", date: "2025-04-28", total: 89.95, status: "Delivered" },
    { id: "ORD-67890", date: "2025-05-02", total: 124.50, status: "Processing" },
  ],
  wishlist: [
    { id: 1, name: "Haunted Mansion Decor", price: 59.99 },
    { id: 2, name: "Ghost Costume Deluxe", price: 89.99 },
    { id: 3, name: "Animated Zombie Props", price: 149.99 },
  ]
};

const profileFormSchema = z.object({
  firstName: z.string().min(2, { message: "First name must be at least 2 characters" }),
  lastName: z.string().min(2, { message: "Last name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z.string().optional(),
});

const addressFormSchema = z.object({
  street: z.string().min(3, { message: "Street address is required" }),
  city: z.string().min(2, { message: "City is required" }),
  state: z.string().min(2, { message: "State is required" }),
  zipCode: z.string().min(5, { message: "Zip code is required" }),
  country: z.string().min(2, { message: "Country is required" }),
});

type ProfileFormValues = z.infer<typeof profileFormSchema>;
type AddressFormValues = z.infer<typeof addressFormSchema>;

const AccountPage = () => {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState("profile");

  const profileForm = useForm<ProfileFormValues>({
    resolver: zodResolver(profileFormSchema),
    defaultValues: {
      firstName: mockUser.firstName,
      lastName: mockUser.lastName,
      email: mockUser.email,
      phone: mockUser.phone,
    },
  });

  const addressForm = useForm<AddressFormValues>({
    resolver: zodResolver(addressFormSchema),
    defaultValues: {
      street: mockUser.address.street,
      city: mockUser.address.city,
      state: mockUser.address.state,
      zipCode: mockUser.address.zipCode,
      country: mockUser.address.country,
    },
  });

  const onProfileSubmit = (data: ProfileFormValues) => {
    console.log("Profile data:", data);
    toast({
      title: "Profile Updated",
      description: "Your profile information has been saved",
    });
  };

  const onAddressSubmit = (data: AddressFormValues) => {
    console.log("Address data:", data);
    toast({
      title: "Address Updated",
      description: "Your address has been saved",
    });
  };

  return (
    <div className="container mx-auto px-4 py-12 min-h-[80vh]">
      <h1 className="font-creepster text-4xl mb-8">My Account</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        <div className="md:col-span-3">
          <div className="sticky top-20">
            <div className="flex flex-col items-center p-6 bg-card rounded-lg border shadow-sm mb-6">
              <div className="h-24 w-24 rounded-full bg-gradient-to-br from-halloween-purple to-halloween-pink flex items-center justify-center text-white text-3xl mb-4">
                {mockUser.firstName.charAt(0)}{mockUser.lastName.charAt(0)}
              </div>
              <h2 className="font-semibold text-xl">
                {mockUser.firstName} {mockUser.lastName}
              </h2>
              <p className="text-muted-foreground text-sm">{mockUser.email}</p>
            </div>
            
            <nav className="space-y-1">
              <Button 
                variant={activeTab === "profile" ? "default" : "ghost"} 
                className="w-full justify-start" 
                onClick={() => setActiveTab("profile")}
              >
                <User className="mr-2 h-4 w-4" />
                Profile
              </Button>
              
              <Button 
                variant={activeTab === "orders" ? "default" : "ghost"} 
                className="w-full justify-start" 
                onClick={() => setActiveTab("orders")}
              >
                <ShoppingBag className="mr-2 h-4 w-4" />
                Orders
              </Button>
              
              <Button 
                variant={activeTab === "wishlist" ? "default" : "ghost"} 
                className="w-full justify-start" 
                onClick={() => setActiveTab("wishlist")}
              >
                <Heart className="mr-2 h-4 w-4" />
                Wishlist
              </Button>
              
              <Button 
                variant={activeTab === "address" ? "default" : "ghost"} 
                className="w-full justify-start" 
                onClick={() => setActiveTab("address")}
              >
                <MapPin className="mr-2 h-4 w-4" />
                Addresses
              </Button>
              
              <Button 
                variant={activeTab === "payment" ? "default" : "ghost"} 
                className="w-full justify-start" 
                onClick={() => setActiveTab("payment")}
              >
                <CreditCard className="mr-2 h-4 w-4" />
                Payment Methods
              </Button>
              
              <Button 
                variant="destructive" 
                className="w-full justify-start mt-6"
                onClick={() => {
                  toast({
                    title: "Logged out successfully",
                    description: "See you soon!",
                  });
                  // In a real app, this would trigger actual logout
                  setTimeout(() => {
                    window.location.href = "/";
                  }, 1500);
                }}
              >
                <LogOut className="mr-2 h-4 w-4" />
                Logout
              </Button>
            </nav>
          </div>
        </div>
        
        <div className="md:col-span-9">
          {activeTab === "profile" && (
            <div className="bg-card rounded-lg border shadow-sm p-6">
              <h2 className="font-semibold text-2xl mb-6 flex items-center">
                <Settings className="mr-2 h-5 w-5" />
                Profile Settings
              </h2>
              
              <Form {...profileForm}>
                <form onSubmit={profileForm.handleSubmit(onProfileSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={profileForm.control}
                      name="firstName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>First Name</FormLabel>
                          <FormControl>
                            <Input {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={profileForm.control}
                      name="lastName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Last Name</FormLabel>
                          <FormControl>
                            <Input {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <FormField
                    control={profileForm.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input type="email" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={profileForm.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone Number</FormLabel>
                        <FormControl>
                          <Input type="tel" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button type="submit">Save Changes</Button>
                </form>
              </Form>
              
              <Separator className="my-8" />
              
              <div>
                <h3 className="font-semibold text-lg mb-4">Password</h3>
                <Button
                  variant="outline"
                  onClick={() => {
                    // In a real app, this would open a password change form
                    toast({
                      title: "Password Reset",
                      description: "Password reset link sent to your email",
                    });
                  }}
                >
                  Change Password
                </Button>
              </div>
            </div>
          )}
          
          {activeTab === "address" && (
            <div className="bg-card rounded-lg border shadow-sm p-6">
              <h2 className="font-semibold text-2xl mb-6 flex items-center">
                <MapPin className="mr-2 h-5 w-5" />
                Shipping Address
              </h2>
              
              <Form {...addressForm}>
                <form onSubmit={addressForm.handleSubmit(onAddressSubmit)} className="space-y-6">
                  <FormField
                    control={addressForm.control}
                    name="street"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Street Address</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={addressForm.control}
                      name="city"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>City</FormLabel>
                          <FormControl>
                            <Input {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={addressForm.control}
                      name="state"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>State</FormLabel>
                          <FormControl>
                            <Input {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={addressForm.control}
                      name="zipCode"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Zip Code</FormLabel>
                          <FormControl>
                            <Input {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={addressForm.control}
                      name="country"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Country</FormLabel>
                          <FormControl>
                            <Input {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <Button type="submit">Save Address</Button>
                </form>
              </Form>
            </div>
          )}
          
          {activeTab === "orders" && (
            <div className="bg-card rounded-lg border shadow-sm p-6">
              <h2 className="font-semibold text-2xl mb-6 flex items-center">
                <ShoppingBag className="mr-2 h-5 w-5" />
                Order History
              </h2>
              
              {mockUser.orders.length > 0 ? (
                <div className="divide-y">
                  {mockUser.orders.map(order => (
                    <div key={order.id} className="py-4 flex flex-col md:flex-row md:justify-between">
                      <div>
                        <h3 className="font-medium">{order.id}</h3>
                        <p className="text-sm text-muted-foreground">{order.date}</p>
                      </div>
                      <div className="flex items-center justify-between mt-2 md:mt-0">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          order.status === "Delivered" 
                            ? "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400"
                            : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400"
                        }`}>
                          {order.status}
                        </span>
                        <span className="font-medium ml-4">${order.total.toFixed(2)}</span>
                        <Button variant="ghost" size="sm" className="ml-4">
                          View
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <p className="text-muted-foreground">No orders yet</p>
                </div>
              )}
            </div>
          )}
          
          {activeTab === "wishlist" && (
            <div className="bg-card rounded-lg border shadow-sm p-6">
              <h2 className="font-semibold text-2xl mb-6 flex items-center">
                <Heart className="mr-2 h-5 w-5" />
                Wishlist
              </h2>
              
              {mockUser.wishlist.length > 0 ? (
                <div className="divide-y">
                  {mockUser.wishlist.map(item => (
                    <div key={item.id} className="py-4 flex justify-between items-center">
                      <div>
                        <h3 className="font-medium">{item.name}</h3>
                        <p className="text-sm text-muted-foreground">${item.price.toFixed(2)}</p>
                      </div>
                      <div className="space-x-2">
                        <Button size="sm">Add to Cart</Button>
                        <Button variant="outline" size="sm">Remove</Button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <p className="text-muted-foreground">Your wishlist is empty</p>
                </div>
              )}
            </div>
          )}
          
          {activeTab === "payment" && (
            <div className="bg-card rounded-lg border shadow-sm p-6">
              <h2 className="font-semibold text-2xl mb-6 flex items-center">
                <CreditCard className="mr-2 h-5 w-5" />
                Payment Methods
              </h2>
              
              <div className="text-center py-12">
                <CreditCard className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
                <p className="text-muted-foreground">No payment methods added yet</p>
                <Button className="mt-4">Add Payment Method</Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AccountPage;
