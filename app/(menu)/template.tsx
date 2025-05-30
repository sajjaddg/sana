import PageTransition from "../components/Curve/page-transition"

export default function MenuTemplate({ children }: { children: React.ReactNode }) {
  return <PageTransition>{children}</PageTransition>
}
