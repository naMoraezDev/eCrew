export interface SignUpFormProps {
  setIsLoading: (isLoading: boolean) => void;
  setMethod: (method: "sign-in" | "sign-up") => void;
}
