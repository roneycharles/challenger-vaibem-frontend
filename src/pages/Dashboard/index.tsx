import React, { useCallback, useState, useRef } from 'react';
import * as Yup from 'yup';
import { FiArrowLeft } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import Selector from '../../components/Selector/Selector';
import { useHistory, Link } from 'react-router-dom';
// import Calendar from 'react-calendar';
import { useToast } from '../../hooks/toast';
import { Modal } from '../../components/Modal';
import {
  Container,
  NewButton,
  Card,
  Column,
  TitleCard,
  ListTask,
} from './styles';
import Button from '../../components/Button';
import DatePicker from '../../components/Calendar';
import Input from '../../components/Input';
import api from '../../services/api';
import getValidationErrors from '../../utils/getValidationErrors';

interface DashboardFormData {
  title: string;
  description: string;
  type: string;
  // eslint-disable-next-line camelcase
  delivery_date: Date | string;
}
const Dashboard: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { addToast } = useToast();
  const history = useHistory();
  const [isModalOpen, setisModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const [selectedTask, setSelectedTask] = useState<DashboardFormData>(
    {} as DashboardFormData,
  );

  const  toggleModal = () => setisModalOpen(!isModalOpen);
  const toggleEditModal = (task: DashboardFormData) => {
    !isEditModalOpen && setSelectedTask(task);
    setIsEditModalOpen(!isEditModalOpen);
  };

  const handleSubmit = useCallback(
    async (data: DashboardFormData) => {
      console.log(data);
      try {
        formRef.current?.setErrors({});
        const schema = Yup.object().shape({
          title: Yup.string().required('Titulo da tarefa é obrigatório'),
          type: Yup.string().required('Selecione o tipo de tarefa.'),
          delivery_date: Yup.string().required('Data de entrega é obrigatória'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await api.post('/users', {
          title: data.title,
          description: data.description,
          type: data.type,
          delivery_date: data.delivery_date
        });

        history.push('/');

        addToast({
          type: 'success',
          title: 'Tarefa criada!',
          description: 'Sua tarefa foi criada com sucesso,',
        });
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);
          formRef.current?.setErrors(errors);

          return;
        }
        addToast({
          type: 'error',
          title: 'Erro no cadastro',
          description: 'Ocorreu um erro ao fazer cadastro, tente novamente.',
        });
      }
    },
    [addToast, history],
  );
  return (
    <>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <Modal title="CreateTask" isOpen={isModalOpen} onClose={toggleModal}>
          Preencha os campos corretamente.
          <Input name="title" type="title" placeholder="Título da tarefa" />
          <Input
            name="description"
            type="description"
            placeholder="Descrição da tarefa"
          />
          <Selector
            name="type"
            options={[
              { label: 'Backlog', value: 'Backlog' },
              { label: 'To Do', value: 'To Do' },
              { label: 'Doing', value: 'Doing' },
              { label: 'Done', value: 'Done' },
            ]}
            placeholder="Tipo da tarefa"
          ></Selector>
          <DatePicker name="delivery_date" />
          <Button type="submit">Criar Tarefa</Button>
        </Modal>
      </Form>

      {selectedTask && (
        <Modal
          title="EditTask"
          isOpen={isEditModalOpen}
          onClose={toggleEditModal}
        >
          Preencha os campos corretamente.
          <Input
            name="title"
            type="title"
            placeholder="Título da tarefa"
            value={selectedTask.title}
          />
          <Input
            name="description"
            type="description"
            placeholder="Descrição da tarefa"
            value={selectedTask.description}
          />
          <Selector
            name="type"
            options={[
              { label: 'Backlog', value: 'Backlog' },
              { label: 'To Do', value: 'To Do' },
              { label: 'Doing', value: 'Doing' },
              { label: 'Done', value: 'Done' },
            ]}
            placeholder="Tipo da tarefa"
          ></Selector>
          <Button type="submit">Confirmar alteração</Button>
        </Modal>
      )}

      <NewButton onClick={toggleModal}>Adicionar tarefa</NewButton>
      <Container>
        <Column>
          <TitleCard>
            <h2>Backlog</h2>
          </TitleCard>
          <TitleCard>
            <h2>To Do</h2>
          </TitleCard>
          <TitleCard>
            <h2>Doing</h2>
          </TitleCard>
          <TitleCard>
            <h2>Done</h2>
          </TitleCard>
        </Column>
        <Column>
          <ListTask>
            <Card>
              Tarefa Teste
              <button
                type="button"
                onClick={() =>
                  toggleEditModal({
                    title: 'Tarefa Teste',
                    description: 'Coisas a fazer',
                    delivery_date:
                      'Thu Sep 03 2020 16:55:59 GMT-0300 (Brasilia Standard Time)',
                    type: 'Backlog',
                  })
                }
              ></button>
            </Card>
            <Card>Tarefa Teste</Card>
            <Card>Tarefa Teste</Card>
            <Card>Tarefa Teste</Card>
            <Card>Tarefa Teste</Card>
            <Card>Tarefa Teste</Card>
            <Card>Tarefa Teste</Card>
            <Card>Tarefa Teste</Card>
            <Card>Tarefa Teste</Card>
          </ListTask>
          <ListTask>
            <Card>Tarefa Teste</Card>
          </ListTask>
          <ListTask>
            <Card>Tarefa Teste</Card>
          </ListTask>
          <ListTask>
            <Card>Tarefa Teste</Card>
          </ListTask>
        </Column>
      </Container>
      <Link to="/">
        <FiArrowLeft />
        Sair
      </Link>
    </>
  );
};
export default Dashboard;
