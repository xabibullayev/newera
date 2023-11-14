import { useContext } from 'react'

import { ImageModalContext } from '../HOC/ImageModalContext'

export const useImageModal = () => useContext(ImageModalContext)
