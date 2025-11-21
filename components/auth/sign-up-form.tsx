"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { toast } from "sonner";
import { Spinner } from "../ui/spinner";
import { Eye, EyeOff } from "lucide-react";
import { Checkbox } from "../ui/checkbox";

const signUpSchema = z.object({
  name: z.string().min(6, "Full name must be at least 6 characters"),
  email: z.email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
  isAgreedToTerms: z.boolean().refine((val) => val === true, {
    message: "You must agree to the Terms and Conditions",
  }),
});

type SignUpSchema = z.infer<typeof signUpSchema>;

const SignUpForm = () => {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const form = useForm<SignUpSchema>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      isAgreedToTerms: false,
    },
  });

  const onSubmit = (data: z.infer<typeof signUpSchema>) => {
    setLoading(true);
    authClient.signUp.email(
      {
        name: data.name,
        email: data.email,
        password: data.password,
        image: '',
      },
      {
        onSuccess: ({ data }) => {
          authClient.sendVerificationEmail(
            {
              email: data.user.email,
            },
            {
              onSuccess: () => {
                localStorage.setItem("xyz", JSON.stringify(data.user.email));
                router.push(`/verify-email?message=check-your-mailbox`);
                setLoading(false);
              },
              onError: ({ error }) => {
                if (error.status === 500) {
                  router.push("/not-found");
                } else {
                  toast.error(error.message);
                }
              },
            }
          );
          setLoading(false);
        },
        onError: ({ error }) => {
          toast.error(error.message);
          setLoading(false);
        },
      }
    );
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 w-full">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm font-medium">Full Name</FormLabel>
              <FormControl>
                <Input placeholder="John Doe" className="mt-1" {...field} />
              </FormControl>
              <FormMessage className=" text-sm" />
            </FormItem>
          )}
        />

        {/* Email */}
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm font-medium">Email</FormLabel>
              <FormControl>
                <Input
                  type="email"
                  placeholder="you@example.com"
                  className="mt-1"
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-sm" />
            </FormItem>
          )}
        />

        {/* Password */}
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm font-medium">Password</FormLabel>
              <FormControl>
                <div className="relative">
                  <FormControl>
                    <Input
                      type={showPassword ? "text" : "password"}
                      placeholder="********"
                      {...field}
                    />
                  </FormControl>

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-600 cursor-pointer transition-all duration-300 delay-75"
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5" />
                    ) : (
                      <Eye className="h-5 w-5" />
                    )}
                  </button>
                </div>
              </FormControl>
              <FormMessage className="text-sm" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="isAgreedToTerms"
          render={({ field }) => (
            <FormItem className="flex flex-col gap-2">
              <div className="w-full flex gap-2">
                <FormControl>
                  <Checkbox
                    id="rememberMe"
                    checked={field.value}
                    className="cursor-pointer border border-foreground/70"
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <FormLabel htmlFor="rememberMe" className="text-sm">
                  By accessing this website, you agree to these Terms and
                  Conditions.
                </FormLabel>
              </div>
            </FormItem>
          )}
        />

        <Button disabled={loading} className="w-full text-foreground ">
          {loading ? <Spinner /> : "Create Account"}
        </Button>
      </form>
    </Form>
  );
};

export default SignUpForm;
