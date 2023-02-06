import { CONTAINER_ANIMATION, NAVS_ANIMATION } from "./animations";
import { AnimatedLeftNav, AnimatedRightNav, Wrapper } from "./styles";
import Button from "../Button";
import Image from "next/image";
import logoMb from "../../assets/logo.png";
import { NextSeo } from "next-seo";
import { useRouter } from "next/router";
import { signIn, signOut, useSession } from "next-auth/react";
import { useEffect } from "react";

type Props = {
  name?: string | null | undefined;
};

const Header = ({ name }: Props) => {
  const session = useSession();

  const isSignedId = session.status === "authenticated";

  const router = useRouter();
  const hendleGoToPage = (type: "admin" | "home") => {
    if (type === "admin") {
      router.push("/admin");
    }
    router.push("/events");
  };

  const handleSession = () => {
    if (isSignedId) signOut();
    signIn();
  };

  const handleGoToPageMyEvents = () => {
    router.push(`/user/my-events?email=${session.data?.user.email}`);
  };

  return (
    <>
      <NextSeo title="Tela inicial da mb.eventos" />

      <AnimatedLeftNav
        variants={CONTAINER_ANIMATION}
        initial="unMounted"
        animate="mounted"
        exit="unMounted"
      >
        <Wrapper>
          <AnimatedLeftNav variants={NAVS_ANIMATION}>
            <Image
              src={logoMb}
              width={250}
              quality={100}
              priority
              alt="Logo da mb eventos"
              onClick={() => hendleGoToPage("home")}
            />
          </AnimatedLeftNav>

          <AnimatedRightNav variants={NAVS_ANIMATION}>
            {isSignedId && (
              <Button variant="adding" onClick={handleGoToPageMyEvents}>
                Meus Eventos
              </Button>
            )}
            <Button variant="adding" onClick={handleSession}>
              {isSignedId ? "Logout" : "Login com Google"}
            </Button>
            <Button variant="secondary" onClick={() => hendleGoToPage("admin")}>
              Administrador
            </Button>
          </AnimatedRightNav>
        </Wrapper>
      </AnimatedLeftNav>
    </>
  );
};

export default Header;
