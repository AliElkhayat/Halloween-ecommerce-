
import { useState } from "react";
import { Link } from "react-router-dom";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { KeyRound, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const formSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
});

type FormValues = z.infer<typeof formSchema>;

const ForgotPasswordPage = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = (data: FormValues) => {
    // This would be replaced with actual password reset logic
    console.log("Reset password data:", data);

    toast({
      title: "Reset link sent!",
      description: "Check your email for instructions to reset your password",
    });

    setIsSubmitted(true);
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-md mx-auto bg-card rounded-lg shadow-lg border p-8">
        <Link to="/sign-in" className="inline-flex items-center gap-2 text-sm text-halloween-purple hover:underline mb-6">
          <ArrowLeft className="h-4 w-4" />
          Back to Sign In
        </Link>

        <div className="flex flex-col items-center mb-6">
          <div className="bg-halloween-purple/10 p-3 rounded-full mb-4">
            <KeyRound className="h-8 w-8 text-halloween-purple" />
          </div>
          <h1 className="font-creepster text-4xl mb-2">Forgot Password</h1>
          <p className="text-muted-foreground text-center">
            Enter your email and we'll send you instructions to reset your password
          </p>
        </div>

        {isSubmitted ? (
          <div className="text-center space-y-6">
            <div className="bg-green-50 dark:bg-green-900/20 text-green-800 dark:text-green-400 p-4 rounded-md">
              <p>Password reset link has been sent to your email address.</p>
              <p className="text-sm mt-2">Don't see it? Check your spam folder.</p>
            </div>
            <Button asChild className="w-full mt-4">
              <Link to="/sign-in">Return to Sign In</Link>
            </Button>
          </div>
        ) : (
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="your.email@example.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" className="w-full">
                Send Reset Link
              </Button>
            </form>
          </Form>
        )}
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
