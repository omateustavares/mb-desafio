/* eslint-disable react-hooks/exhaustive-deps */
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";
import Button from "../../../components/Button";
import { api } from "../../../lib/axios";
import { Actions, ButtonContent, Container, Table } from "../../../styles/user/my-events/page.styles";
import { EventData } from "../../../interface/event";
import { datetimeUTC } from "../../../utils/formatDateTime";
import { FiX } from "react-icons/fi";
import { useEvent } from "../../../hooks/Events";

type Props = {
  email: string;
};

export default function MyEvents({ email }: Props) {
  const [events, setEvents] = useState<EventData[]>([]);
  const router = useRouter();
  const { deleteEventUser } = useEvent();

  const loadEventUser = async () => {
    const result = await api.get("/event/user-event", {
      params: { email: email },
    });

    setEvents(result.data);
  };

  useEffect(() => {
    loadEventUser();
  }, []);

  const handleBackToPage = () => {
    router.back();
    loadEventUser();
  };

  const handleDeleteEventUser = (id: string | undefined) => {
    deleteEventUser(id);
    loadEventUser();
  };

  return (
    <>
      <Container>
        {events.length !== 0 ? (
          <Table>
            <thead>
              <tr>
                <th>Nome</th>
                <th>Data e Hora</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {events.map((event) => {
                return (
                  <>
                    <tr key={event.id}>
                      <td>{event.title}</td>
                      <td>{datetimeUTC(event.date_and_time)}</td>

                      <td>
                        <Actions>
                          <FiX
                            size={20}
                            onClick={() => handleDeleteEventUser(event.id)}
                          />
                        </Actions>
                      </td>
                    </tr>
                  </>
                );
              })}
            </tbody>
          </Table>
        ) : (
          <h1>Não há eventos</h1>
        )}
        <ButtonContent>
          <Button type="submit" variant="secondary" onClick={handleBackToPage}>
            Voltar
          </Button>
        </ButtonContent>
      </Container>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const { email } = query;

  return {
    props: {
      email,
    },
  };
};
