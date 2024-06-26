import { InputMask } from '@react-input/mask';

export default function PhoneMask() {
  return (
    <InputMask
      className="input-mask"
      mask="+7 (___) ___-__-__"
      replacement={{ _: /\d/ }}
      style={{
        width: '100%',
        height: '3.889vw',
        boxSizing: 'border-box',
        paddingLeft: '1.389vw',
        fontSize: '1.389vw',
        backgroundColor: '#f5f3ff',
        borderRadius: '0.694vw',
        color: '#626366',
        lineHeight: '128.91%',
        border: 'none',
        outline: 'none',
        boxShadow: 'inset 1px 1px 3px rgba(0, 0, 0, 0.1)'
      }}
      placeholder="+7 (___) ___ __-__"
    />
  );
}
