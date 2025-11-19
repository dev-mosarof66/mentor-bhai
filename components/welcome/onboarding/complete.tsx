const OnboardingComplete = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      {/* Congratulations Message */}
      <div>
        <h1 className="text-3xl font-bold text-green-600 mb-4 text-center">
          🎉 You&apos;re All Set!
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Congratulations! Your profile is ready. You can now continue to learn,
          practice, and explore your English learning journey.
        </p>
      </div>
    </div>
  );
};

export default OnboardingComplete;
