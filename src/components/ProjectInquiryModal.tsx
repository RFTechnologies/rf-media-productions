"use client";

import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { baseURL } from "../lib/utils";
import {
  Building,
  Calendar,
  Check,
  MapPin,
  Sparkles,
  Video,
  X,
} from "lucide-react";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface ProjectInquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialType?: "project" | "call" | "hotel";
}

type FormType = "project" | "call" | "hotel";

type ApiResponse = {
  status?: string;
  message?: string;
  error?: string;
};

/**
 * Use the complete endpoint only once.
 *
 * Do not append "/contact-us" again when calling fetch.
 */
const CONTACT_API_URL =
  "https://rftechnologies-api.vercel.app/contact-us";


const inquiryFormSchema = z
  .object({
    formType: z.enum(["project", "call", "hotel"]),

    name: z
      .string()
      .trim()
      .min(2, "Full name must contain at least 2 characters.")
      .max(100, "Full name cannot exceed 100 characters."),

    email: z
      .string()
      .trim()
      .min(1, "Email address is required.")
      .email("Please enter a valid email address.")
      .max(150, "Email address cannot exceed 150 characters."),

    phone: z
      .string()
      .trim()
      .min(7, "Please enter a valid phone number.")
      .max(30, "Phone number cannot exceed 30 characters.")
      .regex(
        /^[+\d][\d\s()+-]*$/,
        "Please enter a valid phone number."
      ),

    company: z
      .string()
      .trim()
      .min(2, "Brand or company name is required.")
      .max(
        150,
        "Brand or company name cannot exceed 150 characters."
      ),

    budget: z.string().trim(),

    serviceType: z.string().trim(),

    message: z
      .string()
      .trim()
      .min(
        10,
        "Please provide at least 10 characters about your project."
      )
      .max(
        3000,
        "Project brief cannot exceed 3000 characters."
      ),

    hotelRooms: z.string(),

    location: z.string(),

    preferredDate: z.string(),
  })
  .superRefine((data, context) => {
    if (data.formType === "project") {
      if (!data.serviceType) {
        context.addIssue({
          code: z.ZodIssueCode.custom,
          path: ["serviceType"],
          message: "Please select a service.",
        });
      }

      if (!data.budget) {
        context.addIssue({
          code: z.ZodIssueCode.custom,
          path: ["budget"],
          message: "Please select a project budget.",
        });
      }
    }

    if (data.formType === "call") {
      if (!data.serviceType) {
        context.addIssue({
          code: z.ZodIssueCode.custom,
          path: ["serviceType"],
          message: "Please select a focus area.",
        });
      }

      if (!data.preferredDate) {
        context.addIssue({
          code: z.ZodIssueCode.custom,
          path: ["preferredDate"],
          message: "Please select a consultation date.",
        });

        return;
      }

      const selectedDate = new Date(
        `${data.preferredDate}T00:00:00`
      );

      const today = new Date();
      today.setHours(0, 0, 0, 0);

      if (
        Number.isNaN(selectedDate.getTime()) ||
        selectedDate < today
      ) {
        context.addIssue({
          code: z.ZodIssueCode.custom,
          path: ["preferredDate"],
          message: "Please select today or a future date.",
        });
      }
    }

    if (data.formType === "hotel") {
      const rooms = Number(data.hotelRooms);

      if (!data.hotelRooms.trim()) {
        context.addIssue({
          code: z.ZodIssueCode.custom,
          path: ["hotelRooms"],
          message: "Please enter the total number of rooms.",
        });
      } else if (
        !Number.isInteger(rooms) ||
        rooms < 1
      ) {
        context.addIssue({
          code: z.ZodIssueCode.custom,
          path: ["hotelRooms"],
          message:
            "Total rooms must be a whole number greater than zero.",
        });
      }

      if (data.location.trim().length < 2) {
        context.addIssue({
          code: z.ZodIssueCode.custom,
          path: ["location"],
          message: "Please enter the property location.",
        });
      }

      if (!data.budget.trim()) {
        context.addIssue({
          code: z.ZodIssueCode.custom,
          path: ["budget"],
          message: "Please select a coverage scale.",
        });
      }
    }
  });

