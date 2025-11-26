export enum Page {
  Home = 'home',
  Insights = 'insights',
  Trends = 'trends',
  Membership = 'membership',
  Guide = 'guide'
}

export interface NavItem {
  label: string;
  page: Page;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export interface TrendItem {
  tag: string;
  tagColor: string; // Tailwind color class e.g., 'text-red-400'
  tagBg: string;   // Tailwind bg class e.g., 'bg-red-900/30'
  title: string;
  description: string;
}