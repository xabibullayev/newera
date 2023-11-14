import { useContext } from 'react'

import { CommercialFormModalContext } from '../HOC/CommercialFormModalContext'

export const useCommercialFormModal = () => useContext(CommercialFormModalContext)
