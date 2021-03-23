import { useRef } from 'react';
import { FiCheckSquare } from 'react-icons/fi';

import { Form } from './styles';
import Modal from '../Modal';
import Input from '../Input';
import { FormHandles } from '@unform/core';
import { EditingFoodProps, FoodProps } from '../../types';

interface ModalEditFoodProps {
  setIsOpen(): void;
  isOpen: boolean;
  // editingFood(): EditingFoodProps | undefined;
  handleUpdateFood(data: FoodProps): void;
}

function ModalEditFood({ setIsOpen, handleUpdateFood, isOpen }: ModalEditFoodProps) {
  const formRef = useRef<FormHandles>(null)


  async function handleSubmit(data: FoodProps) {
    handleUpdateFood(data);
    setIsOpen();
  };
  // const { isOpen, setIsOpen, editingFood } = this.props;

  return (
    <Modal isOpen={isOpen} setIsOpen={isOpen}>
      <Form ref={formRef} onSubmit={handleSubmit} initialData={undefined}>
        <h1>Editar Prato</h1>
        <Input name="image" placeholder="Cole o link aqui" />

        <Input name="name" placeholder="Ex: Moda Italiana" />
        <Input name="price" placeholder="Ex: 19.90" />

        <Input name="description" placeholder="Descrição" />

        <button type="submit" data-testid="edit-food-button">
          <div className="text">Editar Prato</div>
          <div className="icon">
            <FiCheckSquare size={24} />
          </div>
        </button>
      </Form>
    </Modal>
  );
};

export default ModalEditFood;
