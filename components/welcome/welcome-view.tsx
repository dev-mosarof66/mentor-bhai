/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import WelcomeScreen from "./onboarding/welcome";
import LearningOutline from "./onboarding/learning-outline";
import UserEnglishLevel from "./onboarding/current-level";
import OnboardingComplete from "./onboarding/complete";
import axios from "axios";
import { authClient } from "@/lib/auth-client";
import { Spinner } from "../ui/spinner";

export default function Onboarding() {
  const { data } = authClient.useSession();
  const [currentStep, setCurrentStep] = useState(1);
  const router = useRouter();
  const [level, setLevel] = useState<string | null>("basic");
  const [preference, setPreference] = useState<string | null>("Academic");
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async () => {
    try {
      if (!data?.session?.userId) {
        router.push("/auth");
        return;
      }

      const finalLevel = level ?? "basic";
      const finalPreference = preference ?? "academic";
      setLoading(false);
      const res = await axios.post(
        `/api/user-info?id=${encodeURIComponent(data.session.userId)}`,
        {
          level: finalLevel.toLowerCase(),
          preference: finalPreference.toLowerCase(),
        }
      );

      console.log("Onboarding Saved:", res.data);
      setLoading(false);
      router.push("/dashboard");
    } catch (error: any) {
      console.log("Onboarding Error:", error);

      if (error?.response?.status === 500) {
        router.push("/not-found");
      } else {
        router.push("/dashboard");
      }
    }
  };

  const handleNext = async () => {
    if (currentStep < 4) {
      setCurrentStep((prev) => prev + 1);
    } else {
      await handleSubmit();
    }
  };

  const handlePrev = async () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleSkip = async () => {
    router.push("/dashboard");
  };

  return (
    <div className="fixed backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-secondary/10 text-foregorund rounded-xl shadow-xl max-w-lg w-full p-6 flex flex-col gap-6 relative">
        <div className="w-full flex justify-end absolute top-4 right-4">
          <button
            onClick={handleSkip}
            className="text-primary hover:underline underline-offset-1 cursor-pointer transition-all duration-300 hidden"
          >
            Skip
          </button>
        </div>

        {/* content area  */}
        <div className="w-full py-4">
          {currentStep === 1 ? (
            <WelcomeScreen />
          ) : currentStep === 2 ? (
            <LearningOutline
              preference={preference}
              setPreference={setPreference}
            />
          ) : currentStep === 3 ? (
            <UserEnglishLevel level={level} setLevel={setLevel} />
          ) : (
            <OnboardingComplete />
          )}
        </div>

        <div className="flex justify-between items-center">
          <Button
            onClick={handlePrev}
            variant={"outline"}
            disabled={currentStep === 1}
            className="text-foreground"
          >
            Prev
          </Button>
          <p className="text-sm">Step {currentStep} of 4</p>
          <Button onClick={handleNext} className="text-foreground">
            {currentStep === 4 ? (
              <>{loading ? <Spinner /> : "Get Started"}</>
            ) : (
              "Next"
            )}
          </Button>
        </div>
      </div>
    </div>
  );
}
