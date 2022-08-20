export interface ICharacter {
  id: number;
  name: string;
  species: string;
  gender: string;
  image: string;
}

export interface ModalProps {
  showModal: boolean;
  setShowModal: () => void;
  characterDetails: any;
}

