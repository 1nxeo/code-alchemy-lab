import { useState } from "react";

const useFunnel = () => {
  const [step, setStep] = useState();
  const Step = (props) => {
    return <>{props.children}</>;
  };

  const Funnel = ({ children }) => {
    const targetStep = children.find(
      (childStep) => childStep.props.name === step
    );

    return Object.assign(targetStep, { Step });
  };

  return [Funnel, setStep];
};

// const KyoboLifeFunnel = () => {
//   const [Funnel, state, setState] = useFunnel(['아파트여부', '지역선택', '완료'] as const).withState<{
//     propertyType?: '빌라' | '아파트';
//     address?: string;
//   }>({});

//   const 상담신청 = useLoanApplicationCallback();

//   return (
//     <Funnel>
//       <Funnel.Step name="아파트여부">
//         <아파트여부스텝 지역선택으로가기={() => setState(prev => ({...prev, step: '지역선택', isApartment: true}))} />
//       </Funnel.Step>
//       <Funnel.Step name="지역선택">
//         <지역선택스텝 지역선택완료={(지역정보) => setState(prev => ({...prev, step: '완료', region: 지역정보}))} />
//       </Funnel.Step>
//       <Funnel.Step name="완료">
//         <완료스텝 신청={() => 상담신청(state)} />
//       </Funnel.Step>
//     </Funnel>
//   );
// };
