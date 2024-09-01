import { forwardRef } from 'react';
import Skeleton from '../../Skeleton/Skeleton';

export function withSkeleton(Component) {
  // Создаем компонент с рефом
  const WithSkeleton = (props, ref) => {
    const { isLoading, ...restProps } = props;

    if (isLoading) {
      return <Skeleton />;
    }

    return <Component ref={ref} {...restProps} />;
  };

  return forwardRef(WithSkeleton);
}
