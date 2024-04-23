import React from "react";

interface IconWrapperProps {
  className?: string;
  icon: React.FC<React.HTMLAttributes<SVGElement>>;
}

export default function IconWrapper({ className, icon }: IconWrapperProps) {
  const Icon = icon;
  return <Icon className={`${className ? `${className} ` : ""}rs-icon`} />;
}
