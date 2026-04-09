import { cn } from '@/utils/cn'

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}
interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {}
interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {}
interface CardTitleProps extends React.HTMLAttributes<HTMLDivElement> {}
interface CardDescriptionProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Card = ({ className, ...props }: CardProps) => (
  <div className={cn("rounded-lg border bg-card shadow-sm", className)} {...props} />
)

export const CardHeader = ({ className, ...props }: CardHeaderProps) => (
  <div className={cn("flex flex-col space-y-1.5 p-6", className)} {...props} />
)

export const CardTitle = ({ className, ...props }: CardTitleProps) => (
  <h3 className={cn("font-semibold leading-none tracking-tight", className)} {...props} />
)

export const CardDescription = ({ className, ...props }: CardDescriptionProps) => (
  <p className={cn("text-sm text-muted-foreground", className)} {...props} />
)

export const CardContent = ({ className, ...props }: CardContentProps) => (
  <div className={cn("p-6 pt-0", className)} {...props} />
)

