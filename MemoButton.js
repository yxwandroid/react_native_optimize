import React from 'react';
import {Button} from 'react-native';
interface BtnProps {
  color: string;
}
export const MemoButton = React.memo(function button(props: BtnProps) {
  return <Button title={'222'} color={props.color} />;
});
