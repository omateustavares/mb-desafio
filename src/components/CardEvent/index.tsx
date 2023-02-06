import React from "react";
import Button from "../Button";
import { CARDS_ANIMATION, CONTAINER_ANIMATION } from "./animation";
import { Card, Container, DateAndTime, Description, Title } from "./styles";
import { AiOutlineCalendar } from "react-icons/ai";
import { useRouter } from "next/router";
import { Content } from "../../../src/styles/events/page.styles";
import { DEFAULT_TRANSITION } from "../../constants";
import { EventData } from "../../interface/event";
import { datetimeUTC } from "../../utils/formatDateTime";

type PropsData = {
  data: EventData[];
};

const CardEvent = ({ data }: PropsData) => {
  const router = useRouter();

  const handleGoToPage = (id: string | undefined) => {
    router.push(`/event-information?eventId=${id}`);
  };

  return (
    <Container
      variants={CONTAINER_ANIMATION}
      initial="unMounted"
      animate="mounted"
      exit="unMounted"
    >
      <Content>
        {data.map((item) => (
          <Card
            key={item.id}
            variants={CARDS_ANIMATION}
            transition={DEFAULT_TRANSITION}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.8 }}
          >
            <div>
              <Title>{item.title}</Title>
              <DateAndTime>
                <AiOutlineCalendar color="#fff" />
                <span>{datetimeUTC(item.date_and_time)}</span>
              </DateAndTime>
              <Description>{item.description}</Description>
            </div>

            <Button variant="secondary" onClick={() => handleGoToPage(item.id)}>
              Informações
            </Button>
          </Card>
        ))}
      </Content>
    </Container>
  );
};

export default CardEvent;
