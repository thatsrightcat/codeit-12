import ContainerLayout from "@app/components/ContainerLayout/layout";

const TestPage: React.FC = () => {
  return (
    <ContainerLayout>
      <h1 className="text-3xl font-bold">테스트 페이지</h1>
      <p className="mt-4">컴포넌트 모음</p>
    </ContainerLayout>
  );
};

export default TestPage;
