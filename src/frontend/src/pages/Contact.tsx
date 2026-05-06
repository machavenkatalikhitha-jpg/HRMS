import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { motion } from "motion/react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

interface ContactFormValues {
  companyName: string;
  name: string;
  email: string;
  phone: string;
  requirement: string;
}

const CONTACT_INFO = [
  {
    icon: Phone,
    label: "Phone",
    value: "+91 123 456 7890",
    href: "tel:+911234567890" as string | undefined,
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@manpowerpro.in",
    href: "mailto:info@manpowerpro.in" as string | undefined,
  },
  {
    icon: MapPin,
    label: "Office",
    value: "Mumbai, Maharashtra, India",
    href: undefined as string | undefined,
  },
  {
    icon: Clock,
    label: "Hours",
    value: "Mon-Sat, 9 AM - 6 PM IST",
    href: undefined as string | undefined,
  },
];

export default function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>();

  const onSubmit = async (data: ContactFormValues) => {
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error(`Server error: ${res.status}`);
      toast.success("Message sent! We'll reach out within 24 hours.", {
        duration: 5000,
      });
      reset();
    } catch (err) {
      toast.error(
        "Failed to send message. Please try again or call us directly.",
      );
      console.error(err);
    }
  };

  return (
    <>
      <Helmet>
        <title>Contact Us &mdash; ManpowerPro</title>
        <meta
          name="description"
          content="Get in touch with ManpowerPro's workforce specialists. Share your hiring requirements and we'll connect within 24 hours."
        />
      </Helmet>

      <section
        className="bg-card border-b border-border py-16"
        data-ocid="contact.hero.section"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Contact Us
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl">
              Share your requirements and our team will get back to you within
              24 business hours.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="bg-background py-16" data-ocid="contact.form.section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-5 gap-12">
            <motion.div
              className="md:col-span-3"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <Card className="border-border">
                <CardContent className="p-8">
                  <h2 className="font-display text-2xl font-bold text-foreground mb-6">
                    Send Us a Message
                  </h2>
                  <form
                    onSubmit={handleSubmit(onSubmit)}
                    noValidate
                    className="space-y-5"
                  >
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div className="space-y-1.5">
                        <Label htmlFor="companyName">
                          Company Name{" "}
                          <span className="text-destructive">*</span>
                        </Label>
                        <Input
                          id="companyName"
                          placeholder="Acme Corp Pvt Ltd"
                          data-ocid="contact.form.company_name.input"
                          aria-invalid={!!errors.companyName}
                          {...register("companyName", {
                            required: "Company name is required",
                          })}
                        />
                        {errors.companyName && (
                          <p
                            className="text-xs text-destructive"
                            data-ocid="contact.form.company_name.field_error"
                          >
                            {errors.companyName.message}
                          </p>
                        )}
                      </div>
                      <div className="space-y-1.5">
                        <Label htmlFor="name">
                          Your Name <span className="text-destructive">*</span>
                        </Label>
                        <Input
                          id="name"
                          placeholder="Rahul Sharma"
                          data-ocid="contact.form.name.input"
                          aria-invalid={!!errors.name}
                          {...register("name", {
                            required: "Name is required",
                          })}
                        />
                        {errors.name && (
                          <p
                            className="text-xs text-destructive"
                            data-ocid="contact.form.name.field_error"
                          >
                            {errors.name.message}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                      <div className="space-y-1.5">
                        <Label htmlFor="email">
                          Email <span className="text-destructive">*</span>
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="rahul@company.in"
                          data-ocid="contact.form.email.input"
                          aria-invalid={!!errors.email}
                          {...register("email", {
                            required: "Email is required",
                            pattern: {
                              value: /^[^@]+@[^@]+\.[^@]+$/,
                              message: "Enter a valid email",
                            },
                          })}
                        />
                        {errors.email && (
                          <p
                            className="text-xs text-destructive"
                            data-ocid="contact.form.email.field_error"
                          >
                            {errors.email.message}
                          </p>
                        )}
                      </div>
                      <div className="space-y-1.5">
                        <Label htmlFor="phone">
                          Phone <span className="text-destructive">*</span>
                        </Label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="+91 98765 43210"
                          data-ocid="contact.form.phone.input"
                          aria-invalid={!!errors.phone}
                          {...register("phone", {
                            required: "Phone is required",
                            pattern: {
                              value: /^[+\d\s()-]{7,15}$/,
                              message: "Enter a valid phone number",
                            },
                          })}
                        />
                        {errors.phone && (
                          <p
                            className="text-xs text-destructive"
                            data-ocid="contact.form.phone.field_error"
                          >
                            {errors.phone.message}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <Label htmlFor="requirement">
                        Requirement <span className="text-destructive">*</span>
                      </Label>
                      <Textarea
                        id="requirement"
                        placeholder="Describe your hiring needs, headcount, roles, timeline, and any specific requirements..."
                        rows={5}
                        data-ocid="contact.form.requirement.textarea"
                        aria-invalid={!!errors.requirement}
                        {...register("requirement", {
                          required: "Please describe your requirement",
                          minLength: {
                            value: 20,
                            message: "Please provide at least 20 characters",
                          },
                        })}
                      />
                      {errors.requirement && (
                        <p
                          className="text-xs text-destructive"
                          data-ocid="contact.form.requirement.field_error"
                        >
                          {errors.requirement.message}
                        </p>
                      )}
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full"
                      disabled={isSubmitting}
                      data-ocid="contact.form.submit_button"
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              className="md:col-span-2 space-y-6"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <div>
                <h2 className="font-display text-2xl font-bold text-foreground mb-2">
                  Get in Touch
                </h2>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Our workforce specialists are available Monday to Saturday. We
                  typically respond within 4 business hours.
                </p>
              </div>
              <div className="space-y-4">
                {CONTACT_INFO.map((info) => (
                  <div key={info.label} className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <info.icon className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">
                        {info.label}
                      </p>
                      {info.href ? (
                        <a
                          href={info.href}
                          className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-sm font-medium text-foreground">
                          {info.value}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
