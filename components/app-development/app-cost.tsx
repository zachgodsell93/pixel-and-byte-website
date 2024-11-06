import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { Check, ChevronRight, Loader2 } from "lucide-react";
import { Separator } from "../ui/separator";

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

type Props = {
  steps: { id: number; title: string }[];
  currentStep: number;
  totalSteps: number;
  handleNextStep: () => void;
  selectedFeatures: { name: string; cost: number }[];
  setSelectedFeatures: React.Dispatch<
    React.SetStateAction<{ name: string; cost: number }[]>
  >;
  formData: {
    name: string;
    email: string;
    mobile: string;
    wantReachOut: boolean;
  };
  setFormData: React.Dispatch<
    React.SetStateAction<{
      name: string;
      email: string;
      mobile: string;
      wantReachOut: boolean;
    }>
  >;
  appCost: number | null;
};

export default function AppCost({
  steps,
  currentStep,
  totalSteps,
  handleNextStep,
  selectedFeatures,
  setSelectedFeatures,
  formData,
  setFormData,
  appCost,
}: Props) {
  const [selectedComplexity, setSelectedComplexity] = useState<{
    name: string;
    cost: number;
  }>({ name: "", cost: 0 });
  const handleComplexitySelect = (complexity: {
    name: string;
    cost: number;
  }) => {
    setSelectedComplexity(complexity);
    setSelectedFeatures((prev) => [...prev, complexity]);
  };
  const [selectedPlatform, setSelectedPlatform] = useState<{
    name: string;
    cost: number;
  }>({ name: "", cost: 0 });
  const handlePlatformSelect = (platform: { name: string; cost: number }) => {
    setSelectedPlatform(platform);
    setSelectedFeatures((prev) => [...prev, platform]);
  };

  const [selectedExpectedUsers, setSelectedExpectedUsers] = useState<{
    name: string;
    cost: number;
  }>({ name: "", cost: 0 });
  const handleExpectedUsersSelect = (expectedUsers: {
    name: string;
    cost: number;
  }) => {
    setSelectedExpectedUsers(expectedUsers);
    setSelectedFeatures((prev) => [...prev, expectedUsers]);
  };

  return (
    <div>
      <div className="w-full max-w-4xl mx-auto px-4">
        <div className="space-y-4">
          {/* Progress percentage and next step */}
          <div className="flex justify-between items-center text-sm text-neutral-600 dark:text-neutral-400">
            <span className="font-medium">
              {Math.round((currentStep / totalSteps) * 100)}% Complete
            </span>
            {currentStep < totalSteps && (
              <span>
                Next: {steps.find((step) => step.id === currentStep + 1)?.title}
              </span>
            )}
          </div>

          {/* Progress bar */}
          <div className="relative h-2 bg-neutral-200 dark:bg-neutral-800 rounded-full overflow-hidden">
            <div
              className="absolute left-0 top-0 h-full bg-pb-blue transition-all duration-300 rounded-full"
              style={{ width: `${(currentStep / totalSteps) * 100}%` }}
            />
          </div>

          {/* Steps indicators */}
          {/* <div className="relative flex justify-between">
            {steps.map((step) => (
              <div
                key={step.id}
                className="flex flex-col items-center"
                style={{ width: `${100 / steps.length}%` }}
              >
                <div
                  className={cn(
                    "w-8 h-8 rounded-full flex items-center justify-center mb-2",
                    step.id <= currentStep
                      ? "bg-pb-blue text-white"
                      : "bg-neutral-200 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400"
                  )}
                >
                  {step.id < currentStep ? (
                    <Check className="w-5 h-5" />
                  ) : (
                    <span className="text-sm">{step.id}</span>
                  )}
                </div>
                <span
                  className={cn(
                    "text-xs text-center",
                    step.id <= currentStep
                      ? "text-neutral-900 dark:text-neutral-100 font-medium"
                      : "text-neutral-500 dark:text-neutral-400"
                  )}
                >
                  {step.title}
                </span>
              </div>
            ))}
          </div> */}
        </div>
      </div>
      <Separator className="my-4  bg-pb-orange/40 rounded-full" />
      {currentStep === 1 && (
        <AppComplexityForm
          selectedComplexity={selectedComplexity}
          handleComplexitySelect={handleComplexitySelect}
          selectedPlatform={selectedPlatform}
          handlePlatformSelect={handlePlatformSelect}
          selectedExpectedUsers={selectedExpectedUsers}
          handleExpectedUsersSelect={handleExpectedUsersSelect}
        />
      )}
      {currentStep === 2 && (
        <UserEngagementForm
          selectedFeatures={selectedFeatures}
          setSelectedFeatures={setSelectedFeatures}
        />
      )}
      {currentStep === 3 && (
        <MonetizationForm
          selectedFeatures={selectedFeatures}
          setSelectedFeatures={setSelectedFeatures}
        />
      )}
      {currentStep === 4 && (
        <AdvancedFeaturesForm
          selectedFeatures={selectedFeatures}
          setSelectedFeatures={setSelectedFeatures}
        />
      )}
      {currentStep === 5 && (
        <AppCostFormScreenLast formData={formData} setFormData={setFormData} />
      )}
      {currentStep === 6 && <AppCostComplete appCost={appCost} />}
    </div>
  );
}

