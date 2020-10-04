export interface InfoScreenType {
  title?: string;
  subtitle?: string;
  bgColor?: string;
  buttonName?: string;
  imageUrl: string;
  onButtonClick(): void;
}
