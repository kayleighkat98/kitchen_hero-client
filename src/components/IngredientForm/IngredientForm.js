import React from "react";
function IngredientForm(props) {
  const { className, ...otherProps } = props;
  return (
    <form
    className={['Ingredient-form', className].join(' ')}
    action='#'
    {...otherProps}
    />
  );
};
export default IngredientForm;
