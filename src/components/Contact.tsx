import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email address").max(255),
  message: z.string().trim().min(1, "Message is required").max(1000),
});

type ContactFormData = z.infer<typeof contactSchema>;

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async () => {
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast.success("Message sent!", {
      description: "Thank you for contacting us. We'll get back to you soon.",
    });

    form.reset();
    setIsSubmitting(false);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-[0.72rem] font-medium uppercase tracking-[0.18em] text-primary/58">
                Name
              </FormLabel>
              <FormControl>
                <Input
                  {...field}
                  className="h-12 rounded-none border border-primary/28 bg-card/35 px-4 text-base text-primary shadow-none transition-colors placeholder:text-primary/35 focus:border-primary/58 focus:bg-card/55 focus-visible:ring-0 focus-visible:ring-offset-0"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-[0.72rem] font-medium uppercase tracking-[0.18em] text-primary/58">
                Email
              </FormLabel>
              <FormControl>
                <Input
                  type="email"
                  {...field}
                  className="h-12 rounded-none border border-primary/28 bg-card/35 px-4 text-base text-primary shadow-none transition-colors placeholder:text-primary/35 focus:border-primary/58 focus:bg-card/55 focus-visible:ring-0 focus-visible:ring-offset-0"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-[0.72rem] font-medium uppercase tracking-[0.18em] text-primary/58">
                Message
              </FormLabel>
              <FormControl>
                <Textarea
                  {...field}
                  className="min-h-[230px] resize-none rounded-none border border-primary/28 bg-card/35 px-4 py-3 text-base leading-7 text-primary shadow-none transition-colors placeholder:text-primary/35 focus:border-primary/58 focus:bg-card/55 focus-visible:ring-0 focus-visible:ring-offset-0"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          variant="cta"
          size="cta"
          disabled={isSubmitting}
          className="mt-2 px-8"
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </Button>
      </form>
    </Form>
  );
}
