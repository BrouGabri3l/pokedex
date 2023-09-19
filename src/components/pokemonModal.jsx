import Modal from './modal';
import { pokemonAtom, pokemonModalAtom } from '../store/atoms';
import { useRecoilState, useRecoilValue } from 'recoil';
import PokemonStats from './pokemonStats';

const PokemonModal = () => {
  const [isOpenModal, setIsOpenModal] = useRecoilState(pokemonModalAtom);
  const pokemon = useRecoilValue(pokemonAtom);
  const handleClose = () => {
    setIsOpenModal(false);
  };
  return (
    <Modal handleClose={handleClose} isOpen={isOpenModal}>
      {/* {!pokemon ? <></> : <PokemonStats pokemon={pokemon} />} */}
    </Modal>
  );
};

export default PokemonModal;
