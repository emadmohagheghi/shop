export type Accordion = {
  id: number;
  title: string;
  content: React.ReactNode | string;
};
export type AccordionProps = {
  data: Accordion[];
};
