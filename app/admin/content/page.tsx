"use client";

import { useState } from "react";

interface ContentData {
  stats: {
    yearsInBusiness: string;
    statesCovered: string;
    loadsPerMonth: string;
    carrierPartners: string;
    onTimePercent: string;
    customStat1Label: string;
    customStat1Value: string;
    customStat2Label: string;
    customStat2Value: string;
  };
  testimonials: {
    name: string;
    title: string;
    company: string;
    quote: string;
  }[];
  trustedBy: string;
  heroTagline: string;
}

const defaultData: ContentData = {
  stats: {
    yearsInBusiness: "",
    statesCovered: "",
    loadsPerMonth: "",
    carrierPartners: "",
    onTimePercent: "",
    customStat1Label: "",
    customStat1Value: "",
    customStat2Label: "",
    customStat2Value: "",
  },
  testimonials: [
    { name: "", title: "", company: "", quote: "" },
    { name: "", title: "", company: "", quote: "" },
    { name: "", title: "", company: "", quote: "" },
  ],
  trustedBy: "",
  heroTagline: "",
};

export default function ContentIntakePage() {
  const [data, setData] = useState<ContentData>(defaultData);
  const [copied, setCopied] = useState(false);

  function updateStat(field: keyof ContentData["stats"], value: string) {
    setData((prev) => ({
      ...prev,
      stats: { ...prev.stats, [field]: value },
    }));
  }

  function updateTestimonial(
    index: number,
    field: keyof ContentData["testimonials"][0],
    value: string
  ) {
    setData((prev) => {
      const testimonials = [...prev.testimonials];
      testimonials[index] = { ...testimonials[index], [field]: value };
      return { ...prev, testimonials };
    });
  }

  function handleCopy() {
    const output = JSON.stringify(data, null, 2);
    navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  }

  const inputClass =
    "w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition text-gray-900";
  const labelClass = "block text-sm font-medium text-gray-700 mb-1";

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Website Content Intake
          </h1>
          <p className="text-gray-600 mb-8">
            Fill in the sections below. When you&apos;re done, click &quot;Copy
            Content&quot; at the bottom and send it to me. I&apos;ll use this to
            build out the stats, testimonials, and other sections on the site.
          </p>

          {/* Hero Tagline */}
          <section className="mb-10">
            <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b">
              Hero Tagline
            </h2>
            <p className="text-sm text-gray-500 mb-4">
              The main headline on the homepage. Leave blank to keep the current
              one: &quot;Our Partners, Your Freight. Delivered Together.&quot;
            </p>
            <input
              type="text"
              className={inputClass}
              placeholder='e.g., "Your Freight. Our Priority. Every Time."'
              value={data.heroTagline}
              onChange={(e) =>
                setData((prev) => ({ ...prev, heroTagline: e.target.value }))
              }
            />
          </section>

          {/* Stats */}
          <section className="mb-10">
            <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b">
              Key Stats
            </h2>
            <p className="text-sm text-gray-500 mb-4">
              These will appear as animated counters on the homepage. Fill in
              whichever ones apply — we&apos;ll pick the best 4.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className={labelClass}>Years in Business</label>
                <input
                  type="text"
                  className={inputClass}
                  placeholder="e.g., 5"
                  value={data.stats.yearsInBusiness}
                  onChange={(e) =>
                    updateStat("yearsInBusiness", e.target.value)
                  }
                />
              </div>
              <div>
                <label className={labelClass}>States Covered</label>
                <input
                  type="text"
                  className={inputClass}
                  placeholder="e.g., 48"
                  value={data.stats.statesCovered}
                  onChange={(e) => updateStat("statesCovered", e.target.value)}
                />
              </div>
              <div>
                <label className={labelClass}>Loads Per Month</label>
                <input
                  type="text"
                  className={inputClass}
                  placeholder="e.g., 500"
                  value={data.stats.loadsPerMonth}
                  onChange={(e) => updateStat("loadsPerMonth", e.target.value)}
                />
              </div>
              <div>
                <label className={labelClass}>Carrier Partners</label>
                <input
                  type="text"
                  className={inputClass}
                  placeholder="e.g., 2000"
                  value={data.stats.carrierPartners}
                  onChange={(e) =>
                    updateStat("carrierPartners", e.target.value)
                  }
                />
              </div>
              <div>
                <label className={labelClass}>On-Time Delivery %</label>
                <input
                  type="text"
                  className={inputClass}
                  placeholder="e.g., 97"
                  value={data.stats.onTimePercent}
                  onChange={(e) => updateStat("onTimePercent", e.target.value)}
                />
              </div>
              <div className="sm:col-span-2 grid sm:grid-cols-2 gap-4">
                <div>
                  <label className={labelClass}>Custom Stat 1 — Label</label>
                  <input
                    type="text"
                    className={inputClass}
                    placeholder='e.g., "Happy Customers"'
                    value={data.stats.customStat1Label}
                    onChange={(e) =>
                      updateStat("customStat1Label", e.target.value)
                    }
                  />
                </div>
                <div>
                  <label className={labelClass}>Custom Stat 1 — Value</label>
                  <input
                    type="text"
                    className={inputClass}
                    placeholder="e.g., 150"
                    value={data.stats.customStat1Value}
                    onChange={(e) =>
                      updateStat("customStat1Value", e.target.value)
                    }
                  />
                </div>
                <div>
                  <label className={labelClass}>Custom Stat 2 — Label</label>
                  <input
                    type="text"
                    className={inputClass}
                    placeholder='e.g., "Million Miles Moved"'
                    value={data.stats.customStat2Label}
                    onChange={(e) =>
                      updateStat("customStat2Label", e.target.value)
                    }
                  />
                </div>
                <div>
                  <label className={labelClass}>Custom Stat 2 — Value</label>
                  <input
                    type="text"
                    className={inputClass}
                    placeholder="e.g., 10"
                    value={data.stats.customStat2Value}
                    onChange={(e) =>
                      updateStat("customStat2Value", e.target.value)
                    }
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Testimonials */}
          <section className="mb-10">
            <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b">
              Customer Testimonials
            </h2>
            <p className="text-sm text-gray-500 mb-4">
              Add 2-3 customer quotes. These will appear as testimonial cards on
              the homepage.
            </p>
            {data.testimonials.map((t, i) => (
              <div
                key={i}
                className="bg-gray-50 rounded-xl p-5 mb-4 border border-gray-200"
              >
                <h3 className="font-semibold text-gray-900 mb-3">
                  Testimonial {i + 1}
                </h3>
                <div className="grid sm:grid-cols-3 gap-4 mb-4">
                  <div>
                    <label className={labelClass}>Customer Name</label>
                    <input
                      type="text"
                      className={inputClass}
                      placeholder="e.g., Mike Johnson"
                      value={t.name}
                      onChange={(e) =>
                        updateTestimonial(i, "name", e.target.value)
                      }
                    />
                  </div>
                  <div>
                    <label className={labelClass}>Title</label>
                    <input
                      type="text"
                      className={inputClass}
                      placeholder="e.g., Logistics Manager"
                      value={t.title}
                      onChange={(e) =>
                        updateTestimonial(i, "title", e.target.value)
                      }
                    />
                  </div>
                  <div>
                    <label className={labelClass}>Company</label>
                    <input
                      type="text"
                      className={inputClass}
                      placeholder="e.g., ABC Manufacturing"
                      value={t.company}
                      onChange={(e) =>
                        updateTestimonial(i, "company", e.target.value)
                      }
                    />
                  </div>
                </div>
                <div>
                  <label className={labelClass}>Quote</label>
                  <textarea
                    className={inputClass + " resize-y"}
                    rows={3}
                    placeholder="e.g., Coolmore Logistics has been an incredible partner. They always deliver on time and their communication is top-notch."
                    value={t.quote}
                    onChange={(e) =>
                      updateTestimonial(i, "quote", e.target.value)
                    }
                  />
                </div>
              </div>
            ))}
          </section>

          {/* Trusted By */}
          <section className="mb-10">
            <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b">
              Trusted By — Company Names
            </h2>
            <p className="text-sm text-gray-500 mb-4">
              List the company names you want featured in the &quot;Trusted
              By&quot; section, separated by commas. These will show as a row of
              names/logos on the homepage.
            </p>
            <textarea
              className={inputClass + " resize-y"}
              rows={3}
              placeholder="e.g., FedEx Supply Chain, Procter & Gamble, International Paper, AutoZone, Nike"
              value={data.trustedBy}
              onChange={(e) =>
                setData((prev) => ({ ...prev, trustedBy: e.target.value }))
              }
            />
          </section>

          {/* Output */}
          <section className="border-t pt-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              Your Content
            </h2>
            <p className="text-sm text-gray-500 mb-4">
              Click the button below to copy your content. Then paste it to me
              and I&apos;ll build everything out.
            </p>
            <pre className="bg-gray-900 text-green-400 rounded-xl p-6 text-sm overflow-x-auto mb-4 max-h-64 overflow-y-auto">
              {JSON.stringify(data, null, 2)}
            </pre>
            <button
              onClick={handleCopy}
              className="w-full bg-blue-600 text-white px-6 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors"
            >
              {copied ? "Copied!" : "Copy Content"}
            </button>
          </section>
        </div>
      </div>
    </div>
  );
}
