type PageQuickAnswerProps = {
  children: React.ReactNode;
  /** hero = white text on primary background; light = primary text on neutral/white */
  variant?: "hero" | "light";
  className?: string;
};

export function PageQuickAnswer({
  children,
  variant = "hero",
  className,
}: PageQuickAnswerProps) {
  const variantClass =
    variant === "hero"
      ? "mt-4 max-w-3xl text-xl font-semibold leading-snug text-white sm:text-2xl"
      : "mt-4 max-w-3xl text-xl font-semibold leading-snug text-primary sm:text-2xl";

  return <p className={className ?? variantClass}>{children}</p>;
}
