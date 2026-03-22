import { motion } from "framer-motion";
import { Truck, Wrench, BatteryCharging, KeyRound, Route, Package } from "lucide-react";

const services = [
  {
    icon: Truck,
    title: "Reboque de carros e motocicletas",
    desc: "Atendimento rápido e seguro para remoção de carros e motos em situações de pane, acidente ou emergência.",
  },
  {
    icon: Truck,
    title: "Reboque de veículos especiais",
    desc: "Transporte técnico para veículos especiais, utilitários e operações que exigem equipamento específico.",
  },
  {
    icon: KeyRound,
    title: "Serviços para perda de chave do veículo",
    desc: "Suporte especializado em ocorrências com perda de chave para você retomar sua rotina com segurança.",
  },
  {
    icon: BatteryCharging,
    title: "Substituição de bateria",
    desc: "Troca de bateria no local com agilidade para restabelecer o funcionamento do veículo com segurança.",
  },
  {
    icon: Route,
    title: "Transporte de carga de longa distância",
    desc: "Serviço confiável para deslocamentos de carga em trajetos longos com planejamento e suporte profissional.",
  },
  {
    icon: Package,
    title: "Transporte local de carga",
    desc: "Remoção e transporte de cargas na cidade e arredores com atendimento rápido e compromisso com prazos.",
  },
  {
    icon: Wrench,
    title: "Troca de pneus",
    desc: "Atendimento no local para troca de pneus em ocorrências emergenciais, com foco em segurança e agilidade.",
  },
];

const ServicosSection = () => (
  <section id="servicos" className="py-20 md:py-28 bg-background scroll-mt-28">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-2xl mx-auto mb-14"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Nossos <span className="text-gradient">Serviços</span>
        </h2>
        <p className="text-muted-foreground text-lg">
          Soluções completas de reboque e socorro mecânico para atender com rapidez em Volta Redonda, Barra Mansa e região.
        </p>
      </motion.div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="p-6 rounded-xl bg-card border border-border card-hover work-accent relative group"
          >
            <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4 relative">
              <service.icon className="w-6 h-6 text-accent relative z-10" />
              <div className="absolute inset-0 bg-accent/20 blur-md rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
            <p className="text-muted-foreground text-sm">{service.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicosSection;
