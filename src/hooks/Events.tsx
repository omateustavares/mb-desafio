import { AxiosError } from "axios";
import { createContext, ReactNode, useContext } from "react";
import { toast } from "react-toastify";
import { EventData } from "../interface/event";
import { api } from "../lib/axios";

type EventParticipate = {
  email_user: string | undefined;
  id_event: string;
};

interface EventContextData {
  loadEvent(): Promise<EventData[]>;
  getEvent(id: string | undefined): Promise<void>;
  deleteEvent(id: string | undefined): Promise<void>;
  deleteEventUser(id: string | undefined): Promise<void>;
  handleRegister(data: EventData): Promise<void>;
  handleUpdate(data: EventData): Promise<void>;
  handleParticipate({ email_user, id_event }: EventParticipate): Promise<void>;
}

interface EventsProviderProps {
  children: ReactNode;
}

export const EventContext = createContext<EventContextData>(
  {} as EventContextData
);

const EventsProvider = ({ children }: EventsProviderProps) => {
  const loadEvent = async () => {
    try {
      const result = await api.get("/event");
      const { data } = result;
      return data;
    } catch (err) {
      if (err instanceof AxiosError && err?.response?.data?.message) {
        toast.warn(err.response.data.message, {
          position: toast.POSITION.TOP_RIGHT,
        });
        return;
      }

      console.error(err);
    }
  };

  const getEvent = async (id: string | undefined) => {
    try {
      const result = await api.get("/event/find-event", {
        params: { id: id },
      });

      return result.data;
    } catch (err) {
      if (err instanceof AxiosError && err?.response?.data?.message) {
        toast.warn(err.response.data.message, {
          position: toast.POSITION.TOP_RIGHT,
        });
        return;
      }

      console.error(err);
    }
  };

  const deleteEvent = async (id: string | undefined) => {
    try {
      await api.delete("/event/find-event", {
        params: { id: id },
      });
      toast.success("Excluido com sucesso", {
        position: toast.POSITION.TOP_RIGHT,
      });
    } catch (err) {
      if (err instanceof AxiosError && err?.response?.data?.message) {
        toast.warn(err.response.data.message, {
          position: toast.POSITION.TOP_RIGHT,
        });
        return;
      }

      console.error(err);
    }
  };

  async function handleRegister(data: EventData) {
    try {
      await api.post("/event", {
        title: data.title,
        description: data.description,
        date_and_time: data.date_and_time,
        local: data.local,
        additional_information: data.additional_information,
      });
      toast.success("Cadastrado com sucesso", {
        position: toast.POSITION.TOP_RIGHT,
      });
    } catch (err) {
      if (err instanceof AxiosError && err?.response?.data?.message) {
        toast.warn(err.response.data.message, {
          position: toast.POSITION.TOP_RIGHT,
        });
        return;
      }

      console.error(err);
    }
  }

  async function handleUpdate(data: EventData) {
    try {
      await api.put("/event", {
        id: data.id,
        title: data.title,
        description: data.description,
        date_and_time: data.date_and_time,
        local: data.local,
        additional_information: data.additional_information,
      });
      toast.success("Atualizado com sucesso", {
        position: toast.POSITION.TOP_RIGHT,
      });
    } catch (err) {
      if (err instanceof AxiosError && err?.response?.data?.message) {
        toast.warn(err.response.data.message, {
          position: toast.POSITION.TOP_RIGHT,
        });
        return;
      }

      console.error(err);
    }
  }

  async function handleParticipate({ email_user, id_event }: EventParticipate) {
    try {
      await api.post(`/event/user-event`, {
        email_user: email_user,
        id_event: id_event,
      });
      toast.success("Participação realizada com sucesso", {
        position: toast.POSITION.TOP_RIGHT,
      });
    } catch (err) {
      if (err instanceof AxiosError && err?.response?.data?.message) {
        toast.warn(err.response.data.message, {
          position: toast.POSITION.TOP_RIGHT,
        });
        return;
      }

      console.error(err);
    }
  }

  const deleteEventUser = async (id: string | undefined) => {
    try {
      await api.delete("/event/user-event", {
        params: { id: id },
      });
      toast.success("Excluido com sucesso", {
        position: toast.POSITION.TOP_RIGHT,
      });
    } catch (err) {
      if (err instanceof AxiosError && err?.response?.data?.message) {
        toast.warn(err.response.data.message, {
          position: toast.POSITION.TOP_RIGHT,
        });
        return;
      }

      console.error(err);
    }
  };

  return (
    <EventContext.Provider
      value={{
        loadEvent,
        getEvent,
        deleteEvent,
        handleRegister,
        handleUpdate,
        handleParticipate,
        deleteEventUser,
      }}
    >
      {children}
    </EventContext.Provider>
  );
};

const useEvent = () => {
  const context = useContext(EventContext);

  return context;
};

export { EventsProvider, useEvent };
