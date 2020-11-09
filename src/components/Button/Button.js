import React from 'react';
import cx from 'classnames';
const Button = React.forwardRef(({ className, ...props }, ref) => {
  return (//USED FOR ALL BUTTONS
    <button className={cx('Button', className)} ref={ref} {...props} />
  );
});
export default Button;
