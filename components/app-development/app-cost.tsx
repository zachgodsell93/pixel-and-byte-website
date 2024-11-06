import React, { useState } from "react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

type Props = {};

// App Complexity:
// Basic App: (Simple UI, limited screens, core functionality) - Consider a base cost for this.
// Mid-Level App: (More screens, increased complexity, database integration) - Have a multiplier or higher base cost.
// Complex App: (Custom UI/UX, advanced features, third-party integrations) - Significant multiplier or custom quote only

// Platforms:
// iOS (Native): Cost factor (potentially higher due to development environment)
// Android (Native): Cost factor
// Cross-Platform (e.g., React Native, Flutter): Cost factor (potentially lower, but note limitations)
// Number of Screens: A significant cost driver - include ranges (e.g., 1-3, 4-7, 8+)
// Database Integration: (Essential for most apps) - Options for basic or more advanced database needs.

// User Engagement & Growth
// User Profiles: Allowing users to create and manage profiles.
// Messaging/Chat: In-app communication between users or with support.
// Ratings/Reviews: Enable users to rate and review the app or its content.
// Referral Systems: Incentivize users to invite others.

// Monetization (If Applicable)
// Subscription Models: Integration with payment gateways for recurring subscriptions.
// Ad Integration: Include options for different ad networks.

// Advanced Features
// Artificial Intelligence (AI): If you offer AI-powered features (e.g., chatbots, recommendations).
// Augmented Reality (AR) / Virtual Reality (VR): For immersive experiences.
// Internet of Things (IoT) Integration: Connecting the app to devices.
// Accessibility Features: Important for inclusivity (e.g., screen readers, voice control).

// Don't Forget
// Admin Panel/CMS: For managing app content and users.
// Design Complexity: Basic, custom, or use of existing templates.
// Maintenance & Support: Offer packages for ongoing support and updates.

// Important Notes:
// Transparency: Be clear that the form provides estimates, and final costs may vary.
// Flexibility: Allow users to provide additional details or request a custom quote.
// User Experience: Make the form easy to use and understand.

export default function AppCost({}: Props) {
  const [screen, setScreen] = useState(1);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [wantReachOut, setWantReachOut] = useState(false);
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);

  const handleFeatureToggle = (feature: string) => {
    setSelectedFeatures((prev) =>
      prev.includes(feature)
        ? prev.filter((f) => f !== feature)
        : [...prev, feature]
    );
  };

  return (
    <div>
      {screen === 1 && (
        <AppCostFormScreen1
          selectedFeatures={selectedFeatures}
          handleFeatureToggle={handleFeatureToggle}
        />
      )}
      {screen === 2 && <AppCostFormScreen2 />}
      {screen === 3 && (
        <AppCostFormScreenLast
          name={name}
          setName={setName}
          email={email}
          setEmail={setEmail}
          mobile={mobile}
          setMobile={setMobile}
          wantReachOut={wantReachOut}
          setWantReachOut={setWantReachOut}
        />
      )}
    </div>
  );
}

const AppCostFormScreen1 = ({ selectedFeatures, handleFeatureToggle }: any) => {
  const features = [
    { name: "Basic App", cost: 3000 },
    { name: "Mid-Level App", cost: 6000 },
    { name: "Complex App", cost: 10000 },
  ];

  const platforms = [
    { name: "iOS (Native)", cost: 1 },
    { name: "Android (Native)", cost: 1 },
    { name: "Cross-Platform (both Android and iOS)", cost: 1 },
  ];
  return (
    <>
      <h4 className="text-lg md:text-2xl text-neutral-600 dark:text-neutral-100 font-bold text-center mb-8">
        Step 1: App Complexity
      </h4>
      <div className="space-y-4">
        <div>
          <p className="text-sm font-bold text-neutral-600 dark:text-neutral-400 mb-2">
            Select App Complexity:
          </p>
          <div className="grid grid-cols-3 gap-2">
            {features.map((feature) => (
              <Button
                key={feature.name}
                variant="outline"
                className={cn(
                  selectedFeatures.includes(feature.name)
                    ? "bg-pb-orange text-white"
                    : "bg-white text-black",
                  "hover:bg-pb-blue hover:text-white"
                )}
                onClick={() => handleFeatureToggle(feature.name)}
              >
                {feature.name}
              </Button>
            ))}
          </div>
        </div>
        <div className="flex flex-col">
          <label className="text-sm mb-4 font-bold text-neutral-600 dark:text-neutral-400">
            Expected Number of Users(in the first 6 months)
          </label>
          <select className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-neutral-800 text-black dark:text-white">
            <option value="0-1000">0-1000</option>
            <option value="1001-5000">1001-5000</option>
            <option value="5001-10000">5001-10000</option>
            <option value="10000+">10000+</option>
          </select>
        </div>
      </div>
    </>
  );
};

const AppCostFormScreen2 = () => {
  return (
    <>
      <h4 className="text-lg md:text-2xl text-neutral-600 dark:text-neutral-100 font-bold text-center mb-8">
        Step 2: Features
      </h4>
      <div className="space-y-4"></div>;
    </>
  );
};

const AppCostFormScreenLast = ({
  name,
  setName,
  email,
  setEmail,
  mobile,
  setMobile,
  wantReachOut,
  setWantReachOut,
}: any) => {
  return (
    <>
      <h4 className="text-lg md:text-2xl text-neutral-600 dark:text-neutral-100 font-bold text-center mb-8">
        Free App Cost Estimate
      </h4>
      <div className="space-y-4">
        <div className="flex flex-col">
          <label className="text-sm mb-4 font-bold text-neutral-600 dark:text-neutral-400">
            Expected Number of Users(in the first 6 months)
          </label>
          <select className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-neutral-800 text-black dark:text-white">
            <option value="0-1000">0-1000</option>
            <option value="1001-5000">1001-5000</option>
            <option value="5001-10000">5001-10000</option>
            <option value="10000+">10000+</option>
          </select>
        </div>
        <div className="flex flex-col gap-y-4">
          <label className="text-sm mb-0 font-bold text-neutral-600 dark:text-neutral-400">
            Your Details
          </label>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-neutral-800 text-black dark:text-white"
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-neutral-800 text-black dark:text-white"
          />
          <input
            type="tel"
            placeholder="Mobile Number (optional)"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-neutral-800 text-black dark:text-white"
          />
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="wantReachOut"
              checked={wantReachOut}
              onChange={(e) => setWantReachOut(e.target.checked)}
              className="form-checkbox"
            />
            <label
              htmlFor="wantReachOut"
              className="text-sm text-neutral-600 dark:text-neutral-400"
            >
              Do you want someone to reach out?
            </label>
          </div>
        </div>
      </div>
      ;
    </>
  );
};
