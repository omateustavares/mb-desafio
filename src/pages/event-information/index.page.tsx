import { AnimatePresence } from "framer-motion";
import Router, { useRouter } from "next/router";
import React, { useCallback, useEffect, useState } from "react";
import { AiOutlineCalendar } from "react-icons/ai";
import { MdLocationOn, MdLocationPin } from "react-icons/md";

import {
  CardPayment,
  Container,
  Content,
  Date,
  DateAndTime,
  Description,
  DescriptionContent,
  Informations,
  Local,
  LocalContent,
  Quantity,
  Resume,
  Title,
} from "../../styles/event-information/page.styles";

import { useEvent } from "../../hooks/Events";
import { EventData, EventDataView } from "../../interface/event";
import Button from "../../components/Button";
import { prisma } from "../../lib/prisma";
import { GetServerSideProps } from "next";
import { useSession, signIn } from "next-auth/react";
import { api } from "../../lib/axios";
import { sign } from "crypto";

export default function EventInformation({
  id,
  title,
  description,
  date_and_time,
  additional_information,
  local,
  eventId,
}: EventDataView) {
  const { data, status } = useSession();
  const [counter, setCounter] = useState(0);
  const { handleParticipate } = useEvent();
  const router = useRouter();

  const isSignedId = status === "authenticated";

  const increase = () => {
    setCounter((count) => count + 1);
  };

  const decrease = () => {
    if (counter > 0) {
      setCounter((count) => count - 1);
    }
  };

  const handleGoToPage = async () => {
    if (!isSignedId) signIn();
    handleParticipate({ email_user: data?.user.email, id_event: eventId });
  };

  const handleBackToPage = async () => {
    router.push("/events");
  };

  return (
    <>
      <Container>
        <Content>
          <div>
            <Title>{title}</Title>

            <DescriptionContent>
              <Title>Descrição</Title>
              <Description>{description}</Description>
            </DescriptionContent>

            <Title>
              <AiOutlineCalendar />
              Data e Hora
            </Title>
            <DateAndTime>
              <Date>{description}</Date>
            </DateAndTime>

            <Title>
              <MdLocationOn />
              Local
            </Title>
            <LocalContent>
              <Local>{local}</Local>
            </LocalContent>

            <Title>Informações adicionais</Title>
            <Informations>
              <Resume>
                {additional_information
                  ? additional_information
                  : "Sem informações adicionais"}
              </Resume>
            </Informations>
          </div>
          <CardPayment>
            <Title>Quantidade</Title>
            <Quantity>
              <Button variant="secondary" onClick={decrease}>
                -
              </Button>
              <h1>{counter}</h1>
              <Button variant="secondary" onClick={increase}>
                +
              </Button>
            </Quantity>

            <Button
              disabled={counter === 0}
              variant="secondary"
              onClick={handleGoToPage}
            >
              Participar
            </Button>
            <Button variant="secondary" onClick={handleBackToPage}>
              Voltar
            </Button>
          </CardPayment>
        </Content>
      </Container>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const { eventId } = query;

  const user = await prisma.events.findUnique({
    where: {
      id: String(eventId),
    },
  });

  return {
    props: {
      id: user?.id,
      title: user?.title,
      description: user?.description,
      local: user?.local,
      additional_information: user?.additional_information,
      date_and_time: String(user?.date_and_time),
      eventId,
    },
  };
};
