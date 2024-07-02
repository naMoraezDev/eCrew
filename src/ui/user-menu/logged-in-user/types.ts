import { DefaultProps } from "@/types/common";

export interface LoggedInUserProps extends DefaultProps {
  email: string;
  photoURL: string;
  displayName: string;
}
