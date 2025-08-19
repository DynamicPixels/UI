// DynamicUI - A comprehensive React UI library by DynamicPixels
// DynamicUI - A comprehensive React UI library by DynamicPixels
// Main exports for the library

// Working Components
export { default as Button } from "./components/Button";
export type { ButtonProps } from "./components/Button";

export { default as Input } from "./components/Input";
export type { InputProps } from "./components/Input";

export { default as Card } from "./components/Card";
export type { CardProps, CardMetaProps } from "./components/Card";

export { default as Badge, BadgeStatus, BadgeRibbon } from "./components/Badge";
export type {
  BadgeProps,
  BadgeStatusProps,
  BadgeRibbonProps,
} from "./components/Badge";

export { default as Switch } from "./components/Switch";
export type { SwitchProps } from "./components/Switch";

export { default as CheckBox } from "./components/CheckBox";
export type { CheckBoxProps } from "./components/CheckBox";

export { default as Select } from "./components/Select";
export type { SelectProps, SelectOption } from "./components/Select";

export { default as Modal } from "./components/Modal";
export type { ModalProps } from "./components/Modal";

export { default as Table } from "./components/Table";
export type { TableProps, TableColumn } from "./components/Table";

export { default as Tabs } from "./components/Tabs";
export type { TabsProps, Tab } from "./components/Tabs";

export { default as Tag } from "./components/Tag";
export type { TagProps } from "./components/Tag";

export { default as Progress } from "./components/Progress";
export type { ProgressProps } from "./components/Progress";

export { default as Divider } from "./components/Divider";
export type { DividerProps } from "./components/Divider";

export { default as Anchor } from "./components/Anchor";
export type { AnchorProps } from "./components/Anchor";

export { default as Breadcrumb } from "./components/Breadcrumb";
export type { BreadcrumbProps, BreadcrumbItem } from "./components/Breadcrumb";

export { default as Cascader } from "./components/Cascader";
export type { CascaderProps, CascaderOption } from "./components/Cascader";

export { default as Dropdown } from "./components/Dropdown";
export type { DropdownProps, DropdownItem } from "./components/Dropdown";

export { default as Empty } from "./components/Empty";
export type { EmptyProps } from "./components/Empty";

export { default as Navigation } from "./components/Navigation";
export type { NavigationProps } from "./components/Navigation";

export { default as Slider } from "./components/Slider";
export type { SliderProps } from "./components/Slider";

export { default as Spin } from "./components/Spin";
export type { SpinProps } from "./components/Spin";

export { default as Steps } from "./components/Steps";
export type {
  StepsProps,
  Step,
  StepStatus,
  StepType,
  StepDirection,
  StepSize,
} from "./components/Steps";

export { default as Timeline } from "./components/Timeline";
export type {
  TimelineProps,
  TimelineItem,
  TimelineColor,
  TimelineType,
} from "./components/Timeline";

export { default as Transfer } from "./components/Transfer";
export type { TransferProps, TransferItem } from "./components/Transfer";

export { default as UploadArea } from "./components/UploadArea";
export type { UploadAreaProps, UploadFile } from "./components/UploadArea";

// Icons
export {
  MailIcon,
  LockIcon,
  XIcon,
  SearchOutlined,
  LeftOutlined,
  RightOutlined,
  DeleteOutlined,
  InboxOutlined,
  PaperClipOutlined,
} from "./components/Icons";

// Utilities
export { cn, combineClasses } from "./utils/cn";

// Version
export const version = "1.0.0";
