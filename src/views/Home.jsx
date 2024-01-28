import Section from "../Components/Section";
import Canciones from "../Data";

export default function Home() {
  return (
    <div className="grid gap-y-8">
      <Section title="Trap" Canciones={Canciones} />
      <Section title="Pop" Canciones={Canciones} />
      <Section title="Reggaeton" Canciones={Canciones} />
    </div>
  );
}
