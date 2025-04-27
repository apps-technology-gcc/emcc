import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "../primitives/Button/Button";
import { FormInput } from "./FormInput/FormInput";

// Define your form schema with Zod
const loginSchema = z.object({
  email: z.string().min(1, "Email is required").email("Invalid email address"),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .max(100, "Password is too long"),
});

// Infer TypeScript type from schema
type LoginFormValues = z.infer<typeof loginSchema>;

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginFormValues) => {
    // Handle form submission
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4 w-full max-w-md"
    >
      <FormInput
        label="Email"
        name="email"
        type="email"
        // register={register}
        // error={errors.email}
        placeholder="Enter your email"
        fullWidth
      />

      <FormInput
        label="Password"
        name="password"
        type="password"
        // register={register}
        // error={errors.password}
        placeholder="Enter your password"
        fullWidth
      />

      <Button type="submit" isLoading={isSubmitting} fullWidth>
        Sign In
      </Button>
    </form>
  );
};
