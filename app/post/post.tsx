"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, type SubmitHandler } from "react-hook-form";
import { useRouter } from "next/navigation";
import * as z from "zod";
import { collection, addDoc } from "firebase/firestore";
import { db } from "@/config/firebase";


// 1. Zod Validation Schema
const postSchema = z.object({
  name: z.string().min(2, "Business name must be at least 2 characters long"),
  info: z.string().min(10, "Please provide at least 10 characters describing the business"),
  sector: z.string().min(1, "Please select a business sector"),
  initialCapital: z.string().min(1, "Initial capital estimate is required"),
  address: z.string().min(5, "Please enter a valid business address or location"),
  resources: z.string().min(3, "Please list key resources or equipment needed"),
  initialReview: z.string().optional(),
});

type FormValues = z.infer<typeof postSchema>;

const sectors = [
  "Financial Services (POS & Agent Banking)",
  "Transport & Logistics",
  "Food & Retail (Frozen Foods / Poultry)",
  "Agribusiness & Farming",
  "ICT & Tech Services",
  "Fashion & Tailoring",
  "Others",
];

export default function Post({ session }: any) {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(postSchema),
    defaultValues: {
      name: "",
      info: "",
      sector: "",
      initialCapital: "",
      address: "",
      resources: "",
      initialReview: "",
    },
  });

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    const completePostData = {
      ...data,
      authorName: session?.user?.name || "Anonymous User",
      authorImage: session?.user?.image || "",
      createdAt: new Date().toISOString(),
    };

    console.log("Complete Post Payload:", completePostData);

    const docRef = await addDoc(collection(db, "business_ideas"),  completePostData);

    reset();
    router.refresh(); 
  };

  return (
    <main className="max-w-2xl mx-auto p-8 bg-white rounded-3xl shadow-lg border border-neutral-200 my-12">

      {/* Header */}
      <div className="border-b border-neutral-200 pb-5 mb-6">
        <h1 className="text-2xl font-bold text-neutral-900 tracking-tight">
          Create Business Blueprint
        </h1>
        <p className="text-sm text-neutral-600 mt-1">
          Share practical setup steps, required capital, and resources for Nigerian SMEs.
        </p>
      </div>

      {/* Authenticated Author Badge */}
      {session?.user && (
        <div className="mb-8 flex items-center gap-3.5 p-4 bg-neutral-50 rounded-2xl border border-neutral-200">
          {session.user.image ? (
            <img
              src={session.user.image}
              alt={session.user.name || "User"}
              className="w-11 h-11 rounded-full object-cover border border-neutral-300 shadow-sm"
            />
          ) : (
            <div className="w-11 h-11 rounded-full bg-[#2F3E2C] text-white flex items-center justify-center font-bold text-base">
              {session.user.name?.[0] || "U"}
            </div>
          )}
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-800 block">
              Posting As
            </span>
            <p className="text-sm font-bold text-neutral-900">{session.user.name}</p>
            {session.user.email && (
              <p className="text-xs text-neutral-600">{session.user.email}</p>
            )}
          </div>
        </div>
      )}

      {/* Form Fields */}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">

        {/* Business Name */}
        <div>
          <label htmlFor="name" className="block text-sm font-bold text-neutral-900 mb-2">
            Business Name <span className="text-red-600">*</span>
          </label>
          <input
            id="name"
            type="text"
            {...register("name")}
            placeholder="e.g. RapidExpress Logistics"
            className="w-full rounded-xl border border-neutral-300 bg-white px-4 py-3.5 text-sm font-medium text-neutral-900 placeholder:text-neutral-400 outline-none transition-all focus:border-[#2F3E2C] focus:ring-2 focus:ring-[#2F3E2C]/20"
          />
          {errors.name && (
            <p className="text-red-600 text-xs font-bold mt-1.5 flex items-center gap-1">
              <span>⚠️</span> {errors.name.message}
            </p>
          )}
        </div>

        {/* Business Info / Description */}
        <div>
          <label htmlFor="info" className="block text-sm font-bold text-neutral-900 mb-2">
            Business Overview & Operations <span className="text-red-600">*</span>
          </label>
          <textarea
            id="info"
            rows={4}
            {...register("info")}
            placeholder="Explain how this business model works day-to-day, target customers, and revenue generation..."
            className="w-full rounded-xl border border-neutral-300 bg-white px-4 py-3.5 text-sm font-medium text-neutral-900 leading-relaxed placeholder:text-neutral-400 outline-none transition-all focus:border-[#2F3E2C] focus:ring-2 focus:ring-[#2F3E2C]/20 resize-y"
          />
          {errors.info && (
            <p className="text-red-600 text-xs font-bold mt-1.5 flex items-center gap-1">
              <span>⚠️</span> {errors.info.message}
            </p>
          )}
        </div>

        {/* Sector Dropdown */}
        <div>
          <label htmlFor="sector" className="block text-sm font-bold text-neutral-900 mb-2">
            Industry Sector <span className="text-red-600">*</span>
          </label>
          <select
            id="sector"
            {...register("sector")}
            className="w-full rounded-xl border border-neutral-300 bg-white px-4 py-3.5 text-sm font-medium text-neutral-900 outline-none transition-all focus:border-[#2F3E2C] focus:ring-2 focus:ring-[#2F3E2C]/20"
          >
            <option value="" className="text-neutral-400">
              -- Choose Sector --
            </option>
            {sectors.map((sec, idx) => (
              <option key={idx} value={sec} className="text-neutral-900">
                {sec}
              </option>
            ))}
          </select>
          {errors.sector && (
            <p className="text-red-600 text-xs font-bold mt-1.5 flex items-center gap-1">
              <span>⚠️</span> {errors.sector.message}
            </p>
          )}
        </div>

        {/* Initial Capital & Location Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

          {/* Initial Capital */}
          <div>
            <label htmlFor="initialCapital" className="block text-sm font-bold text-neutral-900 mb-2">
              Startup Capital (₦) <span className="text-red-600">*</span>
            </label>
            <input
              id="initialCapital"
              type="text"
              {...register("initialCapital")}
              placeholder="e.g. ₦250,000 - ₦500,000"
              className="w-full rounded-xl border border-neutral-300 bg-white px-4 py-3.5 text-sm font-medium text-neutral-900 placeholder:text-neutral-400 outline-none transition-all focus:border-[#2F3E2C] focus:ring-2 focus:ring-[#2F3E2C]/20"
            />
            {errors.initialCapital && (
              <p className="text-red-600 text-xs font-bold mt-1.5 flex items-center gap-1">
                <span>⚠️</span> {errors.initialCapital.message}
              </p>
            )}
          </div>

          {/* Address / Location */}
          <div>
            <label htmlFor="address" className="block text-sm font-bold text-neutral-900 mb-2">
              Location / Area <span className="text-red-600">*</span>
            </label>
            <input
              id="address"
              type="text"
              {...register("address")}
              placeholder="e.g. Wuse 2, Abuja"
              className="w-full rounded-xl border border-neutral-300 bg-white px-4 py-3.5 text-sm font-medium text-neutral-900 placeholder:text-neutral-400 outline-none transition-all focus:border-[#2F3E2C] focus:ring-2 focus:ring-[#2F3E2C]/20"
            />
            {errors.address && (
              <p className="text-red-600 text-xs font-bold mt-1.5 flex items-center gap-1">
                <span>⚠️</span> {errors.address.message}
              </p>
            )}
          </div>

        </div>

        {/* Resources & Equipment */}
        <div>
          <label htmlFor="resources" className="block text-sm font-bold text-neutral-900 mb-2">
            Key Equipment & Tools Needed <span className="text-red-600">*</span>
          </label>
          <input
            id="resources"
            type="text"
            {...register("resources")}
            placeholder="e.g. POS Terminal, Android Phone, Solar Backup, Freezer"
            className="w-full rounded-xl border border-neutral-300 bg-white px-4 py-3.5 text-sm font-medium text-neutral-900 placeholder:text-neutral-400 outline-none transition-all focus:border-[#2F3E2C] focus:ring-2 focus:ring-[#2F3E2C]/20"
          />
          {errors.resources && (
            <p className="text-red-600 text-xs font-bold mt-1.5 flex items-center gap-1">
              <span>⚠️</span> {errors.resources.message}
            </p>
          )}
        </div>

        {/* Initial Founder Note / Review */}
        <div>
          <label htmlFor="initialReview" className="block text-sm font-bold text-neutral-900 mb-1">
            Founder Note / Tip <span className="text-neutral-500 font-normal">(Optional)</span>
          </label>
          <p className="text-xs text-neutral-600 mb-2">
            Share an important personal tip or warning from your experience running this.
          </p>
          <input
            id="initialReview"
            type="text"
            {...register("initialReview")}
            placeholder="e.g. Ensure you secure a location with high foot traffic near market banks."
            className="w-full rounded-xl border border-neutral-300 bg-white px-4 py-3.5 text-sm font-medium text-neutral-900 placeholder:text-neutral-400 outline-none transition-all focus:border-[#2F3E2C] focus:ring-2 focus:ring-[#2F3E2C]/20"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full rounded-xl py-4 text-sm font-bold text-white shadow-md transition-all hover:opacity-95 active:scale-[0.99] disabled:opacity-50 mt-4 cursor-pointer"
          style={{ backgroundColor: "#2F3E2C" }}
        >
          {isSubmitting ? "Publishing Blueprint..." : "Publish Business Blueprint"}
        </button>

      </form>
    </main>
  );
}