export interface SignInFormProps {
  setIsLoading: (isLoading: boolean) => void;
  setMethod: (method: "sign-in" | "sign-up") => void;
}
