export interface LabelProps {
  selected: boolean;
  color: string;
}

export interface Tab {
  title: string;
  color: string;
  Component: React.ReactNode;
}

export interface TabsProps {
  tabs: Tab[];
  activeTabTitle: string;
  onSelectTab: (title: string) => void;
  componentProps: {
    [key: string]: unknown;
  };
}
