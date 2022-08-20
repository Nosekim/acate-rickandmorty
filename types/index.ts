export interface ICharacter {
  id: number;
  name: string;
  species: string;
  gender: string;
  image: string;
}

export interface ModalProps {
  showModal: boolean;
  setShowModal: (showModal: boolean) => void;
  characterDetails: any;
}

