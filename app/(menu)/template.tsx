import PageTransition from "../components/Curve/PageTransition"

export default function MenuTemplate({ children }: { children: React.ReactNode }) {
  return <PageTransition>{children}</PageTransition>
}
