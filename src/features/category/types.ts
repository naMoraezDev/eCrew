import { DefaultProps } from "@/types/common";

export interface CategoryProps extends DefaultProps {
  page?: number;
  term?: string;
  category?: string;
}
