import { StepHandler } from '../../../../../core/hook/use-steps';
import SignUpStep1 from './sign-up-step-1';
import SignUpStep2 from './sign-up-step-2/sign-up-step-2';

interface ISignUpStepsParams extends StepHandler {}

const signUpSteps = ({
  step,
  nextStep,
  previousStep,
}: ISignUpStepsParams): JSX.Element => {
  const index = step - 1;
  return [
    <SignUpStep1 nextStep={nextStep} />,
    <SignUpStep2 previousStep={previousStep} />,
  ][index];
};
export default signUpSteps;
