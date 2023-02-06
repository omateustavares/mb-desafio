/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useEvent } from "../../hooks/Events";
import { EventData } from "../../interface/event";
import { Actions, ButtonContent, Container, Table } from "../../styles/admin/page.styles";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import Modal from "../../components/Modal";
import useModal from "../../hooks/useModal";
import { useRouter } from "next/router";
import { datetimeUTC } from "../../utils/formatDateTime";
import Button from "../../components/Button";

export default function RegisterEvent() {
  const [events, setEvents] = useState<EventData[]>([]);
  const { loadEvent, deleteEvent } = useEvent();
  const router = useRouter();

  const getEvents = async () => {
    const data = await loadEvent();
    setEvents(data);
  };

  useEffect(() => {
    getEvents();
  }, []);

  const handleDeleteEvent = async (eventId: string | undefined) => {
    await deleteEvent(eventId);
    getEvents();
  };

  const handleEditEvent = (event: string | undefined) => {
    // !!1 = true;
    // !!0 = false;
    router.push(`/admin/event-details?eventId=${event}&edit=1`);
  };

  const handleRegisterNewEvent = () => {
    // !!1 = true;
    // !!0 = false;
    router.push(`/admin/event-details?edit=0`);
  };

  const handleBackToPage = () => {
    router.back();
  };

  return (
    <>
      <Container>
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
                  <tr>
                    <td>{event.title}</td>
                    <td>{datetimeUTC(event.date_and_time)}</td>

                    <td>
                      <Actions>
                        <FiEdit
                          size={20}
                          onClick={() => {
                            handleEditEvent(event.id);
                          }}
                        />
                        <FiTrash2
                          size={20}
                          onClick={() => {
                            handleDeleteEvent(event.id);
                          }}
                        />
                      </Actions>
                    </td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </Table>
        <ButtonContent>
          <Button type="submit" variant="secondary" onClick={handleBackToPage}>
            Voltar
          </Button>
          <Button
            type="submit"
            variant="secondary"
            onClick={handleRegisterNewEvent}
          >
            Cadastrar novo evento
          </Button>
        </ButtonContent>
      </Container>
    </>
  );
}
