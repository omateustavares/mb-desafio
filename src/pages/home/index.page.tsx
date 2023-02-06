import { NextSeo } from "next-seo";
import { Container, Heading, Hero, Text } from "../../styles/home/page.styles";
import logoMb from "../../assets/logo.png";
import Image from "next/image";
import { ANIMATION } from "../../styles/home/animations";
import { useRouter } from "next/router";
import Button from "../../components/Button";
import { api } from "../../lib/axios";
import { AxiosError } from "axios";
import { useForm } from "react-hook-form";

type RegisterFormData = {
  name: string;
};

export default function Home() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormData>({});

  function handleGoToPage() {
    router.push("/events");
  }

  return (
    <>
      <NextSeo title="Tela inicial de seja bem-vindo da mb.eventos" />
      <Container>
        <Hero
          variants={ANIMATION}
          initial="unMounted"
          animate="mounted"
          exit="unMounted"
          transition={{ duration: 1.5 }}
        >
          <Image
            src={logoMb}
            width={300}
            quality={100}
            priority
            alt="Logo da mb eventos"
          />
          <Heading>Seja bem-vindo</Heading>

          <Text>Busque eventos e adquira o seu ingresso</Text>

          <Button variant="secondary" onClick={handleGoToPage}>
            Vamos lá!
          </Button>
        </Hero>
      </Container>
    </>
  );
}
