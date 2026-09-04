import * as React from "react"
import * as SwitchPrimitives from "@radix-ui/react-switch"

import { cn } from "@/lib/utils"

/**
 * Size variants. The default `md` matches what shadcn ships; `sm` and
 * `lg` are needed by the footer's theme toggle (which uses `lg` for a
 * generous hit-target). Defining the dimensions as data rather than
 * CSS scale avoids the misalignment that `transform: scale()` causes
 * with Radix's `translate-x` thumb animation.
 */
const SWITCH_SIZES = {
  sm: { root: "h-5 w-9", thumb: "h-4 w-4 data-[state=checked]:translate-x-4" },
  md: { root: "h-6 w-11", thumb: "h-5 w-5 data-[state=checked]:translate-x-5" },
  lg: { root: "h-8 w-14", thumb: "h-7 w-7 data-[state=checked]:translate-x-6" },
} as const

type SwitchSize = keyof typeof SWITCH_SIZES

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root> & {
    size?: SwitchSize
  }
>(({ className, size = "md", ...props }, ref) => {
  const dims = SWITCH_SIZES[size]
  return (
    <SwitchPrimitives.Root
      className={cn(
        "peer inline-flex shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",
        dims.root,
        className,
      )}
      {...props}
      ref={ref}
    >
      <SwitchPrimitives.Thumb
        className={cn(
          // `bg-white!` (Tailwind v4 important suffix) forces the thumb
          // to stay white in BOTH light and dark mode. Without it the
          // shadcn default `bg-background` matches the track in dark
          // mode and the thumb vanishes into the rail.
          "pointer-events-none block translate-x-0 rounded-full bg-white! shadow-lg ring-0 transition-transform",
          dims.thumb,
        )}
      />
    </SwitchPrimitives.Root>
  )
})
Switch.displayName = SwitchPrimitives.Root.displayName

export { Switch }
