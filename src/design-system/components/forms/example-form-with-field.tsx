import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "../primitives/Button/Button";
import { Input } from "../primitives/Input/Input";
import { FormField } from "./FormField/FormField";

const signupSchema = z.object({
  username: z.string().min(3, "Username must be at least 3 characters"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

type SignupFormValues = z.infer<typeof signupSchema>;

export const SignupForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignupFormValues>({
    resolver: zodResolver(signupSchema),
  });

  const onSubmit = async (data: SignupFormValues) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4 w-full max-w-md"
    >
      <FormField label="Username" error={errors.username} required>
        <Input
          {...register("username")}
          placeholder="Enter your username"
          fullWidth
        />
      </FormField>

      <FormField
        label="Email"
        error={errors.email}
        required
        helperText="We'll never share your email"
      >
        <Input
          {...register("email")}
          type="email"
          placeholder="Enter your email"
          fullWidth
        />
      </FormField>

      <Button type="submit" isLoading={isSubmitting} fullWidth>
        Create Account
      </Button>
    </form>
  );
};