const AppComplexityForm = ({
  selectedComplexity,
  handleComplexitySelect,
  selectedPlatform,
  handlePlatformSelect,
  selectedExpectedUsers,
  handleExpectedUsersSelect,
}: any) => {
  const features = [
    { name: "Basic App", cost: 3000 },
    { name: "Mid-Level App", cost: 6000 },
    { name: "Complex App", cost: 10000 },
  ];

  const platforms = [
    { name: "iOS (Native)", cost: 1000 },
    { name: "Android (Native)", cost: 2000 },
    { name: "Cross-Platform (both Android and iOS)", cost: 0 },
  ];

  const expectedUsers = [
    { name: "0-1000", cost: 1000 },
    { name: "1001-5000", cost: 2000 },
    { name: "5001-10000", cost: 3000 },
    { name: "10000+", cost: 5000 },
  ];
  return (
    <>
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
                  selectedComplexity.name === feature.name
                    ? "border-pb-blue bg-pb-blue/10 shadow-md text-black"
                    : "bg-white text-black",
                  "hover:bg-pb-blue hover:text-white"
                )}
                onClick={() => handleComplexitySelect(feature)}
              >
                {feature.name}
              </Button>
            ))}
          </div>
        </div>
        <div>
          <p className="text-sm font-bold text-neutral-600 dark:text-neutral-400 mb-2">
            App Platform:
          </p>
          <div className="grid grid-cols-3 gap-2">
            {platforms.map((platform) => (
              <Button
                key={platform.name}
                variant="outline"
                className={cn(
                  selectedPlatform.name === platform.name
                    ? "border-pb-blue bg-pb-blue/10 shadow-md text-black"
                    : "bg-white text-black",
                  "hover:bg-pb-blue hover:text-white text-wrap py-6"
                )}
                onClick={() => handlePlatformSelect(platform)}
              >
                {platform.name}
              </Button>
            ))}
          </div>
        </div>
        <div className="flex flex-col">
          <label className="text-sm mb-4 font-bold text-neutral-600 dark:text-neutral-400">
            Expected Number of Users(in the first 6 months)
          </label>
          <select
            className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-neutral-800 text-black dark:text-white"
            onChange={(e) =>
              handleExpectedUsersSelect(
                JSON.parse(e.target.value) as {
                  name: string;
                  cost: number;
                }
              )
            }
          >
            {expectedUsers.map((user) => (
              <option key={user.name} value={JSON.stringify(user)}>
                {user.name}
              </option>
            ))}
          </select>
        </div>
      </div>
    </>
  );
};

