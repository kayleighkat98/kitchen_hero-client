import React from 'react'

export default React.createContext({
  expired: [],
  ingredients: [],
  addIngredient: () => {},
  deleteIngredient: () => {},
})
