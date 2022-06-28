interface SubmitOnboardingInput {
  userName: string;
}

type submitOnboarding = (input: SubmitOnboardingInput) => string;

const submitSingleOnboarding: submitOnboarding = ({ userName }) =>
  `Submitted single onbording for ${userName}`;

const submitJointOnboarding: submitOnboarding = ({ userName }) =>
  `Submitted joint onbording for ${userName}`;

const submitRecoveryOnboarding: submitOnboarding = ({ userName }) =>
  `Submitted recovery onbording for ${userName}`;

enum OnboardingType {
  SINGLE = "SINGLE",
  JOINT = "JOINT",
  RECOVERY = "RECOVERY",
}

const submitOnboardingFactory = (onboardingType: OnboardingType) => {
  switch (onboardingType) {
    case OnboardingType.SINGLE:
      return submitSingleOnboarding;
    case OnboardingType.JOINT:
      return submitJointOnboarding;
    case OnboardingType.RECOVERY:
      return submitRecoveryOnboarding;
    default:
      throw new Error();
  }
};

submitOnboardingFactory(OnboardingType.SINGLE)("Kamil");
