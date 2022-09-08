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
    <SignUpStep2 previousStep={previousStep} />,
    <SignUpStep1 nextStep={nextStep} />,
  ][index];
};
export default signUpSteps;
