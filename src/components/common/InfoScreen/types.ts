export interface InfoScreenType {
  title?: string;
  bgColor?: string;
  imageUrl: string;
  subtitle?: string;
  buttonName?: string;
  onButtonClick(): void;
}
