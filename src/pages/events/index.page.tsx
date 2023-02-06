/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useCallback, useEffect, useState } from "react";
import CardEvent from "../../components/CardEvent";
import Header from "../../components/Header";
import { useEvent } from "../../hooks/Events";
import { EventData } from "../../interface/event";

import { Container, Content } from "../../styles/events/page.styles";

export default function index() {
  const [eventsData, setEventsData] = useState<EventData[]>([]);

  const { loadEvent } = useEvent();

  const loadData = useCallback(async () => {
    const data = await loadEvent();

    setEventsData(data);
  }, []);

  useEffect(() => {
    loadData();
  }, [loadData]);

  return (
    <>
      <Header />
      <Container>
        <Content>
          <CardEvent data={eventsData} />
        </Content>
      </Container>
    </>
  );
}
