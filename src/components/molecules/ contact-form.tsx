import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import axios from "axios";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useMutation } from "@tanstack/react-query";
import { useToast } from "@/components/ui/use-toast";
import { Loader2 } from "lucide-react";

const emailSchema = z
  .string()
  .email({
    message: "Please enter a valid email address.",
  })
  .regex(/^[a-zA-Z0-9._%+-]+@(gmail\.com|outlook\.com)$/, {
    message: "Sorry, but currently we only accept Gmail and Outlook.",
  });
const messageSchema = z.string().refine(
  (value) => {
    const wordCount = value.trim().split(/\s+/).length;
    return wordCount >= 20;
  },
  {
    message: "Your message must be at least 20 words long.",
  }
);

const formSchema = z.object({
  fullName: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  email: emailSchema,
  message: messageSchema,
});

type EmailType = z.infer<typeof formSchema>;

export default function ContactForm() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      message: "",
    },
  });

  const { mutate: sendMail, isPending } = useMutation({
    mutationKey: ["sendMail"],
    mutationFn: async (data: EmailType) =>
      await axios
        .post(`${import.meta.env.VITE_API_URL}`, {
          fullName: data.fullName,
          email: data.email,
          message: data.message,
        })
        .then((res) => {
          return res.data;
        }),
    onSuccess: () => {
      toast({
        title: "Great news!",
        description:
          "Your message has been sent successfully. We'll get back to you soon. 😊",
        variant: "success",
      });
      form.reset();
    },
    onError: () => {
      toast({
        title: "Oops! Something went wrong and we couldn't send your message.",
        description:
          " Please try again later, and sorry for the inconvenience. 😔",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: EmailType) => {
    sendMail(data);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col space-y-8 m-4 md:w-1/2 bg-primary-foreground p-8 rounded-lg shadow-md"
      >
        <div className="form-title space-y-4">
          <h2 className="font-bold text-3xl">Chat with me directly.</h2>
          <p>
            Want help with something? Want a demo? or
            <br /> Just want to know me?
          </p>
        </div>
        <FormField
          control={form.control}
          name="fullName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full Name</FormLabel>
              <FormControl>
                <Input type="text" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="example@mail.com" {...field} />
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
              <FormLabel>Your Inquiry</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Type your message here ..."
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">
          {isPending ? <Loader2 className="animate-spin" /> : "Send"}
        </Button>
      </form>
    </Form>
  );
}