// User Engagement & Growth
// User Profiles: Allowing users to create and manage profiles.
// Messaging/Chat: In-app communication between users or with support.
// Ratings/Reviews: Enable users to rate and review the app or its content.
// Referral Systems: Incentivize users to invite others.
const UserEngagementForm = ({
  selectedFeatures,
  setSelectedFeatures,
}: {
  selectedFeatures: { name: string; cost: number }[];
  setSelectedFeatures: React.Dispatch<
    React.SetStateAction<{ name: string; cost: number }[]>
  >;
}) => {
  const features = [
    { name: "User Profiles", cost: 3000 },
    { name: "Messaging/Chat", cost: 4000 },
    { name: "Ratings/Reviews", cost: 2000 },
    { name: "Referral Systems", cost: 2000 },
  ];

  const toggleFeature = (feature: { name: string; cost: number }) => {
    setSelectedFeatures((prev: { name: string; cost: number }[]) =>
      prev.some((f) => f.name === feature.name)
        ? prev.filter((f) => f.name !== feature.name)
        : [...prev, feature]
    );
  };

  return (
    <>
      <div className="space-y-4">
        <p className="text-lg font-bold text-neutral-600 dark:text-neutral-400 mb-2">
          User Engagement Features:
        </p>
        <div className="grid grid-cols-2 gap-4">
          {features.map((feature) => (
            <div
              key={feature.name}
              onClick={() => toggleFeature(feature)}
              className={cn(
                "flex items-center gap-3 p-4 rounded-lg cursor-pointer border transition-all",
                selectedFeatures.some((f) => f.name === feature.name)
                  ? "border-pb-blue bg-pb-blue/10"
                  : "border-gray-200 hover:border-pb-blue"
              )}
            >
              <div
                className={cn(
                  "w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all",
                  selectedFeatures.some((f) => f.name === feature.name)
                    ? "border-pb-blue bg-pb-blue"
                    : "border-gray-300"
                )}
              >
                {selectedFeatures.some((f) => f.name === feature.name) && (
                  <Check className="w-4 h-4 text-white" />
                )}
              </div>
              <span className="text-sm font-medium">{feature.name}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

// Monetization (If Applicable)
// Subscription Models: Integration with payment gateways for recurring subscriptions.
// Ad Integration: Include options for different ad networks.
const MonetizationForm = ({
  selectedFeatures,
  setSelectedFeatures,
}: {
  selectedFeatures: { name: string; cost: number }[];
  setSelectedFeatures: React.Dispatch<
    React.SetStateAction<{ name: string; cost: number }[]>
  >;
}) => {
  const features = [
    { name: "One-time Payment", cost: 1000 },
    { name: "Subscriptions", cost: 3000 },
    { name: "Ad Integration", cost: 3000 },
  ];

  const toggleFeature = (feature: { name: string; cost: number }) => {
    setSelectedFeatures((prev: { name: string; cost: number }[]) =>
      prev.some((f) => f.name === feature.name)
        ? prev.filter((f) => f.name !== feature.name)
        : [...prev, feature]
    );
  };

  return (
    <>
      <div className="space-y-4">
        <p className="text-lg font-bold text-neutral-600 dark:text-neutral-400 mb-2">
          Monetization Features:
        </p>
        <div className="grid grid-cols-2 gap-4">
          {features.map((feature) => (
            <div
              key={feature.name}
              onClick={() => toggleFeature(feature)}
              className={cn(
                "flex items-center gap-3 p-4 rounded-lg cursor-pointer border transition-all",
                selectedFeatures.some((f) => f.name === feature.name)
                  ? "border-pb-blue bg-pb-blue/10"
                  : "border-gray-200 hover:border-pb-blue"
              )}
            >
              <div
                className={cn(
                  "w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all",
                  selectedFeatures.some((f) => f.name === feature.name)
                    ? "border-pb-blue bg-pb-blue"
                    : "border-gray-300"
                )}
              >
                {selectedFeatures.some((f) => f.name === feature.name) && (
                  <Check className="w-4 h-4 text-white" />
                )}
              </div>
              <span className="text-sm font-medium">{feature.name}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

const AdvancedFeaturesForm = ({
  selectedFeatures,
  setSelectedFeatures,
}: {
  selectedFeatures: { name: string; cost: number }[];
  setSelectedFeatures: React.Dispatch<
    React.SetStateAction<{ name: string; cost: number }[]>
  >;
}) => {
  const features = [
    { name: "AI", cost: 3000 },
    { name: "AR/VR", cost: 2000 },
    { name: "IoT Integration", cost: 3000 },
    { name: "Accessibility Features", cost: 2000 },
  ];

  const toggleFeature = (feature: { name: string; cost: number }) => {
    setSelectedFeatures((prev: { name: string; cost: number }[]) =>
      prev.some((f) => f.name === feature.name)
        ? prev.filter((f) => f.name !== feature.name)
        : [...prev, feature]
    );
  };

  return (
    <>
      <div className="space-y-4">
        <p className="text-lg font-bold text-neutral-600 dark:text-neutral-400 mb-2">
          Advanced Features:
        </p>
        <div className="grid grid-cols-2 gap-4">
          {features.map((feature) => (
            <div
              key={feature.name}
              onClick={() => toggleFeature(feature)}
              className={cn(
                "flex items-center gap-3 p-4 rounded-lg cursor-pointer border transition-all",
                selectedFeatures.some((f) => f.name === feature.name)
                  ? "border-pb-blue bg-pb-blue/10"
                  : "border-gray-200 hover:border-pb-blue"
              )}
            >
              <div
                className={cn(
                  "w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all",
                  selectedFeatures.some((f) => f.name === feature.name)
                    ? "border-pb-blue bg-pb-blue"
                    : "border-gray-300"
                )}
              >
                {selectedFeatures.some((f) => f.name === feature.name) && (
                  <Check className="w-4 h-4 text-white" />
                )}
              </div>
              <span className="text-sm font-medium">{feature.name}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

const AppCostFormScreenLast = ({
  formData,
  setFormData,
}: {
  formData: {
    name: string;
    email: string;
    mobile: string;
    wantReachOut: boolean;
  };
  setFormData: React.Dispatch<React.SetStateAction<any>>;
}) => {
  return (
    <>
      <h4 className="text-lg md:text-2xl text-neutral-600 dark:text-neutral-100 font-bold text-center mb-8">
        Free App Cost Estimate
      </h4>
      <div className="space-y-4">
        <div className="flex flex-col gap-y-4">
          <label className="text-sm mb-0 font-bold text-neutral-600 dark:text-neutral-400">
            Your Details
          </label>
          <input
            type="text"
            placeholder="Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-neutral-800 text-black dark:text-white"
          />
          <input
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-neutral-800 text-black dark:text-white"
          />
          <input
            type="tel"
            placeholder="Mobile Number (optional)"
            value={formData.mobile}
            onChange={(e) =>
              setFormData({ ...formData, mobile: e.target.value })
            }
            className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-neutral-800 text-black dark:text-white"
          />
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="wantReachOut"
              checked={formData.wantReachOut}
              onChange={(e) =>
                setFormData({ ...formData, wantReachOut: e.target.checked })
              }
              className="form-checkbox"
            />
            <label
              htmlFor="wantReachOut"
              className="text-sm text-neutral-600 dark:text-neutral-400"
            >
              I would like someone to reach out to me
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

const AppCostComplete = ({ appCost }: { appCost: number | null }) => {
  const [minCost, setMinCost] = useState<number | null>(null);
  const [maxCost, setMaxCost] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);

  const calculateCost = (appCost: number) => {
    // Round min cost down to nearest 500
    const min = Math.floor((appCost - appCost * 0.123) / 500) * 500;
    // Round max cost up to nearest 500
    const max = Math.ceil((appCost + appCost * 0.134) / 500) * 500;

    setMinCost(min);
    setMaxCost(max);
  };

  useEffect(() => {
    if (appCost) {
      setLoading(true);
      calculateCost(appCost);
      setTimeout(() => {
        setLoading(false);
      }, 3000);
    }
  }, [appCost]);

  return (
    <>
      <div className="space-y-4 flex flex-col items-center">
        {loading ? (
          <Loader2 className="animate-spin" />
        ) : (
          <>
            <label>Your Estimated app cost is:</label>
            <label className="text-2xl font-bold">
              ${minCost?.toLocaleString()} - ${maxCost?.toLocaleString()}
            </label>
          </>
        )}
      </div>
    </>
  );
};
