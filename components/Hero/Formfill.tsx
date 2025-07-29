"use client";
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "../ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowRight } from "lucide-react";

const formSchema = z.object({
  firstName: z.string().min(1, {
    message: "First name is required.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  agreeToPrivacyPolicy: z.boolean().refine((val) => val, {
    message: "You must agree to the privacy policy.",
  }),
});

const Formfill = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      email: "",
      agreeToPrivacyPolicy: false,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <div className="p-4 pt-[80px] pb-[80px]">
      <div className="max-w-5xl m-auto bg-[#F1F1F1] p-10  rounded-lg">
        <h1 className="text-3xl font-bold text-center">
          Subscribe to our Newsletter
        </h1>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className=" pt-10 max-w-3xl gap-4  m-auto grid grid-cols-1 md:grid-cols-2">
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        className="border-b-bl border-black border-none"
                        placeholder="First Name"
                        {...field}
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
                    <FormControl>
                      <Input
                        className="border-b-bl border-black border-none"
                        placeholder="Last Name"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="agreeToPrivacyPolicy"
                render={({ field }) => (
                  <FormItem className="flex items-center space-x-2 pt-3">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <FormLabel className="font-normal">
                      I agree to the New Africa Foundations Privacy Policy.
                    </FormLabel>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="flex px-3 py-3 items-center justify-center">
            <Button
              type="submit"
              className="flex flex-row text-white text-center p-6 items-center rounded-[5px] justify-center bg-[#345F80] hover:bg-[#305877]"
            >
              SUBSCRIBE <ArrowRight className="ml-2"/>
            </Button>

            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default Formfill;
