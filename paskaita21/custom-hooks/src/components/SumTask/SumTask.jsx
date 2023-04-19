import React from 'react';
import useSumOfNumberInArray from '../../hooks/UseSumeOfNumberInArray';

export default function SumTask() {
  const data = [1, 5, 6, 'hello', { foo: 'bar' }, [1, {}, 'hello'], true, false];
  const sum = useSumOfNumberInArray(data);

  return <div>{sum}</div>;
}
