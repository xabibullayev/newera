import { useContext } from 'react'

import { ModalContext } from '../HOC/ModalContext'

export const useModal = () => useContext(ModalContext)
