import { ICharacter } from "../types";

export const getDataCharacter = (id: Number, character: ICharacter[]) => {
  const result: ICharacter =
    character[
      character.findIndex((char) => {
        return char.id === id;
      })
    ];
  return result;
};

