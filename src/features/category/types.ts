import { DefaultProps } from "@/types/common";

export interface CategoryProps extends DefaultProps {
  term?: string;
  after?: string;
  before?: string;
  category?: string;
}
