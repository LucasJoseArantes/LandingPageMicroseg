import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const FadeSubTitle = (props) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // A animação acontece uma vez
    threshold: 0.1, // Quando 10% do componente estiver visível
  });

  return (
    <motion.div
      ref={ref} // Referência do Intersection Observer
      initial={{ opacity: 0, y: 50 }} // Começa invisível e deslocado para baixo
      animate={inView ? { opacity: 1, y: 0 } : {}} // Animação dispara quando inView é true
      transition={{ duration: 0.5 }} // Duração da animação
    >
      <h2>{props.text}</h2>
    </motion.div>
  );
};

export default FadeSubTitle;
