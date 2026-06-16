import { ServiceAreaMap } from "@/components/ServiceAreaMap";

export function ContactMap() {
  return (
    <section className="border-t border-primary/10 bg-neutral section-padding">
      <div className="container-narrow">
        <ServiceAreaMap heading="Service Area Map" />
      </div>
    </section>
  );
}
