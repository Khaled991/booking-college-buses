import { useState } from 'react';

export interface StepHandler {
  step: number;
  nextStep: () => void;
  previousStep: () => void;
}

export default function useSteps(initialStep: number): StepHandler {
  const [step, setStep] = useState<number>(initialStep);

  const nextStep = () => setStep(step + 1);
  const previousStep = () => {
    if (step - 1 > 0) setStep(step - 1);
  };

  return { step, nextStep, previousStep };
}