type InquiryFormValues = z.infer<
  typeof inquiryFormSchema
>;

const getDefaultValues = (
  formType: FormType
): InquiryFormValues => {
  return {
    formType,
    name: "",
    email: "",
    phone: "",
    company: "",
    budget:
      formType === "hotel"
        ? "Full resort (including aerial drone)"
        : "$5,000 - $10,000",
    serviceType:
      formType === "call"
        ? "Digital Video Strategy"
        : formType === "project"
          ? "Luxury Hotel Promotions"
          : "",
    message: "",
    hotelRooms: "",
    location: "",
    preferredDate: "",
  };
};

export default function ProjectInquiryModal({
  isOpen,
  onClose,
  initialType = "project",
}: ProjectInquiryModalProps) {
  const [isSubmitted, setIsSubmitted] =
    useState(false);

  const [submittedData, setSubmittedData] =
    useState<InquiryFormValues | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    watch,
    clearErrors,
    formState: {
      errors,
      isSubmitting,
    },
  } = useForm<InquiryFormValues>({
    resolver: zodResolver(inquiryFormSchema),
    defaultValues: getDefaultValues(initialType),
    mode: "onTouched",
    reValidateMode: "onChange",
  });

  const formType = watch("formType");

  useEffect(() => {
    reset(getDefaultValues(initialType));
    setIsSubmitted(false);
    setSubmittedData(null);
  }, [initialType, reset]);

  const handleFormTypeChange = (
    type: FormType
  ) => {
    setValue("formType", type, {
      shouldDirty: true,
      shouldValidate: true,
    });

    clearErrors([
      "budget",
      "serviceType",
      "preferredDate",
      "hotelRooms",
      "location",
    ]);

    setValue("preferredDate", "");
    setValue("hotelRooms", "");
    setValue("location", "");

    if (type === "project") {
      setValue(
        "serviceType",
        "Luxury Hotel Promotions",
        {
          shouldValidate: true,
        }
      );

      setValue("budget", "$5,000 - $10,000", {
        shouldValidate: true,
      });
    }

    if (type === "call") {
      setValue(
        "serviceType",
        "Digital Video Strategy",
        {
          shouldValidate: true,
        }
      );

      setValue("budget", "");
    }

    if (type === "hotel") {
      setValue("serviceType", "");

      setValue(
        "budget",
        "Full resort (including aerial drone)",
        {
          shouldValidate: true,
        }
      );
    }
  };

  const createApiMessage = (
    data: InquiryFormValues
  ): string => {
    const details: string[] = [
      `Inquiry Type: ${getInquiryTypeLabel(
        data.formType
      )}`,
      `Company / Brand: ${data.company.trim()}`,
    ];

    if (data.formType === "project") {
      details.push(
        `Service Required: ${data.serviceType}`,
        `Project Budget: ${data.budget}`
      );
    }

    if (data.formType === "call") {
      details.push(
        `Focus Area: ${data.serviceType}`,
        `Preferred Consultation Date: ${data.preferredDate}`
      );
    }

    if (data.formType === "hotel") {
      details.push(
        `Total Keys / Rooms: ${data.hotelRooms}`,
        `Property Location: ${data.location.trim()}`,
        `Coverage Scale: ${data.budget}`
      );
    }

    details.push(
      "",
      "Narrative Idea / Project Brief:",
      data.message.trim()
    );

    return details.join("\n");
  };

  const onSubmit = async (
    data: InquiryFormValues
  ) => {
    const toastId = toast.loading(
      "Submitting your production inquiry..."
    );

    try {
      const requestData = new FormData();

      requestData.append("name", data.name.trim());
      requestData.append("email", data.email.trim());
      requestData.append("phone", data.phone.trim());
      requestData.append(
        "message",
        createApiMessage(data)
      );
      requestData.append("join_us", "false");

      console.log(
        "Submitting form to:",
        CONTACT_API_URL
      );

      const response = await fetch(CONTACT_API_URL, {
        method: "POST",
        body: requestData,
      });

      const result = await readApiResponse(response);

      if (!response.ok) {
        throw new Error(
          result?.message ||
          result?.error ||
          `Request failed with status ${response.status}.`
        );
      }

      const responseStatus =
        result?.status?.trim().toLowerCase();

      if (
        responseStatus &&
        responseStatus !== "success"
      ) {
        throw new Error(
          result?.message ||
          result?.error ||
          "The server could not process your request."
        );
      }

      setSubmittedData(data);
      setIsSubmitted(true);

      toast.update(toastId, {
        render:
          result?.message ||
          "Your production inquiry was submitted successfully.",
        type: "success",
        isLoading: false,
        autoClose: 5000,
        closeOnClick: true,
      });
    } catch (error) {
      console.error(
        "Project inquiry submission failed:",
        error
      );

      let errorMessage =
        "Something went wrong while submitting your request.";

      if (error instanceof TypeError) {
        errorMessage =
          "Unable to connect to the server. Please verify the API URL and CORS configuration.";
      } else if (error instanceof Error) {
        errorMessage = error.message;
      }

      toast.update(toastId, {
        render: errorMessage,
        type: "error",
        isLoading: false,
        autoClose: 6000,
        closeOnClick: true,
      });
    }
  };

  const onInvalidSubmit = () => {
    toast.error(
      "Please correct the highlighted fields before submitting."
    );
  };

  const handleReset = () => {
    reset(getDefaultValues(initialType));
    setIsSubmitted(false);
    setSubmittedData(null);
    onClose();
  };

  const handleClose = () => {
    if (isSubmitting) {
      return;
    }

    onClose();
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        newestOnTop
        closeOnClick
        pauseOnFocusLoss
        pauseOnHover
        draggable
        theme="dark"
        toastClassName="!rounded-none !border !border-white/10 !bg-[#141414] !text-white"
        progressClassName="!bg-luxury-gold"
      />

      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              id="modal-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleClose}
              className="absolute inset-0 bg-[#060606]/90 backdrop-blur-md"
            />

            {/* Modal */}
            <motion.div
              id="modal-container"
              initial={{
                opacity: 0,
                scale: 0.95,
                y: 20,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.95,
                y: 20,
              }}
              transition={{
                duration: 0.4,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="relative w-full max-w-3xl overflow-hidden rounded-none border border-white/10 bg-[#141414] shadow-2xl"
            >
              {/* Decorative Bar */}
              <div className="h-1.5 w-full bg-gradient-to-r from-luxury-gold via-white/20 to-luxury-gold" />

              {/* Close */}
              <button
                id="modal-close-btn"
                type="button"
                onClick={handleClose}
                disabled={isSubmitting}
                className="absolute right-4 top-4 rounded-none border border-white/5 p-2 text-white/50 transition-colors hover:bg-white/5 hover:text-white disabled:cursor-not-allowed disabled:opacity-40"
                aria-label="Close modal"
              >
                <X size={20} />
              </button>

              {!isSubmitted ? (
                <div className="max-h-[90vh] overflow-y-auto p-6 md:p-10">
                  {/* Header */}
                  <div className="mb-8">
                    <span className="mb-2 block font-display text-xs font-medium uppercase tracking-[0.25em] text-luxury-gold">
                      RF Media Productions
                    </span>

                    <h3 className="font-serif text-2xl font-medium text-white md:text-3xl">
                      {formType === "project" &&
                        "Initiate Your Production"}

                      {formType === "call" &&
                        "Book a Cinematic Strategy Call"}

                      {formType === "hotel" &&
                        "Request Elite Hotel Coverage"}
                    </h3>

                    <p className="mt-2 text-sm font-light text-luxury-silver">
                      {formType === "project" &&
                        "Collaborate with us to translate your brand's essence into a breathtaking visual masterpiece."}

                      {formType === "call" &&
                        "Discuss your video marketing strategy directly with our principal directors."}

                      {formType === "hotel" &&
                        "Our production circle creates bespoke premium coverage for luxury hotels and world-class resorts."}
                    </p>
                  </div>

                  {/* Form Type Selector */}
                  <div className="mb-8 grid grid-cols-3 gap-2 rounded-none border border-white/5 bg-[#0b0b0b] p-1">
                    <button
                      id="tab-project"
                      type="button"
                      disabled={isSubmitting}
                      onClick={() =>
                        handleFormTypeChange("project")
                      }
                      className={`rounded-none py-2 font-display text-xs tracking-wider transition-all disabled:cursor-not-allowed ${formType === "project"
                          ? "bg-luxury-gold font-semibold text-luxury-charcoal"
                          : "text-[#B8B8B8] hover:bg-white/5 hover:text-white"
                        }`}
                    >
                      Project
                    </button>

                    <button
                      id="tab-call"
                      type="button"
                      disabled={isSubmitting}
                      onClick={() =>
                        handleFormTypeChange("call")
                      }
                      className={`rounded-none py-2 font-display text-xs tracking-wider transition-all disabled:cursor-not-allowed ${formType === "call"
                          ? "bg-luxury-gold font-semibold text-luxury-charcoal"
                          : "text-[#B8B8B8] hover:bg-white/5 hover:text-white"
                        }`}
                    >
                      Discovery Call
                    </button>

                    <button
                      id="tab-hotel"
                      type="button"
                      disabled={isSubmitting}
                      onClick={() =>
                        handleFormTypeChange("hotel")
                      }
                      className={`rounded-none py-2 font-display text-xs tracking-wider transition-all disabled:cursor-not-allowed ${formType === "hotel"
                          ? "bg-luxury-gold font-semibold text-luxury-charcoal"
                          : "text-[#B8B8B8] hover:bg-white/5 hover:text-white"
                        }`}
                    >
                      Hotel Partnership
                    </button>
                  </div>

                  {/* Form */}
                  <form
                    onSubmit={handleSubmit(
                      onSubmit,
                      onInvalidSubmit
                    )}
                    noValidate
                    className="space-y-6"
                  >
                    <input
                      type="hidden"
                      {...register("formType")}
                    />

                    {/* Name and Email */}
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                      <FormField
                        label="Full Name"
                        htmlFor="input-name"
                        error={errors.name?.message}
                      >
                        <input
                          id="input-name"
                          type="text"
                          autoComplete="name"
                          disabled={isSubmitting}
                          placeholder="e.g. Adrian Soneva"
                          aria-invalid={Boolean(
                            errors.name
                          )}
                          {...register("name")}
                          className={getInputClass(
                            Boolean(errors.name)
                          )}
                        />
                      </FormField>

                      <FormField
                        label="Email Address"
                        htmlFor="input-email"
                        error={errors.email?.message}
                      >
                        <input
                          id="input-email"
                          type="email"
                          autoComplete="email"
                          disabled={isSubmitting}
                          placeholder="e.g. adrian@resort.com"
                          aria-invalid={Boolean(
                            errors.email
                          )}
                          {...register("email")}
                          className={getInputClass(
                            Boolean(errors.email)
                          )}
                        />
                      </FormField>
                    </div>

                    {/* Phone and Company */}
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                      <FormField
                        label="Phone Number"
                        htmlFor="input-phone"
                        error={errors.phone?.message}
                      >
                        <input
                          id="input-phone"
                          type="tel"
                          autoComplete="tel"
                          disabled={isSubmitting}
                          placeholder="e.g. +1 (555) 019-2831"
                          aria-invalid={Boolean(
                            errors.phone
                          )}
                          {...register("phone")}
                          className={getInputClass(
                            Boolean(errors.phone)
                          )}
                        />
                      </FormField>

                      <FormField
                        label="Brand / Company Name"
                        htmlFor="input-company"
                        error={errors.company?.message}
                      >
                        <input
                          id="input-company"
                          type="text"
                          autoComplete="organization"
                          disabled={isSubmitting}
                          placeholder="e.g. Aman Group"
                          aria-invalid={Boolean(
                            errors.company
                          )}
                          {...register("company")}
                          className={getInputClass(
                            Boolean(errors.company)
                          )}
                        />
                      </FormField>
                    </div>

                    {/* Project */}
                    {formType === "project" && (
                      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                        <FormField
                          label="Service Required"
                          htmlFor="select-service"
                          error={
                            errors.serviceType?.message
                          }
                        >
                          <select
                            id="select-service"
                            disabled={isSubmitting}
                            aria-invalid={Boolean(
                              errors.serviceType
                            )}
                            {...register("serviceType")}
                            className={getInputClass(
                              Boolean(errors.serviceType)
                            )}
                          >
                            <option value="Travel Productions">
                              Travel Productions
                            </option>

                            <option value="Luxury Hotel Promotions">
                              Luxury Hotel Promotions
                            </option>

                            <option value="Resort Marketing">
                              Resort Marketing
                            </option>

                            <option value="Tourism Campaigns">
                              Tourism Campaigns
                            </option>

                            <option value="Food Cinematography">
                              Food Cinematography
                            </option>

                            <option value="Commercial Advertisements">
                              Commercial Advertisements
                            </option>

                            <option value="Photography">
                              Photography
                            </option>
                          </select>
                        </FormField>

                        <FormField
                          label="Project Budget (USD)"
                          htmlFor="select-budget"
                          error={errors.budget?.message}
                        >
                          <select
                            id="select-budget"
                            disabled={isSubmitting}
                            aria-invalid={Boolean(
                              errors.budget
                            )}
                            {...register("budget")}
                            className={getInputClass(
                              Boolean(errors.budget)
                            )}
                          >
                            <option value="$5,000 - $10,000">
                              $5,000 - $10,000
                            </option>

                            <option value="$10,000 - $25,000">
                              $10,000 - $25,000
                            </option>

                            <option value="$25,000 - $50,000">
                              $25,000 - $50,000
                            </option>

                            <option value="$50,000+">
                              $50,000+
                            </option>
                          </select>
                        </FormField>
                      </div>
                    )}

                    {/* Call */}
                    {formType === "call" && (
                      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                        <FormField
                          label={
                            <span className="flex items-center gap-1">
                              <Calendar
                                size={12}
                                className="text-luxury-silver"
                              />
                              Preferred Consultation Date
                            </span>
                          }
                          htmlFor="input-date"
                          error={
                            errors.preferredDate?.message
                          }
                        >
                          <input
                            id="input-date"
                            type="date"
                            disabled={isSubmitting}
                            aria-invalid={Boolean(
                              errors.preferredDate
                            )}
                            {...register("preferredDate")}
                            className={getInputClass(
                              Boolean(errors.preferredDate)
                            )}
                          />
                        </FormField>

                        <FormField
                          label="Focus Area"
                          htmlFor="select-focus"
                          error={
                            errors.serviceType?.message
                          }
                        >
                          <select
                            id="select-focus"
                            disabled={isSubmitting}
                            aria-invalid={Boolean(
                              errors.serviceType
                            )}
                            {...register("serviceType")}
                            className={getInputClass(
                              Boolean(errors.serviceType)
                            )}
                          >
                            <option value="Digital Video Strategy">
                              Digital Video Strategy
                            </option>

                            <option value="Full-year Content Retainer">
                              Full-year Content Retainer
                            </option>

                            <option value="Launch Campaign Coordination">
                              Launch Campaign Coordination
                            </option>

                            <option value="Photography Portfolio">
                              Photography Portfolio
                            </option>
                          </select>
                        </FormField>
                      </div>
                    )}

                    {/* Hotel */}
                    {formType === "hotel" && (
                      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                        <FormField
                          label={
                            <span className="flex items-center gap-1">
                              <Building
                                size={12}
                                className="text-luxury-silver"
                              />
                              Total Keys / Rooms
                            </span>
                          }
                          htmlFor="input-rooms"
                          error={
                            errors.hotelRooms?.message
                          }
                        >
                          <input
                            id="input-rooms"
                            type="number"
                            min="1"
                            step="1"
                            disabled={isSubmitting}
                            placeholder="e.g. 85"
                            aria-invalid={Boolean(
                              errors.hotelRooms
                            )}
                            {...register("hotelRooms")}
                            className={getInputClass(
                              Boolean(errors.hotelRooms)
                            )}
                          />
                        </FormField>

                        <FormField
                          label={
                            <span className="flex items-center gap-1">
                              <MapPin
                                size={12}
                                className="text-luxury-silver"
                              />
                              Property Location
                            </span>
                          }
                          htmlFor="input-location"
                          error={
                            errors.location?.message
                          }
                        >
                          <input
                            id="input-location"
                            type="text"
                            disabled={isSubmitting}
                            placeholder="e.g. Kyoto, Japan"
                            aria-invalid={Boolean(
                              errors.location
                            )}
                            {...register("location")}
                            className={getInputClass(
                              Boolean(errors.location)
                            )}
                          />
                        </FormField>

                        <FormField
                          label={
                            <span className="flex items-center gap-1">
                              <Video
                                size={12}
                                className="text-luxury-silver"
                              />
                              Coverage Scale
                            </span>
                          }
                          htmlFor="select-hotel-scale"
                          error={errors.budget?.message}
                        >
                          <select
                            id="select-hotel-scale"
                            disabled={isSubmitting}
                            aria-invalid={Boolean(
                              errors.budget
                            )}
                            {...register("budget")}
                            className={getInputClass(
                              Boolean(errors.budget)
                            )}
                          >
                            <option value="Full resort (including aerial drone)">
                              Full resort (including aerial
                              drone)
                            </option>

                            <option value="Restaurant & culinary focus">
                              Restaurant & culinary focus
                            </option>

                            <option value="Spa, wellness, & details">
                              Spa, wellness, & details
                            </option>
                          </select>
                        </FormField>
                      </div>
                    )}

                    {/* Message */}
                    <FormField
                      label="Share Your Narrative Idea or Brief"
                      htmlFor="input-message"
                      error={errors.message?.message}
                    >
                      <textarea
                        id="input-message"
                        rows={4}
                        disabled={isSubmitting}
                        placeholder="Describe the mood, target emotion, or specific elements of your property or brand that make it extraordinary..."
                        aria-invalid={Boolean(
                          errors.message
                        )}
                        {...register("message")}
                        className={`${getInputClass(
                          Boolean(errors.message)
                        )} resize-none`}
                      />
                    </FormField>

                    {/* Actions */}
                    <div className="flex items-center justify-end gap-4 border-t border-white/5 pt-4">
                      <button
                        id="modal-cancel-btn"
                        type="button"
                        onClick={handleClose}
                        disabled={isSubmitting}
                        className="rounded-none px-6 py-3 font-display text-xs uppercase tracking-widest text-white transition-colors hover:bg-white/5 disabled:cursor-not-allowed disabled:opacity-40"
                      >
                        Cancel
                      </button>

                      <button
                        id="modal-submit-btn"
                        type="submit"
                        disabled={isSubmitting}
                        className="flex items-center gap-2 rounded-none bg-luxury-gold px-8 py-3 font-display text-xs font-semibold uppercase tracking-widest text-luxury-charcoal shadow-lg shadow-luxury-gold/10 transition-colors hover:bg-luxury-gold-hover disabled:cursor-not-allowed disabled:opacity-60"
                      >
                        {isSubmitting ? (
                          <>
                            <span className="h-4 w-4 animate-spin rounded-full border-2 border-luxury-charcoal/20 border-t-luxury-charcoal" />
                            Transmitting...
                          </>
                        ) : (
                          <>
                            Request Session
                            <Sparkles size={14} />
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                </div>
              ) : (
                /* Success */
                <motion.div
                  id="modal-success-state"
                  initial={{
                    opacity: 0,
                    scale: 0.95,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                  }}
                  className="flex flex-col items-center justify-center space-y-6 p-10 text-center md:p-16"
                >
                  <div className="mb-2 flex h-16 w-16 items-center justify-center rounded-none border border-luxury-gold bg-luxury-gold/10 text-luxury-gold">
                    <Check size={32} />
                  </div>

                  <span className="font-display text-xs font-medium uppercase tracking-[0.3em] text-luxury-gold">
                    Transmission Received
                  </span>

                  <h3 className="font-serif text-3xl font-medium text-white">
                    Connecting Our Production Circles
                  </h3>

                  <p className="max-w-md text-sm font-light leading-relaxed text-[#B8B8B8]">
                    Thank you,{" "}
                    <strong className="text-white">
                      {submittedData?.name}
                    </strong>
                    . Your request for{" "}
                    <span className="text-luxury-gold">
                      {submittedData?.company}
                    </span>{" "}
                    has been securely routed to our chief
                    directors. We will contact you within 12
                    hours via{" "}
                    <strong className="text-white">
                      {submittedData?.email}
                    </strong>{" "}
                    to set up a private conceptual briefing.
                  </p>

                  <div className="pt-6">
                    <button
                      id="modal-success-close-btn"
                      type="button"
                      onClick={handleReset}
                      className="rounded-none bg-luxury-gold px-8 py-3 font-display text-xs font-semibold uppercase tracking-widest text-luxury-charcoal shadow-lg transition-colors hover:bg-luxury-gold-hover"
                    >
                      Return to Cinematic Experience
                    </button>
                  </div>
                </motion.div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}

interface FormFieldProps {
  label: React.ReactNode;
  htmlFor: string;
  error?: string;
  children: React.ReactNode;
}

function FormField({
  label,
  htmlFor,
  error,
  children,
}: FormFieldProps) {
  return (
    <div className="space-y-1">
      <label
        htmlFor={htmlFor}
        className="block text-xs uppercase tracking-wider text-white/70"
      >
        {label}
      </label>

      {children}

      {error && (
        <p
          role="alert"
          className="text-xs leading-relaxed text-red-400"
        >
          {error}
        </p>
      )}
    </div>
  );
}

function getInputClass(
  hasError: boolean
): string {
  return [
    "w-full rounded-none bg-[#0b0b0b] px-4 py-3",
    "border text-sm font-light text-white transition-all",
    "placeholder:text-white/20 focus:outline-none focus:ring-1",
    "disabled:cursor-not-allowed disabled:opacity-60",
    hasError
      ? "border-red-500/70 focus:border-red-500 focus:ring-red-500"
      : "border-white/10 focus:border-luxury-gold focus:ring-luxury-gold",
  ].join(" ");
}

function getInquiryTypeLabel(
  type: FormType
): string {
  if (type === "call") {
    return "Discovery Call";
  }

  if (type === "hotel") {
    return "Hotel Partnership";
  }

  return "Project";
}

async function readApiResponse(
  response: Response
): Promise<ApiResponse | null> {
  const responseText = await response.text();

  if (!responseText.trim()) {
    return null;
  }

  try {
    return JSON.parse(responseText) as ApiResponse;
  } catch {
    return {
      message: responseText,
    };
  }
}