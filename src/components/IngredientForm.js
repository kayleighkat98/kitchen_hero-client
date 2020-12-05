import React from "react";
function IngredientForm(props) {
  const { className, ...otherProps } = props;
  return (
    <form  // CREATES REUSABLE FORM ELEMENT FOR NEW INGREDIENTS
    className={['Ingredient-form', className].join(' ')}
    action='#'
    {...otherProps}
    />
  );
};
export default IngredientForm;
