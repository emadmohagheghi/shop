export type DialogProps =  & {
  isOpen: boolean;
  toggle: () => void;
  children: React.ReactNode;
  title?: string;
  showCloseButton?: boolean;
  preventClose?: boolean;
  maxWidth?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "full";
  showHeader?: boolean;
  showFooter?: boolean;
  footer?: React.ReactNode;
  onClose?: () => void;
};
