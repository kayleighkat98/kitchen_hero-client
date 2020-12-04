import React from 'react';
import cx from 'classnames';
const Button = React.forwardRef(({ className, ...props }, ref) => {
  //USED FOR ALL BUTTONS
  return (
    <button className={cx('Button', className)} ref={ref} {...props} />
  );
});
export default Button;
