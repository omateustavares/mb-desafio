import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Container, Content, Form } from "../../../styles/admin/event-details/page.styles";
import Button from "../../../components/Button";
import { NewInput } from "../../../components/Input";
import { yupResolver } from "@hookform/resolvers/yup";

import * as yup from "yup";
import { useEvent } from "../../../hooks/Events";
import { GetServerSideProps } from "next";
import { prisma } from "../../../lib/prisma";
import { EventData, EventDataView } from "../../../interface/event";
import { datetimeLocal } from "../../../utils/formatDateTime";
import { useRouter } from "next/router";

const registerFormSchema = yup.object().shape({
  title: yup.string().required("Informar titulo do evento"),
  description: yup.string().required("Informar descrição"),
  date_and_time: yup.string().required("Informar data e hora"),
  local: yup.string().required("Informar local"),
  additional_information: yup.string(),
});

export default function AdminHome({
  id,
  title,
  description,
  date_and_time,
  additional_information,
  local,
  toEdit,
}: EventDataView) {
  const { handleRegister, handleUpdate } = useEvent();

  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty },
  } = useForm<EventData>({
    reValidateMode: "onChange",
    resolver: yupResolver(registerFormSchema),
    defaultValues: {
      title: title || "",
      description: description || "",
      local: local || "",
      additional_information: additional_information || "",
      date_and_time: datetimeLocal(date_and_time) || "",
    },
  });

  async function handleRegisterEvent(data: EventData) {
    // !!1 = true;
    // !!0 = false;
    if (toEdit === "1") {
      handleUpdate({ id, ...data });
    } else {
      handleRegister(data);
    }
  }

  const hendleBackToPage = () => {
    router.back();
  };

  return (
    <>
      <Container>
        <Content>
          <Form onSubmit={handleSubmit(handleRegisterEvent)}>
            <div>
              <NewInput
                type="text"
                label="Nome do Evento"
                {...register("title")}
                error={errors.title}
              />
              <NewInput
                type="text"
                label="Descrição"
                {...register("description")}
                error={errors.description}
              />
              <NewInput
                type="datetime-local"
                label="Data e Hora"
                {...register("date_and_time")}
                error={errors.date_and_time}
              />
              <NewInput
                type="text"
                label="Local"
                {...register("local")}
                error={errors.local}
              />
              <NewInput
                type="text"
                label="Informações adicionais"
                {...register("additional_information")}
                error={errors.additional_information}
              />
            </div>
            <Button type="submit" disabled={!isDirty} variant="secondary">
              {toEdit === "1" ? "Editar" : "Cadastrar Evento"}
            </Button>

            <Button variant="secondary" onClick={hendleBackToPage}>
              Voltar
            </Button>
          </Form>
        </Content>
      </Container>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const { eventId, edit } = query;

  const event_id = eventId;

  if (eventId) {
    const user = await prisma.events.findUnique({
      where: {
        id: String(event_id),
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
        toEdit: edit,
      },
    };
  }

  return {
    props: {
      toEdit: edit,
    },
  };
};
