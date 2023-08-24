export interface InterfaceTextVariant {
  hidden: {
    y: number;
    opacity: number;
  };
  show: {
    y: number;
    opacity: number;
    transition: {
      type: string;
      duration: number;
      delay: string | number;
    };
  };
}

export interface interfaceFadeIn {
  hidden: {
    x: number | string;
    y: number | string;
    opacity: number;
  };
  show: {
    x: number;
    y: number;
    opacity: number;
    transition: {
      type: string | number;
      delay: string | number;
      duration: string | number;
      ease: string;
    };
  };
}

export interface interfaceZoomIn {
  hidden: {
    scale: number;
    opacity: number;
  };
  show: {
    scale: number;
    opacity: number;
    transition: {
      type: string;
      delay: string | number;
      duration: string | number;
      ease: string;
    };
  };
}

export interface interfaceSlideIn {
  hidden: {
    x: string | number;
    y: string | number;
  };
  show: {
    x: string | number;
    y: string | number;
    transition: {
      type: string | number;
      delay: string | number;
      duration: string | number;
      ease: string | string;
    };
  };
}

export interface interfaceStaggerContainer {
  hidden: object;
  show: {
    transition: {
      staggerChildren: unknown;
      delayChildren: unknown;
    };
  };
}
